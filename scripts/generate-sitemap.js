const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

async function generateSitemap() {
  const appDir = path.join(__dirname, '../app');

  // Leer las rutas dentro de la carpeta 'app'
  const staticPages = fs
    .readdirSync(appDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory()) // Solo carpetas (subsecciones)
    .map((dir) => ({
      url: `/${dir.name}`, // Asume que hay un archivo page.js dentro de cada carpeta
      changefreq: 'daily',
      priority: 1.0,
    }));

  // Agregar la página principal ('page.js' en la raíz de app)
  staticPages.push({
    url: '/', // Asume que 'page.js' en app/ es la página de inicio
    changefreq: 'daily',
    priority: 1.0,
  });

  // Generar el flujo del sitemap
  const stream = new SitemapStream({ hostname: 'https://etsteamcarpetcleaning.com' });
  const xml = await streamToPromise(Readable.from(staticPages).pipe(stream)).then((data) => data.toString());

  // Guardar el sitemap en la carpeta public
  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xml);
  console.log('Sitemap generado en /public/sitemap.xml');
}

generateSitemap();
