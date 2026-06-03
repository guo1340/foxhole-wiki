'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const BASE_URL = 'https://foxhole.gamewikihub.com';
const APP = require.resolve('./js/app.js');
const PARTIAL_DIR = path.join(ROOT, 'partials');

const DATA_CHUNKS = [
  'core',
  'static-pages',
  'guides',
  'factions',
  'logistics',
  'combat',
  'weapons',
  'vehicles',
  'artillery',
  'building',
  'facilities',
  'naval',
  'airborne',
  'maps',
  'search-index'
];

function mkEl(id) {
  return {
    id,
    _html: '',
    _text: '',
    value: '',
    hidden: false,
    attributes: {},
    classList: { add() {}, remove() {}, toggle() { return false; }, contains() { return false; } },
    style: {},
    set innerHTML(v) { this._html = String(v); },
    get innerHTML() { return this._html; },
    set textContent(v) { this._text = String(v); },
    get textContent() { return this._text; },
    setAttribute(k, v) { this.attributes[k] = String(v); },
    getAttribute(k) { return this.attributes[k] || null; },
    addEventListener() {},
    appendChild() {},
    remove() {},
    focus() {},
    scrollIntoView() {},
    closest() { return null; },
    querySelector() { return mkEl('nested'); },
    querySelectorAll() { return []; }
  };
}

const els = {};
[
  'main', 'sidenav', 'sidebar', 'sitefooter', 'jsonld', 'searchBtn', 'searchClose',
  'searchOverlay', 'searchInput', 'searchResults', 'navToggle', 'navScrim'
].forEach((id) => { els[id] = mkEl(id); });

const metaStore = {
  title: '',
  description: '',
  canonical: '',
  ogTitle: '',
  ogDescription: '',
  ogUrl: ''
};

function elById(id) {
  if (!els[id]) els[id] = mkEl(id);
  return els[id];
}

function metaEl(key) {
  return {
    setAttribute(attr, value) {
      if (attr === 'content' || attr === 'href') metaStore[key] = String(value);
    },
    getAttribute(attr) {
      if (attr === 'content' || attr === 'href') return metaStore[key] || '';
      return null;
    }
  };
}

let CURRENT = '/';
global.document = {
  documentElement: { style: { setProperty() {} } },
  getElementById: elById,
  createElement: () => mkEl('created'),
  addEventListener() {},
  querySelector(selector) {
    if (selector === 'meta[name="description"]') return metaEl('description');
    if (selector === 'link[rel="canonical"]') return metaEl('canonical');
    if (selector === 'meta[property="og:title"]') return metaEl('ogTitle');
    if (selector === 'meta[property="og:description"]') return metaEl('ogDescription');
    if (selector === 'meta[property="og:url"]') return metaEl('ogUrl');
    if (selector.startsWith('#')) return elById(selector.slice(1));
    return mkEl('query');
  },
  querySelectorAll() { return []; },
  get activeElement() { return { tagName: 'BODY' }; },
  set title(v) { metaStore.title = String(v); },
  get title() { return metaStore.title; }
};

global.window = {
  WikiData: {},
  adsbygoogle: null,
  addEventListener() {},
  scrollTo() {}
};
global.history = { pushState() {} };
global.location = {
  get pathname() { return CURRENT; },
  origin: BASE_URL
};
global.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
global.setTimeout = (fn) => fn();

DATA_CHUNKS.forEach((chunk) => require(`./js/data/${chunk}.js`));
require('./js/data.js');
const D = window.WikiData;

