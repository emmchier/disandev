import { KeywordInterface, PageInterface, ProjectI, SocialMedia } from '../interfaces';
import { theme } from '../styles/theme';

export const getPage = (list: PageInterface[], slug: string) =>
  list?.filter((page) => page?.slug === slug) || [];

export const getKeywords = (keywords: KeywordInterface[]) => {
  const getKeywords = keywords?.map((keyword) => keyword?.fields?.word);
  return getKeywords?.join(',') || '';
};

export const getSocialNetworks = (list: SocialMedia[]) => list?.map((item) => item?.fields) || [];

export const getItemsByPage = (list: any[], slug: string) =>
  list?.filter((item) =>
    item.fields.pagesIn?.find((item: ProjectI) => item.fields.slug === slug)
  ) || [];

export const setVariant = (color: string) => {
  switch (color) {
    case 'default':
      return theme.color.text.primary;
    case 'primary':
      return theme.color.primary.main;
    case 'secondary':
      return theme.color.secondary.main;
    default:
      return theme.color.text.primary;
  }
};
