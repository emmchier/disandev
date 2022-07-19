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
  title?: string;
  slug?: string;
  icon?: string;
  link?: string;
  order?: number;
}

export interface Phones {
  [x: string]: any;
  number?: number;
  type?: string;
  order?: number;
}

export interface Address {
  [x: string]: any;
  address?: string;
  slug?: string;
}

export interface InfoTypes {
  [x: string]: any;
  email?: string;
  socialMedia?: SocialMedia[];
  phones?: Phones[];
  address?: Address[];
}

export interface GlobalData {
  [x: string]: any;
  information?: InfoTypes;
}

export interface MetaTagI {
  [x: string]: any;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}
