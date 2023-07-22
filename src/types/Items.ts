type Duration = `${string}:${string}:${string}`;

export interface Items {
  itemType: string;
  itemId: string;
  description: string;
  fullDescription: string;
  technicalDescription: string;
  duration: Duration;
  name: string;
  poster: string;
  posterPortrait: string;
  urlSlug: null;
  tags: {
    id: string;
    tagType: string;
    name: string;
    options: {
      followable: boolean;
    }[];
    AccountId: string;
    placeholders?: null;
    createdAt: Date;
    updatedAt: Date;
    ItemTag: {
      id: string;
      tagId: string;
      taggable: string;
      taggableId: string;
    }[];
    PaymentOffers?: [];
  }[];
  products: [];
  categories: {
    id: string;
    name: string;
    accountId: string;
    description: string;
    thumbnail: string;
    portraitThumbnail?: null;
    createdAt: Date;
    updatedAt: Date;
    VideoCategory: {
      VideoId: string;
      CategoryId: string;
      createdAt: Date;
      updatedAt: Date;
    };
  }[];
  subCategories: {
    id: string;
    CategoryId: string;
    SubCategoryId: string;
    VideoId: string;
    createdAt: Date;
    updatedAt: Date;
    SubCategory: {
      id: string;
      name: string;
      accountId: string;
      createdAt: Date;
      updatedAt: Date;
    };
  }[];
}
