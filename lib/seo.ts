import { SITE } from '../constants/site';

export function buildLocalBusinessSchema(){
  return {
    '@context':'https://schema.org',
    '@type':'LocalBusiness',
    name: SITE.title,
    telephone: SITE.phone,
    address: {
      '@type':'PostalAddress',
      addressLocality: SITE.address
    }
  };
}
