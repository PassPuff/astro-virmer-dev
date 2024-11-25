// import { defineMiddleware } from 'astro:middleware';
// import { defaultLang, languages } from './i18n/ui';

// export const onRequest = defineMiddleware(async (context, next) => {
//   const { url, redirect } = context;
//   const pathname = url.pathname;

//   // Skip redirect for assets and API routes
//   if (pathname.startsWith('/assets') || 
//       pathname.startsWith('/api') || 
//       pathname.startsWith('/_')) {
//     return next();
//   }

//   // If we're at the root path, redirect to default language
//   if (pathname === '/') {
//     return redirect(`/${defaultLang}`);
//   }

//   // Check if the URL starts with a language code
//   const [, lang] = pathname.split('/');
  
//   // If the path doesn't start with a valid language code and isn't the root
//   if (pathname !== '/' && !languages.hasOwnProperty(lang)) {
//     // Redirect to the default language path
//     return redirect(`/${defaultLang}${pathname}`);
//   }

//   // For default language routes, remove the language prefix
//   if (lang === defaultLang) {
//     const newPath = pathname.replace(`/${defaultLang}`, '');
//     if (pathname !== newPath) {
//       return redirect(newPath);
//     }
//   }

//   return next();
// });