import $ from 'jquery';
import _ from 'lodash';
import { Component, Injectable, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Md5 } from 'ts-md5/dist/md5';
import { parseString } from 'xml2js';

import { goodreadsApiKeyPublic, marvelApiKeyPublic, marvelApiKeyPrivate } from './config';
import { Collections } from './../database/collections';
import { Comics } from './../database/comics';
import { SeriesVolumes } from './../database/series';
import {
  JQueryClickEvent,
  Collection,
  CollectionColor,
  Comic,
  DateYear,
  ExpandedComicCSS,
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
const EXPANDED_PANEL_WIDTH = 900;
const COLLECTIONS_VIEW_COVER_WIDTH = 250;

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

const DATES_CONTAINER_HEIGHT = 68;
const COLLECTIONS_CONTAINER_HEIGHT = 298;
const DEFAULT_COMIC_THUMBNAILS_OFFSET_TOP = BODY_PADDING_TOP + DATES_CONTAINER_HEIGHT;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
@Injectable()
export class AppComponent implements OnInit {
  constructor(
    private changeDetector: ChangeDetectorRef,
    public dialog: MatDialog,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  title = 'timeline-tools';

  comics: Array<Comic>;
  comicsInReadingOrder: Array<Comic>;
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
  marvelApiBaseUrl = 'https://gateway.marvel.com/v1/public/';
  marvelApiKeyPublic = _.isEmpty(marvelApiKeyPublic) ? '46a863fa31f601aacb87dae9cb8f7c45' : marvelApiKeyPublic;
  marvelApiKeyPrivate = marvelApiKeyPrivate;

  goodreadsApiBaseUrl = 'https://www.goodreads.com/search/index.xml';
  goodreadsApiKeyPublic = _.isEmpty(goodreadsApiKeyPublic) ? 'ruoM3jpamOVNpjOnfiAuYA' : goodreadsApiKeyPublic;

  corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

  startTimeInitialLoad = new Date().getTime();

  globalVerticalPositionCounter = 0;
  seriesVolumeLabels: Array<SeriesVolumeLabel> = [];

  expandedComicId: string;
  expandedComicCSS: ExpandedComicCSS = {
    classes: {
      fullScreen: false,
      stickyBottom: false,
      stickyLeft: false,
      stickyRight: false,
      stickyTop: false,
    },
    styles: {
      'marginTop.px': null,
      'marginLeft.px': null,
    }
  };
  expandedCollectionId: string;
  expandedCollection: Collection;
  prevComic: Comic;
  nextComic: Comic;
  prevComicId: string;
  nextComicId: string;
  prevCollection: Collection;
  nextCollection: Collection;
  prevCollectionFirstComic: Comic;
  nextCollectionFirstComic: Comic;
  currentComicIndexInCollection: number;
  currentCollectionIndexInCollections: number;
  isShowCollections = false;
  isShowReadingOrder = false;
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
      .set('apikey', this.marvelApiKeyPublic);

    return this.http.get(this.marvelApiBaseUrl + 'series' + this.getExtraAPIParamsString(), {params});
  }

  /**
   * @param collection the collection object
   * @returns the collection data from the Goodreads API
   */
  getGoodreadsCollectionData = (collectionTitle: string) => {
    const params = new HttpParams()
      .set('q', collectionTitle)
      .set('key', this.goodreadsApiKeyPublic);

    return this.http.get(this.corsAnywhereUrl + this.goodreadsApiBaseUrl, {params, responseType: 'text'});
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
      .set('apikey', this.marvelApiKeyPublic);

    return this.http.get(this.marvelApiBaseUrl + 'comics' + this.getExtraAPIParamsString(), {params})
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
    if (!_.isEmpty(this.marvelApiKeyPrivate) && window.location.protocol === 'file') {
      // TODO: Write this another way
      // tslint:disable-next-line: no-bitwise
      this.timestamp = Date.now() / ONE_SECOND_IN_MILLISECONDS | 0;
      this.apiHash = Md5.hashStr(this.timestamp + this.marvelApiKeyPrivate + this.marvelApiKeyPublic);
      return '?ts=' + this.timestamp + '&hash=' + this.apiHash;
    }

    return '';
  }

  /*
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

  /*
   * Returns the classes to use for the comic.
   *
   * If this is not the expanded comic, it simply returns the classes
   * node. If this is the expanded comic, it also returns the sticky
   * classes.
   */
  public getComicClasses = (comic: Comic) => {
    let comicClasses = {};

    if (comic.id === this.expandedComicId) {
      comicClasses = this.expandedComicCSS.classes;
    }

    return comicClasses;
  }

  /*
   * Returns the styles to use for the comic.
   *
   * If this is not the expanded comic, it simply returns the styles
   * node. If this is the expanded comic, it also returns the margins.
   */
  public getComicStyles = (comic: Comic) => {
    let comicStyles = comic.styles;

    if (comic.id === this.expandedComicId) {
      comicStyles = _.clone(comic.styles);
      comicStyles = _.assign(comicStyles, this.expandedComicCSS.styles);
    }

    return comicStyles;
  }

  clearComicClassesAndStyles = () => {
    this.expandedComicId    = undefined;
    this.expandedCollection = undefined;
  }

  /**
   * Toggles the expanded comic
   *
   * @param currentComic  the current comic object
   * @param isForceScroll forces this to find a new scroll position
   *                      instead of using a relative one.
   *                      Used when clicking on a comic from the collections view
   */
  toggleExpandComic = async (currentComic: Comic, isForceScroll?: boolean) => {
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

      return this.clearComicClassesAndStyles();
    }

    /*
     * If there is already a comic expanded, and we have already confirmed
     * above that we want to expand a different one, this block maintains
     * the expanded box's position on the page by scrolling the viewport.
     */
    if (isForceScroll) {
      if (this.expandedCollection) {
        this.clearComicClassesAndStyles();
      }

      $('html, body').stop().animate({
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
      this.clearComicClassesAndStyles();

      $('html, body').stop().animate({
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
      /*
       * The expanded comic is the last one in a collection, so we need to find out
       * the first comic in the next collection.
       */
      this.nextComicId = this.nextCollection.comicIds[0];
      this.nextComic = _.find(this.comics, ['id', this.nextComicId]);
    }

    // Set the comic ID in the URL
    urlTree = this.router.createUrlTree([], {
      queryParams: { id: currentComic.id },
      queryParamsHandling: 'merge',
      preserveFragment: true });
    this.router.navigateByUrl(urlTree);

    // Get the series volume containing this comic
    const expandedSeriesVolume = _.find(this.seriesVolumes, ['id', currentComic.seriesVolumeId]);
    if (!expandedSeriesVolume) {
      return console.error('The expanded series volume could not be found', currentComic.seriesVolumeId);
    }

    const expandedComic = _.find(this.comics, ['id', currentComic.id]);

    this.setGoodreadsCollectionId(this.expandedCollection);

    if (!expandedSeriesVolume.marvelId) {
      // We await this because setAPIComicData depends on having a marvel ID set
      expandedSeriesVolume.marvelId = await this.getMarvelSeriesVolumeId(expandedSeriesVolume);
    }

    this.setAPIComicData(expandedComic, expandedSeriesVolume.marvelId);
  }

  /*
   * Sets the Marvel ID for a seriesVolume
   */
  getMarvelSeriesVolumeId = (seriesVolume: SeriesVolume): Promise<string> => {
    return new Promise((resolve, reject) => {
      this.getAPISeriesVolume(seriesVolume)
          .subscribe(
            (response: MarvelAPISeriesResponse) => {
              if (!response || !response.data || !response.data || !response.data.results.length) {
                return console.warn('The response from Marvel API wasn\'t in the expected format ' + response);
              }

              const firstResult: MarvelAPISeriesResponseResult = _.first(response.data.results);
              return resolve(firstResult.id);
            },
            (err) => {
              return reject(err);
            }
          );
    });
  }

  /*
   * Sets the Goodreads collection ID
   */
  private setGoodreadsCollectionId = (collection: Collection): void => {
    this.getGoodreadsCollectionData(collection.title)
        .subscribe(
          (response) => {
            parseString(response, (err, result) => {
              if (err) {
                return console.error(err);
              }

              const collectionOnGoodreads = result.GoodreadsResponse.search[0].results[0].work[0].best_book[0];

              collection.goodreadsId = collectionOnGoodreads.id[0]._;
            });
          },
          (err) => {
            throw err;
          }
        );
  }

  private subtractLabelWidthsFromLeftPositions = () => {
    let $jqLabel: JQuery<HTMLElement>;
    let labelWidthFromDom: number;

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
    this.comicsInReadingOrder = [];


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

    let previousYearMonthVolume: string;
    let globalHorizontalOffset = 0;
    const latestVerticalHorizontalOffsets = {};
    let newLabelNeeded = false;
    const windowWidth = window.innerWidth;
    _.each(this.comics, (comic) => {
      /*
       * Look up the volume and series for this comic and
       * throw errors for obvious problems before proceeding.
       */
      const currentSeriesVolume = this.seriesVolumes[_.findKey(this.seriesVolumes, { id: comic.seriesVolumeId })];
      if (!currentSeriesVolume) {
        throw new Error(comic.seriesVolumeId + ' not found');
      }

      // Horizontal positioning
      monthsSinceFirst = (comic.yearPublished - firstYear) * ONE_YEAR_IN_MONTHS;
      monthsSinceFirst -= firstMonth;
      monthsSinceFirst += comic.monthPublished;
      comic.containerStyles['left.px'] = (monthsSinceFirst <= 0 ? 0 : monthsSinceFirst) * VISUAL_BLOCK_SIZE;

      /*
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

      /*
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

      /*
       * Step two of vertical positioning:
       * At this point, the seriesVolume has a row to use, but in this
       * block we check if there is a row further up the page to slot into
       * so we take up less vertical space.
       */

      /*
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
        /*
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

            /*
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

      /*
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
        displayText: currentSeriesVolume.searchTitleWithVolume + ' #' + comic.issue,
        image: comic.image,
        id: comic.id
      });

      previousYearMonthVolume = comic.yearPublished + comic.monthPublished + comic.seriesVolumeId;

      /*
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

        //  while we are here store the comics in reading order
        this.comicsInReadingOrder.push(_.cloneDeep(this.comics[comicIndex]));
      });
    });

    //  reposition the reading order comics horizontally
    let horizontalReadingOrderPosition = 0;
    _.each(this.comicsInReadingOrder, (comic) => {
      horizontalReadingOrderPosition += VISUAL_BLOCK_SIZE;
      comic.containerStyles['left.px'] = horizontalReadingOrderPosition;

      /*
       * Look up the volume and series for this comic and
       * throw errors for obvious problems before proceeding.
       */
      const currentSeriesVolume = this.seriesVolumes[_.findKey(this.seriesVolumes, { id: comic.seriesVolumeId })];
      if (!currentSeriesVolume) {
        throw new Error(comic.seriesVolumeId + ' not found');
      }
      // this is a copy of the other positioning
      /*
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

       // TO-DO: Paulene really needs to understand what's happening here
       // so I added this line because I couldn't get things to line up.  Unsure what it should be reset to.
      this.globalVerticalPositionCounter = 1;
      // this if statement checks that the vertical position attribute of the currentSeriesVolume is not undefined
      // I'm wondering when it would be undefined.
      if (typeof currentSeriesVolume.verticalPosition !== 'undefined') {
        // here we set the vertical position for this comic.
        // this must be a counting integer since we multiply it by the visual block size
        comic.containerStyles['top.px'] = currentSeriesVolume.verticalPosition * VISUAL_BLOCK_SIZE;
      } else {
        // if the vertical position is undefined (does this mean that it's not set?)
        // we set the vertical position to the global position.
        // so I'm assuming this holds the "next" position?
        currentSeriesVolume.verticalPosition = this.globalVerticalPositionCounter;
        comic.containerStyles['top.px'] = this.globalVerticalPositionCounter * VISUAL_BLOCK_SIZE;
        this.globalVerticalPositionCounter++;
        newLabelNeeded = true;
      }
      //   /*
      //    * It has been a while (if ever) since the last issue of this
      //    * series appeared in the timeline so let's put this one on a
      //    * higher row if possible.
      //    *
      //    * Counter starts at 1 to keep Uncanny always at the top.
      //    */
      // const horizontalClearanceLimit = 1;
      // for (let i = 1; i < this.globalVerticalPositionCounter; i++) {
      //     if (
      //       !latestVerticalHorizontalOffsets[i] ||
      //       latestVerticalHorizontalOffsets[i].offset < horizontalClearanceLimit
      //     ) {
      //       currentSeriesVolume.verticalPosition = i;
      //       comic.containerStyles['top.px'] = i * VISUAL_BLOCK_SIZE;

      //       /*
      //        * We are about to insert this seriesVolume into a vertical position
      //        * that has already been used before, so we remove the reference to
      //        * that position in the previous seriesVolume. This allows a new vertical
      //        * position to be generated for that previous seriesVolume if one appears.
      //        */
      //       if (latestVerticalHorizontalOffsets[i]) {
      //         const previousSeriesVolume = this.seriesVolumes[
      //           _.findKey(this.seriesVolumes, { id: latestVerticalHorizontalOffsets[i].seriesVolumeId })
      //         ];
      //         if (!previousSeriesVolume) {
      //           throw new Error(comic.seriesVolumeId + ' not found');
      //         }
      //         previousSeriesVolume.verticalPosition = null;
      //       }
      //       newLabelNeeded = true;

      //       break;
      //     }
      //   }
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
    this.$jqWindow.on('load scroll', (data: JQuery.Event) => {
      this.repositionStickyElements(data);
      this.setCollectionsViewImageVisibility();
    });

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

    /*
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

    /*
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
      // Make room for the farthest-bottom expanded panel
      this.bodyStyles['height.px'] = $(document).height() + $(window).height();

      $('body').width(this.bodyStyles['width.px']);
      $('body').height(this.bodyStyles['height.px']);
      $('body').css('padding', this.bodyStyles.padding);

      this.useGetParameters();

      this.subtractLabelWidthsFromLeftPositions();
    });
  }

  public search = (comic: Comic) => {
    const comicToSearch: Comic = _.find(this.comics, ['id', comic.id]);
    this.toggleExpandComic(comicToSearch, true);
    this.searchText = '';
    this.postSearchActions();
  }

  public toggleExpandCollection = (collection: Collection) => {
    this.expandedCollectionId = this.expandedCollectionId === collection.id ? null : collection.id;

    /*
     * If we just closed an expanded collection panel, as opposed to
     * opening a new one, we detect visibility again since that may
     * reveal hidden collections.
     */
    if (this.expandedCollectionId === null) {
      setTimeout(() => {
        this.setCollectionsViewImageVisibility();
      }, ANIMATION_DURATION);
    }
  }

  /*
   * Sets whether each collection is currently visible in the browser window.
   * Will never change from true to false, only false to true.
   * Used to lazy-load the cover images.
   */
  private setCollectionsViewImageVisibility() {
    if (this.isShowCollections) {
      _.each(this.uniqueCollections, (collection: Collection) => {
        // Return early if it has already been visible before
        if (collection.visible) {
          return;
        }

        const $collectionButton = $('#expand-' + collection.id);
        if (!$collectionButton.length) {
          return;
        }

        const scrollPositionLeft = this.$jqWindow.scrollLeft() - BODY_PADDING;
        const scrollPositionRight = scrollPositionLeft + window.innerWidth;

        const collectionLeftPosition = $collectionButton.offset().left;

        const isCollectionScrolledPastLeft  = Boolean(scrollPositionLeft > (collectionLeftPosition + COLLECTIONS_VIEW_COVER_WIDTH));
        const isCollectionScrolledPastRight = Boolean(scrollPositionRight < collectionLeftPosition);

        if (!isCollectionScrolledPastLeft && !isCollectionScrolledPastRight) {
          collection.visible = true;
        }
      });
    }
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
  private getCollectionColors = (collectionTitle: string): CollectionColor => {
    let backgroundLightness: number;
    let hue: number;
    let saturation: number;
    let lightness: number;
    let chroma: number;
    let huePrime: number;
    let secondComponent: number;
    let red: number;
    let green: number;
    let blue: number;
    let lightnessAdjustment: number;
    let rgbColor: number[];
    const collectionColorsIndex = {};

    if (!collectionColorsIndex[collectionTitle]) {
      let startColor: number;
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
  repositionStickyElements = (currentComicId?: string | JQuery.Event) => {
    let scrollPositionLeft: number;
    let scrollPositionTop: number;
    let scrollPositionRight: number;
    let scrollPositionBottom: number;
    let isComicScrolledPastLeft: boolean;
    let isComicScrolledPastRight: boolean;
    let isComicScrolledPastTop: boolean;
    let isComicScrolledPastBottom: boolean;
    let comicTopPosition: number;
    let comicLeftPosition: number;
    let comicRightPosition: number;
    let comicBottomPosition: number;
    let $expandedComic: JQuery;
    let isStickyTop: boolean;
    let isStickyLeft: boolean;
    let isStickyRight: boolean;
    let isStickyBottom: boolean;
    let startTimeReposition: number;

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
    scrollPositionLeft = this.$jqWindow.scrollLeft() - BODY_PADDING;
    scrollPositionTop  = this.$jqWindow.scrollTop();
    scrollPositionRight = scrollPositionLeft + window.innerWidth;
    scrollPositionBottom = scrollPositionTop  + window.innerHeight;

    // This is the amount of pixels the topmost comic thumbnails are offset by vertically
    let scrollPositionVerticalOffset = DEFAULT_COMIC_THUMBNAILS_OFFSET_TOP;
    if (this.isShowCollections) {
      scrollPositionVerticalOffset += COLLECTIONS_CONTAINER_HEIGHT;
    }

    const scrollPositionTopWithOffset    = scrollPositionTop - scrollPositionVerticalOffset;
    const scrollPositionBottomWithOffset = scrollPositionBottom - scrollPositionVerticalOffset;

    // Lazy-load thumbnails that aren't in the viewport
    _.each(this.comics, (comic) => {
      // skip this calculation if the comic has been previously displayed
      if (comic.visible === true) {
        return;
      }

      isComicScrolledPastLeft   = Boolean(scrollPositionLeft > (comic.containerStyles['left.px'] + VISUAL_BLOCK_SIZE));
      isComicScrolledPastRight  = Boolean(scrollPositionRight < comic.containerStyles['left.px']);
      isComicScrolledPastTop    = Boolean(scrollPositionTopWithOffset > (comic.containerStyles['top.px'] + VISUAL_BLOCK_SIZE));
      isComicScrolledPastBottom = Boolean(scrollPositionBottomWithOffset < comic.containerStyles['top.px']);

      if (!isComicScrolledPastLeft && !isComicScrolledPastRight && !isComicScrolledPastTop && !isComicScrolledPastBottom) {
        comic.visible = true;
      }
    });

    // do the same for reading order comics
    _.each(this.comicsInReadingOrder, (comic) => {
      // skip this calculation if the comic has been previously displayed
      if (comic.visible === true) {
        return;
      }

      isComicScrolledPastLeft   = Boolean(scrollPositionLeft > (comic.containerStyles['left.px'] + VISUAL_BLOCK_SIZE));
      isComicScrolledPastRight  = Boolean(scrollPositionRight < comic.containerStyles['left.px']);
      isComicScrolledPastTop    = Boolean(scrollPositionTopWithOffset > (comic.containerStyles['top.px'] + VISUAL_BLOCK_SIZE));
      isComicScrolledPastBottom = Boolean(scrollPositionBottomWithOffset < comic.containerStyles['top.px']);

      if (!isComicScrolledPastLeft && !isComicScrolledPastRight && !isComicScrolledPastTop && !isComicScrolledPastBottom) {
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
      comicTopPosition    = stickyAnchorOffset.top;
      comicLeftPosition   = stickyAnchorOffset.left;
      comicBottomPosition = comicTopPosition  + $expandedComic.height();
      comicRightPosition  = comicLeftPosition + EXPANDED_PANEL_WIDTH;

      isStickyTop    = Boolean(scrollPositionTop  > comicTopPosition);
      isStickyLeft   = Boolean(scrollPositionLeft > comicLeftPosition);
      isStickyRight  = Boolean(scrollPositionRight  < comicRightPosition);
      isStickyBottom = Boolean(scrollPositionBottom < comicBottomPosition);

      this.expandedComicCSS.classes = {
        fullScreen: false,
        stickyBottom: isStickyBottom,
        stickyLeft: isStickyLeft,
        stickyRight: isStickyRight,
        stickyTop: isStickyTop,
      };

      if ((isStickyTop || isStickyBottom) && !isStickyLeft && !isStickyRight) {
        this.expandedComicCSS.styles = {
          'marginLeft.px': '-' + (scrollPositionLeft + BODY_PADDING),
          'marginTop.px': null,
        };
      } else if ((isStickyLeft || isStickyRight) && !isStickyTop && !isStickyBottom) {
        this.expandedComicCSS.styles = {
          'marginLeft.px': null,
          'marginTop.px': '-' + scrollPositionTop,
        };
      } else {
        this.expandedComicCSS.styles = {
          'marginLeft.px': null,
          'marginTop.px': null,
        };
      }

      if (this.doSpeedProfile) {
        const endTime = new Date().getTime();
        const timeDiff = endTime - startTimeReposition;
        console.warn('Time to run repositionStickyElements:', timeDiff + 'ms');
      }
    });
  }

  toggleDisplayOrder = () => {
    // Toggle display order to change classes for collection order or reading order
    this.isShowReadingOrder = !this.isShowReadingOrder;
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

  public toggleInfoModal = () => {
    this.dialog.open(InfoModalComponent);
  }

  public toggleFullscreen = () => {
    this.expandedComicCSS.classes.fullScreen = !this.expandedComicCSS.classes.fullScreen;
  }

  public toggleShowCollections = (forcedState?: string) => {
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

      // This makes the page display the collections view before we check visibility
      this.changeDetector.detectChanges();

      this.setCollectionsViewImageVisibility();
    } else {
      this.isShowCollections = false;
    }
  }

  public scrollToComic = (comicId: string) => {
    const comicFromId = this.comics[_.findKey(this.comics, { id: comicId })];

    setTimeout(() => {
      $('html, body').stop().animate({
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

  public trackByItemId = (index: number, item: Comic) => {
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
      let foundComic: Comic | Collection;
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
