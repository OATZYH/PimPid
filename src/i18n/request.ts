import {getRequestConfig} from 'next-intl/server';
import {cookies, headers} from 'next/headers';

export default getRequestConfig(async ({locale}) => {
  // Check for locale in cookies or default to 'th'
  let currentLocale = locale || 'th';

  return {
    locale: currentLocale,
    messages: (await import(`../../messages/${currentLocale}.json`)).default
  };
});