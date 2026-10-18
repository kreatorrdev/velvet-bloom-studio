// Configure the real public origin when deploying; no business domain is invented.
const configuredOrigin = process.env.SITE_URL?.trim()
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined)
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const siteUrl = configuredOrigin ? new URL(configuredOrigin) : undefined;

if (siteUrl && (!['https:', 'http:'].includes(siteUrl.protocol) || siteUrl.username || siteUrl.password || siteUrl.pathname !== '/' || siteUrl.search || siteUrl.hash)) {
  throw new Error('SITE_URL must be an http(s) origin, for example https://your-domain.com, without a path, credentials, query or fragment.');
}
