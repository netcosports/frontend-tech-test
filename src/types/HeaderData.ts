/* eslint-disable @typescript-eslint/ban-types */
export interface HeaderData {
  favicon: {
    description?: string;
    height: string;
    name: string;
    size: number;
    type: string;
    url: string;
    with: string;
  };
  fixed: boolean;
  liveEvents: {
    itemId: string;
    urlSlug?: string;
  }[];
  logo: {
    description?: string;
    height: string;
    name: string;
    size: number;
    type: string;
    url: string;
    with: string;
  };
  menuItems: {
    mobile: {
      name: string;
      redirectionTarget?: string;
      redirectionTargetType?: string;
      subItems: {}[];
    };
    name: string;
    redirectionTarget?: string;
    redirectionTargetType?: string;
    subItems: {}[];
    _kenticoCodename: string;
    _kenticoId: string;
    _kenticoItemType: string;
    _kenticoLanguage: string;
  }[];
}
