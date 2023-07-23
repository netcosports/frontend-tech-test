/* eslint-disable @typescript-eslint/ban-types */
export interface FooterData {
  copyright: string;
  legalLinks: {}[];
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
  socialItems: {
    linkUrl: string;
    socialIcon: {
      description?: string;
    };
    socialName: string;
    _kenticoCodename: string;
    _kenticoId: string;
    _kenticoItemType: string;
    _kenticoLanguage: string;
  }[];
}
