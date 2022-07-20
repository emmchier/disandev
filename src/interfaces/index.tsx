export interface PageInterface {
  [x: string]: any;
  keywords: KeywordInterface[];
  metaData: MetaDataInterface;
  orden: number;
  slug: string;
  title: string;
}

export interface ProjectI {
  [x: string]: any;
  header?: { fields: { file: { url?: string } } };
  banner?: { fields: { file: { url?: string } } };
  imageHero?: { fields: { file: { url?: string } } };
  cover?: { fields: { file: { url?: string } } };
  name?: string;
  description?: string;
  subtitle?: string;
  urlName?: string;
  url?: string;
  imageList?: string;
  type?: string;
  slug?: string;
  year?: string;
  headerRes?: string;
  techList?: TechI[];
  pagesIn?: PageInterface[];
  metaData?: MetaTagI;
  order?: number;
}

export interface ServiceI {
  [x: string]: any;
  cover: { fields: { file: { url?: string } } };
  name?: string;
  description?: string;
  order?: number;
}

export type TechI = {
  [x: string]: any;
  technologyName?: string;
  image?: { fields: { file: { url?: string } } };
  visibleIn?: PageInterface[];
  order?: number;
};

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

export interface MemberI {
  [x: string]: any;
  memberImage?: { fields: { file: { url?: string } } };
  memberName?: string;
  memberRole?: string;
  memberLinkedin?: string;
  order?: number;
}

export interface StepI {
  [x: string]: any;
  stepTitle?: string;
  stepDesc?: string;
  order?: number;
}