function buildSearchIndex() {
  const index = [];
  (D.sections || []).forEach((section) => {
    index.push({
      id: section.key,
      route: '/' + section.key,
      title: section.label,
      eyebrow: 'Section',
      sectionKey: section.key,
      kind: 'index',
      desc: section.blurb
    });
    (D[section.key] || []).forEach((page) => {
      index.push({
        id: section.key + '/' + page.slug,
        route: '/' + section.key + '/' + page.slug,
        title: page.title,
        eyebrow: section.label,
        sectionKey: section.key,
        kind: 'detail',
        desc: page.tagline || page.summary
      });
    });
  });
  Object.keys(D.staticPages || {}).forEach((slug) => {
    const page = D.staticPages[slug];
    index.push({
      id: slug,
      route: '/' + slug,
      title: page.title,
      eyebrow: 'Manual',
      sectionKey: 'static',
      kind: 'static',
      desc: page.tagline || page.summary
    });
  });
  index.push({
    id: 'updates',
    route: '/updates',
    title: 'Updates',
    eyebrow: 'Manual',
    sectionKey: 'static',
    kind: 'updates',
    desc: 'What the latest updates changed.'
  });
  index.push({
    id: 'tips',
    route: '/tips',
    title: 'Field Tips',
    eyebrow: 'Manual',
    sectionKey: 'static',
    kind: 'tips',
    desc: 'Quick practical tips for new soldiers.'
  });
  index.push({
    id: 'home',
    route: '/',
    title: 'Foxhole Field Manual',
    eyebrow: 'Home',
    sectionKey: 'home',
    kind: 'home',
    desc: D.site.tagline
  });
  return index;
}

D.searchIndex = buildSearchIndex();
fs.writeFileSync(path.join(ROOT, 'js/data/search-index.js'), `(function(root){\n  root.WikiData = root.WikiData || {};\n  root.WikiData.searchIndex = ${JSON.stringify(D.searchIndex, null, 2)};\n})(typeof window !== 'undefined' ? window : globalThis);\n`);

