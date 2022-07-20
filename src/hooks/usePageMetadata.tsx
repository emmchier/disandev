import { PageInterface } from '../interfaces';
import { getKeywords, getPage } from '../helpers/functions';

export const usePageMetadata = (pages: PageInterface[], slug: string) => {
  const formatedList = pages?.map((page) => page?.fields);
  const page = getPage(formatedList, slug);
  const title = page[0]?.title;
  const description = page[0]?.description;
  const keywords = getKeywords(page[0]?.keywords);

  return { page, title, description, keywords };
};
