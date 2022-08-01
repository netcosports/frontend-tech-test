const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: *.onrewind.tv *.axept.io http://nxtck.com/act.php https://apis.google.com/ cdn.tagcommander.com www.datadoghq-browser-agent.com connect.facebook.net www.googletagmanager.com www.googleadservices.com googleads.g.doubleclick.net cdn.jwplayer.com ssl.p.jwpcdn.com www.gstatic.com gum.criteo.com sync.commander1.com www.facebook.com http://ib.adnxs.com/getuid http://dsp.adfarm1.adition.com;
  style-src 'self' 'unsafe-inline' fonts.googleapis.com;
  img-src * blob: data:;
  media-src 'self' blob: data: *.onrewind.tv;
  connect-src *;
  font-src 'self' assets.onrewind.tv fonts.gstatic.com;
  frame-src  https://js.stripe.com/ https://poc-origins.firebaseapp.com/__/auth/iframe;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },

  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },

  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },

  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },

  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },

  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },

  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [...securityHeaders],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
};

module.exports = nextConfig;
