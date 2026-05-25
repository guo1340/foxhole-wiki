'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const BASE_URL = 'https://foxhole.gamewikihub.com';
const APP = require.resolve('./js/app.js');

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
  <header class="topbar">
    <div class="topbar-inner">
      <a class="brand" href="/" data-link>
        <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 48 48" width="34" height="34"><path d="M8 38 L24 8 L40 38 Z" fill="none" stroke="var(--accent)" stroke-width="3"/><line x1="24" y1="18" x2="24" y2="38" stroke="var(--accent-2)" stroke-width="3"/></svg></span>
        <span class="brand-text"><strong>Foxhole</strong><em>Field Manual</em></span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span><span></span></button>
      <div class="topbar-actions">
        <button class="search-btn" id="searchBtn" aria-label="Search the field manual">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><line x1="16.5" y1="16.5" x2="22" y2="22" stroke="currentColor" stroke-width="2"/></svg>
          <span>Search</span><kbd>/</kbd>
        </button>
      </div>
    </div>
  </header>
  <div class="layout">
    <nav class="sidenav" id="sidenav" aria-label="Primary">${rendered.nav}</nav>
    <main id="main" class="content" tabindex="-1">${rendered.main}</main>
    <aside class="sidebar" id="sidebar" aria-label="Page details">${rendered.sidebar}</aside>
  </div>
  <footer class="sitefooter" id="sitefooter">${rendered.footer}</footer>
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

const urls = routeList()
  .filter((route) => route !== '/404')
  .map((route) => `  <url><loc>${BASE_URL}${route === '/' ? '/' : route + '/'}</loc></url>`)
  .join('\n');
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);

console.log(`Foxhole static build complete: ${routeList().length} HTML files generated.`);