function stripTags(s) {
  return String(s || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function escText(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escAttr(s) {
  return escText(s).replace(/"/g, '&quot;');
}

function renderRoute(route) {
  CURRENT = route;
  Object.keys(els).forEach((id) => {
    els[id]._html = '';
    els[id]._text = '';
    els[id].value = '';
    els[id].hidden = false;
  });
  Object.keys(metaStore).forEach((k) => { metaStore[k] = ''; });
  delete require.cache[APP];
  require('./js/app.js');
  return {
    title: metaStore.title,
    description: metaStore.description,
    canonical: metaStore.canonical,
    ogTitle: metaStore.ogTitle,
    ogDescription: metaStore.ogDescription,
    ogUrl: metaStore.ogUrl,
    jsonld: els.jsonld._text,
    nav: els.sidenav._html,
    main: els.main._html,
    sidebar: els.sidebar._html,
    footer: els.sitefooter._html
  };
}

function routeList() {
  const routes = new Set(['/']);
  Object.keys(D.staticPages || {}).forEach((slug) => routes.add('/' + slug));
  routes.add('/updates');
  routes.add('/tips');
  (D.sections || []).forEach((section) => {
    routes.add('/' + section.key);
    (D[section.key] || []).forEach((page) => routes.add('/' + section.key + '/' + page.slug));
  });
  routes.add('/404');
  return Array.from(routes).sort((a, b) => a.localeCompare(b));
}

function scriptTags() {
  const chunks = DATA_CHUNKS
    .map((chunk) => `    <script src="/js/data/${chunk}.js"></script>`)
    .join('\n');
  return `${chunks}\n    <script src="/js/data.js"></script>\n    <script src="/js/app.js"></script>`;
}

function readPartial(name) {
  return fs.readFileSync(path.join(PARTIAL_DIR, `${name}.html`), 'utf8').trim();
}

function renderPartial(name, values) {
  return readPartial(name).replace(/\{\{(\w+)\}\}/g, (_m, key) => values[key] == null ? '' : values[key]);
}

function pageHtml(route, rendered) {
  const title = rendered.title || `${D.site.name}`;
  const description = rendered.description || D.site.description;
  const canonical = rendered.canonical || `${BASE_URL}${route === '/' ? '/' : route}`;
  const ogTitle = rendered.ogTitle || title;
  const ogDescription = rendered.ogDescription || description;
  const ogUrl = rendered.ogUrl || canonical;
  const jsonld = rendered.jsonld || JSON.stringify({
    '@context': 'https://schema.org',
    '@type': route === '/' ? 'WebSite' : 'WebPage',
    name: title,
    description,
    url: canonical,
    isPartOf: { '@type': 'WebSite', name: D.site.name, url: BASE_URL + '/' }
  });
  const header = renderPartial('header', {});
  const sidebars = renderPartial('sidebar', {
    nav: rendered.nav,
    sidebar: rendered.sidebar
  });
  const footer = renderPartial('footer', { footer: rendered.footer });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escText(title)}</title>
  <meta name="description" content="${escAttr(description)}" />
  <link rel="canonical" href="${escAttr(canonical)}" />
  ${route === '/404' ? '<meta name="robots" content="noindex, follow" />\n  ' : ''}<meta name="theme-color" content="#0d1117" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${escAttr(D.site.name)}" />
  <meta property="og:title" content="${escAttr(ogTitle)}" />
  <meta property="og:description" content="${escAttr(ogDescription)}" />
  <meta property="og:url" content="${escAttr(ogUrl)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <script type="application/ld+json" id="jsonld">${jsonld}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500;600&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1319817671788428" crossorigin="anonymous"></script>
  <style>
    svg{display:block;max-width:100%;flex:none}
    .brand-mark,.brand-mark svg{width:34px;height:34px}
    .nav-ico,.nav-ico svg{width:16px;height:16px}
    .fc-ico,.fc-ico svg{width:28px;height:28px}
    .hero-icon svg{width:48px;height:48px}
    .search-btn svg{width:18px;height:18px}
    .search-input-row svg{width:20px;height:20px}
  </style>
  <link rel="stylesheet" href="/css/style.css?v=foxhole-static-3" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='8' fill='%230d1117'/%3E%3Cpath d='M14 40 L32 14 L50 40 Z' fill='none' stroke='%23c9a45c' stroke-width='4'/%3E%3Cline x1='32' y1='22' x2='32' y2='40' stroke='%236f8f72' stroke-width='4'/%3E%3C/svg%3E" />
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  ${header}
  <div class="layout">
    ${sidebars.split('\n').join('\n    ')}
    <main id="main" class="content" tabindex="-1">${rendered.main}</main>
  </div>
  ${footer}
  <div class="search-overlay" id="searchOverlay" hidden>
    <div class="search-panel" role="dialog" aria-modal="true" aria-label="Search">
      <div class="search-input-row">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><line x1="16.5" y1="16.5" x2="22" y2="22" stroke="currentColor" stroke-width="2"/></svg>
        <input type="text" id="searchInput" placeholder="Search guides, logistics, vehicles, airborne..." autocomplete="off" />
        <button class="search-close" id="searchClose" aria-label="Close search">Esc</button>
      </div>
      <div class="search-results" id="searchResults"></div>
    </div>
  </div>
  <div class="nav-scrim" id="navScrim" hidden></div>
  <script>window.__GW_STATIC__ = true;</script>
${scriptTags()}
</body>
</html>
`;
}

function outputPath(route) {
  if (route === '/') return path.join(ROOT, 'index.html');
  if (route === '/404') return path.join(ROOT, '404.html');
  return path.join(ROOT, route.slice(1), 'index.html');
}

function writeRoute(route) {
  const rendered = renderRoute(route === '/404' ? '/not-found' : route);
  const file = outputPath(route);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, pageHtml(route, rendered));
}

routeList().forEach(writeRoute);

const allRoutes = routeList();
const urls = allRoutes
  .filter((route) => route !== '/404')
  .map((route) => `  <url><loc>${BASE_URL}${route === '/' ? '/' : route + '/'}</loc></url>`)
  .join('\n');
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);

function verifySitemapCoverage(routes) {
  const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
  const urls = new Set(Array.from(sitemap.matchAll(/<loc>(.*?)<\/loc>/g)).map((m) => {
    const url = m[1];
    if (url === `${BASE_URL}/`) return '/';
    return url.replace(BASE_URL, '').replace(/\/$/, '');
  }));
  const publicRoutes = routes.filter((route) => route !== '/404');
  const missing = publicRoutes.filter((route) => !urls.has(route));
  const extra = Array.from(urls).filter((route) => !publicRoutes.includes(route));
  if (missing.length || extra.length) {
    throw new Error(`Sitemap mismatch. Missing: ${missing.join(', ') || 'none'} Extra: ${extra.join(', ') || 'none'}`);
  }
}

verifySitemapCoverage(allRoutes);

console.log(`Foxhole static build complete: ${allRoutes.length} HTML files generated. Sitemap covers ${allRoutes.length - 1} public pages.`);
