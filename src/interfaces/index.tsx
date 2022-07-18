export interface PageInterface {
  [x: string]: any;
  keywords: KeywordInterface[];
  metaData: MetaDataInterface;
  orden: number;
  slug: string;
  title: string;
}

export type PageType = {
  [x: string]: any;
  pages: PageInterface[];
};

export interface MetaDataInterface {
  [x: string]: any;
  description: string;
  title: string;
}

export interface KeywordInterface {
  [x: string]: any;
  word: string;
}

export interface SocialMedia {
  [x: string]: any;
  title: string;
  slug: string;
  icon: string;
  link: string;
  order: number;
}

export interface InfoTypes {
  [x: string]: any;
  email?: string;
  socialNetworks?: SocialMedia[];
}

export interface GlobalData {
  [x: string]: any;
  info?: InfoTypes;
}

export interface MetaTagI {
  [x: string]: any;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  viewport?: string;
  type?: string;
  charSet?: string;
}
