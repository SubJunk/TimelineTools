import _ from 'lodash';
import { SeriesVolume, Comic, MarvelAPISeriesResponse } from './models';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const MARVEL_API_BASE_URL = 'https://gateway.marvel.com/v1/public/';
const MARVEL_API_KEY_PUBLIC = '46a863fa31f601aacb87dae9cb8f7c45';

const GOODREADS_API_BASE_URL = 'https://www.goodreads.com/search/index.xml';
const GOODREADS_API_KEY_PUBLIC = 'ruoM3jpamOVNpjOnfiAuYA';

const CORS_ANYWHERE_URL = 'https://cors-anywhere.herokuapp.com/';

@Injectable()
export class ApiInteractions {
  constructor(
    public http: HttpClient,
  ) { }

  /**
   * @param seriesVolume the series volume object
   * @returns the series data from the Marvel API
   */
  public getAPISeriesVolume = (seriesVolume: SeriesVolume) => {
    const params = new HttpParams()
      .set('title', seriesVolume.title)
      .set('startYear', seriesVolume.startYear)
      .set('apikey', MARVEL_API_KEY_PUBLIC);

    return this.http.get(MARVEL_API_BASE_URL + 'series', {params});
  }

  /**
   * @param collection the collection object
   * @returns the collection data from the Goodreads API
   */
  public getGoodreadsCollectionData = (collectionTitle: string) => {
    const params = new HttpParams()
      .set('q', collectionTitle)
      .set('key', GOODREADS_API_KEY_PUBLIC);

    return this.http.get(CORS_ANYWHERE_URL + GOODREADS_API_BASE_URL, {params, responseType: 'text'});
  }

  /**
   * Writes a "link" value to the comic object, which is a URL to the
   * comic on Marvel Unlimited.
   *
   * @param comic                the comic object
   * @param seriesVolumeMarvelID the series ID in the Marvel API
   */
  public setAPIComicData = (comic: Comic, seriesVolumeMarvelID: string) => {
    const params = new HttpParams()
      .set('issueNumber', comic.issue)
      .set('series', seriesVolumeMarvelID)
      .set('apikey', MARVEL_API_KEY_PUBLIC);

    return this.http.get(MARVEL_API_BASE_URL + 'comics', {params})
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
}
