type Duration = `${string}:${string}:${string}`;

export interface ItemsCarousel {
  categories: {
    VideoCategory: {
      VideoId: string;
      CategoryId: string;
      createdAt: Date;
      updatedAt: Date;
    }[];
    accountId: string;
    createdAt: Date;
    description: string;
    id: string;
    name: string;
    portraitThumbnail: string;
    thumbnail: string;
    updateAt: Date;
  }[];
  CategoryId: string;
  Videos: {
    description: string;
    duration: Duration;
    fullDescription: string;
    itemId: string;
    itemType: string;
    name: string;
    poster: string;
    posterPortrait: string;
    urlSlug?: null;
    technicalDescription: string;
  }[];
  accountId: string;
  createdAt: Date;
  description: string;
  heroImageDesktop: string;
  heroImageMobile: string;
  itemId: string;
  itemType: string;
  name: string;
  numberOfVideos: number;
  portraitThumbnail: string;
  thumbnail: string;
  updatedAt: Date;
}
