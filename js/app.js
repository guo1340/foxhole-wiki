/* =================================================================
   Foxhole Field Manual — client-side router and renderers
   Reads window.WikiData (js/data/*.js). No framework.
   ================================================================= */
(function () {
  "use strict";
  var D = window.WikiData;
  if (!D) { document.getElementById("main").textContent = "Data failed to load."; return; }

  /* ---------------- Icon library ---------------- */
  var ICONS = {
    book:    '<path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 1 2-2h12"/>',
    helmet:  '<path d="M3 14a9 9 0 0 1 18 0"/><path d="M2 14h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/>',
    crosshair:'<circle cx="12" cy="12" r="8"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>',
    crate:   '<rect x="3" y="6" width="18" height="14" rx="1"/><path d="M3 10h18M9 6v14M15 6v14"/>',
    wrench:  '<path d="M15 5a4 4 0 0 0-5 5l-6 6 3 3 6-6a4 4 0 0 0 5-5l-3 3-2-2z"/>',
    radio:   '<rect x="3" y="9" width="18" height="11" rx="1"/><circle cx="8" cy="14.5" r="2.5"/><line x1="15" y1="13" x2="19" y2="13"/><path d="M14 9 19 4"/>',
    flag:    '<line x1="6" y1="3" x2="6" y2="21"/><path d="M6 4h12l-3 4 3 4H6"/>',
    scrap:   '<path d="M5 21l3-9 4 3 3-8 4 14z"/><circle cx="9" cy="6" r="2"/>',
    factory: '<path d="M3 21V11l6 4V11l6 4V8l6-3v16z"/><line x1="3" y1="21" x2="21" y2="21"/>',
    rifle:   '<path d="M3 7h14l4 2-4 2H8l-2 3H4l1-3H3z"/><line x1="9" y1="11" x2="11" y2="15"/>',
    truck:   '<rect x="1" y="7" width="13" height="9"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="5.5" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/>',
    tank:    '<rect x="3" y="11" width="14" height="6" rx="1"/><path d="M7 11V8h6v3"/><line x1="13" y1="9" x2="22" y2="9"/><circle cx="6" cy="19" r="1.6"/><circle cx="11" cy="19" r="1.6"/><circle cx="15" cy="19" r="1.6"/>',
    shell:   '<path d="M9 21h6v-3H9z"/><path d="M9 18V9a3 3 0 0 1 6 0v9"/><path d="M12 6V3"/>',
    trench:  '<path d="M3 8v4h4v8h2v-8h6v8h2v-8h4V8z"/>',
    bunker:  '<path d="M3 20V12a9 9 0 0 1 18 0v8z"/><rect x="9" y="13" width="6" height="3"/>',
    ship:    '<path d="M3 15h18l-2 5H5z"/><path d="M6 15V8h9l3 7"/><line x1="10" y1="8" x2="10" y2="3"/>',
    aircraft:'<path d="M2 13l9-2V4a1 1 0 0 1 2 0v7l9 2v2l-9-1.5V20l3 2v1l-4-1-4 1v-1l3-2v-4.5L2 15z"/>',
    mappin:  '<path d="M12 22s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    medic:   '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>'
  };
  function icon(name, cls) {
    var p = ICONS[name] || ICONS.book;
    return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  }

  /* ---------------- Helpers ---------------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function sectionMeta(key) {
    for (var i = 0; i < D.sections.length; i++) if (D.sections[i].key === key) return D.sections[i];
    return null;
  }
  function mediaFor(key) {
    return (D.media && (D.media[key] || D.media.static)) || null;
  }
  function mediaPanel(key, title) {
    var m = mediaFor(key);
    if (!m || !m.src) return "";
    return '<figure class="media-panel">' +
      '<img src="' + esc(m.src) + '" alt="' + esc(m.alt || title || "") + '" loading="lazy" decoding="async">' +
      '<figcaption class="media-caption"><b>' + esc(m.label || title || "Field Image") + '</b><span>Official gameplay media</span></figcaption>' +
      '</figure>';
  }

  /* ---------------- Ad slots (Google AdSense) ---------------- */
  /* Produces a single AdSense unit. Pass true for a fixed banner,
     false/omitted for a responsive auto unit. */
  function adSlot(isBanner) {
    return '<div class="ad-slot"><ins class="adsbygoogle" ' +
      'style="display:block;' + (isBanner ? 'width:100%;height:90px;' : '') + '" ' +
      'data-ad-client="ca-pub-1319817671788428" ' +
      'data-ad-slot="6141169453" ' +
      (isBanner ? '' : 'data-ad-format="auto" ') +
      'data-full-width-responsive="true"></ins></div>';
  }
  /* In a single-page app, ad units added after navigation must be
     activated explicitly. Push once per not-yet-filled <ins>. */
  function activateAds() {
    if (window.__GW_STATIC__) return;
    try {
      var units = document.querySelectorAll("ins.adsbygoogle:not([data-adsbygoogle-status])");
      for (var i = 0; i < units.length; i++) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) { /* AdSense unavailable (e.g. blocked) — ignore */ }
  }

  /* ---------------- Page registry ---------------- */
  /* registry: id -> { id, route, title, eyebrow, sectionKey, page, kind } */
  var registry = {};
  var searchIndex = Array.isArray(D.searchIndex) ? D.searchIndex.slice() : [];

  function register(entry) {
    registry[entry.id] = entry;
    if (!searchIndex.length) searchIndex.push(entry);
  }

  D.sections.forEach(function (sec) {
    var arr = D[sec.key] || [];
    // section index page
    register({
      id: sec.key, route: "/" + sec.key, title: sec.label,
      eyebrow: "Section", sectionKey: sec.key, kind: "index",
      desc: sec.blurb
    });
    arr.forEach(function (pg) {
      pg.route = "/" + sec.key + "/" + pg.slug;
      register({
        id: sec.key + "/" + pg.slug, route: pg.route, title: pg.title,
        eyebrow: sec.label, sectionKey: sec.key, kind: "detail",
        page: pg, desc: pg.tagline || pg.summary
      });
    });
  });
  Object.keys(D.staticPages).forEach(function (slug) {
    var pg = D.staticPages[slug];
    register({
      id: slug, route: "/" + slug, title: pg.title,
      eyebrow: "Manual", sectionKey: "static", kind: "static",
      page: pg, desc: pg.tagline || pg.summary
    });
  });
  register({ id: "updates", route: "/updates", title: "Updates", eyebrow: "Manual",
    sectionKey: "static", kind: "updates", desc: "What the latest updates changed." });
  register({ id: "tips", route: "/tips", title: "Field Tips", eyebrow: "Manual",
    sectionKey: "static", kind: "tips", desc: "Quick practical tips for new soldiers." });
  register({ id: "home", route: "/", title: "Foxhole Field Manual", eyebrow: "Home",
    sectionKey: "home", kind: "home", desc: D.site.tagline });

  function resolveRef(ref) {
    return registry[ref] || null;
  }

  /* ---------------- SEO ---------------- */
  function setMeta(opts) {
    document.title = opts.title;
    var origin = D.site.origin;
    var url = origin + (opts.route === "/" ? "/" : opts.route);
    function meta(sel, attr, val) {
      var n = document.querySelector(sel);
      if (n) n.setAttribute(attr, val);
    }
    meta('meta[name="description"]', "content", opts.description);
    meta('link[rel="canonical"]', "href", url);
    meta('meta[property="og:title"]', "content", opts.title);
    meta('meta[property="og:description"]', "content", opts.description);
    meta('meta[property="og:url"]', "content", url);

    var ld = {
      "@context": "https://schema.org",
      "@type": opts.schemaType || "WebPage",
      "name": opts.title,
      "description": opts.description,
      "url": url,
      "isPartOf": { "@type": "WebSite", "name": D.site.name, "url": origin + "/" }
    };
    if (opts.schemaType === "Article") {
      ld.headline = opts.title;
      ld.publisher = { "@type": "Organization", "name": D.site.name };
    }
    var s = document.getElementById("jsonld");
    if (s) s.textContent = JSON.stringify(ld);
  }

  /* ---------------- Renderers: shared blocks ---------------- */
  function breadcrumb(trail) {
    var parts = trail.map(function (t, i) {
      if (i === trail.length - 1) return '<span>' + esc(t.label) + '</span>';
      return '<a href="' + t.route + '" data-link>' + esc(t.label) + '</a>';
    });
    return '<nav class="breadcrumb" aria-label="Breadcrumb">' +
      parts.join('<span class="sep">/</span>') + '</nav>';
  }

  function renderBody(body) {
    return body.map(function (item) {
      if (typeof item === "string") return "<p>" + esc(item) + "</p>";
      if (item && item.list) {
        return "<ul>" + item.list.map(function (li) {
          return "<li>" + esc(li) + "</li>";
        }).join("") + "</ul>";
      }
      if (item && item.sub) return "<h3>" + esc(item.sub) + "</h3>";
      return "";
    }).join("");
  }

  function cardGrid(items) {
    return '<div class="card-grid">' + items.map(function (it) {
      return '<a class="field-card" href="' + it.route + '" data-link>' +
        '<span class="fc-ico">' + icon(it.icon) + '</span>' +
        '<h3>' + esc(it.title) + '</h3>' +
        '<p>' + esc(it.desc) + '</p>' +
        '<span class="fc-more">Open &rsaquo;</span>' +
        '</a>';
    }).join("") + '</div>';
  }

  /* ---------------- Detail / static page ---------------- */
  function renderDetailLike(entry) {
    var pg = entry.page;
    var secMeta = sectionMeta(entry.sectionKey);
    var main = document.getElementById("main");
    var trail = [{ label: "Manual", route: "/" }];
    if (secMeta) trail.push({ label: secMeta.label, route: "/" + secMeta.key });
    trail.push({ label: pg.title, route: pg.route });

    var html = breadcrumb(trail);
    html += '<div class="page-command">';
    html += '<div class="hero-icon">' + icon(pg.icon, "") + '</div>';
    html += '<span class="page-eyebrow">' + esc(entry.eyebrow) + '</span>';
    html += '<h1 class="page-title">' + esc(pg.title) + '</h1>';
    if (pg.tagline) html += '<p class="page-tagline">' + esc(pg.tagline) + '</p>';
    html += '<p class="page-summary">' + esc(pg.summary) + '</p>';
    html += '</div>';
    html += mediaPanel(entry.sectionKey, pg.title);

    if (pg.teaches && pg.teaches.length) {
      html += '<div class="teaches"><h2>What this page teaches</h2><ul>' +
        pg.teaches.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") +
        '</ul></div>';
    }

    (pg.sections || []).forEach(function (sec, i) {
      html += '<section class="section-block" id="sec-' + i + '">';
      html += '<h2>' + esc(sec.heading) + '</h2>';
      html += renderBody(sec.body);
      html += '</section>';
    });

    if (pg.mistake) {
      html += '<div class="callout mistake"><span class="callout-label">Beginner mistake</span>' +
        '<p>' + esc(pg.mistake) + '</p></div>';
    }
    if (pg.tip) {
      html += '<div class="callout tip"><span class="callout-label">Field tip</span>' +
        '<p>' + esc(pg.tip) + '</p></div>';
    }

    // Related
    if (pg.related && pg.related.length) {
      var rel = pg.related.map(resolveRef).filter(Boolean);
      if (rel.length) {
        html += '<div class="related-block"><h2>Related Pages</h2>';
        html += cardGrid(rel.map(function (r) {
          return {
            route: r.route, title: r.title, desc: r.desc,
            icon: (r.page && r.page.icon) || (sectionMeta(r.sectionKey) && sectionMeta(r.sectionKey).icon) || "book"
          };
        }));
        html += '</div>';
      }
    }

    main.innerHTML = html;
    renderDetailSidebar(pg, entry);
    setMeta({
      title: pg.seoTitle || (pg.title + " — " + D.site.name),
      description: pg.metaDescription || pg.summary,
      route: pg.route, schemaType: "Article"
    });
  }

  function renderDetailSidebar(pg, entry) {
    var sb = document.getElementById("sidebar");
    var html = "";

    // On-page contents
    if (pg.sections && pg.sections.length) {
      html += '<div class="side-card"><h4>On this page</h4>';
      html += pg.sections.map(function (s, i) {
        return '<a class="toc-link" href="#sec-' + i + '">' + esc(s.heading) + '</a>';
      }).join("");
      html += '</div>';
    }

    // Ad slot
    html += adSlot();

    // Sources / dossier
    if (pg.sources && pg.sources.length) {
      var srcs = pg.sources.map(function (id) {
        for (var i = 0; i < D.sources.length; i++) if (D.sources[i].id === id) return D.sources[i];
        return null;
      }).filter(Boolean);
      if (srcs.length) {
        html += '<div class="side-card dossier"><h4>Source Notes</h4>';
        html += srcs.map(function (s) {
          return '<div class="source-item"><a class="src-name" href="' + esc(s.url) +
            '" target="_blank" rel="noopener">' + esc(s.name) + '</a>' +
            '<span class="src-note">' + esc(s.note) + '</span></div>';
        }).join("");
        html += '</div>';
      }
    }

    // Update notes
    if (pg.updateNotes) {
      html += '<div class="side-card"><h4>Update Notes</h4>' +
        '<p style="font-size:.84rem;color:var(--muted);margin:0;">' + esc(pg.updateNotes) + '</p></div>';
    }

    sb.innerHTML = html;
  }

  /* ---------------- Section index ---------------- */
  function renderSectionIndex(entry) {
    var secMeta = sectionMeta(entry.sectionKey);
    var arr = D[entry.sectionKey] || [];
    var main = document.getElementById("main");

    var html = breadcrumb([{ label: "Manual", route: "/" }, { label: secMeta.label, route: entry.route }]);
    html += '<div class="page-command">';
    html += '<div class="hero-icon">' + icon(secMeta.icon) + '</div>';
    html += '<span class="page-eyebrow">Section</span>';
    html += '<h1 class="page-title">' + esc(secMeta.label) + '</h1>';
    html += '<p class="page-tagline">' + esc(secMeta.blurb) + '</p>';
    html += '<p class="page-summary">' + esc(sectionIntro(entry.sectionKey)) + '</p>';
    html += '</div>';
    html += mediaPanel(entry.sectionKey, secMeta.label);
    html += '<div class="section-block"><h2>Pages in this section</h2>';
    html += cardGrid(arr.map(function (pg) {
      return { route: pg.route, title: pg.title, desc: pg.tagline || pg.summary, icon: pg.icon };
    }));
    html += '</div>';
    main.innerHTML = html;

    // sidebar
    var sb = document.getElementById("sidebar");
    var sbHtml = '<div class="side-card"><h4>All Sections</h4>';
    sbHtml += D.sections.map(function (s) {
      return '<div class="side-list"><a href="/' + s.key + '" data-link>' + esc(s.label) + '</a></div>';
    }).join("");
    sbHtml += '</div>' + adSlot();
    sb.innerHTML = sbHtml;

    setMeta({
      title: secMeta.label + " — " + D.site.name,
      description: "Foxhole " + secMeta.label + " guides: " + secMeta.blurb,
      route: entry.route, schemaType: "CollectionPage"
    });
  }

  function sectionIntro(key) {
    var intros = {
      guides: "Beginner-first walkthroughs that explain what to do, in what order, and why. Start here if Foxhole feels overwhelming.",
      factions: "Colonials and Wardens fight the same war with different equipment and culture. These pages help you choose without chasing balance rumours.",
      logistics: "Logistics is Foxhole's signature system. Scrap becomes materials, materials become crates, and crates win wars.",
      combat: "Practical infantry and small-team fighting: positioning, cover, anti-tank work, medics, and reconnaissance.",
      weapons: "Role-based weapon guides. No giant stat dumps — just what each category is for and what a beginner should carry.",
      vehicles: "Vehicles are valuable and easily wasted. These pages frame them around crew discipline, fuel, repair, and retreat.",
      artillery: "Artillery is a team activity. Spotter, gunner, loader, and logistics support all have to work together.",
      building: "Building is easy to do badly and hard to fix later. These pages keep your construction helping your own side.",
      facilities: "Facilities are advanced production infrastructure. Powerful, important, and not a beginner's solo project.",
      naval: "Sea lanes are supply lines. Naval play opens routes and threats the land war alone cannot.",
      airborne: "The Airborne update added aircraft, aviation logistics, paratroopers, and anti-air. The sky is now a threat axis.",
      maps: "You do not need to memorise the map. You need to read the war: victory towns, fronts, backlines, and supply lines."
    };
    return intros[key] || "";
  }

  /* ---------------- Home ---------------- */
  function renderHome() {
    var main = document.getElementById("main");
    var html = "";
    var homeMedia = mediaFor("home");
    if (homeMedia && homeMedia.src) {
      document.documentElement.style.setProperty("--home-hero-image", "url('" + homeMedia.src + "')");
    }
    html += '<section class="hero">' +
      '<h1>Foxhole Field Manual</h1>' +
      '<p class="hero-sub">' + esc(D.site.tagline) + '</p>' +
      '<div class="hero-cta">' +
      '<a class="btn btn-primary" href="/guides/first-deployment" data-link>Start as a New Soldier</a>' +
      '<a class="btn btn-ghost" href="/logistics" data-link>Learn Logistics</a>' +
      '</div></section>';

    // Start here
    var startCards = [
      ref("guides/first-deployment"), ref("guides/frontline-basics"),
      ref("guides/logistics-quickstart"), ref("factions/choosing-a-faction")
    ];
    html += homeSection("Start Here", cardGrid(startCards));

    // Core war roles
    html += homeSection("Core War Roles", cardGrid(D.roles.map(function (r) {
      return { route: r.link, title: r.name, desc: r.blurb, icon: r.icon };
    })));

    // Systems that win wars
    html += homeSection("Systems That Win Wars", cardGrid(D.systems.map(function (s) {
      return { route: s.link, title: s.name, desc: s.blurb, icon: s.icon };
    })));

    // Update callout
    html += '<div class="update-callout"><span class="uc-label">War Bulletin</span>' +
      '<h3>The war has a third dimension</h3>' +
      '<p>The Airborne update introduced aircraft, aviation logistics, paratroopers, and anti-air considerations. No region is fully secure just because the ground is held.</p>' +
      '<p>Update 64 focuses on ground counterplay against air, faction balance, maintenance, and performance and quality-of-life changes. Treat exact figures as provisional.</p>' +
      '<p><a href="/airborne/overview" data-link>Read the Airborne overview &rsaquo;</a> &nbsp; ' +
      '<a href="/updates" data-link>See all updates &rsaquo;</a></p></div>';

    main.innerHTML = html;

    // sidebar
    var sb = document.getElementById("sidebar");
    var sbHtml = '<div class="side-card"><h4>Browse Sections</h4>';
    sbHtml += D.sections.map(function (s) {
      return '<div class="side-list"><a href="/' + s.key + '" data-link>' + esc(s.label) + '</a></div>';
    }).join("");
    sbHtml += '</div>';
    sbHtml += adSlot();
    sbHtml += '<div class="side-card"><h4>Field Tip</h4><p style="font-size:.86rem;color:var(--muted);margin:0;">' +
      esc(D.tips[0].text) + '</p></div>';
    sb.innerHTML = sbHtml;

    setMeta({
      title: "Foxhole Field Manual — Practical Guides for Logistics, Combat & War",
      description: D.site.description, route: "/", schemaType: "WebSite"
    });
  }
  function ref(id) {
    var r = registry[id];
    if (!r) return { route: "/", title: id, desc: "", icon: "book" };
    return { route: r.route, title: r.title, desc: r.desc,
      icon: (r.page && r.page.icon) || "book" };
  }
  function homeSection(title, inner) {
    return '<section class="home-section"><h2>' + esc(title) + '</h2>' + inner + '</section>';
  }

  /* ---------------- Updates ---------------- */
  function renderUpdates() {
    var main = document.getElementById("main");
    var html = breadcrumb([{ label: "Manual", route: "/" }, { label: "Updates", route: "/updates" }]);
    html += '<span class="page-eyebrow">Manual</span>';
    html += '<h1 class="page-title">Updates</h1>';
    html += '<p class="page-tagline">What the latest changes mean for new players.</p>';
    html += '<p class="page-summary">Foxhole evolves between updates. This page summarises recent major changes in practical terms. For exact patch notes and figures, always check the official sources.</p>';
    D.updates.forEach(function (u) {
      html += '<div class="update-entry"><span class="ue-date">' + esc(u.date) + '</span>' +
        '<h2 style="text-transform:uppercase;margin:4px 0 8px;">' + esc(u.title) + '</h2>' +
        u.body.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + '</div>';
    });
    main.innerHTML = html;
    document.getElementById("sidebar").innerHTML =
      adSlot() +
      '<div class="side-card dossier"><h4>Patch Notes</h4>' +
      D.sources.filter(function (s) { return s.id === "steam-news" || s.id === "foxhole-site"; })
        .map(function (s) {
          return '<div class="source-item"><a class="src-name" href="' + esc(s.url) +
            '" target="_blank" rel="noopener">' + esc(s.name) + '</a>' +
            '<span class="src-note">' + esc(s.note) + '</span></div>';
        }).join("") + '</div>';
    setMeta({ title: "Foxhole Updates — " + D.site.name,
      description: "Practical summaries of recent Foxhole updates including Airborne and Update 64.",
      route: "/updates", schemaType: "CollectionPage" });
  }

  /* ---------------- Tips ---------------- */
  function renderTips() {
    var main = document.getElementById("main");
    var html = breadcrumb([{ label: "Manual", route: "/" }, { label: "Field Tips", route: "/tips" }]);
    html += '<span class="page-eyebrow">Manual</span>';
    html += '<h1 class="page-title">Field Tips</h1>';
    html += '<p class="page-tagline">Quick lessons that take a war to learn the hard way.</p>';
    html += '<p class="page-summary">A collection of short, practical reminders for new soldiers. Each one is expanded on somewhere in the manual.</p>';
    html += '<ul class="tips-list">' + D.tips.map(function (t) {
      return '<li><span class="tip-cat">' + esc(t.cat) + '</span>' + esc(t.text) + '</li>';
    }).join("") + '</ul>';
    main.innerHTML = html;
    document.getElementById("sidebar").innerHTML = adSlot();
    setMeta({ title: "Foxhole Field Tips — " + D.site.name,
      description: "Quick practical Foxhole tips for new players on logistics, survival, and etiquette.",
      route: "/tips", schemaType: "CollectionPage" });
  }

  /* ---------------- Not found ---------------- */
  function renderNotFound() {
    document.getElementById("main").innerHTML =
      '<div class="notfound"><h1>404</h1>' +
      '<p>That position is not on the map. The page you requested could not be found.</p>' +
      '<p><a class="btn btn-primary" href="/" data-link>Return to base</a></p></div>';
    document.getElementById("sidebar").innerHTML = "";
    setMeta({ title: "Page Not Found — " + D.site.name,
      description: "The requested page could not be found.", route: "/" });
  }

  /* ---------------- Side navigation ---------------- */
  function buildNav() {
    var nav = document.getElementById("sidenav");
    var html = "";
    html += '<div class="nav-group"><div class="nav-group-title">Start</div>';
    html += navLink("/", "Home", "book");
    html += navLink("/getting-started", "Getting Started", "helmet");
    html += '</div>';

    html += '<div class="nav-group"><div class="nav-group-title">Sections</div>';
    D.sections.forEach(function (s) {
      html += navLink("/" + s.key, s.label, s.icon);
    });
    html += '</div>';

    html += '<div class="nav-group"><div class="nav-group-title">Reference</div>';
    html += navLink("/updates", "Updates", "radio");
    html += navLink("/tips", "Field Tips", "crosshair");
    html += navLink("/about", "About", "book");
    html += navLink("/contact", "Contact", "radio");
    html += '</div>';
    nav.innerHTML = html;
  }
  function navLink(route, label, ic) {
    return '<a class="nav-link" data-link href="' + route + '">' +
      '<span class="nav-ico">' + icon(ic) + '</span>' + esc(label) + '</a>';
  }
  function highlightNav(path) {
    var links = document.querySelectorAll(".nav-link");
    var top = "/" + (path.split("/")[1] || "");
    links.forEach(function (a) {
      var href = a.getAttribute("href");
      a.classList.toggle("active", href === path || (href === top && top !== "/"));
      if (path === "/" && href === "/") a.classList.add("active");
    });
  }

  /* ---------------- Footer ---------------- */
  function buildFooter() {
    var f = document.getElementById("sitefooter");
    var col1 = '<div><h4>Foxhole Field Manual</h4>' +
      '<p style="color:var(--muted);font-size:.86rem;">A practical, unofficial field manual for the persistent war MMO Foxhole. Built for new and intermediate players.</p></div>';
    function colLinks(title, items) {
      return '<div><h4>' + esc(title) + '</h4><ul>' + items.map(function (it) {
        return '<li><a href="' + it[1] + '" data-link>' + esc(it[0]) + '</a></li>';
      }).join("") + '</ul></div>';
    }
    var guides = colLinks("Guides", [
      ["First Deployment", "/guides/first-deployment"],
      ["Logistics Quickstart", "/guides/logistics-quickstart"],
      ["Frontline Basics", "/guides/frontline-basics"],
      ["Choosing a Faction", "/factions/choosing-a-faction"]
    ]);
    var sectionsCol = colLinks("Sections", [
      ["Logistics", "/logistics"], ["Combat", "/combat"],
      ["Vehicles", "/vehicles"], ["Airborne", "/airborne"]
    ]);
    var manual = colLinks("Manual", [
      ["Getting Started", "/getting-started"], ["Updates", "/updates"],
      ["About", "/about"], ["Privacy Policy", "/privacy-policy"], ["Contact", "/contact"]
    ]);
    f.innerHTML = '<div class="footer-inner">' + col1 + guides + sectionsCol + manual + '</div>' +
      '<div class="footer-bot">&copy; ' + new Date().getFullYear() + ' Foxhole Field Manual.' +
      '<span class="disclaimer">An unofficial fan-made guide. Not affiliated with or endorsed by Siege Camp. Foxhole is a trademark of its respective owner.</span></div>';
  }

  /* ---------------- Search ---------------- */
  var overlay = document.getElementById("searchOverlay");
  var sInput = document.getElementById("searchInput");
  var sResults = document.getElementById("searchResults");
  var activeIdx = -1;

  function openSearch() {
    overlay.hidden = false;
    sInput.value = "";
    runSearch("");
    setTimeout(function () { sInput.focus(); }, 10);
  }
  function closeSearch() { overlay.hidden = true; activeIdx = -1; }

  function runSearch(q) {
    q = q.trim().toLowerCase();
    var results;
    if (!q) {
      results = searchIndex.filter(function (e) { return e.kind === "detail"; }).slice(0, 8);
    } else {
      results = searchIndex.map(function (e) {
        var hay = (e.title + " " + (e.desc || "") + " " + e.eyebrow).toLowerCase();
        var score = 0;
        if (e.title.toLowerCase().indexOf(q) === 0) score += 10;
        if (e.title.toLowerCase().indexOf(q) > -1) score += 5;
        if (hay.indexOf(q) > -1) score += 2;
        if (e.page && e.page.summary && e.page.summary.toLowerCase().indexOf(q) > -1) score += 1;
        return { e: e, score: score };
      }).filter(function (x) { return x.score > 0; })
        .sort(function (a, b) { return b.score - a.score; })
        .slice(0, 12).map(function (x) { return x.e; });
    }
    activeIdx = -1;
    if (!results.length) {
      sResults.innerHTML = '<div class="search-empty">No matching pages. Try "logistics", "tank", or "airborne".</div>';
      return;
    }
    sResults.innerHTML = results.map(function (e, i) {
      return '<a class="search-result" data-link data-idx="' + i + '" href="' + e.route + '">' +
        '<span class="sr-cat">' + esc(e.eyebrow) + '</span>' +
        '<span class="sr-title">' + esc(e.title) + '</span> ' +
        '<span class="sr-desc">' + esc((e.desc || "").slice(0, 90)) + '</span></a>';
    }).join("");
  }
  function moveActive(d) {
    var items = sResults.querySelectorAll(".search-result");
    if (!items.length) return;
    activeIdx = (activeIdx + d + items.length) % items.length;
    items.forEach(function (n, i) { n.classList.toggle("active", i === activeIdx); });
    items[activeIdx].scrollIntoView({ block: "nearest" });
  }

  document.getElementById("searchBtn").addEventListener("click", openSearch);
  document.getElementById("searchClose").addEventListener("click", closeSearch);
  overlay.addEventListener("click", function (e) { if (e.target === overlay) closeSearch(); });
  sInput.addEventListener("input", function () { runSearch(sInput.value); });
  sInput.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") { e.preventDefault(); moveActive(1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); moveActive(-1); }
    else if (e.key === "Enter") {
      var items = sResults.querySelectorAll(".search-result");
      var pick = activeIdx >= 0 ? items[activeIdx] : items[0];
      if (pick) {
        e.preventDefault();
        var pickHref = pick.getAttribute("href");
        closeSearch();
        if (window.__GW_STATIC__) location.href = pickHref;
        else navigate(pickHref);
      }
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) closeSearch();
    else if (e.key === "/" && overlay.hidden &&
      ["INPUT", "TEXTAREA"].indexOf(document.activeElement.tagName) === -1) {
      e.preventDefault(); openSearch();
    }
  });

  /* ---------------- Mobile nav ---------------- */
  var navToggle = document.getElementById("navToggle");
  var sidenav = document.getElementById("sidenav");
  var scrim = document.getElementById("navScrim");
  function closeMobileNav() {
    sidenav.classList.remove("open");
    scrim.hidden = true;
    navToggle.setAttribute("aria-expanded", "false");
  }
  navToggle.addEventListener("click", function () {
    var open = sidenav.classList.toggle("open");
    scrim.hidden = !open;
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  scrim.addEventListener("click", closeMobileNav);

  /* ---------------- Router ---------------- */
  function routeInner() {
    var path = location.pathname.replace(/\/+$/, "") || "/";
    closeMobileNav();
    window.scrollTo(0, 0);

    var entry;
    if (path === "/") { renderHome(); highlightNav("/"); return; }
    if (path === "/updates") { renderUpdates(); highlightNav("/updates"); return; }
    if (path === "/tips") { renderTips(); highlightNav("/tips"); return; }

    var id = path.replace(/^\//, "");
    entry = registry[id];

    if (!entry) { renderNotFound(); highlightNav(path); return; }

    if (entry.kind === "index") renderSectionIndex(entry);
    else if (entry.kind === "detail" || entry.kind === "static") renderDetailLike(entry);
    else renderNotFound();

    highlightNav(path);
    var main = document.getElementById("main");
    if (main && main.focus) {
      try { main.focus({ preventScroll: true }); }
      catch (e) { main.focus(); }
    }
  }

  /* Render the route, then (re)activate any AdSense units it added. */
  function route() {
    routeInner();
    activateAds();
    if (window.scrollTo) {
      if (window.requestAnimationFrame) window.requestAnimationFrame(function () { window.scrollTo(0, 0); });
      else window.scrollTo(0, 0);
    }
  }

  function navigate(href) {
    if (location.pathname !== href) {
      history.pushState({}, "", href);
    }
    route();
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[data-link]");
    if (!a) return;
    var href = a.getAttribute("href");
    if (!href || href.charAt(0) !== "/") return;
    if (window.__GW_STATIC__) {
      if (!overlay.hidden) closeSearch();
      return;
    }
    e.preventDefault();
    if (!overlay.hidden) closeSearch();
    navigate(href);
  });
  window.addEventListener("popstate", function () {
    if (!window.__GW_STATIC__) route();
  });

  /* In-page anchor links (table of contents) */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var t = document.getElementById(a.getAttribute("href").slice(1));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });

  /* ---------------- Init ---------------- */
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  buildNav();
  buildFooter();
  route();
})();
