// This is just a fake one to make TypeScript stop complaining
export interface JQueryClickEvent {
  target: JQueryClickEventTarget;
}

interface JQueryClickEventTarget {
  localName: string;
}

interface ContainerStyles {
  'left.px': number;
  'top.px': number;
  'width.px': number;
}

export interface Collection {
  allCollectionComicIds: Array<string>;
  allCollectionComics: Array<Comic>;
  comicIds: Array<string>;
  comics: Array<Comic>;
  id: string;
  image: string;
  monthPublished: number;
  styles: object;
  title: string;
  yearPublished: number;
}

export interface CollectionColor {
  backgroundColor: string;
  textColor: string;
}

export interface Comic {
  classes?: ComicClasses;
  collection?: Collection;
  containerStyles?: ContainerStyles;
  id?: string;
  image?: string;
  issue?: string;
  link?: string;
  monthPublished?: number;
  yearPublished?: number;
  series?: string;
  seriesVolumeId?: string;
  styles?: ComicStyles;
  titles?: Array<string>;
  visible?: boolean;
}

interface ComicClasses {
  stickyBottom: boolean;
  stickyLeft: boolean;
  stickyRight: boolean;
  stickyTop: boolean;
}

interface ComicStyles {
  background: string;
  color: string;
  'marginLeft.px': string;
  'marginTop.px': string;
}

export interface SeriesVolume {
  id: string;
  title: string;
  startYear: string;
}

export interface SeriesVolumeLabel {
  containerStyles: ContainerStyles;
  id: string;
  text: string;
}

export interface MarvelAPISeriesResponseResult {
  digitalId: number;
  id: number;
}

interface MarvelAPISeriesResponseData {
  results: Array<MarvelAPISeriesResponseResult>;
}

export interface MarvelAPISeriesResponse {
  data: MarvelAPISeriesResponseData;
}
