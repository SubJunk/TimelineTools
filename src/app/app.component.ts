import $ from 'jquery';
import _ from 'lodash';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Md5 } from 'ts-md5/dist/md5';

import { apiKeyPublic, apiKeyPrivate } from './config';
import { Collections } from './../database/collections';
import { Comics } from './../database/comics';
import { SeriesVolumes } from './../database/series';
import {
  JQueryClickEvent,
  Collection,
  CollectionColor,
  Comic,
  DateYear,
  MarvelAPISeriesResponse,
  MarvelAPISeriesResponseResult,
  SeriesVolume,
  SeriesVolumeLabel,
} from './models';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoModalComponent } from './info-modal/info-modal.component';

// The padding applied to the left, right, and bottom of the body
const BODY_PADDING_TOP = 80;
const BODY_PADDING = 20;
const LEFT_MARGIN = 200;
const TOP_MARGIN = 300;
const VISUAL_BLOCK_SIZE = 60;

const ANIMATION_DURATION = 400;
const ONE_YEAR_IN_MONTHS = 12;
const ONE_SECOND_IN_MILLISECONDS = 1000;

// Colour constants used in multiple functions
const LIGHTNESS_MIN = 30; // Lightness can be in the range 0-100
const LIGHTNESS_MAX = 85;
const PERCENT_MULTIPLIER = 100;
const SATURATION_MIN = 35; // Saturation can be in the range 0-100
const SATURATION_MAX = 75; // We choose a mid range that's easy to see
const STEP_CHANGE = 30; // define how far to step around the colour wheel each time
const COMPLETE_COLOR_WHEEL_DEGREES = 360; // 360 degrees in colour wheel

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
@Injectable()
export class AppComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  title = 'timeline-tools';

  comics: Array<Comic>;
  collections: Array<Collection>;
  series: Array<object>;
  seriesVolumes: Array<SeriesVolume>;
  uniqueCollections: Array<Collection> = [];
  dates: Array<DateYear> = [];

  // An array of objects that contain search results for comics and collections
  public itemsToSearch = [];

  bodyStyles = {
    'height.px': null,
    padding: BODY_PADDING_TOP + 'px ' + BODY_PADDING + 'px ' + BODY_PADDING + 'px ' + BODY_PADDING + 'px',
    'width.px': null,
  };

  $jqWindow = $(window);

  // API variables
  apiBaseUrl = 'https://gateway.marvel.com/v1/public/';
  apiKeyPublic = _.isEmpty(apiKeyPublic) ? '46a863fa31f601aacb87dae9cb8f7c45' : apiKeyPublic;
  apiKeyPrivate = apiKeyPrivate;

  startTimeInitialLoad = new Date().getTime();

  globalVerticalPositionCounter = 0;
  seriesVolumeLabels: Array<SeriesVolumeLabel> = [];

  expandedComic: Comic;
  expandedComicId: string;
  expandedCollectionId: string;
  expandedCollection: Collection;
  expandedSeriesVolume: SeriesVolume;
  prevComic: Comic;
  nextComic: Comic;
  prevComicId: string;
  nextComicId: string;
  prevCollection;
  nextCollection;
  prevCollectionFirstComic: Comic;
  nextCollectionFirstComic: Comic;
  currentComicIndexInCollection: number;
  currentCollectionIndexInCollections: number;
  isShowCollections = false;
  searchText = '';
  doSpeedProfile = false;

  // API variables
  timestamp: number;
  apiHash: string | Int32Array;

  /**
   * @param seriesVolume the series volume object
   * @returns the series data from the Marvel API
   */
  getAPISeriesVolume = (seriesVolume: SeriesVolume) => {
    const params = new HttpParams()
      .set('title', seriesVolume.title)
      .set('startYear', seriesVolume.startYear)
      .set('apikey', this.apiKeyPublic);

    return this.http.get(this.apiBaseUrl + 'series' + this.getExtraAPIParamsString(), {params});
  }

  /**
   * Writes a "link" value to the comic object, which is a URL to the
   * comic on Marvel Unlimited.
   *
   * @param comic                the comic object
   * @param seriesVolumeMarvelID the series ID in the Marvel API
   */
  setAPIComicData = (comic: Comic, seriesVolumeMarvelID: string) => {
    const params = new HttpParams()
      .set('issueNumber', comic.issue)
      .set('series', seriesVolumeMarvelID)
      .set('apikey', this.apiKeyPublic);

    return this.http.get(this.apiBaseUrl + 'comics' + this.getExtraAPIParamsString(), {params})
      .subscribe(function successCallback(response: MarvelAPISeriesResponse) {
        if (_.isEmpty(response.data.results)) {
          return;
        }

        /*
        * Sometimes the Marvel API returns variants with no ID or 0, so
        * keep looping until we get a real ID.
        */
        _.each(response.data.results, (result) => {
          if (result.digitalId && result.digitalId !== 0) {
            comic.link = 'https://read.marvel.com/#book/' + result.digitalId;
            return false;
          }
        });
      }, function errorCallback(err) {
        throw new Error(err);
      });
  }

  getExtraAPIParamsString = () => {
    if (!_.isEmpty(this.apiKeyPrivate) && window.location.protocol === 'file') {
      // TODO: Write this another way
      // tslint:disable-next-line: no-bitwise
      this.timestamp = Date.now() / ONE_SECOND_IN_MILLISECONDS | 0;
      this.apiHash = Md5.hashStr(this.timestamp + this.apiKeyPrivate + this.apiKeyPublic);
      return '?ts=' + this.timestamp + '&hash=' + this.apiHash;
    }

    return '';
  }

  /**
   * Figure out what the name of the image on the server will be
   * based on the series, volume and issue.
   *
   * Notes:
   * This uses two regular expressions to sanitize/standardize the
   * series name:
   * 1) Remove all occurrences of the characters ():&
   * 2) Replace all occurrences of whitespace (including multiple
   *    in a row) and forward slashes with underscores.
   * Finally it appends the volume and issue.
   */
  getSanitizedString = (isComic: boolean, seriesOrCollection: string, volume?: string, issue?: string) => {
    seriesOrCollection = seriesOrCollection
      .replace(/[():&?'.,]/g, '')
      .replace(/\s+|\//g, '_');

    if (isComic) {
      issue = issue.toString().replace(/[.]/g, '');

      seriesOrCollection +=
          '_Vol_' +
          volume +
          '_' +
          issue;
    } else {
      seriesOrCollection = seriesOrCollection.replace(/_Partial/g, '');
    }

    return seriesOrCollection;
  }

  clearComicClassesAndStyles = (comic?: Comic) => {
    if (!comic && !this.expandedCollection) {
      return;
    }

    comic = comic || this.expandedCollection.comics[this.currentComicIndexInCollection];

    comic.classes.stickyTop = false;
    comic.classes.stickyRight = false;
    comic.classes.stickyBottom = false;
    comic.classes.stickyLeft = false;
    comic.styles['marginTop.px'] = null;
    comic.styles['marginLeft.px'] = null;
  }

  /**
   * Toggles the expanded comic
   *
   * @param currentComic  the current comic object
   * @param isForceScroll forces this to find a new scroll position
   *                      instead of using a relative one.
   *                      Used when clicking on a comic from the collections view
   */
  toggleExpandComic = (currentComic: Comic, isForceScroll?: boolean) => {
    if (typeof currentComic !== 'object') {
      return;
    }

    this.prevComic = undefined;
    this.nextComic = undefined;
    let urlTree;

    // If these match, close the expanded box
    if (_.isEmpty(currentComic) || this.expandedComicId === currentComic.id) {
      // Clear the comic ID in the URL
      urlTree = this.router.createUrlTree([], {
        queryParams: { id: '' },
        queryParamsHandling: 'merge',
        preserveFragment: true });
      this.router.navigateByUrl(urlTree);

      this.clearComicClassesAndStyles();

      return setTimeout(() => {
        this.expandedComicId    = undefined;
        this.expandedCollection = undefined;
      });
    }

    /**
     * If there is already a comic expanded, and we have already confirmed
     * above that we want to expand a different one, this block maintains
     * the expanded box's position on the page by scrolling the viewport.
     */
    if (isForceScroll) {
      if (this.expandedCollection) {
        this.clearComicClassesAndStyles();
      }

      $('html, body').animate({
        scrollLeft: currentComic.containerStyles['left.px'] - LEFT_MARGIN,
        scrollTop:  currentComic.containerStyles['top.px'] + TOP_MARGIN
      }, ANIMATION_DURATION, 'swing', this.repositionStickyElements);
    } else if (this.expandedComicId) {
      const previouslyExpandedComic = this.expandedCollection.comics[this.currentComicIndexInCollection];
      const positionDifference = {
        left: previouslyExpandedComic.containerStyles['left.px'] - currentComic.containerStyles['left.px'],
        top: previouslyExpandedComic.containerStyles['top.px']  - currentComic.containerStyles['top.px']
      };

      // reset the styles for the previous comic
      this.clearComicClassesAndStyles(previouslyExpandedComic);

      $('html, body').animate({
        scrollLeft: this.$jqWindow.scrollLeft() - positionDifference.left,
        scrollTop:  this.$jqWindow.scrollTop()  - positionDifference.top
      }, ANIMATION_DURATION, 'swing', this.repositionStickyElements);
    } else {
      this.repositionStickyElements(currentComic.id);
    }

    this.expandedComicId = currentComic.id;

    // Get the collection containing this comic
    this.expandedCollection = _.find(this.collections, (collection, index) => {
      this.currentComicIndexInCollection = collection.comicIds.indexOf(currentComic.id);
      if (collection.comicIds.includes(currentComic.id)) {
        this.currentCollectionIndexInCollections = index;
        return true;
      }
      return false;
    });

    // if this is the first collection
    if (_.isEqual(this.collections[this.currentCollectionIndexInCollections], _.first(this.collections))) {
      this.prevCollection = undefined;
      this.prevCollectionFirstComic = undefined;
    } else  {
      this.prevCollection = this.collections[this.currentCollectionIndexInCollections - 1];
      this.prevCollectionFirstComic = _.find(this.comics, ['id', _.first(this.prevCollection.comicIds)]);
    }

    // check for the last collection
    if (_.isEqual(this.collections[this.currentCollectionIndexInCollections], _.last(this.collections))) {
      this.nextCollection = undefined;
      this.nextCollectionFirstComic = undefined;
    } else {
      this.nextCollection = this.collections[this.currentCollectionIndexInCollections + 1];
      this.nextCollectionFirstComic = _.find(this.comics, ['id', _.first(this.nextCollection.comicIds)]);
    }

    // Find the previous comic
    if (this.currentComicIndexInCollection > 0) {
      this.prevComic = this.collections[this.currentCollectionIndexInCollections].comics[this.currentComicIndexInCollection - 1];
    } else if (this.prevCollection) {
      /**
       * The expanded comic is the first one in a collection, so we need to find out
       * the last comic in the previous collection.
       */
      this.prevComicId = this.prevCollection.comicIds[this.prevCollection.comicIds.length - 1];
      this.prevComic = _.find(this.comics, ['id', this.prevComicId]);
    }

    // Find the next comic
    if (this.collections[this.currentCollectionIndexInCollections].comics[this.currentComicIndexInCollection + 1]) {
      this.nextComic = this.collections[this.currentCollectionIndexInCollections].comics[this.currentComicIndexInCollection + 1];
    } else if (this.nextCollection) {
      /**
       * The expanded comic is the last one in a collection, so we need to find out
       * the first comic in the next collection.
       */
      this.nextComicId = this.nextCollection.comicIds[0];
      this.nextComic = _.find(this.comics, ['id', this.nextComicId]);
    }

    // Set the comic ID in the URL
    urlTree = this.router.createUrlTree([], {
      queryParams: { id: this.expandedComicId },
      queryParamsHandling: 'merge',
      preserveFragment: true });
    this.router.navigateByUrl(urlTree);

    // Get the series volume containing this comic
    this.expandedSeriesVolume = _.find(this.seriesVolumes, (seriesVolume) => {
      return seriesVolume.id === currentComic.seriesVolumeId;
    });

    this.expandedComic = _.find(this.comics, ['id', this.expandedComicId]);
    if (this.expandedSeriesVolume.marvelId) {
      this.setAPIComicData(this.expandedComic, this.expandedSeriesVolume.marvelId);
    } else {
      this.getAPISeriesVolume(this.expandedSeriesVolume)
        .subscribe(
          (response: MarvelAPISeriesResponse) => {
            if (!response || !response.data || !response.data || !response.data.results.length) {
              return console.warn('The response from Marvel API wasn\'t in the expected format ' + response);
            }

            const firstResult: MarvelAPISeriesResponseResult = _.first(response.data.results);
            this.expandedSeriesVolume.marvelId = firstResult.id;
            this.setAPIComicData(this.expandedComic, this.expandedSeriesVolume.marvelId);
          },
          (err) => {
            throw new Error(err);
          }
        );
    }
  }

  search = (comic: Comic) => {
    const comicToSearch: Comic = _.find(this.comics, ['id', comic.id]);
    this.toggleExpandComic(comicToSearch, true);
    this.searchText = '';
    this.postSearchActions();
  }

  toggleExpandCollection = (collection: Collection) => {
    this.expandedCollectionId = this.expandedCollectionId === collection.id ? null : collection.id;
  }

  subtractLabelWidthsFromLeftPositions = () => {
    let $jqLabel;
    let labelWidthFromDom;

    _.each(this.seriesVolumeLabels, (seriesVolumeLabel) => {
      // We only know the width after the initial render, so store it
      $jqLabel = $('#' + seriesVolumeLabel.id);
      if ($jqLabel.length > -1) {
        labelWidthFromDom = $jqLabel.outerWidth() + BODY_PADDING;

        // Subtract width of the label from the left position, and add the width to the container
        seriesVolumeLabel.containerStyles['left.px'] = seriesVolumeLabel.containerStyles['left.px'] - labelWidthFromDom;
        seriesVolumeLabel.containerStyles['width.px'] += labelWidthFromDom;
      } else {
        console.error('Failed to get width of label with ID ' + seriesVolumeLabel.id);
      }
    });
  }

  ngOnInit() {
    this.comics        = Comics.getComics();
    this.collections   = Collections.getCollections();
    this.series        = SeriesVolumes.getSeries();
    this.seriesVolumes = SeriesVolumes.getSeriesVolumes();

    // Sort the data by date
    this.comics = _.sortBy(this.comics, ['yearPublished', 'monthPublished', 'seriesVolume']);

    /**
     * This loop populates the dates object with an array of years
     * which contains arrays of months, represented as numbers.
     *
     * This is to ensure that if there are no comics in our db for
     * a month, we still have that month displaying for consistency.
     *
     * While we are at it, we set the width of each month here, since
     * that lets us reuse our magic number instead of having a duplicate
     * in the CSS.
     */
    const lastComic = _.last(this.comics);
    const firstComic = _.first(this.comics);
    let monthsSinceFirst: number;
    const finalYear = lastComic.yearPublished;
    const finalMonth = lastComic.monthPublished;
    const firstYear = firstComic.yearPublished;
    const firstMonth = firstComic.monthPublished;
    let yearIncrement: number;
    let monthIncrement: number;

    let yearIterator = 0;
    let monthIterator = 0;
    for (yearIncrement = firstYear; yearIncrement <= finalYear; yearIncrement++) {
      monthIterator = 0;
      this.dates[yearIterator] = { year: yearIncrement, months: [] };

      if (yearIncrement === finalYear) {
        // In this final year we stop the counter at the final month
        for (monthIncrement = 1; monthIncrement <= finalMonth; monthIncrement++) {
          this.dates[yearIterator].months[monthIterator] = { number: monthIncrement, styles: { 'width.px': VISUAL_BLOCK_SIZE } };
          monthIterator++;
        }
      } else if (yearIncrement === firstYear) {
        // In this first year we start the counter at the first month
        for (monthIncrement = firstMonth; monthIncrement <= ONE_YEAR_IN_MONTHS; monthIncrement++) {
          this.dates[yearIterator].months[monthIterator] = { number: monthIncrement, styles: { 'width.px': VISUAL_BLOCK_SIZE } };
          monthIterator++;
        }
      } else {
        // In this in-between year we always add 12 months
        for (monthIncrement = 1; monthIncrement <= ONE_YEAR_IN_MONTHS; monthIncrement++) {
          this.dates[yearIterator].months[monthIterator] = { number: monthIncrement, styles: { 'width.px': VISUAL_BLOCK_SIZE } };
          monthIterator++;
        }
      }
      yearIterator++;
    }

    let previousYearMonthVolume;
    let globalHorizontalOffset = 0;
    const latestVerticalHorizontalOffsets = {};
    let newLabelNeeded = false;
    const windowWidth = this.$jqWindow.innerWidth();
    _.each(this.comics, (comic) => {
      /**
       * Look up the volume and series for this comic and
       * throw errors for obvious problems before proceeding.
       */
      const currentSeriesVolume = this.seriesVolumes[_.findKey(this.seriesVolumes, { id: comic.seriesVolumeId })];
      if (!currentSeriesVolume) {
        throw new Error(comic.seriesVolumeId + ' not found');
      }

      // Initialize the comic values
      comic.containerStyles = { 'left.px': null, 'top.px': null, 'width.px': null };
      comic.classes = { fullScreen: false, stickyBottom: false, stickyLeft: false, stickyRight: false, stickyTop: false };
      comic.styles = { background: null, color: null, 'marginLeft.px': null, 'marginTop.px': null};

      // Horizontal positioning
      monthsSinceFirst = (comic.yearPublished - firstYear) * ONE_YEAR_IN_MONTHS;
      monthsSinceFirst -= firstMonth;
      monthsSinceFirst += comic.monthPublished;
      comic.containerStyles['left.px'] = (monthsSinceFirst <= 0 ? 0 : monthsSinceFirst) * VISUAL_BLOCK_SIZE;

      /**
       * Manage multiple releases of the same series in the same month
       * by making the month wider.
       */
      if (previousYearMonthVolume === (comic.yearPublished + comic.monthPublished + comic.seriesVolumeId)) {
        const publishedYearKey = _.findKey(this.dates, { year: comic.yearPublished });
        const publishedMonthKey = _.findKey(this.dates[publishedYearKey].months, { number: comic.monthPublished });
        this.dates[publishedYearKey].months[publishedMonthKey].styles['width.px'] += VISUAL_BLOCK_SIZE;
        comic.containerStyles['left.px'] += VISUAL_BLOCK_SIZE + globalHorizontalOffset;
        globalHorizontalOffset += VISUAL_BLOCK_SIZE;
      } else {
        comic.containerStyles['left.px'] += globalHorizontalOffset;
      }

      /**
       * Vertical positioning ensures that each seriesVolume gets
       * its own row on the page. The exception is if a seriesVolume
       * has not had any new issues for a whole page width, then we
       * allow the next seriesVolume that is looking for a row, to slot in.
       *
       * This is a two-step process.
       * First, in this block, we either use the current position for the
       * seriesVolume or we use the globalVerticalPositionCounter to go onto
       * the last row.
       * Step two documented below.
       */
      if (typeof currentSeriesVolume.verticalPosition !== 'undefined') {
        comic.containerStyles['top.px'] = currentSeriesVolume.verticalPosition * VISUAL_BLOCK_SIZE;
      } else {
        currentSeriesVolume.verticalPosition = this.globalVerticalPositionCounter;
        comic.containerStyles['top.px'] = this.globalVerticalPositionCounter * VISUAL_BLOCK_SIZE;
        this.globalVerticalPositionCounter++;
        newLabelNeeded = true;
      }

      /**
       * Step two of vertical positioning:
       * At this point, the seriesVolume has a row to use, but in this
       * block we check if there is a row further up the page to slot into
       * so we take up less vertical space.
       */

      /**
       * The maximum horizontal offset allowed until we recycle the
       * vertical position.
       */
      const horizontalClearanceLimit = comic.containerStyles['left.px'] - windowWidth;
      if (
        !latestVerticalHorizontalOffsets[currentSeriesVolume.verticalPosition] ||
        (
          latestVerticalHorizontalOffsets[currentSeriesVolume.verticalPosition].seriesVolumeId !== currentSeriesVolume.id &&
          latestVerticalHorizontalOffsets[currentSeriesVolume.verticalPosition].offset < horizontalClearanceLimit
        )
      ) {
        /**
         * It has been a while (if ever) since the last issue of this
         * series appeared in the timeline so let's put this one on a
         * higher row if possible.
         *
         * Counter starts at 1 to keep Uncanny always at the top.
         */
        for (let i = 1; i < this.globalVerticalPositionCounter; i++) {
          if (
            !latestVerticalHorizontalOffsets[i] ||
            latestVerticalHorizontalOffsets[i].offset < horizontalClearanceLimit
          ) {
            currentSeriesVolume.verticalPosition = i;
            comic.containerStyles['top.px'] = i * VISUAL_BLOCK_SIZE;

            /**
             * We are about to insert this seriesVolume into a vertical position
             * that has already been used before, so we remove the reference to
             * that position in the previous seriesVolume. This allows a new vertical
             * position to be generated for that previous seriesVolume if one appears.
             */
            if (latestVerticalHorizontalOffsets[i]) {
              const previousSeriesVolume = this.seriesVolumes[
                _.findKey(this.seriesVolumes, { id: latestVerticalHorizontalOffsets[i].seriesVolumeId })
              ];
              if (!previousSeriesVolume) {
                throw new Error(comic.seriesVolumeId + ' not found');
              }
              previousSeriesVolume.verticalPosition = null;
            }
            newLabelNeeded = true;

            break;
          }
        }
      }

      /**
       * Store a reference to the last horizontal position used
       * by the vertical position currently used by this series volume.
       */
      latestVerticalHorizontalOffsets[currentSeriesVolume.verticalPosition] = {
        offset: comic.containerStyles['left.px'],
        seriesVolumeId: currentSeriesVolume.id
      };

      // Store the name of the series in the comic object
      comic.series = currentSeriesVolume.title;
      comic.image = this.getSanitizedString(true, comic.series, currentSeriesVolume.volume, comic.issue);

      // Populate a smaller object just for filtering
      this.itemsToSearch.push({
        displayText: comic.series + ' #' + comic.issue,
        image: comic.image,
        id: comic.id
      });

      previousYearMonthVolume = comic.yearPublished + comic.monthPublished + comic.seriesVolumeId;

      /**
       * Match the width of the page to the width of the content, which
       * includes one horizontal increment (the width of the current
       * comic thumbnail) and 2 body padding units to make up for the
       * left and right padding of the page.
       */
      this.bodyStyles['width.px'] = comic.containerStyles['left.px'] + VISUAL_BLOCK_SIZE + (BODY_PADDING * 2);

      // Setting this along the way here prevents a peakaboo effect
      $('body').width(this.bodyStyles['width.px']);

      if (newLabelNeeded) {
        this.seriesVolumeLabels.push({
          text: currentSeriesVolume.titleWithVolume,
          id: 'label-' + this.seriesVolumeLabels.length,
          containerStyles: {
            'top.px': comic.containerStyles['top.px'],
            'left.px': comic.containerStyles['left.px'],
            'width.px': -BODY_PADDING,
          },
        });

        newLabelNeeded = false;
      } else {
        const seriesVolumeLabelIndex = _.findLastIndex(this.seriesVolumeLabels, (seriesVolumeLabel) => {
          return seriesVolumeLabel.text === currentSeriesVolume.titleWithVolume;
        });

        if (seriesVolumeLabelIndex === -1) {
          throw new Error(currentSeriesVolume.titleWithVolume + ' not found in the seriesVolumeLabelIndex');
        }

        const labelContainerLeft = this.seriesVolumeLabels[seriesVolumeLabelIndex].containerStyles['left.px'];
        const comicContainerLeft = comic.containerStyles['left.px'];
        this.seriesVolumeLabels[seriesVolumeLabelIndex].containerStyles['width.px'] = comicContainerLeft - labelContainerLeft;
        this.seriesVolumeLabels[seriesVolumeLabelIndex].containerStyles['width.px'] -= BODY_PADDING;
      }
    });

    if (this.doSpeedProfile) {
      const endTime = new Date().getTime();
      const timeDiff = endTime - this.startTimeInitialLoad;
      console.warn('Time to run initial db loop:', timeDiff + 'ms');
    }

    // Render collections as groups of comics
    let comicIndex: string;
    _.each(this.collections, (collection) => {
      const collectionColor = this.getCollectionColors(collection.title);

      _.each(collection.comicIds, (comicId) => {
        comicIndex = _.findKey(this.comics, { id: comicId });
        if (!comicIndex) {
          throw new Error(comicId + ' not found in the comics db');
        }
        this.comics[comicIndex].styles.background = collectionColor.backgroundColor;
        this.comics[comicIndex].styles.color = collectionColor.textColor;
      });
    });

    /**
     * Handle keypresses.
     *
     * @link https://stackoverflow.com/questions/1402698/binding-arrow-keys-in-js-jquery
     */
    const KEYPRESSES = {
      escape: 27,
      left: 37,
      right: 39
    };

    $('html').on('keydown', e => {
      // tslint:disable-next-line: deprecation
      switch (e.which) {
        case KEYPRESSES.escape:
          this.toggleExpandComic({});
          this.searchText = '';
          this.postSearchActions();
          break;

        case KEYPRESSES.left:
          if (this.prevComic) {
            this.toggleExpandComic(this.prevComic);
          }
          break;

        case KEYPRESSES.right:
          if (this.nextComic) {
            this.toggleExpandComic(this.nextComic);
          }
          break;

        default:
          return; // exit this handler for other keys
      }
    });

    // Reposition the expanded panel when the user scrolls the viewport
    this.$jqWindow.on('load scroll', (data: JQuery.Event) => this.repositionStickyElements(data));

    // Catch clicks
    // tslint:disable-next-line: deprecation
    this.$jqWindow.on('click', (data: JQueryClickEvent) => {
      // Close the expanded comic if the click happened on a blank area
      if (data.target.localName === 'body' && this.expandedComicId) {
        this.toggleExpandComic({});
      }
    });

    _.each(this.collections, (collection: Collection) => {
      // While we are here we add the image string for lookup
      collection.image = this.getSanitizedString(false, collection.title);

      /*
       * Populate the uniqueCollections object, which joins the
       * collections since they are split in the database.
       */
      const uniqueCollection = _.find(this.uniqueCollections, ['id', collection.id]);
      if (uniqueCollection) {
        // There are existing comics, so add the comics from this part to the end of the existing part
        uniqueCollection.allCollectionComicIds = _.concat(uniqueCollection.allCollectionComicIds, collection.comicIds);
      } else {
        // Create the first entry in the object
        collection.allCollectionComicIds = collection.comicIds;
        this.uniqueCollections.push(collection);

        /*
         * Add this collection to the search results here because it is
         * the first part of the collection, including the ID of the first
         * comic in the collection.
         */
        this.itemsToSearch.push({
          displayText: collection.title,
          image: collection.image,
          id: _.first(collection.comicIds)
        });
      }
    });

    /**
     * Copy all of the comicIds from other parts of the same collection
     * into allCollectionComics so we can display them within the
     * expanded view and allow interaction with them, but still have the
     * arrow keys work chronologically.
     */
    _.each(this.uniqueCollections, (uniqueCollection) => {
      uniqueCollection.allCollectionComics = [];
      _.each(uniqueCollection.allCollectionComicIds, (comicId) => {
        uniqueCollection.allCollectionComics.push(
          _.find(this.comics, ['id', comicId])
        );
      });

      /*
       * Copy the allCollectionComics node into every instance of this
       * uniqueCollection within the collections object.
       */
      _.each(this.collections, (collection) => {
        if (collection.title === uniqueCollection.title) {
          collection.allCollectionComics = uniqueCollection.allCollectionComics;
        }
      });
    });

    // Copy the comics into the collection objects on load
    _.each(this.collections, (collection) => {
      collection.comics = [];

      _.each(collection.comicIds, (comicId) => {
        collection.comics.push(
          _.find(this.comics, ['id', comicId])
        );
      });
    });

    /**
     * Add a copy of the comic collection to each comic node.
     *
     * This is super inefficient from a memory perspective but
     * it turns out to be much more performant because the bottleneck
     * is the browser adding new things to the DOM, so we get a
     * big performance boost by always having everything in there.
     */
    _.each(this.comics, (comic) => {
      // Get the collection containing this comic
      comic.collection = _.find(this.collections, (collection) => {
        return collection.comicIds.includes(comic.id);
      });
    });

    setTimeout(() => {
      // Hide the initial data and display the real one
      $('app').fadeIn('slow');
      $('#pre-app').fadeOut('slow');

      // Make room for the farthest-right expanded panel
      this.bodyStyles['width.px'] += $('.scroll-anchor').width();

      // Make room for the farthest-bottom expanded panel
      this.bodyStyles['height.px'] = $(document).height() + $(window).height();

      $('body').width(this.bodyStyles['width.px']);
      $('body').height(this.bodyStyles['height.px']);
      $('body').css('padding', this.bodyStyles.padding);

      const elems = document.querySelectorAll('.fixed-action-btn');

      this.useGetParameters();

      this.subtractLabelWidthsFromLeftPositions();
    });
  }

  /**
   * Returns either the existing color for the collection, or
   * generates a color in HSL format, e.g. hsl(1, 2, 3)
   * converts it to RGB to find a light or dark contrasting color,
   * returns a background color and text color.
   *
   * @param  collectionTitle the title of the collection
   * @return background and text colors
   */
  getCollectionColors = (collectionTitle: string): CollectionColor => {
    let backgroundLightness;
    let hue;
    let saturation;
    let lightness;
    let chroma;
    let huePrime;
    let secondComponent;
    let red;
    let green;
    let blue;
    let lightnessAdjustment;
    let rgbColor;
    const collectionColorsIndex = {};

    if (!collectionColorsIndex[collectionTitle]) {
      let startColor;
      collectionColorsIndex[collectionTitle] = {};
      collectionColorsIndex[collectionTitle].collectionTitle = collectionTitle;
      collectionColorsIndex[collectionTitle].hslColor = 'hsl(';
      if (startColor) {
        if ((startColor + STEP_CHANGE) > COMPLETE_COLOR_WHEEL_DEGREES) {
          startColor -= COMPLETE_COLOR_WHEEL_DEGREES;
        }
        startColor += STEP_CHANGE;
      } else {
        startColor = Math.floor(Math.random() * COMPLETE_COLOR_WHEEL_DEGREES);
      }
      hue = startColor;
      collectionColorsIndex[collectionTitle].hslColor += startColor + ', ';
      saturation = parseFloat('0.' + Math.floor(Math.random() * ((SATURATION_MAX - SATURATION_MIN)) + SATURATION_MIN));
      collectionColorsIndex[collectionTitle].hslColor += saturation * PERCENT_MULTIPLIER + '%, ';
      lightness = parseFloat('0.' + Math.floor(Math.random() * ((LIGHTNESS_MAX - LIGHTNESS_MIN)) + LIGHTNESS_MIN));
      collectionColorsIndex[collectionTitle].hslColor += lightness * PERCENT_MULTIPLIER  + '%)';

      /**
       * Start the conversion of the HSL color to RGB
       * Converts an HSLA color value to RGB. Conversion formula
       * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
       * Assumes h, s, and l are contained in the set [0, 1] and
       * assigns r, g, and b in the set [0, 255].
       *
       * @see https://github.com/kayellpeee/hsl_rgb_converter
       */
      const RGB_MAX = 255;
      const HUE_SEGMENT = 60; // 60 degrees, one sixth of the colour wheel
      const MOD = 2;
      const CHROMA_MAX = 1;

      chroma = (CHROMA_MAX - Math.abs((lightness + lightness) - CHROMA_MAX)) * saturation;
      huePrime = hue / HUE_SEGMENT;
      secondComponent = chroma * (CHROMA_MAX - Math.abs((huePrime % MOD) - CHROMA_MAX));

      huePrime = Math.floor(huePrime);

      // Reset the values each time
      red = 0;
      green = 0;
      blue = 0;

      switch (huePrime) {
        case 0:
          red = chroma;
          green = secondComponent;
          break;
        case 1:
          red = secondComponent;
          green = chroma;
          break;
        case 2:
          green = chroma;
          blue = secondComponent;
          break;
        case 3:
          green = secondComponent;
          blue = chroma;
          break;
        case 4:
          red = secondComponent;
          blue = chroma;
          break;
        case 5:
          red = chroma;
          blue = secondComponent;
      }

      lightnessAdjustment = lightness - (chroma / 2);
      red += lightnessAdjustment;
      green += lightnessAdjustment;
      blue += lightnessAdjustment;

      rgbColor = [Math.round(red * RGB_MAX), Math.round(green * RGB_MAX), Math.round(blue * RGB_MAX)];

      /**
       * Given a color in RGB format, assign either a light
       * or dark color.
       *
       * @see https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
       */
      const RGB_CUTOFF = 0.03928; // See http://entropymine.com/imageworsener/srgbformula/
      const RGB_SLOPE = 0.055;
      const RGB_DENOMINATOR = 1.055;
      const RGB_EXPONENT = 2.4;
      const LINEAR_RGB = 12.92; // R, G, B * LINEAR_RBG = RGB_CUTTOFF
      const PERCEIVED_WEIGHTING_RED_LIGHT = 0.2126;
      const PERCEIVED_WEIGHTING_GREEN_LIGHT = 0.7152;
      const PERCEIVED_WEIGHTING_BLUE_LIGHT = 0.0722; // Given equal quantities of RGB, humans perceive them in a weighted way
      const LIGHT_DARK_THRESHOLD = 0.179;

      for (let i = 0; i < rgbColor.length; ++i) {
        rgbColor[i] /= RGB_MAX;

        if (rgbColor[i] <= RGB_CUTOFF) {
          rgbColor[i] = rgbColor[i] / LINEAR_RGB ;
        } else {
          rgbColor[i] = Math.pow((rgbColor[i] + RGB_SLOPE) / RGB_DENOMINATOR, RGB_EXPONENT);
        }
      }

      let iterator = 0;

      backgroundLightness = PERCEIVED_WEIGHTING_RED_LIGHT * rgbColor[iterator];
      iterator++;
      backgroundLightness +=  PERCEIVED_WEIGHTING_GREEN_LIGHT * rgbColor[iterator];
      iterator++;
      backgroundLightness += PERCEIVED_WEIGHTING_BLUE_LIGHT * rgbColor[iterator];

      if (backgroundLightness > LIGHT_DARK_THRESHOLD) {
        collectionColorsIndex[collectionTitle].textColor = '#444';
      } else {
        collectionColorsIndex[collectionTitle].textColor = '#ccc';
      }
    }
    return {
      backgroundColor: collectionColorsIndex[collectionTitle].hslColor,
      textColor: collectionColorsIndex[collectionTitle].textColor
    };
  }

  /*
   * Use jQuery to manipulate classes and styles to make the expanded
   * panels always fit in the viewport.
   */
  repositionStickyElements = (currentComicId?) => {
    let scrollLeft;
    let scrollTop;
    let isComicScrolledPastLeft;
    let isComicScrolledPastRight;
    let anchorTopPosition;
    let anchorLeftPosition;
    let anchorRightPosition;
    let anchorBottomPosition;
    let $expandedComic;
    let scrollRight;
    let scrollBottom;
    let isStickyTop;
    let isStickyLeft;
    let isStickyRight;
    let isStickyBottom;
    let startTimeReposition;

    if (this.doSpeedProfile) {
      startTimeReposition = new Date().getTime();
    }

    /*
     * jQuery passes an object when it triggers this function from a
     * page event, but we only care about strings we pass in.
     */
    if (typeof currentComicId !== 'string') {
      currentComicId = undefined;
    }

    // The scroll position of the page, minus the main padding
    scrollLeft = this.$jqWindow.scrollLeft() - BODY_PADDING;
    scrollTop  = this.$jqWindow.scrollTop();
    scrollRight = scrollLeft + this.$jqWindow.innerWidth();

    // Lazy-load thumbnails that aren't in the viewport
    _.each(this.comics, (comic) => {
      // skip this calculation if the comic has been previously displayed
      if (comic.visible === true) {
        return;
      }

      isComicScrolledPastLeft  = Boolean(scrollLeft > (comic.containerStyles['left.px'] + VISUAL_BLOCK_SIZE));
      isComicScrolledPastRight = Boolean(scrollRight < comic.containerStyles['left.px']);

      // the comic is out of the viewport, to the left
      if (!isComicScrolledPastLeft && !isComicScrolledPastRight) {
        comic.visible = true;
      }
    });

    const selectedComic = currentComicId || this.expandedComicId;

    // Exit early and force render if there is no comic expanded
    if (!selectedComic) {
      return setTimeout(() => {});
    }

    const expandedComic = _.find(this.comics, ['id', selectedComic]);
    if (!expandedComic) {
      return console.error('The comic could not be found', selectedComic);
    }

    // Expanded panel positioning
    setTimeout(() => {
      $expandedComic = $('.expanded .comic');
      if (!$expandedComic.length) {
        return;
      }

      const stickyAnchorOffset = $('.expanded .scroll-anchor').offset();
      anchorTopPosition    = stickyAnchorOffset.top;
      anchorLeftPosition   = stickyAnchorOffset.left;
      anchorRightPosition  = stickyAnchorOffset.left + $expandedComic.width();
      anchorBottomPosition = stickyAnchorOffset.top  + $expandedComic.height();

      scrollRight  = scrollLeft + window.innerWidth;
      scrollBottom = scrollTop  + window.innerHeight;

      isStickyTop    = Boolean(scrollTop  > anchorTopPosition);
      isStickyLeft   = Boolean(scrollLeft > anchorLeftPosition);
      isStickyRight  = Boolean(scrollRight  < anchorRightPosition);
      isStickyBottom = Boolean(scrollBottom < anchorBottomPosition);

      expandedComic.classes.stickyTop = isStickyTop;
      expandedComic.classes.stickyRight = isStickyRight;
      expandedComic.classes.stickyBottom = isStickyBottom;
      expandedComic.classes.stickyLeft = isStickyLeft;

      if ((isStickyTop || isStickyBottom) && !isStickyLeft && !isStickyRight) {
        expandedComic.styles['marginLeft.px'] = '-' + (scrollLeft + BODY_PADDING);
        expandedComic.styles['marginTop.px'] = null;
      } else if ((isStickyLeft || isStickyRight) && !isStickyTop && !isStickyBottom) {
        expandedComic.styles['marginLeft.px'] = null;
        expandedComic.styles['marginTop.px'] = '-' + scrollTop;
      } else {
        expandedComic.styles['marginLeft.px'] = null;
        expandedComic.styles['marginTop.px'] = null;
      }

      // Instruct Materialize-CSS to make the expanded cover fullscreen on click
      const elems = document.querySelectorAll('.materialboxed');
      // const instances = M.Materialbox.init(elems);

      if (this.doSpeedProfile) {
        const endTime = new Date().getTime();
        const timeDiff = endTime - startTimeReposition;
        console.warn('Time to run repositionStickyElements:', timeDiff + 'ms');
      }
    });
  }

  /**
   * Handles manual actions that need to happen after searchText has been
   * set.
   *
   * Note: Does not trigger automatically when we change it from the
   * controller, but it does from the template, so there are manual calls
   * from inside the controller to handle after keypresses.
   */
  postSearchActions = (value?: string) => {
    if (value) {
      $('body').addClass('search-is-open');
    } else {
      $('body').removeClass('search-is-open');
    }
  }

  toggleInfoModal = () => {
    this.dialog.open(InfoModalComponent);
  }

  toggleFullscreen = () => {
    this.expandedComic.classes.fullScreen = !this.expandedComic.classes.fullScreen;
  }

  toggleShowCollections = (forcedState?: string) => {
    let state: string;
    if (forcedState) {
      state = forcedState;
    } else if (this.isShowCollections) {
      state = '';
    } else {
      state = '1';
    }

    // Set whether to show collections in the URL
    const urlTree = this.router.createUrlTree([], {
      queryParams: { showCollections: state },
      queryParamsHandling: 'merge',
      preserveFragment: true });
    this.router.navigateByUrl(urlTree);

    if (state === '1') {
      this.isShowCollections = true;
    } else {
      this.isShowCollections = false;
    }
  }

  scrollToComic = (comicId) => {
    const comicFromId = this.comics[_.findKey(this.comics, { id: comicId })];

    setTimeout(() => {
      $('html, body').animate({
        scrollLeft: comicFromId.containerStyles['left.px'] - LEFT_MARGIN,
        scrollTop:  comicFromId.containerStyles['top.px']
      }, ANIMATION_DURATION, 'swing', () => {
        // Expand the comic if it isn't already
        if (this.expandedComicId !== comicId) {
          this.toggleExpandComic(comicFromId);
        }
      });
    });
  }

  trackByItemId = (index, item) => {
    return item.id;
  }

  /*
   * Launches the initial expand and scroll on load, and the
   * garbage collector, if the relevant GET parameters are
   * specified (id and gc)
   */
  useGetParameters = () => {
      const searchParams = this.route.snapshot.queryParams;

      if (searchParams.id) {
        this.scrollToComic(searchParams.id);
      }

      if (searchParams.showCollections) {
        this.toggleShowCollections('1');
      }

      /**
       * The garbage collector.
       *
       * This picks up any orphaned comics and series that would
       * not cause errors but just take up space.
       *
       * Note there is no need to check that the comicIds in
       * collections map to comics, because that would cause big
       * errors that we already watch out for.
       */
      if (searchParams.gc) {
        let foundComic;
        let isClean = true;
        const gcConsolePrepend = 'Garbage Collector: ';

        // Check that each comic is referenced by a collection
        _.each(this.comics, (comic) => {
          foundComic = _.find(this.collections, (collection) => {
            return collection.comicIds.includes(comic.id);
          });

          if (!foundComic) {
            isClean = false;
            console.warn(gcConsolePrepend + 'The comic ' + comic.id + ' is not referenced by any collections.');
          }
        });

        if (isClean) {
          console.log(gcConsolePrepend + 'All comics are referenced by collections.');
        }

        // Check that each seriesVolume is referenced by a comic
        isClean = true;
        _.each(this.seriesVolumes, (seriesVolume) => {
          foundComic = _.find(this.comics, (comic) => {
            return comic.seriesVolumeId === seriesVolume.id;
          });

          if (!foundComic) {
            isClean = false;
            console.warn(gcConsolePrepend + 'The seriesVolume ' + seriesVolume.id + ' is not referenced by any comics.');
          }
        });

        if (isClean) {
          console.log(gcConsolePrepend + 'All seriesVolumes are referenced by comics.');
        }
      }
  }
}
