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
  goodreadsId: string;
  goodreadsReadStatus: string;
  id: string;
  image: string;
  monthPublished: number;
  styles: object;
  title: string;
  visible: boolean;
  yearPublished: number;
}

export interface CollectionColor {
  backgroundColor: string;
  textColor: string;
}

export interface Comic {
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

interface ExpandedComicClasses {
  fullScreen: boolean;
  stickyBottom: boolean;
  stickyLeft: boolean;
  stickyRight: boolean;
  stickyTop: boolean;
}

interface ExpandedComicStyles {
  'marginLeft.px': string;
  'marginTop.px': string;
}

export interface ExpandedComicCSS {
  classes: ExpandedComicClasses;
  styles: ExpandedComicStyles;
}

interface ComicStyles {
  background: string;
  color: string;
}

// The following three models are used to create the years and months
export interface DateYear {
  year: number;
  months: Array<DateMonth>;
}
interface DateMonth {
  number: number;
  styles: DateStyles;
}
interface DateStyles {
  'width.px': number;
}

export interface SeriesVolume {
  id: string;
  marvelId: string;
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
  id: string;
}

interface MarvelAPISeriesResponseData {
  results: Array<MarvelAPISeriesResponseResult>;
}

export interface MarvelAPISeriesResponse {
  data: MarvelAPISeriesResponseData;
}
