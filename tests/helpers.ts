export const getSanitizedString = (isComic: boolean, seriesOrCollection: string, volume?: string, issue?: string) => {
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