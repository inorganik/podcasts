/* eslint-disable @typescript-eslint/naming-convention */

export interface SocialLinks {
  twitter?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  linkedin?: string;
}

export enum PageType {
  Attached = 'attached',
  Standalone = 'standalone'
}
export interface PodcastPage {
  slug: string;
  uid: string;
  type: PageType;
  artUrl100: string;
  artUrl600: string;
  imageUrl: string;
  keyColor: string;
  palette: string[];
  feedUrl: string;
  title: string;
  host: string;
  hosts?: HostProfile[];
  rewards?: any;
  feedMeta?: any;
  socialLinks?: SocialLinks;
}

export interface HostProfile {
  id?: string | number;
  name: string;
  desc: string;
  imageUrl: string;
  socialLinks: SocialLinks;
}

