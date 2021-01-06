
export interface PodIndex {
  slug: string;
  type: PageType;
  userId: string;
  title: string;
  title_lower: string;
  title_partial: string;
  artUrl100: string;
  feedUrl: string;
  isActive: boolean;
}

export interface SocialLinks {
  twitter?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  linkedin?: string;
}

export interface PlayerLinks {
  itunesId?: string;
  google?: string;
  spotify?: string;
  stitcher?: string;
  tuneIn?: string;
  pandora?: string;
  iHeartRadio?: string;
}

export enum PageType {
  Attached = 'attached',
  Standalone = 'standalone'
}
export enum SaleType {
  Membership = 'membership',
  Alacarte = 'alacarte'
}

export interface OneTimeInfo {
  accountId: string; // stripe account id
  enabled: boolean;
  message: string;
  defaultAmount: number;
  currency: string;
  symbol: string;
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
  rewards?: RewardTier[];
  featuredGuid?: string; // no longer used
  feedMeta?: any;
  socialLinks?: SocialLinks;
  playerLinks?: PlayerLinks;
  oneTime?: OneTimeInfo;
  alacarteTier?: number;
  teaser?: any;
  teaserPubDate?: number;
}

// derived from either episode data (from feed) or MemberEpisode
export interface Episode {
  guid: string;
  title: string;
  pubDate: string;
  summary: string;
  description: string;
  duration: string;
  audio: AudioData;
  commentCount?: number;
  isPublished?: boolean;
  audioTrackingUrl?: string;
}

export interface AudioData {
  url: string;
  type?: string;
  length?: number;
}

// membership tier
export interface RewardTier {
  planId: string;
  price: number;
  title: string;
  description: string;
  thankYou: string;
  memberFeedAccess: boolean;
  trialEnabled: boolean;
  interval: string;
  currency: string;
  accountId: string;
  isTest: boolean;
  isActive: boolean;
  memberCount?: number; // not stored, sometimes appended
  memberCountText?: string; // not stored, sometimes appended
}


export interface HostProfile {
  id?: string | number;
  name: string;
  desc: string;
  imageUrl: string;
  socialLinks: SocialLinks;
}

