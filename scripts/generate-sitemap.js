/* eslint-disable prettier/prettier */
// Need to disable prettier because we need the semicolon in this file
const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('../.prettierrc.js');
  const today = new Date();

  // Ignore Next.js specific files (e.g., _app.tsx) and API routes.
  const pages = await globby([
    './src/pages/**/*.tsx',
    '!./src/pages/_*.tsx',
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('./src/', '')
                  .replace('pages/', '')
                  .replace('index', '')
                  .replace('.tsx', '')
                const route = path === '/index' ? '' : path;

                return `
                        <url>
                            <loc>${`https://thnkrn.vercel.app/${route}`}</loc>
                            <lastmod>${today.toISOString()}</lastmod>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();