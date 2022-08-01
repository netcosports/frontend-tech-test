import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url =
    process.env.NODE_ENV === 'development'
      ? `http://${req.headers.host}`
      : `https://${req.headers.host}`;

  return res.send(`# *
User-agent: *
Allow: /
  
# Host
Host: ${url}
  
# Sitemaps
Sitemap: ${url}/sitemap.xml
Sitemap: ${url}/server-sitemap.xml`);
};
