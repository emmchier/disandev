import { KeywordInterface, PageInterface, SocialMedia } from '../interfaces/index';

export const getPage = (list: PageInterface[], slug: string) =>
  list?.filter((page) => page.slug === slug) || [];

export const getKeywords = (keywords: KeywordInterface[]) => {
  const getKeywords = keywords?.map((keyword) => keyword.fields.word);
  return getKeywords?.join(',') || '';
};

export const getSocialNetworks = (list: SocialMedia[]) => list?.map((item) => item.fields) || [];
