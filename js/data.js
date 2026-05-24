/* =================================================================
   Foxhole Field Manual — content data
   All guide content is original. External links live in `sources`.
   Renderer reads window.WikiData; see js/app.js.
   ================================================================= */
window.WikiData = (function () {
  const D = {};

  /* ---------------- Site ---------------- */
  D.site = {
    name: "Foxhole Field Manual",
    tagline: "A practical guide to logistics, infantry, vehicles, facilities, naval warfare, and airborne operations in the persistent war MMO.",
    origin: "https://foxhole-field-manual.example",
    description: "A practical Foxhole guide for new and intermediate players covering logistics, combat, vehicles, artillery, building, facilities, naval and airborne operations.",
    updatedLabel: "Current as of Update 64 era"
  };

  /* ---------------- Source registry ---------------- */
  D.sources = [
    { id: "official-wiki", name: "Official Foxhole Wiki", url: "https://foxhole.wiki.gg/", note: "Community-maintained reference for items, stats, and mechanics. Use it for exact numbers, which change between updates." },
    { id: "foxhole-site", name: "Foxhole — Official Site", url: "https://www.foxholegame.com/", note: "Developer site from Siege Camp with update news and devblogs." },
    { id: "steam-news", name: "Foxhole on Steam", url: "https://store.steampowered.com/app/505460/Foxhole/", note: "Patch notes and update announcements are posted here first." },
    { id: "subreddit", name: "r/foxholegame", url: "https://www.reddit.com/r/foxholegame/", note: "Community discussion, war stories, and current-war reports." },
    { id: "discord", name: "Official Foxhole Discord", url: "https://discord.com/invite/foxhole", note: "Largest live community hub; good for asking faction-specific questions." }
  ];

  /* ---------------- Section navigation metadata ---------------- */
  D.sections = [
    { key: "guides",     label: "Guides",     icon: "book",     blurb: "Beginner-first practical walkthroughs." },
    { key: "factions",   label: "Factions",   icon: "flag",     blurb: "Colonials, Wardens, and how to choose." },
    { key: "logistics",  label: "Logistics",  icon: "crate",    blurb: "Foxhole's signature supply system." },
    { key: "combat",     label: "Combat",     icon: "crosshair",blurb: "Infantry and small-team fighting." },
    { key: "weapons",    label: "Weapons",    icon: "rifle",    blurb: "Role-based weapon category guides." },
    { key: "vehicles",   label: "Vehicles",   icon: "truck",    blurb: "Trucks, armor, and crew discipline." },
    { key: "artillery",  label: "Artillery",  icon: "shell",    blurb: "Indirect fire and crew coordination." },
    { key: "building",   label: "Building",   icon: "bunker",   blurb: "Bases, trenches, and fortifications." },
    { key: "facilities", label: "Facilities", icon: "factory",  blurb: "Advanced production infrastructure." },
    { key: "naval",      label: "Naval",      icon: "ship",     blurb: "Sea lanes, landings, and ships." },
    { key: "airborne",   label: "Airborne",   icon: "aircraft", blurb: "Aircraft, paratroopers, and anti-air." },
    { key: "maps",       label: "Maps",       icon: "mappin",   blurb: "Reading the war and its supply lines." }
  ];

  /* ---------------- War roles (homepage cards) ---------------- */
  D.roles = [
    { name: "Infantry", icon: "rifle", blurb: "Hold ground, take ground, and stay alive so you do not drain a base of shirts.", link: "/combat/infantry-basics" },
    { name: "Logistics Driver", icon: "truck", blurb: "Move materials, crates, and supplies from backline production to the front.", link: "/vehicles/logistics-trucks" },
    { name: "Medic", icon: "medic", blurb: "Revive the wounded, save shirts, and keep squads fighting instead of respawning.", link: "/combat/medic-guide" },
    { name: "Builder", icon: "bunker", blurb: "Raise field bases, trenches, and bunkers that actually help the people using them.", link: "/building/field-bases" },
    { name: "Partisan", icon: "crosshair", blurb: "Operate behind enemy lines, cutting supply and gathering intel.", link: "/combat/recon-and-partisans" },
    { name: "Tank Crew", icon: "tank", blurb: "Crew armor with discipline: fuel, ammo, repair, and a plan to retreat.", link: "/vehicles/tanks" },
    { name: "Artillery Crew", icon: "shell", blurb: "Spotter, gunner, loader, and logi support working as one fire team.", link: "/artillery/howitzers" },
    { name: "Pilot / Air Crew", icon: "aircraft", blurb: "Fly, maintain, and supply aircraft introduced with the Airborne update.", link: "/airborne/overview" }
  ];

  /* ---------------- War systems (homepage cards) ---------------- */
  D.systems = [
    { name: "Supply chains", icon: "crate", blurb: "Scrap becomes materials, materials become crates, crates win wars.", link: "/logistics" },
    { name: "Map intelligence", icon: "mappin", blurb: "Knowing where the front moves is worth more than any single kill.", link: "/maps" },
    { name: "Public stockpiles", icon: "factory", blurb: "Shared reserves that let strangers fight on your behalf.", link: "/logistics/public-stockpiles" },
    { name: "Bunker bases", icon: "bunker", blurb: "Fortified positions that turn a region into a hard problem for the enemy.", link: "/building/bunkers" },
    { name: "Facilities", icon: "wrench", blurb: "Player-built industry producing the war's advanced equipment.", link: "/facilities" },
    { name: "Naval & airborne", icon: "ship", blurb: "New dimensions of war: sea lanes overhead and paratroopers behind you.", link: "/naval" }
  ];

  /* ---------------- Updates ---------------- */
  D.updates = [
    {
      date: "Airborne Update",
      title: "Airborne — aircraft enter the war",
      body: [
        "The Airborne update added a full aviation layer to Foxhole. Aircraft now operate above the same persistent battlefield, which means a region is no longer secure just because the ground is held.",
        "Aviation is its own logistics problem. Aircraft must be produced, fuelled, armed, maintained, and crewed, and they rely on airfields and ground support rather than flying as solo toys.",
        "Paratroopers can be inserted behind a frontline, and anti-air weapons and radar intelligence became part of normal ground planning. New players should at least understand that the sky is now a threat axis, even if they never fly."
      ]
    },
    {
      date: "Update 64 era",
      title: "Update 64 — ground counterplay and balance",
      body: [
        "Update 64 focuses on giving ground forces better tools to answer aircraft, alongside faction balance passes, maintenance changes, and quality-of-life and performance work.",
        "Exact values for anti-air, aircraft, and faction equipment shift during this period. Treat any specific number you read as provisional and confirm it against current patch notes.",
        "The practical takeaway: anti-air coverage, radar/intel placement, and maintenance discipline matter more than they used to. Bases without air awareness are easier targets."
      ]
    }
  ];

  /* ---------------- Tips ---------------- */
  D.tips = [
    { cat: "First hour", text: "Spawn with a rifle, ammo, a bandage, and a few extra shirts. That basic loadout makes you useful immediately and costs the war almost nothing." },
    { cat: "Logistics", text: "A single full truck of basic materials delivered to the right base is often worth more than an hour of frontline shooting." },
    { cat: "Survival", text: "Every death consumes a uniform from a base stockpile. Staying alive is itself a contribution to logistics." },
    { cat: "Communication", text: "Use local and squad chat, and watch the map. Most coordination failures are information failures, not skill failures." },
    { cat: "Vehicles", text: "Never solo an expensive vehicle into the front. Know where you will repair and where you will retreat before you drive." },
    { cat: "Building", text: "A badly placed trench helps the enemy. If you are not sure where a structure should go, ask a builder before placing it." },
    { cat: "Artillery", text: "Firing artillery without a spotter mostly wastes shells. Pair up before you pull the gun." },
    { cat: "Etiquette", text: "Public stockpiles and public facilities belong to everyone. Take what you need for the front, not what you want for your garage." },
    { cat: "Airborne", text: "If you hear aircraft and you are near a base, the most useful thing you can do is crew an anti-air weapon, not stare at the sky." },
    { cat: "Maps", text: "Learn to read victory towns and supply lines before you learn weapon stats. Strategy beats trivia." }
  ];

  /* ---------------- Standalone pages ---------------- */
  D.staticPages = {
    "getting-started": {
      slug: "getting-started", section: "static", route: "/getting-started",
      title: "Getting Started", icon: "helmet",
      seoTitle: "Getting Started in Foxhole: A New Player Orientation",
      metaDescription: "New to Foxhole? A short orientation to the persistent war, your first choices, and where to go next.",
      tagline: "Read this before your first war.",
      summary: "Foxhole is a persistent war MMO where thousands of players decide the outcome of a long campaign. You do not need to be good at shooting to matter. You need to understand the war well enough to be useful and not wasteful.",
      teaches: ["What 'persistent war' actually means", "The difference between matter-ing and shooting", "How to pick a starting direction", "Where to read next"],
      sections: [
        { heading: "What Foxhole is", body: [
          "Foxhole is not a match-based shooter. A single war runs for days or weeks across a large connected map, and everything players build, move, and lose carries forward until one side captures enough victory towns to win.",
          "That persistence is the whole point. The truck you drove, the trench you dug, and the shirts you spent by dying all stay in the world and affect other players you will never meet."
        ]},
        { heading: "You do not have to be a great shot", body: [
          "Foxhole rewards reliability far more than reflexes. A player who delivers supplies, revives the wounded, or builds a solid base contributes more than a lone gunman who dies repeatedly.",
          "If first-person combat is not your strength, logistics, medic work, and building are genuinely valuable jobs that win wars."
        ]},
        { heading: "Your first decisions", body: [
          "You will choose a faction — Colonials or Wardens — and a starting region. Pick the faction your friends or regiment play first; equipment preference comes a distant second.",
          "Once in the world, your first goal is simply to arrive at a frontline properly equipped and not become a drain on the base you spawned from."
        ]},
        { heading: "Where to go next", body: [
          "Read the First Deployment Guide for a step-by-step of your opening hour, then Frontline Basics for how to behave once you arrive.",
          "If logistics interests you, the Logistics Quickstart explains the supply chain that everything else depends on."
        ]}
      ],
      mistake: "Treating Foxhole like a deathmatch. Dying for a marginal kill spends a uniform that someone else had to manufacture and deliver.",
      tip: "Spend your first war just being reliable. Show up equipped, follow the squad, and finish what you start. Mastery comes later.",
      related: ["guides/first-deployment", "guides/frontline-basics", "factions/choosing-a-faction"],
      sources: ["official-wiki", "foxhole-site"]
    },
    "about": {
      slug: "about", section: "static", route: "/about",
      title: "About", icon: "book",
      seoTitle: "About the Foxhole Field Manual",
      metaDescription: "What the Foxhole Field Manual is, who it is for, and how it differs from the official wiki.",
      tagline: "What this site is and is not.",
      summary: "The Foxhole Field Manual is a practical guide site for new and intermediate players. It explains what to do and why it matters, rather than cataloguing every item and statistic.",
      teaches: ["The purpose of this site", "How it differs from the official wiki", "How content is kept current"],
      sections: [
        { heading: "Our goal", body: [
          "This site exists to turn an overwhelmed new player into a useful contributor as fast as possible. It is written like a field manual: opinionated, practical, and honest about etiquette and resource waste.",
          "We do not try to replace the official wiki item by item. Where you need exact numbers, we point you to sources that track them."
        ]},
        { heading: "How it differs from the official wiki", body: [
          "The official wiki is an excellent reference for stats and mechanics. It is not designed to tell a beginner what to do first.",
          "This manual fills that gap. It focuses on decisions, roles, and common mistakes, and links the official wiki where precise data is needed."
        ]},
        { heading: "Keeping content current", body: [
          "Foxhole changes between updates. We deliberately avoid printing exact figures that go stale, and we flag systems — like Airborne and Update 64 anti-air balance — that are actively shifting.",
          "If something here contradicts current in-game behaviour, trust the game and the latest patch notes."
        ]}
      ],
      mistake: "Assuming any guide, including this one, is perfectly up to date. Always sanity-check specifics against the current war.",
      tip: "Use this manual to learn how to think about the war, and the official wiki to look up exact values.",
      related: ["getting-started", "contact", "updates"],
      sources: ["official-wiki", "foxhole-site", "subreddit"]
    },
    "privacy-policy": {
      slug: "privacy-policy", section: "static", route: "/privacy-policy",
      title: "Privacy Policy", icon: "book",
      seoTitle: "Privacy Policy — Foxhole Field Manual",
      metaDescription: "Privacy policy for the Foxhole Field Manual fan site.",
      tagline: "How this fan site handles data.",
      summary: "This is a fan-made guide site. It collects no personal accounts and stores no login data. This page is a plain-language summary of how the site behaves.",
      teaches: ["What data the site does and does not collect", "How third-party services may apply", "How to ask questions"],
      sections: [
        { heading: "Information we collect", body: [
          "The Foxhole Field Manual does not require an account and does not ask for personal information. There is no login, comment system, or user profile.",
          "Standard web request logs may be retained by the hosting provider for security and reliability purposes."
        ]},
        { heading: "Third-party services", body: [
          "If advertising or analytics are enabled by the operator, those third parties may set their own cookies and collect usage data under their own policies.",
          "Outbound links to the official wiki, Reddit, Discord, and Steam are governed by those sites' privacy policies, not this one."
        ]},
        { heading: "Contact", body: [
          "Questions about this policy can be sent through the contact page. Because this is a fan project, responses are best-effort."
        ]}
      ],
      mistake: null,
      tip: "This is an unofficial fan site and is not affiliated with Siege Camp, the developer of Foxhole.",
      related: ["about", "contact"],
      sources: []
    },
    "contact": {
      slug: "contact", section: "static", route: "/contact",
      title: "Contact", icon: "radio",
      seoTitle: "Contact — Foxhole Field Manual",
      metaDescription: "How to reach the Foxhole Field Manual and where to get live Foxhole help.",
      tagline: "Corrections, questions, and live help.",
      summary: "The fastest way to get a Foxhole question answered is the live community. This page explains where to go for help and how to report a correction to this manual.",
      teaches: ["Where to get live help", "How to report an error", "Why community channels are the best resource"],
      sections: [
        { heading: "Getting live help", body: [
          "For real-time answers — current war status, faction-specific questions, finding a regiment — the official Foxhole Discord and the r/foxholegame subreddit are the best resources.",
          "In game, local and squad chat are full of veterans who will help a new player who asks clearly and politely."
        ]},
        { heading: "Reporting corrections", body: [
          "If a page here is wrong or out of date, that feedback is welcome. Because the game changes between updates, corrections keep the manual trustworthy.",
          "When reporting, mention the page and what changed in game, so the fix can be verified against patch notes."
        ]}
      ],
      mistake: null,
      tip: "Veterans respond well to specific, polite questions. 'Where do I take this truck of bmats?' gets a better answer than 'what do I do?'.",
      related: ["about", "guides/regiments-and-communication"],
      sources: ["discord", "subreddit"]
    }
  };

  /* ================= GUIDES ================= */
  D.guides = [
    {
      slug: "first-deployment", section: "guides", icon: "helmet",
      title: "First Deployment Guide",
      seoTitle: "Foxhole Beginner Guide: First Deployment Field Manual",
      metaDescription: "Step-by-step Foxhole beginner guide for your first deployment: spawning, loadout, reaching the front, and being useful from minute one.",
      tagline: "Your first hour, done right.",
      summary: "Your first job is not to be a hero. Your first job is to arrive at the front with a rifle, ammo, a bandage, and enough awareness not to drain shirts from a base by dying every thirty seconds.",
      teaches: ["How to choose where to spawn", "A cheap, effective starting loadout", "How to travel to the front", "How to avoid being a resource drain"],
      sections: [
        { heading: "What 'deployment' means", body: [
          "Deployment is simply the act of getting yourself from a spawn point to where you are needed. In Foxhole there is no lobby and no respawn timer to fight your way past — there is a map, a stockpile, and a long walk or drive.",
          "Treat your first deployment as a logistics problem about one soldier: you. Get equipped, get to the front, and get there without wasting anything."
        ]},
        { heading: "Why it matters", body: [
          "Everything you take from a base — a uniform, a rifle, ammo, bandages — was manufactured and delivered by another player. A new player who spawns, sprints into fire, and dies has spent someone's work for nothing.",
          "Doing deployment well is the first sign of a player veterans will trust with bigger jobs."
        ]},
        { heading: "Step-by-step beginner flow", body: [
          "Pick a region that is active but not the hottest frontline on the map. A region one step back from the worst fighting is a forgiving place to learn.",
          "At a spawn base, take a basic loadout and reserve uniforms.",
          { list: [
            "A rifle and a few magazines of the matching ammo",
            "At least one bandage, ideally two or three",
            "A couple of spare uniforms (shirts) so a death does not strand you",
            "A radio if you have one, for map intel"
          ]},
          "Then move toward the front on foot or by hitching a ride on a logistics vehicle. Watch the map, follow other friendly players, and stay off open ground."
        ]},
        { heading: "Common mistakes", body: [
          "New players over-equip, grabbing expensive gear they cannot use well, or under-equip and arrive with no ammo or bandages. Both waste a trip.",
          "The other classic error is rushing. Sprinting solo into a contested town gets you killed before you learn anything."
        ]},
        { heading: "When to push and when to wait", body: [
          "Push when you are with a group, have cover to move between, and a medic or fallback base behind you. Wait when you are alone, low on supplies, or cannot see where the enemy is.",
          "There is no penalty for spending your first ten minutes simply observing how the front behaves."
        ]},
        { heading: "Related systems", body: [
          "Once you can deploy reliably, learn Frontline Basics for behaviour at the front, and the Logistics Quickstart so you understand where your gear came from."
        ]}
      ],
      mistake: "Spawning, immediately sprinting at the enemy, dying, and repeating. Each loop burns a uniform and teaches you nothing.",
      tip: "Before you leave a base, ask yourself: rifle, ammo, bandage, shirts. If any are missing, fix it now — not after you are pinned down.",
      related: ["guides/frontline-basics", "guides/logistics-quickstart", "combat/infantry-basics", "getting-started"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Spawn mechanics and starting loadouts are stable across updates, but available equipment shifts with faction balance passes."
    },
    {
      slug: "frontline-basics", section: "guides", icon: "crosshair",
      title: "Frontline Basics",
      seoTitle: "Foxhole Frontline Basics: How to Behave at the Front",
      metaDescription: "Foxhole frontline guide: cover, fallback bases, supply discipline, and how to be useful in a fight without wasting resources.",
      tagline: "How to be useful once you arrive.",
      summary: "The front is not a place to test your aim in the open. It is a place to hold ground, support a group, and keep the base behind you supplied and intact.",
      teaches: ["How to read a frontline", "Using cover and fallback bases", "Supply discipline under fire", "When to hold and when to retreat"],
      sections: [
        { heading: "What a frontline is", body: [
          "A frontline is the contested edge between two factions' controlled territory. It is anchored by bases, trenches, and towns, and it moves as those positions are captured or lost.",
          "The front is rarely a clean line. Expect pockets, flanks, and quiet stretches next to brutal ones."
        ]},
        { heading: "Why behaviour matters here", body: [
          "At the front, your value is measured in ground held and supplies preserved, not kills. A position only stays friendly while players are in it and it has shirts to respawn from.",
          "A disciplined squad of average shooters will hold against a sloppy group of good ones."
        ]},
        { heading: "Step-by-step at the front", body: [
          "Find the nearest friendly base and note it — that is your fallback and resupply point.",
          { list: [
            "Move between cover; never cross open ground you do not have to",
            "Stay near friendlies so a medic can reach you",
            "Resupply at the base before you run dry, not after",
            "Watch the map for flanks and incoming armour"
          ]},
          "If the base behind you falls, the whole position can collapse. Defending it is often more important than pushing forward."
        ]},
        { heading: "Common mistakes", body: [
          "Holding a position with no shirts left, so every death is permanent until logistics arrives. Check base supply, not just your own.",
          "Chasing kills past your support and getting cut off. The front behind you can close while you are distracted."
        ]},
        { heading: "When to hold, when to fall back", body: [
          "Hold when the base has supplies, you have numbers, and the enemy has no armour you cannot answer. Fall back when shirts run out, when armour arrives unanswered, or when your flank is gone.",
          "A planned retreat to a stocked base is a win compared to a heroic last stand at an empty one."
        ]},
        { heading: "Related systems", body: [
          "Pair this with Trenches and Cover for fighting positions, the Medic Guide for keeping squads alive, and Map, Intel, and Radio for situational awareness."
        ]}
      ],
      mistake: "Treating the front as a shooting gallery. Kills do not hold ground; players in cover near a stocked base do.",
      tip: "Every time you reach a new position, locate the nearest friendly base first. Knowing your fallback changes every decision you make.",
      related: ["combat/trenches-and-cover", "combat/medic-guide", "guides/map-intel-radio", "guides/first-deployment"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Frontline behaviour is broadly stable, though base mechanics and maintenance rules are periodically adjusted."
    },
    {
      slug: "logistics-quickstart", section: "guides", icon: "crate",
      title: "Logistics Quickstart",
      seoTitle: "Foxhole Logistics Guide: A Quickstart for New Players",
      metaDescription: "A Foxhole logistics quickstart: how scrap becomes materials, materials become crates, and crates reach the front line.",
      tagline: "The job that quietly wins wars.",
      summary: "Logistics is Foxhole's signature system and its most reliable way to matter. If you can gather, refine, produce, and deliver, you are useful in every war regardless of your aim.",
      teaches: ["The shape of the supply chain", "Your first logistics run", "What the front actually needs", "How to not waste a delivery"],
      sections: [
        { heading: "What logistics is", body: [
          "Logistics is the chain that turns raw resources into the equipment soldiers use. Players gather scrap and components, refine them into materials, produce crates of gear, and drive those crates to bases near the front.",
          "Nothing at the front exists unless a logistics player put it there. That makes logistics the backbone of the entire war."
        ]},
        { heading: "Why it matters", body: [
          "Frontline strength rises and falls with supply. A region with full bases can absorb losses; a region with empty bases collapses the moment it is pressured.",
          "A new player who learns one good logistics run is immediately more valuable than one who is still learning to aim."
        ]},
        { heading: "Your first logistics run", body: [
          "Start small and complete the whole loop once.",
          { list: [
            "Gather scrap at a salvage field, or collect from a public stockpile",
            "Refine scrap into basic materials at a refinery",
            "Produce a few crates of common gear at a factory",
            "Load a truck and drive the crates to a frontline base",
            "Submit the supplies and confirm they registered in the stockpile"
          ]},
          "Finishing that loop once teaches you more than any guide."
        ]},
        { heading: "What the front needs", body: [
          "The unglamorous items matter most: uniforms (shirts), rifle and weapon ammo, bandages, basic materials for repairs, and gas masks for gassed positions. Radios support intel.",
          "Delivering a truck of shirts and ammo to a struggling base is often the highest-impact thing anyone can do that hour."
        ]},
        { heading: "Common mistakes", body: [
          "Hauling exotic equipment to a base that just needs shirts and ammo. Match the delivery to the need.",
          "Abandoning a half-finished run. A truck of materials parked in the backline helps no one."
        ]},
        { heading: "Related systems", body: [
          "Go deeper with Scrap to Frontline, the Refinery and Factory Loop, and Public Stockpiles. How to Not Waste Supplies pairs especially well with this page."
        ]}
      ],
      mistake: "Gathering and refining endlessly but never delivering. Production that never reaches the front is wasted effort.",
      tip: "Complete one full loop — gather, refine, produce, deliver, confirm — before you optimise anything. The whole chain has to connect.",
      related: ["logistics/scrap-to-frontline", "logistics/refinery-factory-loop", "logistics/public-stockpiles", "guides/how-to-not-waste-supplies"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Production recipes and material costs are tuned between updates; treat exact crate costs as provisional."
    },
    {
      slug: "how-to-not-waste-supplies", section: "guides", icon: "wrench",
      title: "How to Not Waste Supplies",
      seoTitle: "Foxhole: How to Not Waste Supplies (Beginner Etiquette)",
      metaDescription: "A Foxhole etiquette guide on resource waste: why deaths cost shirts, how to use public stockpiles fairly, and how to avoid being a drain.",
      tagline: "Respect the work behind every item.",
      summary: "Every item in Foxhole is someone's labour. Wasting supplies does not just annoy veterans — it materially weakens your faction's ability to fight.",
      teaches: ["Why waste is a war-losing problem", "How deaths consume logistics", "Fair use of public stockpiles", "Habits that conserve resources"],
      sections: [
        { heading: "What 'waste' means here", body: [
          "Waste is any consumption of supplies that does not advance the war. Dying pointlessly, hoarding gear, taking vehicles you abandon, and over-equipping for a job all count.",
          "Foxhole has no infinite resources. Everything is a finite pool that players refilled by hand."
        ]},
        { heading: "Why it matters", body: [
          "A faction does not usually lose because the enemy is better. It loses because its supply pools ran dry at the wrong moment.",
          "Conserving supplies is a genuine combat contribution, even though it never appears on a scoreboard."
        ]},
        { heading: "How deaths cost the war", body: [
          "Each time you respawn you consume a uniform from a base stockpile. A player who dies constantly is quietly draining the same shirts that everyone else needs.",
          "This is why staying alive — using cover, medics, and good positioning — is itself logistics work."
        ]},
        { heading: "Using public stockpiles fairly", body: [
          "Public stockpiles are shared reserves. Take what the job in front of you needs and no more.",
          { list: [
            "Do not empty a base stockpile to stock a personal garage",
            "Do not pull expensive vehicles you cannot crew or protect",
            "Return or park usable equipment instead of abandoning it",
            "If you over-pulled, put it back"
          ]}
        ]},
        { heading: "Habits that conserve", body: [
          "Equip for the actual job. Pick fights you can win. Repair vehicles instead of replacing them. Revive teammates instead of letting them respawn.",
          "Small habits, repeated by thousands of players, decide whether the supply lines hold."
        ]},
        { heading: "Related systems", body: [
          "This pairs with the Logistics Quickstart, the Medic Guide, and Facility Etiquette, which extends the same principles to shared industry."
        ]}
      ],
      mistake: "Pulling a tank or other expensive vehicle 'to try it', driving it to the front alone, and losing it in minutes. That is hours of someone's logistics gone.",
      tip: "Before you take anything from a stockpile, ask whether this specific item helps the job you are about to do. If not, leave it.",
      related: ["guides/logistics-quickstart", "combat/medic-guide", "facilities/facility-etiquette", "vehicles/tanks"],
      sources: ["official-wiki", "subreddit", "discord"],
      updateNotes: "Stockpile and maintenance rules change between updates; the etiquette principles here do not."
    },
    {
      slug: "map-intel-radio", section: "guides", icon: "radio",
      title: "Map, Intel, and Radio Guide",
      seoTitle: "Foxhole Map and Intel Guide: Reading the War",
      metaDescription: "A Foxhole guide to the map, intelligence, watchtowers, and radio: how to know where the enemy is and where the front will move.",
      tagline: "Information wins more fights than aim.",
      summary: "Foxhole gives you a living strategic map, but it only shows what your faction can see. Understanding intel — watchtowers, radio, and scouting — is how you stop being surprised.",
      teaches: ["How the map and fog of war work", "What watchtowers and radar reveal", "How radio supports intel", "How to act on what you see"],
      sections: [
        { heading: "What the map shows", body: [
          "The strategic map shows regions, towns, bases, and front lines, but enemy positions are hidden unless your faction has intelligence on them. What you see is not the whole picture.",
          "Reading the map well means noticing where information is missing as much as where it is present."
        ]},
        { heading: "Why intel matters", body: [
          "Most lost fights are lost before the shooting: an unseen flank, an unnoticed armour push, a supply line cut without anyone watching it.",
          "A player who calls out enemy movement on the map can save a region without firing a shot."
        ]},
        { heading: "Watchtowers, radar, and scouting", body: [
          "Watchtowers and intelligence structures reveal enemy activity in their area, turning fog into visible markers. Aircraft made radar and air-detection part of normal planning.",
          "Scouting on foot or by light vehicle fills the gaps the towers do not cover. Reconnaissance is a real job."
        ]},
        { heading: "Using radio", body: [
          "Radios extend communication and intel beyond shouting distance. Carrying a radio lets you report and receive enemy positions across a region.",
          "Radio backpacks and radio-equipped vehicles make a scout far more useful than one operating silently."
        ]},
        { heading: "Acting on information", body: [
          "Intel is only worth something if someone acts on it. Mark enemy positions, warn the relevant base, and adjust where your squad fights.",
          "When you see a flank forming, the right move is usually to redeploy early, not to wait for confirmation."
        ]},
        { heading: "Related systems", body: [
          "Combine this with Recon and Partisans, the Regiments and Communication guide, and the Maps section for reading supply lines and regions."
        ]}
      ],
      mistake: "Trusting an empty map. No enemy markers means no information, not no enemy.",
      tip: "Carry a radio whenever you can. The ability to report what you see multiplies the value of every other player near you.",
      related: ["combat/recon-and-partisans", "guides/regiments-and-communication", "maps/world-map", "maps/supply-lines"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Airborne and Update 64 expanded air detection and radar; specific intel ranges are tuned between patches."
    },
    {
      slug: "regiments-and-communication", section: "guides", icon: "radio",
      title: "Regiment and Communication Guide",
      seoTitle: "Foxhole Regiments and Communication Guide",
      metaDescription: "A Foxhole guide to regiments, squads, and communication: how to coordinate, find a group, and stay useful as a solo player.",
      tagline: "The war is won by groups, not individuals.",
      summary: "Foxhole is a cooperative war. Regiments organise large efforts, squads coordinate small ones, and clear communication is what turns a crowd of strangers into a force.",
      teaches: ["What regiments and squads are", "How to communicate clearly", "How to find a group", "How to be useful solo"],
      sections: [
        { heading: "What regiments and squads are", body: [
          "A regiment is a player organisation that runs operations, manages logistics, and holds territory over a war. A squad is a smaller in-game group for moment-to-moment coordination.",
          "You do not need to join a regiment to matter, but coordinating with one multiplies what you can do."
        ]},
        { heading: "Why communication matters", body: [
          "Foxhole's scale means no single player sees the whole war. Communication is how separate efforts add up instead of cancelling out.",
          "Most failures — an undefended flank, a missed resupply, friendly fire — are communication failures, not skill failures."
        ]},
        { heading: "Communicating clearly", body: [
          "Be specific and brief. Say what, where, and what you need.",
          { list: [
            "Use map markers for enemy positions and rally points",
            "Report supply needs by item and base, not vaguely",
            "Confirm when you have completed a task so others can plan",
            "Stay calm; panicked chat spreads bad decisions"
          ]}
        ]},
        { heading: "Finding a group", body: [
          "Watch local and squad chat, follow players heading the same way, and ask politely where help is needed. The official Discord and subreddit are good places to find a regiment that fits your timezone and playstyle.",
          "Pick a group for its people and schedule first, not its reputation."
        ]},
        { heading: "Being useful solo", body: [
          "Solo players are valuable doing self-contained jobs: logistics runs, scouting, repairs, maintenance, and partisan work. None of these require a clan.",
          "Even solo, narrate what you are doing on the map so others can build around it."
        ]},
        { heading: "Related systems", body: [
          "Pair this with the Map, Intel, and Radio guide and, for solo-friendly frontline work, Recon and Partisans."
        ]}
      ],
      mistake: "Going silent. A capable player who never communicates is far less useful than an average one who reports clearly.",
      tip: "When you ask for help, include the location and the specific need. 'Need bmats at the eastern base' beats 'we need stuff'.",
      related: ["guides/map-intel-radio", "combat/recon-and-partisans", "contact", "logistics/public-stockpiles"],
      sources: ["discord", "subreddit", "official-wiki"],
      updateNotes: "Regiment and squad tools are refined over time; the communication principles here are stable."
    }
  ];

  /* ================= FACTIONS ================= */
  D.factions = [
    {
      slug: "colonials", section: "factions", icon: "flag",
      title: "The Colonials",
      seoTitle: "Foxhole Colonials Guide: Faction Overview",
      metaDescription: "A practical overview of the Colonials in Foxhole: identity, equipment character, and culture for new players choosing a side.",
      tagline: "One of the war's two great powers.",
      summary: "The Colonials are one of Foxhole's two factions. They fight the same war as the Wardens with their own equipment line and community culture. Pick them for the people you will fight alongside, not for a balance claim.",
      teaches: ["Who the Colonials are", "The character of their equipment", "What their culture feels like", "How to decide if they suit you"],
      sections: [
        { heading: "Who they are", body: [
          "The Colonials are a faction defined in-fiction by a long struggle for self-determination. In gameplay terms they are a full faction with their own infantry, vehicles, artillery, naval, and aviation lines.",
          "Everything the war offers — logistics, combat, building, facilities — is available to Colonial players."
        ]},
        { heading: "Equipment character", body: [
          "Foxhole's factions are asymmetric. The Colonials field their own weapons and vehicles that often differ from Warden counterparts in handling, role emphasis, and feel rather than being simple recolours.",
          "Exact performance shifts with balance updates, so learn the role each piece of Colonial equipment fills rather than memorising numbers."
        ]},
        { heading: "Community and culture", body: [
          "Each faction develops its own culture, regiments, and habits across wars. The Colonial community has its own identity, in-jokes, and veteran expectations.",
          "That culture matters more to your day-to-day experience than any stat line."
        ]},
        { heading: "Is this faction for you", body: [
          "Choose the Colonials if your friends or chosen regiment play Colonial, or if their equipment style appeals after you have seen both.",
          "Do not choose based on which side is 'winning' — wars reset, and balance changes."
        ]},
        { heading: "Related reading", body: [
          "Compare directly with the Wardens, then read Choosing a Faction for a clear decision process."
        ]}
      ],
      mistake: "Picking Colonials because of a balance rumour. Asymmetry is real but it is tuned every update, and culture outlasts any patch.",
      tip: "If your friends already play Colonial, the decision is made. Shared comms and a regiment matter more than equipment preference.",
      related: ["factions/wardens", "factions/choosing-a-faction", "getting-started"],
      sources: ["official-wiki", "discord"],
      updateNotes: "Faction balance, including Colonial equipment, is actively tuned around Update 64."
    },
    {
      slug: "wardens", section: "factions", icon: "flag",
      title: "The Wardens",
      seoTitle: "Foxhole Wardens Guide: Faction Overview",
      metaDescription: "A practical overview of the Wardens in Foxhole: identity, equipment character, and culture for new players choosing a side.",
      tagline: "The war's other great power.",
      summary: "The Wardens are Foxhole's other faction, fighting the same persistent war as the Colonials with a distinct equipment line and culture. As with any faction choice, pick for the people first.",
      teaches: ["Who the Wardens are", "The character of their equipment", "What their culture feels like", "How to decide if they suit you"],
      sections: [
        { heading: "Who they are", body: [
          "The Wardens are defined in-fiction as a faction fighting to defend their homeland. In gameplay terms they are a complete faction with their own full equipment line.",
          "Like the Colonials, Wardens can pursue every role the war offers, from logistics to aviation."
        ]},
        { heading: "Equipment character", body: [
          "Warden weapons and vehicles are asymmetric to their Colonial equivalents. They tend to have their own handling and role emphasis, and the distinctions are meaningful rather than cosmetic.",
          "Because balance changes between updates, focus on what each Warden item is for, not on a specific stat you read once."
        ]},
        { heading: "Community and culture", body: [
          "The Warden community has developed its own identity, regiments, and traditions over many wars. That culture shapes how operations are run and how new players are received.",
          "Spend a war with the community before deciding it is or is not for you."
        ]},
        { heading: "Is this faction for you", body: [
          "Choose the Wardens if your friends or regiment are Warden, or if their equipment and culture appeal once you have experienced both sides.",
          "A faction you enjoy playing with beats a faction that looks stronger on paper."
        ]},
        { heading: "Related reading", body: [
          "Compare with the Colonials, then read Choosing a Faction to make the call deliberately."
        ]}
      ],
      mistake: "Switching factions every war chasing the 'stronger' side. You lose your regiment, your contacts, and the culture you were learning.",
      tip: "Try a full war on one side before judging. First impressions of asymmetric equipment are usually wrong.",
      related: ["factions/colonials", "factions/choosing-a-faction", "getting-started"],
      sources: ["official-wiki", "discord"],
      updateNotes: "Faction balance, including Warden equipment, is actively tuned around Update 64."
    },
    {
      slug: "choosing-a-faction", section: "factions", icon: "flag",
      title: "Choosing a Faction",
      seoTitle: "Foxhole Warden vs Colonial: How to Choose a Faction",
      metaDescription: "Foxhole Warden vs Colonial: a practical decision guide for new players on how to pick a faction and why friends matter more than balance.",
      tagline: "Warden vs Colonial, decided properly.",
      summary: "Both factions play the same war. They differ in equipment and culture, not in whether they can win. The right choice is almost always the faction your friends or regiment already play.",
      teaches: ["What actually differs between factions", "Why friends outrank balance", "How to evaluate equipment fairly", "A simple decision process"],
      sections: [
        { heading: "What the choice is", body: [
          "Choosing a faction means choosing an equipment line, a community, and which side of the front you spawn on. It does not mean choosing a different game — the core systems are shared.",
          "It is a meaningful choice, but not one to agonise over before you have played."
        ]},
        { heading: "Why friends come first", body: [
          "Foxhole is a coordination game. Playing with people you can talk to, on a schedule that fits yours, is worth more than any equipment advantage.",
          "If you know anyone who plays, join their faction. The decision ends there."
        ]},
        { heading: "Evaluating equipment honestly", body: [
          "The factions are asymmetric, so their gear feels different. But balance is tuned every update, and a faction's perceived edge rarely survives a patch cycle.",
          "Judge equipment by which roles and playstyles appeal to you, not by which faction a stranger called stronger."
        ]},
        { heading: "A simple decision process", body: [
          { list: [
            "Do friends or a regiment play one side? Join them. Done.",
            "No connections? Pick the faction whose look and community appeal to you.",
            "Still unsure? Pick either, commit for one full war, and reassess.",
            "Never base the choice on current war scores or balance rumours."
          ]}
        ]},
        { heading: "After you choose", body: [
          "Once chosen, invest in the community: learn its habits, find a regiment, and build contacts. That investment is what makes future wars rewarding.",
          "Switching sides resets all of that, so switch rarely and deliberately."
        ]},
        { heading: "Related reading", body: [
          "Read the Colonials and Wardens overviews for the flavour of each, and Getting Started for your first steps after deciding."
        ]}
      ],
      mistake: "Spending an hour researching 'the best faction' before playing. There is no best faction — there is the faction your friends are on.",
      tip: "When in doubt, flip a coin and commit. A full war on either side teaches you more than any comparison article.",
      related: ["factions/colonials", "factions/wardens", "getting-started", "guides/regiments-and-communication"],
      sources: ["official-wiki", "discord", "subreddit"],
      updateNotes: "Balance shifts every update; the advice to prioritise community over balance does not."
    }
  ];

  /* ================= LOGISTICS ================= */
  D.logistics = [
    {
      slug: "scrap-to-frontline", section: "logistics", icon: "scrap",
      title: "Scrap to Frontline",
      seoTitle: "Foxhole Logistics: Scrap Gathering to Frontline Supply",
      metaDescription: "Foxhole logistics guide: gathering scrap and salvage, refining it, and moving the result to the front line.",
      tagline: "Where every supply chain begins.",
      summary: "The whole war starts with scrap. Players harvest salvage, it becomes basic materials, materials become gear, and gear reaches the front. This page walks the chain from the very first node.",
      teaches: ["Where scrap comes from", "Why raw resources matter", "The full gather-to-front path", "How to avoid breaking the chain"],
      sections: [
        { heading: "What scrap is", body: [
          "Scrap, or salvage, is the raw resource gathered from salvage fields and resource nodes scattered across the map. It is the seed material for almost everything the war consumes.",
          "Gathering scrap is unglamorous, low-risk work that absolutely anyone can do, including brand-new players."
        ]},
        { heading: "Why the first node matters", body: [
          "If nobody gathers, nothing downstream exists — no materials, no crates, no shirts at the front. Scrap gathering is the foundation the rest of the chain stands on.",
          "Backline regions usually have safe salvage fields, making this a perfect first job."
        ]},
        { heading: "The gather-to-front path", body: [
          "The chain is a clear sequence. Learn it once and the rest of logistics makes sense.",
          { list: [
            "Harvest scrap and components at salvage fields",
            "Deliver scrap to a refinery to produce basic materials",
            "Use materials at a factory to produce crates of gear",
            "Load crates onto a truck or into containers",
            "Drive to a frontline base and submit the supplies"
          ]}
        ]},
        { heading: "Common mistakes", body: [
          "Gathering huge piles of scrap and leaving them in the backline. Scrap that never moves forward does nothing.",
          "Skipping the delivery step because the front looks dangerous. Hand off to another driver rather than abandoning the run."
        ]},
        { heading: "When to gather and when not to", body: [
          "Gather when backline stockpiles or refineries are low and the front is quiet. Switch to delivery or defence when the front is collapsing and bases are empty.",
          "Read the war: the chain needs whichever node is currently starved."
        ]},
        { heading: "Related systems", body: [
          "Continue with the Refinery and Factory Loop, then Public Stockpiles to see where deliveries land."
        ]}
      ],
      mistake: "Stockpiling raw scrap as if it were the goal. Scrap is worthless until it is refined, produced, and delivered.",
      tip: "If you only learn one logistics job, learn this one. A single completed scrap-to-front run is real, visible war effort.",
      related: ["logistics/refinery-factory-loop", "logistics/public-stockpiles", "guides/logistics-quickstart", "vehicles/logistics-trucks"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Resource node types and yields are adjusted between updates; the chain structure is stable."
    },
    {
      slug: "refinery-factory-loop", section: "logistics", icon: "factory",
      title: "Refinery and Factory Loop",
      seoTitle: "Foxhole Refinery and Factory Guide",
      metaDescription: "How Foxhole refineries and factories work: turning scrap into materials and materials into crates of usable gear.",
      tagline: "Turning raw materials into war.",
      summary: "Refineries convert raw resources into materials; factories convert materials into crated equipment. This middle of the supply chain is where logistics labour becomes usable gear.",
      teaches: ["What refineries do", "What factories do", "The basic vs refined material split", "How to keep the loop efficient"],
      sections: [
        { heading: "What the loop is", body: [
          "The refinery-factory loop is the processing stage of logistics. Raw scrap and components go in; basic materials, refined materials, and crates of gear come out.",
          "It sits between gathering and delivery, and it is where most of a faction's equipment is actually born."
        ]},
        { heading: "Refineries", body: [
          "Refineries take raw resources and produce materials. Basic materials cover common needs like construction and simple gear; refined materials feed more advanced production.",
          "Refining takes time, so feeding refineries early keeps the rest of the chain from stalling."
        ]},
        { heading: "Factories", body: [
          "Factories consume materials to produce crates of equipment: weapons, ammo, uniforms, medical supplies, and more. A crate is the unit you actually haul to the front.",
          "Producing the right mix matters — a stack of crates the front does not need is wasted material."
        ]},
        { heading: "Basic vs refined materials", body: [
          "Basic materials are the workhorse resource for everyday gear and construction. Refined materials are scarcer and feed higher-tier equipment and facilities.",
          "Spend refined materials deliberately; they represent far more upstream work than basic ones."
        ]},
        { heading: "Common mistakes", body: [
          "Producing only what is fun to make. The front needs shirts, ammo, and bandages far more than niche equipment.",
          "Letting a refinery sit empty while scrap piles up beside it. Keep the inputs flowing."
        ]},
        { heading: "Related systems", body: [
          "Feed the loop with Scrap to Frontline, then move output through Shipping and Containers and into Public Stockpiles. Facilities extend this into advanced production."
        ]}
      ],
      mistake: "Burning refined materials on vanity equipment while frontline bases sit short of basic shirts and ammo.",
      tip: "Check what frontline bases are missing before you queue production. Make what the war needs, not what is interesting.",
      related: ["logistics/scrap-to-frontline", "logistics/shipping", "logistics/public-stockpiles", "facilities/production-chains"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Production recipes and material costs change between updates; confirm current crate costs in patch notes."
    },
    {
      slug: "public-stockpiles", section: "logistics", icon: "crate",
      title: "Public Stockpiles",
      seoTitle: "Foxhole Public Stockpiles Guide",
      metaDescription: "How Foxhole public stockpiles work: shared reserves at bases, submitting supplies, and using them without draining the war.",
      tagline: "Shared reserves that strangers fight from.",
      summary: "Public stockpiles are the shared supply pools held in bases. They let players who never met equip each other. Filling them is generous; draining them carelessly is how regions fall.",
      teaches: ["What public stockpiles are", "How submitting supplies works", "Fair-use etiquette", "How stockpile health predicts a region's fate"],
      sections: [
        { heading: "What public stockpiles are", body: [
          "A public stockpile is the supply reserve inside a base that any friendly player can draw from. It holds uniforms, weapons, ammo, medical supplies, materials, and more.",
          "It is the mechanism that lets a soldier spawn fully equipped without knowing who manufactured the gear."
        ]},
        { heading: "Why they matter", body: [
          "Public stockpiles are the difference between a base that can sustain a fight and one that collapses. A frontline base with a healthy stockpile absorbs losses; an empty one cannot.",
          "Submitting supplies into them is one of the most direct ways to strengthen a region."
        ]},
        { heading: "Submitting supplies", body: [
          "When you deliver crates to a base, you submit them into its stockpile so others can use them. Always confirm the supplies registered before you leave.",
          "Submitting to the right base — a struggling frontline one, not a comfortable backline one — multiplies the impact."
        ]},
        { heading: "Fair-use etiquette", body: [
          "Public stockpiles belong to the war effort, not to individuals.",
          { list: [
            "Take what your current job needs, not a personal reserve",
            "Do not strip a frontline base to stock a private base",
            "Do not pull vehicles you cannot crew, protect, or return",
            "If you over-pull, put the surplus back"
          ]}
        ]},
        { heading: "Reading stockpile health", body: [
          "Stockpile levels are a forecast. A frontline region with empty bases is about to be in trouble regardless of how the shooting looks right now.",
          "Logistics players watch stockpiles the way generals watch the map."
        ]},
        { heading: "Related systems", body: [
          "This connects to How to Not Waste Supplies, the Logistics Quickstart, and Trains for moving bulk supply into stockpiles."
        ]}
      ],
      mistake: "Emptying a public stockpile to outfit a private base or garage. That is taking the war's shared reserves for personal use.",
      tip: "When a delivery run finishes, glance at the base stockpile. If it is thin on shirts or ammo, that is your next run.",
      related: ["guides/how-to-not-waste-supplies", "guides/logistics-quickstart", "logistics/trains", "building/field-bases"],
      sources: ["official-wiki", "subreddit", "discord"],
      updateNotes: "Stockpile capacity and submission rules are periodically adjusted; the etiquette is constant."
    },
    {
      slug: "shipping", section: "logistics", icon: "crate",
      title: "Shipping and Containers",
      seoTitle: "Foxhole Shipping and Containers Guide",
      metaDescription: "Foxhole guide to shipping and containers: moving bulk crates and materials efficiently across regions.",
      tagline: "Moving supply in bulk, not by hand.",
      summary: "Carrying crates one at a time does not scale. Containers and dedicated shipping let logistics players move large volumes of supply efficiently — the difference between supplying a squad and supplying a front.",
      teaches: ["What containers are for", "Bulk vs single-crate hauling", "Matching transport to distance", "How to ship without bottlenecks"],
      sections: [
        { heading: "What shipping is", body: [
          "Shipping is bulk logistics: using containers, large vehicles, trains, and ships to move many crates or large material volumes at once instead of hauling them individually.",
          "It is the scaling layer that lets a handful of players keep a whole region supplied."
        ]},
        { heading: "Why bulk matters", body: [
          "Single-crate hauling is fine for a quick top-up but collapses under the demand of an active front. Containers let one trip do the work of many.",
          "Efficient shipping frees players to fight, build, and gather instead of all of them driving."
        ]},
        { heading: "Containers and how to use them", body: [
          "Containers hold large quantities of crates or materials and are moved by suitable vehicles and cranes at depots and ports.",
          { list: [
            "Pack containers with what a destination actually needs",
            "Use cranes at ports and depots to load and unload",
            "Stage containers near production so loading is quick",
            "Label your intent in chat so others do not duplicate the run"
          ]}
        ]},
        { heading: "Matching transport to distance", body: [
          "Short hops suit trucks; long backline hauls suit trains; cross-water moves suit ships. Picking the wrong tool wastes fuel and time.",
          "Plan the route before you load, including where you will refuel."
        ]},
        { heading: "Common mistakes", body: [
          "Shipping huge volumes to a base that is already full while a starving base nearby gets nothing. Confirm the need first.",
          "Leaving loaded containers stranded at a depot because the next leg was never arranged."
        ]},
        { heading: "Related systems", body: [
          "Shipping connects the Refinery and Factory Loop to Public Stockpiles, and overlaps with Trains and Naval Logistics."
        ]}
      ],
      mistake: "Hand-carrying crates one by one to supply an active front. It does not scale and burns time the war cannot spare.",
      tip: "Before loading a container, decide its exact destination and the need it fills. Bulk delivered to the wrong base is bulk wasted.",
      related: ["logistics/refinery-factory-loop", "logistics/trains", "logistics/public-stockpiles", "naval/logistics"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Container, crane, and vehicle capacities are tuned between updates."
    },
    {
      slug: "trains", section: "logistics", icon: "truck",
      title: "Trains and Bulk Transport",
      seoTitle: "Foxhole Trains Guide: Bulk Rail Transport",
      metaDescription: "Foxhole trains guide: using rail for bulk transport of materials, crates, and equipment across long backline routes.",
      tagline: "Rail moves the war by the ton.",
      summary: "Trains are Foxhole's heavy-haul transport. Over rail networks they move enormous quantities of materials and crates across the backline far faster than any convoy of trucks.",
      teaches: ["What rail transport is for", "Trains vs trucks vs ships", "How rail infrastructure works", "How to use trains responsibly"],
      sections: [
        { heading: "What rail transport is", body: [
          "Trains run on player-relevant rail networks and pull cars loaded with containers, materials, and equipment. One train can carry what would take a long line of trucks.",
          "Rail is the backbone of large-scale backline logistics."
        ]},
        { heading: "Why trains matter", body: [
          "When a front is consuming supply faster than trucks can deliver, rail is what keeps up. It concentrates huge throughput into a single coordinated run.",
          "A well-run rail line can supply multiple regions from a central production hub."
        ]},
        { heading: "How rail works", body: [
          "Rail requires track, stations, and the discipline to keep lines clear and trains moving.",
          { list: [
            "Load cars and containers at production hubs and depots",
            "Run the train along established track to forward stations",
            "Unload near the front, then hand crates to trucks for the last leg",
            "Keep the line clear so trains are not blocked or abandoned"
          ]}
        ]},
        { heading: "Trains vs trucks vs ships", body: [
          "Trains win on long overland bulk hauls. Trucks win on flexible short-range delivery, especially the dangerous last stretch to the front. Ships win across water.",
          "Most efficient logistics chains the three together rather than relying on one."
        ]},
        { heading: "Using trains responsibly", body: [
          "Trains are shared, expensive infrastructure. Do not abandon one on the main line, do not block stations, and coordinate so two players are not running empty trains on the same route.",
          "A blocked rail line can choke a whole faction's logistics."
        ]},
        { heading: "Related systems", body: [
          "Trains pair with Shipping and Containers for loading, Public Stockpiles for the destination, and Backline Regions for understanding routes."
        ]}
      ],
      mistake: "Abandoning a train mid-line or blocking a station. One stuck train can stall every shipment behind it.",
      tip: "Treat rail as shared infrastructure. Announce your route, keep moving, and clear the line when you are done.",
      related: ["logistics/shipping", "logistics/public-stockpiles", "maps/backline-regions", "vehicles/logistics-trucks"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Rail mechanics and train capacities are refined between updates."
    }
  ];

  /* ================= COMBAT ================= */
  D.combat = [
    {
      slug: "infantry-basics", section: "combat", icon: "rifle",
      title: "Infantry Basics",
      seoTitle: "Foxhole Infantry Guide: Combat Basics for New Players",
      metaDescription: "Foxhole infantry guide: positioning, cover, suppression, and staying alive so you do not drain your base of shirts.",
      tagline: "Hold ground without burning shirts.",
      summary: "Infantry is the backbone of every front. Good infantry play is not about a high kill count — it is about holding positions, supporting squadmates, and staying alive so the base behind you keeps its uniforms.",
      teaches: ["What infantry actually does", "Positioning and cover", "Suppression and squad play", "Why survival is a contribution"],
      sections: [
        { heading: "What infantry does", body: [
          "Infantry occupies and holds ground. Bases, trenches, and towns only stay friendly while infantry are physically in them, so the role is fundamentally about presence, not spectacle.",
          "Every other role — armour, artillery, logistics — exists to support infantry holding or taking ground."
        ]},
        { heading: "Why staying alive matters", body: [
          "Each death consumes a uniform from a base stockpile. An infantryman who dies constantly is draining the same shirts the whole squad needs to keep fighting.",
          "Survival is therefore a logistics contribution. The longer you live, the cheaper you are to the war."
        ]},
        { heading: "Positioning and cover", body: [
          "Foxhole infantry combat punishes open ground hard. Move between cover, avoid silhouetting yourself, and use night, smoke, and terrain.",
          { list: [
            "Never cross open ground you can go around",
            "Fight from cover, not in front of it",
            "Use smoke to cross gaps and break line of sight",
            "Stay within reach of a medic and a fallback base"
          ]}
        ]},
        { heading: "Suppression and squad play", body: [
          "A squad that suppresses — keeping the enemy's heads down while others move — beats a group of individuals all shooting at once. Coordinate who fires and who advances.",
          "Communicate contacts and stay grouped; isolated infantry get flanked and cut off."
        ]},
        { heading: "Gear discipline", body: [
          "Take the gear the fight needs and no more. Expensive weapons you cannot use well are wasted, and dying with them spends extra logistics.",
          "A rifle, ammo, and bandages handle the vast majority of infantry situations."
        ]},
        { heading: "Related systems", body: [
          "Build on this with Trenches and Cover, the Medic Guide, and Anti-Tank Basics for when armour shows up."
        ]}
      ],
      mistake: "Chasing kills into the open and past your support. The kill count does not matter; the lost shirts and lost position do.",
      tip: "Pick the position before the fight. Decide where your cover is and where you fall back to, then engage.",
      related: ["combat/trenches-and-cover", "combat/medic-guide", "combat/anti-tank", "weapons/rifles"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Infantry weapon balance is tuned between updates; core positioning principles are stable."
    },
    {
      slug: "trenches-and-cover", section: "combat", icon: "trench",
      title: "Trenches and Cover",
      seoTitle: "Foxhole Trenches and Cover Guide",
      metaDescription: "Foxhole guide to trenches and cover: using fighting positions effectively and why bad trenches help the enemy.",
      tagline: "Fighting positions, used correctly.",
      summary: "Trenches and cover turn a thin line of infantry into a hard defensive position. Used well they save lives and shirts; placed badly they can shelter the enemy instead of you.",
      teaches: ["How cover changes infantry fights", "Using trenches as a fighter", "Why bad trenches backfire", "Holding and falling back through positions"],
      sections: [
        { heading: "Why cover decides fights", body: [
          "Foxhole infantry are fragile in the open and durable behind cover. Most engagements are decided by who is using terrain and fortifications and who is exposed.",
          "Cover is not optional decoration — it is the primary survival tool of infantry."
        ]},
        { heading: "Using trenches as a fighter", body: [
          "Trenches let infantry fire while protected and move along the line without exposure. Fight from them, reposition within them, and use their connections to reinforce threatened sections.",
          "A manned trench network is one of the most cost-effective defences in the game."
        ]},
        { heading: "Why bad trenches help the enemy", body: [
          "Trenches are terrain. If they are dug in the wrong place, the enemy can capture and fight from them just as easily as you can.",
          { list: [
            "Trenches too far forward become enemy staging positions",
            "Trenches with no friendly fire support are easy to take",
            "Disconnected trenches cannot be reinforced or retreated through",
            "Trenches blocking friendly movement slow your own counterattacks"
          ]}
        ]},
        { heading: "Holding through positions", body: [
          "Layered positions let defenders trade space for time: hold the forward trench, fall back to the next, and make every metre cost the attacker.",
          "Defenders should know the next position back before they need it."
        ]},
        { heading: "When to dig and when not to", body: [
          "Dig when a line needs to be held and a builder has thought about fields of fire and supply access. Do not dig reflexively — an unplanned trench can be worse than open ground.",
          "If you are not a builder, ask one before placing fortifications."
        ]},
        { heading: "Related systems", body: [
          "This connects to Infantry Basics, and on the construction side to Building Trenches and Common Building Mistakes."
        ]}
      ],
      mistake: "Digging a trench wherever feels right. A trench in the wrong place is free cover handed to the enemy.",
      tip: "Before you fight from a trench, find the next position back. A defence works because there is always somewhere to retreat to.",
      related: ["combat/infantry-basics", "building/trenches", "building/common-mistakes", "combat/medic-guide"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Trench and fortification mechanics are periodically adjusted; placement principles are stable."
    },
    {
      slug: "anti-tank", section: "combat", icon: "crosshair",
      title: "Anti-Tank Basics",
      seoTitle: "Foxhole Anti-Tank Guide for Infantry",
      metaDescription: "Foxhole anti-tank guide: how infantry counter armour with positioning, teamwork, and the right weapons.",
      tagline: "How infantry answer armour.",
      summary: "A single tank can stall an infantry push, but infantry are not helpless. Anti-tank work is about angles, patience, and teamwork far more than about any one weapon.",
      teaches: ["Why armour threatens infantry", "Anti-tank weapon roles", "Positioning against tanks", "Teamwork that kills armour"],
      sections: [
        { heading: "Why armour is dangerous", body: [
          "Tanks and armoured vehicles shrug off rifle fire and can dominate open ground. Infantry that ignore an enemy tank usually lose the position.",
          "But armour has weaknesses: limited vision, vulnerable angles, fuel and ammo needs, and reliance on crew coordination."
        ]},
        { heading: "Anti-tank weapon roles", body: [
          "Infantry anti-tank tools range from light launchers to heavier crewed weapons and emplaced guns. Each fills a role rather than being a universal answer.",
          { list: [
            "Light AT for harassing and finishing damaged armour",
            "Heavier AT for reliable damage against well-armoured targets",
            "Emplaced and field guns for defending fixed positions",
            "Mines and obstacles to channel and slow vehicles"
          ]}
        ]},
        { heading: "Positioning against tanks", body: [
          "Hit armour from the side and rear where it is weakest, and from cover that breaks the tank's line of sight after you fire. Never trade shots with a tank from open ground in front of it.",
          "Tanks have blind spots; good AT infantry live in them."
        ]},
        { heading: "Teamwork kills tanks", body: [
          "One AT hit rarely kills a tank. Coordinated infantry — several players striking together, or AT plus mines plus a tracked-vehicle kill — overwhelm a crew before it can react or retreat.",
          "Call the target, strike together, then reposition."
        ]},
        { heading: "When to engage and when to hide", body: [
          "Engage when you have the angle, cover, and friends to follow up. Hide and report when you are alone in the open — a wasted AT shot just announces your position.",
          "Survival to take a better shot beats a heroic miss."
        ]},
        { heading: "Related systems", body: [
          "Pair this with Anti-Tank Weapons for the equipment side, and Tanks to understand the target you are fighting."
        ]}
      ],
      mistake: "Firing a single AT shot at a healthy tank from open ground. You rarely kill it and you reveal yourself for the return fire.",
      tip: "Get to the flank or rear before you fire, and only commit when a teammate can follow up. AT is a team effort.",
      related: ["weapons/anti-tank-weapons", "vehicles/tanks", "combat/infantry-basics", "building/trenches"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Armour and AT balance is actively tuned, including around Update 64."
    },
    {
      slug: "medic-guide", section: "combat", icon: "medic",
      title: "Medic Guide",
      seoTitle: "Foxhole Medic Guide: How to Save Players and Logistics",
      metaDescription: "Foxhole medic guide: reviving the wounded, why medics save shirts, and how to support a squad as a medic.",
      tagline: "Medics save players and supplies at once.",
      summary: "A medic keeps squads in the fight and keeps bases stocked. Every revive is a player who did not respawn — which means a uniform that was not consumed. Medics are logistics in a frontline role.",
      teaches: ["What medics do", "Why a revive is a logistics win", "How to medic safely", "Supporting a squad as a medic"],
      sections: [
        { heading: "What a medic does", body: [
          "Medics treat wounded players and revive the downed before they die outright. A wounded soldier who is treated stays in the fight; a downed one who is revived avoids a respawn.",
          "It is one of the most impactful frontline roles a new player can take."
        ]},
        { heading: "Why revives are logistics", body: [
          "When a player respawns, a uniform is consumed from a base stockpile. A revive prevents that consumption entirely.",
          "So a medic is not just saving lives — they are conserving the exact supplies logistics players worked to deliver."
        ]},
        { heading: "How to medic safely", body: [
          "A dead medic helps no one. Treat people from cover, time revives for lulls in fire, and do not sprint across open ground to a body under active fire.",
          { list: [
            "Carry enough bandages and medical supplies for the squad",
            "Revive during suppression or lulls, not mid-firefight in the open",
            "Stay with the squad rather than roaming alone",
            "Know where to resupply medical gear"
          ]}
        ]},
        { heading: "Supporting a squad", body: [
          "Position just behind the firing line where you can reach the wounded but are not the first target. Communicate so the squad knows a medic is present and where you are.",
          "A squad that knows it has a medic fights more confidently and holds longer."
        ]},
        { heading: "When to revive and when to wait", body: [
          "Revive when you can reach the body with reasonable safety. Wait, or pull back, when the area is still being swept by fire — a downed player can often be recovered after the position stabilises.",
          "Do not trade a living medic for one risky revive."
        ]},
        { heading: "Related systems", body: [
          "Medics pair with Infantry Basics and Trenches and Cover, and their impact ties directly to How to Not Waste Supplies."
        ]}
      ],
      mistake: "Charging into open fire to revive one player and dying in the attempt. Now the squad has lost a medic too.",
      tip: "Hang one step behind the firing line. Close enough to revive, far enough not to be the first casualty.",
      related: ["combat/infantry-basics", "combat/trenches-and-cover", "guides/how-to-not-waste-supplies", "guides/frontline-basics"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Medical items and revive mechanics are adjusted between updates."
    },
    {
      slug: "recon-and-partisans", section: "combat", icon: "crosshair",
      title: "Recon and Partisans",
      seoTitle: "Foxhole Recon and Partisan Guide",
      metaDescription: "Foxhole recon and partisan guide: scouting, gathering intel, and operating behind enemy lines to cut supply.",
      tagline: "Win the war the enemy cannot see.",
      summary: "Recon and partisan play happens away from the main line. Scouts gather intelligence; partisans operate behind enemy territory, cutting supply and creating chaos. Both are excellent solo-friendly roles.",
      teaches: ["The difference between recon and partisan work", "Why behind-the-lines play matters", "How to operate alone effectively", "Staying alive deep in enemy territory"],
      sections: [
        { heading: "Recon versus partisan work", body: [
          "Recon is information work: scouting enemy positions, tracking movements, and reporting them so your faction can react. Partisan work is action: striking enemy logistics, infrastructure, and supply behind the front.",
          "Both operate away from the main line and reward patience over aggression."
        ]},
        { heading: "Why behind-the-lines play matters", body: [
          "An enemy supply line cut by a partisan can starve a front more effectively than winning a firefight on it. Recon that reveals an enemy build-up can save an entire region.",
          "These roles punch far above the number of players doing them."
        ]},
        { heading: "Operating alone", body: [
          "Recon and partisan work suit solo players because the jobs are self-contained.",
          { list: [
            "Travel light and quiet; avoid fights you do not need",
            "Carry a radio so your intel actually reaches someone",
            "Target supply, infrastructure, and isolated logistics, not patrols",
            "Plan an exit route before you go in"
          ]}
        ]},
        { heading: "Staying alive deep in enemy land", body: [
          "Deep in enemy territory there is no friendly base to fall back to. Survival means avoidance: use night, terrain, and timing, and disengage rather than win firefights.",
          "A scout who is seen has usually already failed; the goal is to observe and act unnoticed."
        ]},
        { heading: "When this role helps most", body: [
          "Recon and partisan work matter most when the front is stable and the war is being decided by supply and intelligence. When your own region is collapsing, the most useful place is usually the defence.",
          "Read the war and pick the role it currently needs."
        ]},
        { heading: "Related systems", body: [
          "This connects strongly to Map, Intel, and Radio, and to Supply Lines for choosing partisan targets."
        ]}
      ],
      mistake: "Treating partisan play as a kill hunt. Killing a few stragglers achieves little; cutting a supply route achieves a lot.",
      tip: "Always carry a radio and plan your exit. Intel you cannot report and a raid you cannot escape are both wasted.",
      related: ["guides/map-intel-radio", "maps/supply-lines", "guides/regiments-and-communication", "vehicles/armored-cars"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Intel structures and detection were expanded by Airborne; specifics are tuned between updates."
    }
  ];

  /* ================= WEAPONS ================= */
  D.weapons = [
    {
      slug: "rifles", section: "weapons", icon: "rifle",
      title: "Rifles",
      seoTitle: "Foxhole Rifles Guide: Role and Beginner Use",
      metaDescription: "Foxhole rifles guide: what role rifles fill, the best beginner choice, and ammo and logistics notes.",
      tagline: "The default weapon of the war.",
      summary: "Rifles are the standard infantry weapon and the right choice for almost every new player. They are cheap, effective at range, and gentle on logistics.",
      teaches: ["The role rifles fill", "Why rifles suit beginners", "What not to waste", "Ammo and logistics notes"],
      sections: [
        { heading: "What role rifles fill", body: [
          "Rifles are general-purpose infantry weapons effective at medium to long range. They reward positioning and aim over volume of fire and form the core of any infantry line.",
          "If you are unsure what to carry, a rifle is the answer."
        ]},
        { heading: "Beginner recommendation", body: [
          "Start with your faction's standard rifle. It is inexpensive, widely stocked, and teaches the fundamentals of Foxhole infantry combat without burdening logistics.",
          "Master the basic rifle before reaching for anything specialised."
        ]},
        { heading: "What not to waste", body: [
          "Scoped and specialised rifle variants exist, but they cost more and are wasted in the hands of a new player or in close-range fights they are not built for.",
          "Carry the standard rifle until you have a specific reason not to."
        ]},
        { heading: "Ammo and logistics", body: [
          "A rifle is only useful with its matching ammunition, so always carry spare magazines and resupply before you run dry.",
          "Standard rifle ammo is among the cheapest things logistics produces, which is part of why the rifle is the responsible default."
        ]},
        { heading: "Related systems", body: [
          "Use rifles alongside Infantry Basics for positioning, and see SMGs and Machine Guns for the close-range and suppression roles rifles do not cover."
        ]}
      ],
      mistake: "Grabbing a scoped or specialist rifle as a new player because it sounds better. You will mostly waste a costlier weapon.",
      tip: "Carry the standard rifle plus several spare magazines. It handles the large majority of infantry situations.",
      related: ["combat/infantry-basics", "weapons/smgs", "weapons/machine-guns", "guides/first-deployment"],
      sources: ["official-wiki"],
      updateNotes: "Rifle stats and variants are tuned between updates and differ by faction; check current values on the official wiki."
    },
    {
      slug: "smgs", section: "weapons", icon: "rifle",
      title: "SMGs",
      seoTitle: "Foxhole SMG Guide: Close-Quarters Weapons",
      metaDescription: "Foxhole SMG guide: the close-range role of submachine guns, when to use them, and ammo considerations.",
      tagline: "Close-quarters firepower.",
      summary: "Submachine guns dominate close range — towns, trenches, and base interiors — but fall off badly at distance. They are a situational tool, not a default.",
      teaches: ["The close-range role of SMGs", "When to choose an SMG over a rifle", "What to avoid", "Ammo notes"],
      sections: [
        { heading: "What role SMGs fill", body: [
          "SMGs deliver a high volume of fire at short range, which makes them strong in the cramped fighting of towns, trench clearing, and assaulting structures.",
          "Their effectiveness drops sharply with distance — they are a specialist's close-range tool."
        ]},
        { heading: "When to choose an SMG", body: [
          "Reach for an SMG when you know the fight will be close: assaulting a town, clearing a trench, or storming a base. For open ground or general use, a rifle remains better.",
          "Many players carry an SMG situationally rather than as their everyday weapon."
        ]},
        { heading: "What to avoid", body: [
          "Do not carry an SMG into long-range fights and expect to compete. Trying to skirmish across open ground with one wastes both the weapon and your position.",
          "Match the weapon to the range you expect."
        ]},
        { heading: "Ammo notes", body: [
          "SMGs burn through ammunition quickly because of their fire rate, so carry generous spare magazines and plan resupply accordingly.",
          "That ammo appetite is part of the cost of bringing one."
        ]},
        { heading: "Related systems", body: [
          "SMGs complement Rifles and pair with Infantry Basics for close-quarters positioning."
        ]}
      ],
      mistake: "Using an SMG as an all-rounder and losing every medium-range exchange. It is a close-range specialist.",
      tip: "Bring an SMG when you already know the fight is close — town assaults and trench clearing. Otherwise default to a rifle.",
      related: ["weapons/rifles", "weapons/machine-guns", "combat/infantry-basics", "combat/trenches-and-cover"],
      sources: ["official-wiki"],
      updateNotes: "SMG performance and variants differ by faction and are tuned between updates."
    },
    {
      slug: "machine-guns", section: "weapons", icon: "rifle",
      title: "Machine Guns",
      seoTitle: "Foxhole Machine Guns Guide: Suppression and Support",
      metaDescription: "Foxhole machine gun guide: the suppression and support role, crew and setup considerations, and ammo logistics.",
      tagline: "Suppression that wins ground.",
      summary: "Machine guns are about suppression, not headshots. They pin the enemy in place so the rest of the squad can move. Used as a team weapon they are decisive; used solo they are awkward.",
      teaches: ["The suppression role", "Setup and positioning", "Why MGs are team weapons", "Heavy ammo logistics"],
      sections: [
        { heading: "What role machine guns fill", body: [
          "Machine guns put out sustained fire that suppresses the enemy — forcing them into cover and pinning them so friendly infantry can advance or hold.",
          "Their value is measured in enemy movement denied, not in kills."
        ]},
        { heading: "Setup and positioning", body: [
          "Machine guns are most effective from a prepared, stable position with good fields of fire, and some require setting up rather than firing on the move.",
          "Pick a position that covers an avenue of approach and has cover and a fallback."
        ]},
        { heading: "Why they are team weapons", body: [
          "A machine gun alone suppresses but cannot exploit. The value appears when the suppressed enemy is then assaulted or outmanoeuvred by the rest of the squad.",
          "Coordinate: the gun pins, the squad moves."
        ]},
        { heading: "Heavy ammo logistics", body: [
          "Machine guns consume ammunition fast and use heavier ammo types, so a gunner needs a generous supply and ideally a teammate or nearby base to resupply from.",
          "Running an MG dry at the wrong moment can collapse a suppression plan."
        ]},
        { heading: "Related systems", body: [
          "Machine guns work with Infantry Basics and Trenches and Cover, where prepared positions make them especially strong."
        ]}
      ],
      mistake: "Treating a machine gun as a personal kill weapon. Its job is suppression that lets the squad move — not a high score.",
      tip: "Set up where you cover an approach the enemy must use, and coordinate so your suppression actually buys movement for someone.",
      related: ["combat/infantry-basics", "combat/trenches-and-cover", "weapons/rifles", "building/trenches"],
      sources: ["official-wiki"],
      updateNotes: "Machine gun handling, setup rules, and ammo are tuned between updates and vary by faction."
    },
    {
      slug: "explosives", section: "weapons", icon: "shell",
      title: "Explosives",
      seoTitle: "Foxhole Explosives Guide: Grenades and Demolition",
      metaDescription: "Foxhole explosives guide: grenades, demolition charges, and using explosives responsibly against structures and groups.",
      tagline: "High impact, high cost.",
      summary: "Explosives — grenades, charges, and demolition tools — clear structures, break fortifications, and punish grouped enemies. They are powerful and expensive, so they reward deliberate use.",
      teaches: ["The roles explosives fill", "Anti-structure versus anti-infantry use", "Why explosives are costly", "Safe and responsible use"],
      sections: [
        { heading: "What role explosives fill", body: [
          "Explosives cover jobs other weapons cannot: dislodging entrenched infantry, damaging or destroying fortifications, and hitting clustered enemies behind cover.",
          "They are problem-solvers for specific situations rather than general-purpose weapons."
        ]},
        { heading: "Anti-structure versus anti-infantry", body: [
          "Some explosives are tuned for tearing down structures and fortifications; others for clearing infantry out of cover and trenches. Bringing the wrong type to the job mostly wastes it.",
          "Know which problem you are solving before you pull explosives."
        ]},
        { heading: "Why they are costly", body: [
          "Explosives represent significant logistics per use. A demolition charge or a pile of grenades is a meaningful chunk of production, so each one should have a clear purpose.",
          "Casual or speculative use of explosives is a real drain on the war."
        ]},
        { heading: "Using them responsibly", body: [
          "Throw and place explosives with awareness of friendlies — explosives cause friendly fire and can collapse your own plans.",
          { list: [
            "Confirm no friendlies are in the blast area",
            "Use anti-structure explosives on structures, not on lone infantry",
            "Carry only what the planned job needs",
            "Coordinate demolition with the squad relying on it"
          ]}
        ]},
        { heading: "Related systems", body: [
          "Explosives connect to Anti-Tank Weapons for armour, and to Building topics like Bunkers, which they are used to break."
        ]}
      ],
      mistake: "Carrying a pile of grenades or charges 'just in case' and using them on single targets. That is expensive production wasted.",
      tip: "Decide the specific job — break a structure, clear a trench — and carry only the explosive type that job needs.",
      related: ["weapons/anti-tank-weapons", "building/bunkers", "combat/trenches-and-cover", "guides/how-to-not-waste-supplies"],
      sources: ["official-wiki"],
      updateNotes: "Explosive types, damage, and costs are tuned between updates."
    },
    {
      slug: "anti-tank-weapons", section: "weapons", icon: "crosshair",
      title: "Anti-Tank Weapons",
      seoTitle: "Foxhole Anti-Tank Weapons Guide",
      metaDescription: "Foxhole anti-tank weapons guide: light and heavy AT, emplaced guns, and how to choose and supply them.",
      tagline: "The infantry answer to armour.",
      summary: "Anti-tank weapons let infantry threaten vehicles. They range from light launchers to heavy crewed weapons and emplaced guns, and each fills a distinct role in stopping armour.",
      teaches: ["The spread of AT weapon roles", "Light versus heavy AT", "Emplaced and crewed AT", "AT ammo logistics"],
      sections: [
        { heading: "What role AT weapons fill", body: [
          "Anti-tank weapons exist so infantry are not helpless against vehicles. They trade general utility for the ability to damage armour, so they are carried for a purpose, not by default.",
          "Choosing the right AT weapon depends on the target and the situation."
        ]},
        { heading: "Light versus heavy AT", body: [
          "Light AT is portable and good for harassing vehicles, finishing damaged ones, and dealing with lighter armour. Heavy AT delivers reliable damage against well-protected tanks but is bulkier and more demanding.",
          "Match the weapon to the armour you expect to face."
        ]},
        { heading: "Emplaced and crewed AT", body: [
          "Emplaced anti-tank guns and field guns defend fixed positions and cover armour approaches. They hit hard but cannot reposition quickly and benefit from a crew.",
          "These are defensive anchors more than mobile tools."
        ]},
        { heading: "AT ammo logistics", body: [
          "Anti-tank ammunition is more expensive than rifle ammo and specific to its weapon. Carry the correct ammo type and do not over-stock AT weapons you will not use.",
          "A wasted AT shot is a noticeable amount of logistics gone."
        ]},
        { heading: "Related systems", body: [
          "Pair this with Anti-Tank Basics for tactics, Field Guns for emplaced options, and Tanks to understand the target."
        ]}
      ],
      mistake: "Pulling heavy AT weapons and ammo for a front with no enemy armour. Carry AT to a known threat, not speculatively.",
      tip: "Confirm the armour threat before you equip AT. Then match light or heavy AT to the specific vehicles you expect.",
      related: ["combat/anti-tank", "vehicles/field-guns", "vehicles/tanks", "weapons/explosives"],
      sources: ["official-wiki"],
      updateNotes: "AT and armour balance is actively tuned, including around Update 64."
    }
  ];

  /* ================= VEHICLES ================= */
  D.vehicles = [
    {
      slug: "logistics-trucks", section: "vehicles", icon: "truck",
      title: "Logistics Trucks",
      seoTitle: "Foxhole Logistics Trucks Guide",
      metaDescription: "Foxhole logistics trucks guide: the workhorse of supply, fuel and route planning, and last-mile delivery to the front.",
      tagline: "The workhorse that wins wars.",
      summary: "The logistics truck is the most important vehicle in Foxhole. It moves crates, materials, and supplies from production to the front, and most players' highest-impact contribution is a good truck run.",
      teaches: ["What logistics trucks are for", "Fuel and route planning", "The dangerous last mile", "Truck discipline"],
      sections: [
        { heading: "What logistics trucks do", body: [
          "Trucks haul crates, materials, and supplies between production sites, depots, and frontline bases. They are flexible, widely available, and the default tool for getting gear where it is needed.",
          "Almost every supply chain ends with a truck on its last leg."
        ]},
        { heading: "Why trucks matter most", body: [
          "Trains and ships move bulk, but trucks handle the flexible, last-mile delivery that actually fills a base stockpile. A faction can fight without trains; it cannot fight without trucks.",
          "Learning a reliable truck run is the single most useful logistics skill."
        ]},
        { heading: "Fuel and route planning", body: [
          "Trucks need fuel, and a run that strands a truck dry helps no one.",
          { list: [
            "Plan the route and confirm fuel before leaving",
            "Know where you can refuel along the way",
            "Avoid contested roads where a truck is an easy kill",
            "Have a destination base and need in mind before loading"
          ]}
        ]},
        { heading: "The dangerous last mile", body: [
          "The final stretch to a frontline base is where trucks are most exposed. Time the run, use cover and quieter approaches, and consider an escort when the route is hot.",
          "A truck lost on the last mile loses the whole run's cargo."
        ]},
        { heading: "Truck discipline", body: [
          "Do not abandon trucks on roads or at the front. Park them where they can be reused, return them to motor pools, and do not hoard trucks you are not using.",
          "Trucks are shared infrastructure as much as cargo carriers."
        ]},
        { heading: "Related systems", body: [
          "Trucks connect the whole logistics chain: Scrap to Frontline, Shipping and Containers, and Public Stockpiles."
        ]}
      ],
      mistake: "Setting off on a long run without checking fuel, then stranding a loaded truck halfway to the front.",
      tip: "Before every run: fuel checked, route planned, destination base and need known. A truck run is a small mission, so brief it.",
      related: ["logistics/scrap-to-frontline", "logistics/public-stockpiles", "logistics/shipping", "guides/logistics-quickstart"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Truck capacities and fuel use are tuned between updates."
    },
    {
      slug: "armored-cars", section: "vehicles", icon: "truck",
      title: "Armored Cars",
      seoTitle: "Foxhole Armored Cars Guide",
      metaDescription: "Foxhole armored cars guide: the fast scout and skirmish role, crew needs, and how to use light armour well.",
      tagline: "Fast, light, and easily wasted.",
      summary: "Armored cars are fast, lightly protected vehicles built for scouting, skirmishing, and harassing soft targets. They are cheap relative to tanks but die quickly to real anti-tank fire.",
      teaches: ["The light-armour role", "Scouting and skirmishing", "What armored cars cannot do", "Crew and survival"],
      sections: [
        { heading: "What armored cars do", body: [
          "Armored cars trade armour for speed. They excel at reconnaissance, raiding logistics, harassing infantry, and reaching threatened areas fast.",
          "Think of them as mobile light support, not as tanks."
        ]},
        { heading: "Scouting and skirmishing", body: [
          "An armored car can reveal enemy positions, chase down logistics, and apply pressure where infantry alone cannot reach. Hit-and-run is its natural style.",
          "Pair it with a radio and it becomes a powerful reconnaissance tool."
        ]},
        { heading: "What they cannot do", body: [
          "Armored cars cannot trade blows with tanks or sit in front of dedicated anti-tank weapons. Their light armour means a few solid hits end the vehicle.",
          "Using one as a frontline brawler wastes it quickly."
        ]},
        { heading: "Crew and survival", body: [
          "Most armored cars work best with a small crew — a driver and gunner — and survive by movement, not by tanking damage.",
          "Keep moving, strike soft targets, and disengage before AT can answer."
        ]},
        { heading: "When to use one", body: [
          "Use armored cars for scouting, raiding, and rapid response. Do not commit them to set-piece armour battles, and do not solo one deep into AT-defended ground.",
          "Survival and information are the point, not slugging matches."
        ]},
        { heading: "Related systems", body: [
          "Armored cars support Recon and Partisans and the Map, Intel, and Radio guide, and contrast with Tanks for heavy work."
        ]}
      ],
      mistake: "Driving an armored car into a stand-up fight with tanks or AT guns. Light armour means it dies fast — use speed instead.",
      tip: "Treat armored cars as scouts and raiders. Hit soft targets, gather intel, and leave before the heavy weapons reply.",
      related: ["combat/recon-and-partisans", "guides/map-intel-radio", "vehicles/tanks", "vehicles/half-tracks"],
      sources: ["official-wiki"],
      updateNotes: "Light vehicle armour and speed are tuned between updates and vary by faction."
    },
    {
      slug: "tanks", section: "vehicles", icon: "tank",
      title: "Tanks",
      seoTitle: "Foxhole Tank Guide: Crew Discipline and Armour Use",
      metaDescription: "Foxhole tank guide: crewing armour, fuel and ammo, repair and retreat, and why you should never solo a tank.",
      tagline: "Powerful, expensive, and easily lost.",
      summary: "Tanks can dominate a frontline, but they are among the most expensive things logistics produces. A tank lost carelessly is hours of someone's work gone. Crew discipline is everything.",
      teaches: ["What tanks bring to a fight", "Why tanks need a crew", "Fuel, ammo, and repair", "When not to bring a tank"],
      sections: [
        { heading: "What tanks do", body: [
          "Tanks bring heavy armour and firepower that can break infantry lines and duel other armour. A well-used tank can shift a frontline.",
          "But that power comes with a cost the war pays whether the tank performs or not."
        ]},
        { heading: "Why tanks need a crew", body: [
          "Tanks are crew vehicles. A solo tank cannot drive, aim, spot, and manage repairs at once, and it is far easier to flank and kill.",
          "Bring a proper crew, or do not bring the tank."
        ]},
        { heading: "Fuel, ammo, and repair", body: [
          "A tank is a logistics commitment that continues after it leaves the base.",
          { list: [
            "It needs fuel to operate and ammo to fight",
            "It needs repair materials and somewhere to use them",
            "It needs map awareness so it is not ambushed",
            "It needs a planned retreat before it is committed"
          ]}
        ]},
        { heading: "When not to bring a tank", body: [
          "Do not pull a tank to 'try it', do not solo one into the front, and do not commit armour without knowing where it will repair and retreat.",
          "A tank you cannot crew or protect is better left in the stockpile."
        ]},
        { heading: "Retreat and repair", body: [
          "The best crews retreat damaged tanks to repair rather than fighting to destruction. A recovered tank fights again; a destroyed one is pure loss.",
          "Know your fallback before you advance."
        ]},
        { heading: "Related systems", body: [
          "Tanks tie to How to Not Waste Supplies, Anti-Tank Basics for the threats they face, and Field Guns and Half-Tracks for combined armour play."
        ]}
      ],
      mistake: "Pulling an expensive tank, soloing it to the front, and losing it in minutes. That is hours of faction logistics destroyed.",
      tip: "Never commit a tank without a crew, a repair plan, and a retreat route. If you cannot answer all three, leave it.",
      related: ["guides/how-to-not-waste-supplies", "combat/anti-tank", "vehicles/field-guns", "vehicles/half-tracks"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Tank armour, weapons, and faction balance are actively tuned, including around Update 64."
    },
    {
      slug: "half-tracks", section: "vehicles", icon: "truck",
      title: "Half-Tracks",
      seoTitle: "Foxhole Half-Tracks Guide",
      metaDescription: "Foxhole half-tracks guide: the troop-carrier and mobile-support role between trucks and tanks.",
      tagline: "Moving infantry into the fight.",
      summary: "Half-tracks bridge trucks and tanks. They carry infantry with some protection, support pushes, and help squads reach and survive contested ground together.",
      teaches: ["The half-track role", "Moving infantry safely", "Half-tracks as support", "Crew and survival limits"],
      sections: [
        { heading: "What half-tracks do", body: [
          "Half-tracks are armoured transports. They carry infantry with more protection than a truck while staying more mobile and affordable than a tank.",
          "Their main job is delivering a squad to where it needs to fight, intact and together."
        ]},
        { heading: "Moving infantry safely", body: [
          "Crossing contested ground on foot is slow and exposed. A half-track moves a squad through that ground faster and with cover, keeping the group together for the assault.",
          "A squad that arrives together and ready fights far better than one that trickles in."
        ]},
        { heading: "Half-tracks as support", body: [
          "Beyond transport, half-tracks can provide fire support and act as a mobile rally point for a push, depending on the variant.",
          "They are a flexible middle option in combined-arms play."
        ]},
        { heading: "Crew and survival limits", body: [
          "Half-tracks are protected but not tanks. They resist small-arms fire well but fall to dedicated anti-tank weapons and armour.",
          "Use them to move and support, not to brawl with tanks."
        ]},
        { heading: "When to use one", body: [
          "Use half-tracks to deliver and support infantry, especially across exposed approaches. Pull them back before committing them to direct armour fights.",
          "Match the vehicle to the job: transport and support, not assault."
        ]},
        { heading: "Related systems", body: [
          "Half-tracks support Infantry Basics and Frontline Basics, and work alongside Tanks and Armored Cars in combined operations."
        ]}
      ],
      mistake: "Driving a loaded half-track into a tank duel. You risk the vehicle and the whole squad riding in it.",
      tip: "Use half-tracks to deliver a squad together and intact, then pull the vehicle back out of anti-tank range.",
      related: ["combat/infantry-basics", "guides/frontline-basics", "vehicles/tanks", "vehicles/armored-cars"],
      sources: ["official-wiki"],
      updateNotes: "Half-track variants and protection are tuned between updates and vary by faction."
    },
    {
      slug: "field-guns", section: "vehicles", icon: "shell",
      title: "Field Guns",
      seoTitle: "Foxhole Field Guns Guide",
      metaDescription: "Foxhole field guns guide: towed and emplaced direct-fire guns, crew roles, and defensive use against armour.",
      tagline: "Towed firepower for the line.",
      summary: "Field guns are towed or emplaced direct-fire weapons that anchor defences and threaten armour. They hit hard but are slow to relocate, so positioning and crew coordination decide their value.",
      teaches: ["What field guns are for", "Towing and positioning", "Crewing a field gun", "Strengths and vulnerabilities"],
      sections: [
        { heading: "What field guns do", body: [
          "Field guns deliver heavy direct fire, particularly against vehicles and fortifications. They are a powerful answer to armour and a strong anchor for a defensive position.",
          "They are less about mobility and more about controlling an approach."
        ]},
        { heading: "Towing and positioning", body: [
          "Field guns are moved by towing them with a suitable vehicle. Because relocating is slow, the position you choose matters enormously.",
          "Place them with good fields of fire over likely armour routes, with cover and a way to withdraw the gun if needed."
        ]},
        { heading: "Crewing a field gun", body: [
          "A field gun works best with a crew handling aiming, loading, and ammo supply, plus spotting and protection from nearby infantry.",
          "An unsupported gun is easily flanked and lost."
        ]},
        { heading: "Strengths and vulnerabilities", body: [
          "Field guns punch hard but are exposed: they have little protection for the crew and cannot reposition quickly under pressure.",
          "Protect them with infantry and terrain, and do not leave them stranded forward when a line falls back."
        ]},
        { heading: "When to use one", body: [
          "Deploy field guns to defend an approach against armour or to add heavy fire to a static line. Avoid using them where the front is too fluid to keep them supported.",
          "They reward prepared, deliberate defence."
        ]},
        { heading: "Related systems", body: [
          "Field guns connect to Anti-Tank Weapons, Anti-Tank Basics, and the Building section for the positions that protect them."
        ]}
      ],
      mistake: "Placing a field gun forward with no infantry support, then losing it when the position is flanked.",
      tip: "Choose the field gun's position as carefully as a builder chooses a bunker's. It cannot reposition quickly, so the first placement must be right.",
      related: ["weapons/anti-tank-weapons", "combat/anti-tank", "building/field-bases", "artillery/howitzers"],
      sources: ["official-wiki"],
      updateNotes: "Field gun types and balance are tuned between updates and vary by faction."
    }
  ];

  /* ================= ARTILLERY ================= */
  D.artillery = [
    {
      slug: "mortar-basics", section: "artillery", icon: "shell",
      title: "Mortar Basics",
      seoTitle: "Foxhole Mortar Guide for Beginners",
      metaDescription: "Foxhole mortar guide: the entry point to indirect fire, spotting, shell supply, and using mortars without wasting ammo.",
      tagline: "Your introduction to indirect fire.",
      summary: "Mortars are the most accessible indirect-fire weapon and the best way to learn artillery thinking. They lob shells onto targets you may not see — which makes spotting and shell supply central from the start.",
      teaches: ["What indirect fire is", "How mortars work in practice", "Why spotting matters from day one", "Shell supply discipline"],
      sections: [
        { heading: "What indirect fire is", body: [
          "Indirect fire means hitting a target by arcing shells onto it rather than shooting at something you can see. Mortars are the simplest example and a great teacher.",
          "The mortar operator and the target are usually not in line of sight of each other."
        ]},
        { heading: "How mortars work in practice", body: [
          "A mortar lobs shells toward a chosen point, and the operator adjusts based on where shells land. Mortars are mobile enough for a small team to set up, fire, and relocate.",
          "They suit harassing positions, supporting infantry assaults, and softening defences."
        ]},
        { heading: "Why spotting matters", body: [
          "Because the operator often cannot see the target, a spotter who observes the impacts and calls corrections transforms a mortar from a guess into a weapon.",
          "Firing blind mostly wastes shells. Pair up before you set up."
        ]},
        { heading: "Shell supply", body: [
          "Mortars consume shells quickly, and shells are real logistics. A mortar team needs an ammo supply or a teammate hauling shells, or the gun goes silent fast.",
          "Plan shell supply before you plan targets."
        ]},
        { heading: "When to use a mortar", body: [
          "Use mortars to support an assault, harass a defended position, or hit targets infantry cannot reach. Do not fire them speculatively into the map.",
          "Every shell should have a reason and, ideally, a spotter behind it."
        ]},
        { heading: "Related systems", body: [
          "Mortars lead naturally into Howitzers for heavier fire, and Spotting is essential reading for any artillery role."
        ]}
      ],
      mistake: "Firing a mortar at a target nobody is spotting. Most of those shells miss, and shells are expensive logistics.",
      tip: "Never set up a mortar without a spotter and a shell supply. Indirect fire is a team activity, even at the mortar level.",
      related: ["artillery/howitzers", "artillery/spotting", "guides/logistics-quickstart", "combat/infantry-basics"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Mortar mechanics and shell costs are tuned between updates."
    },
    {
      slug: "howitzers", section: "artillery", icon: "shell",
      title: "Howitzers",
      seoTitle: "Foxhole Howitzer and Artillery Guide",
      metaDescription: "Foxhole howitzer guide: heavy artillery crew roles, shell logistics, and coordinated indirect fire.",
      tagline: "Heavy artillery, run as a crew.",
      summary: "Howitzers and heavy artillery deliver devastating indirect fire, but only as a coordinated effort. Spotter, gunner, loader, and logistics support all have to work together — and shell supply matters as much as the gun.",
      teaches: ["What heavy artillery does", "The four crew roles", "Why shell supply is half the job", "Coordinating an artillery position"],
      sections: [
        { heading: "What howitzers do", body: [
          "Howitzers are heavy indirect-fire weapons that can break fortifications, suppress regions, and destroy targets far beyond the frontline.",
          "Their power is matched by their appetite for shells and coordination."
        ]},
        { heading: "The crew roles", body: [
          "Effective artillery is a fire team, not a single player.",
          { list: [
            "Spotter — observes targets and impacts and calls corrections",
            "Gunner — aims and fires the piece based on those calls",
            "Loader — keeps the gun loaded and the rhythm of fire steady",
            "Logistics support — keeps a constant flow of shells coming"
          ]}
        ]},
        { heading: "Why shell supply is half the job", body: [
          "A howitzer with no shells is scenery. Shells are heavy, expensive logistics, so a dedicated supplier hauling shells is as important as the gunner.",
          "Plan and stage shell supply before the gun ever fires."
        ]},
        { heading: "Coordinating the position", body: [
          "Howitzer positions need to coordinate target priority with the wider front, avoid friendly fire, and be ready to relocate when targeted in return.",
          "Communication between the crew and the frontline they support is essential."
        ]},
        { heading: "When to use heavy artillery", body: [
          "Use howitzers against fixed targets — fortifications, bunkers, dug-in positions — and to support major operations. Do not run heavy artillery without spotting and shell logistics in place.",
          "An uncoordinated howitzer wastes some of the war's most expensive ammunition."
        ]},
        { heading: "Related systems", body: [
          "Howitzers depend on Spotting, are threatened by Counterbattery, and step up from Mortar Basics."
        ]}
      ],
      mistake: "Running a howitzer without dedicated shell logistics. The gun falls silent and a four-person crew sits idle.",
      tip: "Staff all four roles before the first shot: spotter, gunner, loader, and a logistics player whose only job is shells.",
      related: ["artillery/spotting", "artillery/counterbattery", "artillery/mortar-basics", "logistics/shipping"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Artillery types, ranges, and shell costs are tuned between updates."
    },
    {
      slug: "spotting", section: "artillery", icon: "crosshair",
      title: "Spotting",
      seoTitle: "Foxhole Artillery Spotting Guide",
      metaDescription: "Foxhole spotting guide: how to observe targets, call corrections, and make artillery accurate instead of wasteful.",
      tagline: "The eyes that make artillery work.",
      summary: "Spotting is the role that turns artillery from noise into precision. A spotter observes the target and the impacts, and calls corrections so each shell lands closer than the last.",
      teaches: ["Why artillery needs a spotter", "What a spotter actually does", "Calling corrections clearly", "Staying alive as a spotter"],
      sections: [
        { heading: "Why artillery needs spotting", body: [
          "Artillery crews usually cannot see their targets. Without a spotter, they are firing at a map coordinate and hoping — which wastes shells the war worked hard to produce.",
          "A spotter is what converts indirect fire into accurate fire."
        ]},
        { heading: "What a spotter does", body: [
          "The spotter positions where they can see the target area, observes where shells land, and reports adjustments back to the gun crew.",
          "They also confirm hits, identify when a target is destroyed, and help pick the next priority."
        ]},
        { heading: "Calling corrections", body: [
          "Good correction calls are clear and consistent: describe how far and in which direction the next shell should move relative to the last impact.",
          { list: [
            "Use steady, agreed reference directions",
            "Adjust in clear increments, not vague nudges",
            "Confirm each impact before the next correction",
            "Tell the crew clearly when the target is destroyed"
          ]}
        ]},
        { heading: "Staying alive as a spotter", body: [
          "Spotters work close to the enemy to see targets, which makes them vulnerable. Use cover and elevation, stay concealed, and do not linger in an exposed spot.",
          "A dead spotter blinds the whole artillery crew."
        ]},
        { heading: "When spotting matters most", body: [
          "Every artillery engagement benefits from spotting, and heavy artillery is nearly useless without it. If you want to be valuable to an artillery crew fast, learn to spot.",
          "It is a high-impact role that needs no expensive equipment."
        ]},
        { heading: "Related systems", body: [
          "Spotting is essential to Mortar Basics and Howitzers, and overlaps with the Map, Intel, and Radio guide."
        ]}
      ],
      mistake: "Spotting from an exposed, obvious position and getting killed, leaving the gun crew firing blind.",
      tip: "Keep correction calls short, consistent, and confirmed. Clear communication is the entire skill of spotting.",
      related: ["artillery/howitzers", "artillery/mortar-basics", "guides/map-intel-radio", "artillery/counterbattery"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Spotting tools and artillery accuracy are tuned between updates."
    },
    {
      slug: "counterbattery", section: "artillery", icon: "shell",
      title: "Counterbattery",
      seoTitle: "Foxhole Counterbattery Guide",
      metaDescription: "Foxhole counterbattery guide: finding and destroying enemy artillery, and relocating to survive their fire.",
      tagline: "Artillery against artillery.",
      summary: "Counterbattery is the duel between artillery crews: locating the enemy's guns and destroying them before they destroy yours. It makes relocation and concealment as important as firepower.",
      teaches: ["What counterbattery means", "How to locate enemy artillery", "Why relocation keeps you alive", "Concealing your own position"],
      sections: [
        { heading: "What counterbattery is", body: [
          "Counterbattery fire targets the enemy's artillery itself. Because artillery is powerful and expensive, knocking out an enemy battery can shift a whole sector.",
          "It turns artillery into a contest between crews, not just a tool against the front."
        ]},
        { heading: "Locating enemy artillery", body: [
          "Enemy guns reveal themselves through their fire, the direction shells arrive from, and scouting reports. Recon, observation, and intel work together to pinpoint a battery.",
          "Finding the enemy guns is most of the battle."
        ]},
        { heading: "Why relocation matters", body: [
          "If you can find their artillery, they can find yours. Crews that fire from one fixed spot for too long invite counterbattery and lose their gun.",
          "Plan to displace: fire, observe, and relocate before the enemy ranges you in."
        ]},
        { heading: "Concealing your position", body: [
          "Reduce your signature: use terrain and cover, avoid predictable firing patterns, and keep your battery away from obvious, mapped locations.",
          "The artillery that survives is the one that is hard to find."
        ]},
        { heading: "When to prioritise counterbattery", body: [
          "Prioritise counterbattery when enemy artillery is actively hurting your front or your own guns. When there is no enemy battery in play, those shells are better spent on the front directly.",
          "It is a response to a threat, not a constant activity."
        ]},
        { heading: "Related systems", body: [
          "Counterbattery builds on Howitzers and Spotting, and relies on Recon and Partisans and Map intel to find targets."
        ]}
      ],
      mistake: "Firing artillery from the same fixed position for too long. A static gun is an easy counterbattery target.",
      tip: "Build relocation into your fire plan. Fire, check for return fire, and displace before the enemy can range your battery.",
      related: ["artillery/howitzers", "artillery/spotting", "combat/recon-and-partisans", "guides/map-intel-radio"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Artillery ranges and detection are tuned between updates."
    }
  ];

  /* ================= BUILDING ================= */
  D.building = [
    {
      slug: "field-bases", section: "building", icon: "bunker",
      title: "Field Bases",
      seoTitle: "Foxhole Field Bases Guide",
      metaDescription: "Foxhole field bases guide: placing forward bases that support a frontline without becoming an easy enemy objective.",
      tagline: "Forward footholds, placed with care.",
      summary: "Field bases are the forward positions that let infantry spawn, resupply, and hold near the front. A good one anchors a push; a badly placed one is a gift to the enemy.",
      teaches: ["What field bases provide", "Where to place them", "Supplying a forward base", "Common placement errors"],
      sections: [
        { heading: "What field bases do", body: [
          "Field bases give frontline troops a forward point to spawn, resupply, and fall back to. They shorten the distance between the stockpile and the fight.",
          "A push without a forward base often stalls simply because reinforcements take too long to arrive."
        ]},
        { heading: "Where to place them", body: [
          "A field base should be close enough to support the front but not so exposed that it is overrun immediately. Cover, terrain, and supply access all matter.",
          "Think about how the enemy will approach it before you place it."
        ]},
        { heading: "Supplying a field base", body: [
          "A forward base is only useful with supplies in it. It needs uniforms, ammo, medical gear, and maintenance materials delivered and kept topped up.",
          "Plan the logistics route to the base as part of placing it."
        ]},
        { heading: "Common placement errors", body: [
          { list: [
            "Placing a base too far forward where it cannot be defended",
            "Placing it with no cover or supply route",
            "Building a base nobody is willing to garrison",
            "Forgetting maintenance, so the base decays and is lost passively"
          ]}
        ]},
        { heading: "When to build one", body: [
          "Build a field base when a front needs a forward foothold and players will actually use and supply it. Do not scatter bases that no one defends or stocks.",
          "A single well-supplied base beats three neglected ones."
        ]},
        { heading: "Related systems", body: [
          "Field bases connect to Public Stockpiles, Maintenance Supplies, and Bunkers for heavier fortification."
        ]}
      ],
      mistake: "Dropping a field base far forward with no cover, no supply route, and no garrison. It just hands the enemy a target.",
      tip: "Before placing a field base, confirm two things: someone will defend it and someone will supply it. Without both, do not build it.",
      related: ["logistics/public-stockpiles", "building/maintenance-supplies", "building/bunkers", "building/common-mistakes"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Base mechanics and decay rules are adjusted between updates."
    },
    {
      slug: "trenches", section: "building", icon: "trench",
      title: "Building Trenches",
      seoTitle: "Foxhole Trench Building Guide",
      metaDescription: "Foxhole trench building guide: digging trench lines that help defenders instead of the enemy.",
      tagline: "Dig lines that defend, not betray.",
      summary: "Trench networks are cheap, powerful defences — when built well. Built badly, they channel your own troops poorly and hand the enemy ready-made cover.",
      teaches: ["What trench networks do", "Where to dig and where not to", "Connecting trenches sensibly", "Why bad trenches help the enemy"],
      sections: [
        { heading: "What trench networks do", body: [
          "Trenches let infantry fight under cover, move along a line protected, and reinforce threatened sections without crossing open ground.",
          "A well-built trench network multiplies the defensive value of every soldier in it."
        ]},
        { heading: "Where to dig", body: [
          "Dig trenches where defenders need to hold, with fields of fire over the ground the enemy must cross, supported by friendly bases and fire positions.",
          "The position should make the attacker's approach costly."
        ]},
        { heading: "Connecting trenches", body: [
          "Trenches should connect into a network so troops can move and reinforce under cover, with depth — a second line behind the first — so the position can be defended in layers.",
          "Disconnected trench stubs are far weaker than a coherent network."
        ]},
        { heading: "Why bad trenches help the enemy", body: [
          "A trench is terrain that anyone can use. Dug too far forward or facing the wrong way, it becomes the enemy's staging position and cover once they reach it.",
          { list: [
            "Avoid trenches the enemy can capture and turn around",
            "Do not block friendly movement or counterattack routes",
            "Do not dig isolated trenches with no support",
            "Plan the network; do not dig reflexively"
          ]}
        ]},
        { heading: "When to dig", body: [
          "Dig when a line needs holding and someone has planned the layout. If you are new, dig where experienced builders direct rather than improvising.",
          "Thoughtless digging can be worse than no trench at all."
        ]},
        { heading: "Related systems", body: [
          "This pairs with Trenches and Cover on the combat side, and with Field Bases and Common Building Mistakes."
        ]}
      ],
      mistake: "Digging a long trench forward of your line. When the enemy reaches it, they get free cover aimed at your own positions.",
      tip: "Plan the whole network before digging: where it holds, how it connects, and the second line behind it. Then dig.",
      related: ["combat/trenches-and-cover", "building/field-bases", "building/common-mistakes", "building/bunkers"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Trench and entrenchment mechanics are periodically adjusted."
    },
    {
      slug: "bunkers", section: "building", icon: "bunker",
      title: "Bunkers",
      seoTitle: "Foxhole Bunker Building Guide",
      metaDescription: "Foxhole bunker guide: building fortified bunker bases with AI coverage, supply access, and maintenance in mind.",
      tagline: "Fortifications that hold regions.",
      summary: "Bunkers are heavy fortifications that can turn a region into a hard problem for the enemy. They demand planning: defensive coverage, supply access, repair access, and maintenance all have to be designed in.",
      teaches: ["What bunkers provide", "Designing for coverage and supply", "Why maintenance is non-negotiable", "Avoiding overbuilding"],
      sections: [
        { heading: "What bunkers do", body: [
          "Bunkers are durable fortified structures that resist direct and indirect fire and anchor a defensive position. A good bunker network can hold a region against repeated assaults.",
          "They are among the strongest defensive tools players can build."
        ]},
        { heading: "Designing for coverage and supply", body: [
          "A bunker has to do more than be tough. It needs defensive coverage over the approaches, supply access so it can be stocked, and repair access so it can be maintained under pressure.",
          "Builders should think about enemy vehicle angles, infantry approaches, and how defenders move and resupply inside it."
        ]},
        { heading: "Why maintenance is non-negotiable", body: [
          "Bunkers decay without maintenance supplies. A grand bunker network that nobody maintains will weaken and fall on its own, without the enemy doing much at all.",
          "Maintenance has to be planned from the moment construction starts."
        ]},
        { heading: "Avoiding overbuilding", body: [
          "Bigger is not automatically better. Sprawling bunkers that exceed what players can garrison, supply, and maintain become liabilities.",
          { list: [
            "Build to the size the defenders can actually hold",
            "Ensure supply routes exist before expanding",
            "Plan maintenance before adding more structure",
            "A compact, maintained bunker beats a sprawling, decaying one"
          ]}
        ]},
        { heading: "When to build bunkers", body: [
          "Build bunkers where a region must be held and a community will commit to garrisoning and maintaining them. Casual bunker construction usually produces decaying liabilities.",
          "Coordinate with the players who will live in the bunker."
        ]},
        { heading: "Related systems", body: [
          "Bunkers connect to Maintenance Supplies, Field Bases, and the Facilities section for the industry that supplies them."
        ]}
      ],
      mistake: "Building a huge bunker network with no maintenance plan. It decays and falls without the enemy needing to assault it.",
      tip: "Design coverage, supply, and maintenance before you design walls. A bunker is only as strong as its weakest support system.",
      related: ["building/maintenance-supplies", "building/field-bases", "building/common-mistakes", "facilities/overview"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Bunker mechanics, decay, and maintenance rules are actively adjusted, including around Update 64."
    },
    {
      slug: "maintenance-supplies", section: "building", icon: "wrench",
      title: "Maintenance Supplies",
      seoTitle: "Foxhole Maintenance Supplies Guide",
      metaDescription: "Foxhole maintenance supplies guide: preventing structure decay and keeping bases and bunkers alive.",
      tagline: "The supplies that stop decay.",
      summary: "Structures in Foxhole decay over time. Maintenance supplies are what keep bases, bunkers, and fortifications standing. A region can be lost simply because nobody kept its maintenance topped up.",
      teaches: ["What decay is and why it exists", "What maintenance supplies do", "Keeping maintenance topped up", "Why this is a real job"],
      sections: [
        { heading: "What decay is", body: [
          "Player-built structures gradually decay if left unattended. This prevents the map from filling permanently with abandoned construction and keeps fortifications a living responsibility.",
          "Decay means a base is never finished — it has to be sustained."
        ]},
        { heading: "What maintenance supplies do", body: [
          "Maintenance supplies are consumed to keep structures from decaying. Stocked in a base, they hold its structures and fortifications in good condition over time.",
          "Without them, even a strong position quietly weakens."
        ]},
        { heading: "Keeping maintenance topped up", body: [
          "Maintenance is an ongoing logistics task, not a one-time delivery.",
          { list: [
            "Check maintenance levels at bases you rely on",
            "Deliver maintenance supplies before they run out, not after",
            "Treat key bunkers and field bases as standing maintenance routes",
            "Coordinate so important positions are never left to decay"
          ]}
        ]},
        { heading: "Why this is a real job", body: [
          "Maintenance runs are unglamorous but decisive. A region lost to decay is lost without a fight, and preventing that is a genuine contribution.",
          "Solo players in particular can own maintenance for a sector."
        ]},
        { heading: "When maintenance matters most", body: [
          "Maintenance matters most for the bunkers and bases a faction depends on. The bigger the fortification, the more catastrophic it is to let it decay.",
          "Build maintenance into the plan for every major structure."
        ]},
        { heading: "Related systems", body: [
          "Maintenance ties Bunkers and Field Bases to the logistics chain through Public Stockpiles and Logistics Trucks."
        ]}
      ],
      mistake: "Building impressive fortifications and assuming they are done. Without maintenance, they decay and fall on their own.",
      tip: "Adopt a maintenance route. Pick a few important bases and make keeping their maintenance stocked your standing job.",
      related: ["building/bunkers", "building/field-bases", "logistics/public-stockpiles", "vehicles/logistics-trucks"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Decay rates and maintenance mechanics are actively tuned, including around Update 64."
    },
    {
      slug: "common-mistakes", section: "building", icon: "wrench",
      title: "Common Building Mistakes",
      seoTitle: "Foxhole Building Mistakes to Avoid",
      metaDescription: "Common Foxhole building mistakes: bad placement, ignoring maintenance, overbuilding, and blocking friendly movement.",
      tagline: "What new builders get wrong.",
      summary: "Building is easy to do badly and hard to fix later. This page collects the mistakes that new builders make most often, so you can avoid creating problems your faction has to live with.",
      teaches: ["The most common building errors", "Why placement mistakes are permanent", "How overbuilding backfires", "How to build responsibly"],
      sections: [
        { heading: "Why building mistakes are costly", body: [
          "Structures are persistent and slow to remove. A bad build is not a quick mistake — it sits on the map affecting players for the rest of the war.",
          "That is why builders should plan before they place."
        ]},
        { heading: "Bad placement", body: [
          "The most common error is placement: trenches dug forward that the enemy captures, structures blocking friendly movement, bases with no cover or supply route.",
          "Placement mistakes cannot usually be undone, so they must be avoided up front."
        ]},
        { heading: "Ignoring maintenance", body: [
          "New builders build and then walk away. Without maintenance, the structure decays and is lost, and the materials spent on it are wasted.",
          "Never build something you have not planned to maintain."
        ]},
        { heading: "Overbuilding and clutter", body: [
          { list: [
            "Sprawling defences nobody can garrison or supply",
            "Redundant structures that just consume materials and maintenance",
            "Construction that blocks roads, movement, or counterattacks",
            "Vanity builds that serve no defensive purpose"
          ]}
        ]},
        { heading: "How to build responsibly", body: [
          "Plan the position, check supply and maintenance, coordinate with the players who will use it, and build only what is needed. When unsure, ask an experienced builder before placing anything.",
          "Good building is mostly restraint and planning."
        ]},
        { heading: "Related systems", body: [
          "This page summarises the cautions detailed in Field Bases, Building Trenches, Bunkers, and Maintenance Supplies."
        ]}
      ],
      mistake: "Building enthusiastically without a plan. Enthusiasm plus no plan produces clutter the whole faction has to work around.",
      tip: "When unsure, do not place the structure. Ask a veteran builder first — an unbuilt mistake costs nothing to avoid.",
      related: ["building/field-bases", "building/trenches", "building/bunkers", "building/maintenance-supplies"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Building rules and structure types are adjusted between updates."
    }
  ];

  /* ================= FACILITIES ================= */
  D.facilities = [
    {
      slug: "overview", section: "facilities", icon: "factory",
      title: "Facilities Overview",
      seoTitle: "Foxhole Facilities Guide: An Overview",
      metaDescription: "Foxhole facilities guide: what player-built facilities are, why they are advanced logistics, and why beginners should not overbuild.",
      tagline: "Advanced industry, not a beginner toy.",
      summary: "Facilities are large player-built industrial sites that produce the war's advanced equipment. They are powerful and important — and they are an advanced project, not something a new player should start solo.",
      teaches: ["What facilities are", "Why they are advanced logistics", "Why beginners should not overbuild", "How to get involved safely"],
      sections: [
        { heading: "What facilities are", body: [
          "Facilities are player-constructed industrial complexes that process resources and produce advanced materials and equipment beyond what standard refineries and factories make.",
          "They are infrastructure projects: large, ongoing, and central to a faction's high-end production."
        ]},
        { heading: "Why they are advanced logistics", body: [
          "A facility is not a single building. It is a system of connected production, power, and resource flow that has to be planned, maintained, and supplied continuously.",
          "Running one well requires understanding the whole logistics chain it sits inside."
        ]},
        { heading: "Why beginners should not overbuild", body: [
          "New players sometimes start ambitious facilities they cannot finish, supply, or maintain. The result is a half-built site that consumes resources and produces nothing.",
          "Facilities you cannot sustain are a drain, not an asset."
        ]},
        { heading: "How to get involved safely", body: [
          { list: [
            "Join an existing facility run by experienced players first",
            "Learn power, pipelines, and production flow before building",
            "Contribute resources and labour to a working facility",
            "Only start your own once you understand the full system"
          ]}
        ]},
        { heading: "Why facilities matter", body: [
          "Despite the caution, facilities are vital. They produce advanced equipment that decides late-war fights. The point is to respect their complexity, not avoid them.",
          "Learn them properly and facility work becomes one of the most rewarding logistics roles."
        ]},
        { heading: "Related systems", body: [
          "Continue with Power and Pipelines, Production Chains, and Facility Etiquette."
        ]}
      ],
      mistake: "Starting a large solo facility as a new player. You will most likely leave behind a half-built, resource-draining site.",
      tip: "Join a working facility before building your own. Contributing to an established one teaches the whole system safely.",
      related: ["facilities/power-and-pipelines", "facilities/production-chains", "facilities/facility-etiquette", "logistics/refinery-factory-loop"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Facility mechanics are complex and frequently adjusted between updates."
    },
    {
      slug: "power-and-pipelines", section: "facilities", icon: "wrench",
      title: "Power and Pipelines",
      seoTitle: "Foxhole Facility Power and Pipelines Guide",
      metaDescription: "Foxhole guide to facility power and pipelines: keeping advanced production running with energy and resource flow.",
      tagline: "Keeping the lights on and the resources moving.",
      summary: "Facilities do not run on their own. Power keeps production buildings working, and pipelines move resources between them. Get either wrong and the whole facility stalls.",
      teaches: ["Why facilities need power", "How pipelines move resources", "Planning facility layout", "Avoiding bottlenecks"],
      sections: [
        { heading: "Why facilities need power", body: [
          "Many facility buildings require power to operate. Without an adequate, steady supply, production slows or stops regardless of how much raw material is on hand.",
          "Power generation and fuel for it are part of the facility's ongoing logistics."
        ]},
        { heading: "How pipelines work", body: [
          "Pipelines carry resources — such as liquids and processed materials — between facility buildings, replacing the need to haul everything by hand inside the site.",
          "A facility laid out with sensible pipeline runs is far more efficient than one that is not."
        ]},
        { heading: "Planning layout", body: [
          "Facility layout should be planned before construction: where power is generated, how pipelines connect production, and how trucks and trains reach the site to deliver and collect.",
          "Retrofitting a badly planned facility is painful, so plan first."
        ]},
        { heading: "Avoiding bottlenecks", body: [
          { list: [
            "Ensure power keeps up with the buildings that need it",
            "Route pipelines so no production stage starves",
            "Keep fuel and inputs flowing, not just stockpiled once",
            "Leave access for vehicles to load and unload"
          ]}
        ]},
        { heading: "When this matters", body: [
          "Power and pipeline planning matters the moment a facility grows beyond a couple of buildings. Small additions can be informal; real facilities need design.",
          "Treat it as engineering, because that is what it is."
        ]},
        { heading: "Related systems", body: [
          "This connects to the Facilities Overview, Production Chains, and the broader Logistics section."
        ]}
      ],
      mistake: "Adding production buildings without scaling power and pipelines. The new buildings sit idle and the materials are wasted.",
      tip: "Plan power and pipeline routes before you build. A facility is an engineering project, so design it like one.",
      related: ["facilities/overview", "facilities/production-chains", "facilities/facility-etiquette", "logistics/refinery-factory-loop"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Power and pipeline mechanics are complex and adjusted between updates."
    },
    {
      slug: "production-chains", section: "facilities", icon: "factory",
      title: "Production Chains",
      seoTitle: "Foxhole Facility Production Chains Guide",
      metaDescription: "Foxhole production chains guide: how facility output is built from multi-stage processing of resources.",
      tagline: "Multi-stage industry, planned end to end.",
      summary: "Facility output comes from production chains: resources processed through several stages into advanced materials and equipment. Understanding the chain is what lets a facility actually produce something useful.",
      teaches: ["What a production chain is", "Why each stage depends on the last", "Planning output around need", "Keeping a chain flowing"],
      sections: [
        { heading: "What a production chain is", body: [
          "A production chain is a sequence of processing steps. Raw and refined resources pass through multiple facility buildings, each adding a stage, until the final advanced product emerges.",
          "Nothing high-end appears in one step; it is the end of a chain."
        ]},
        { heading: "Why stages depend on each other", body: [
          "Each stage consumes the output of the previous one. If any stage stalls — from missing inputs, no power, or no labour — everything downstream stops with it.",
          "A chain is only as fast as its slowest or most-starved stage."
        ]},
        { heading: "Planning output around need", body: [
          "Decide what the war actually needs before committing a facility's chain to producing it. Producing advanced equipment nobody is using wastes enormous upstream effort.",
          "Coordinate facility output with frontline demand."
        ]},
        { heading: "Keeping a chain flowing", body: [
          { list: [
            "Keep every stage supplied with its inputs",
            "Watch for the bottleneck stage and reinforce it",
            "Maintain power and pipelines feeding the chain",
            "Move finished output forward instead of letting it pile up"
          ]}
        ]},
        { heading: "When chains matter", body: [
          "Production chains matter most for advanced equipment that frontline factories cannot make. For everyday gear, the standard refinery-factory loop is simpler and sufficient.",
          "Use facilities for what only facilities can produce."
        ]},
        { heading: "Related systems", body: [
          "This builds on the Facilities Overview and Power and Pipelines, and connects back to the Refinery and Factory Loop."
        ]}
      ],
      mistake: "Running a full production chain to make advanced equipment that no one at the front is asking for. The whole chain's effort is wasted.",
      tip: "Identify the bottleneck stage and feed it first. A chain only moves as fast as its most-starved step.",
      related: ["facilities/overview", "facilities/power-and-pipelines", "logistics/refinery-factory-loop", "facilities/facility-etiquette"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Production recipes and chain stages are complex and frequently adjusted."
    },
    {
      slug: "facility-etiquette", section: "facilities", icon: "wrench",
      title: "Facility Etiquette",
      seoTitle: "Foxhole Facility Etiquette Guide",
      metaDescription: "Foxhole facility etiquette: respecting public and shared facilities, not hoarding, and contributing fairly.",
      tagline: "Shared industry, shared responsibility.",
      summary: "Many facilities are public or shared. They only work if players respect them: contributing resources, taking output fairly, and not hoarding or sabotaging the work of others.",
      teaches: ["Why facility etiquette exists", "Respecting public facilities", "Contributing fairly", "How bad behaviour breaks facilities"],
      sections: [
        { heading: "Why etiquette matters here", body: [
          "Facilities represent huge amounts of collective labour. A shared facility only functions if the players using it treat it as common infrastructure, not a personal resource.",
          "Etiquette is what keeps facilities running for everyone."
        ]},
        { heading: "Respecting public facilities", body: [
          "Public facilities belong to the war effort. Use their output for the front, not for a private hoard, and do not dismantle or repurpose other players' work without coordination.",
          "Treat someone else's facility the way you would want yours treated."
        ]},
        { heading: "Contributing fairly", body: [
          { list: [
            "If you take output, contribute resources or labour back",
            "Help maintain power, pipelines, and supply",
            "Coordinate before changing a shared facility's layout",
            "Do not strip a facility's stock for personal projects"
          ]}
        ]},
        { heading: "How bad behaviour breaks facilities", body: [
          "Hoarding output, draining inputs, blocking access, or carelessly altering shared builds can collapse a facility that many players relied on.",
          "One inconsiderate player can undo days of collective work."
        ]},
        { heading: "When to build private versus public", body: [
          "If you want full control, contribute to a clearly private regiment facility with its owners' agreement. If you use public facilities, accept the shared rules that come with them.",
          "Know which kind you are using and behave accordingly."
        ]},
        { heading: "Related systems", body: [
          "This extends How to Not Waste Supplies into facility play, alongside the Facilities Overview and Production Chains."
        ]}
      ],
      mistake: "Treating a public facility as a personal supply depot — taking its output while contributing nothing back.",
      tip: "If you draw from a shared facility, give back: resources, labour, or maintenance. Shared industry runs on reciprocity.",
      related: ["facilities/overview", "facilities/production-chains", "guides/how-to-not-waste-supplies", "logistics/public-stockpiles"],
      sources: ["official-wiki", "discord"],
      updateNotes: "Facility ownership and access mechanics are adjusted between updates."
    }
  ];

  /* ================= NAVAL ================= */
  D.naval = [
    {
      slug: "overview", section: "naval", icon: "ship",
      title: "Naval Overview",
      seoTitle: "Foxhole Naval Guide: An Overview",
      metaDescription: "Foxhole naval guide: why sea lanes are supply lines, the role of water in the war, and how naval play fits in.",
      tagline: "The war reaches across the water.",
      summary: "Foxhole's map includes water, and water is not a barrier so much as another battlefield. Sea lanes are supply lines, coasts are vulnerable, and naval play opens routes and threats the land war cannot.",
      teaches: ["Why water matters in Foxhole", "Sea lanes as supply lines", "The threats naval play creates", "How naval fits the wider war"],
      sections: [
        { heading: "Why water matters", body: [
          "Large stretches of the Foxhole map are water. Rather than dividing the war into separate theatres, water connects them — for whoever controls it.",
          "Ignoring the naval dimension means leaving coasts and sea routes unguarded."
        ]},
        { heading: "Sea lanes are supply lines", body: [
          "Ships can move large quantities of supply across water faster than any land detour. A controlled sea lane is a logistics artery; a contested one is a vulnerability.",
          "Naval logistics can supply coastal regions that are awkward to reach overland."
        ]},
        { heading: "Threats naval play creates", body: [
          "Naval forces can raid coastlines, threaten coastal bases, and support or oppose landings. A coast that feels safe can become a front the moment the enemy commits ships.",
          "Coastal regions need to account for the sea, not just the land."
        ]},
        { heading: "How naval fits the war", body: [
          "Naval is a supporting dimension: it enables logistics, landings, and coastal pressure that shape the land war rather than replacing it.",
          "Even players who never crew a ship should understand that the coast is a real axis."
        ]},
        { heading: "Getting started with naval", body: [
          "Naval play is crew-intensive and benefits from coordination. Start by helping with naval logistics before moving to combat ships.",
          "As with everything in Foxhole, learn the supporting roles first."
        ]},
        { heading: "Related systems", body: [
          "Continue with Naval Logistics, Landing Operations, and Large Ships."
        ]}
      ],
      mistake: "Assuming a coastal region is safe because the land front is quiet. The sea is its own approach.",
      tip: "Treat the coastline of any region you defend as a real frontier. Watch the water the way you watch the roads.",
      related: ["naval/logistics", "naval/landing-operations", "naval/large-ships", "maps/world-map"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Naval mechanics and ship types are adjusted between updates."
    },
    {
      slug: "logistics", section: "naval", icon: "ship",
      title: "Naval Logistics",
      seoTitle: "Foxhole Naval Logistics Guide",
      metaDescription: "Foxhole naval logistics guide: moving supply by sea, supplying coastal regions, and protecting sea lanes.",
      tagline: "Supply that travels by sea.",
      summary: "Naval logistics moves supply across water. It can sustain coastal regions, open routes the land map cannot, and shorten long detours — as long as the sea lane is protected.",
      teaches: ["What naval logistics moves", "Supplying coastal regions", "Protecting sea lanes", "Coordinating sea and land logistics"],
      sections: [
        { heading: "What naval logistics is", body: [
          "Naval logistics uses ships and watercraft to carry crates, containers, materials, and equipment across water to where they are needed.",
          "It is the sea-going branch of the same supply chain that trucks and trains serve on land."
        ]},
        { heading: "Supplying coastal regions", body: [
          "Some regions are far easier to reach by sea than by a long overland route. Naval logistics can keep coastal fronts supplied that would otherwise be starved.",
          "For those regions, the sea route is the main artery."
        ]},
        { heading: "Protecting sea lanes", body: [
          "A supply ship is a rich target. Sea lanes need to be watched and, where contested, escorted, or the cargo and the ship are both lost.",
          { list: [
            "Scout routes before sending valuable cargo",
            "Escort shipments through contested water",
            "Avoid predictable timing on dangerous lanes",
            "Coordinate so ships are met and unloaded promptly"
          ]}
        ]},
        { heading: "Coordinating sea and land", body: [
          "Naval logistics rarely delivers all the way to the front. Cargo is typically landed at a port and handed to trucks or trains for the final legs.",
          "Plan the whole route, including the handoff, before loading a ship."
        ]},
        { heading: "When to use naval logistics", body: [
          "Use the sea when it is faster or safer than land, or when a region depends on it. Do not send a ship on a contested lane without protection or a plan.",
          "A lost supply ship is a heavy loss."
        ]},
        { heading: "Related systems", body: [
          "Naval logistics connects to the Naval Overview, Shipping and Containers, and Public Stockpiles."
        ]}
      ],
      mistake: "Sending a loaded supply ship down a contested sea lane with no escort and no plan to unload it.",
      tip: "Plan the full route end to end, including the port handoff to trucks. The sea leg is only part of the journey.",
      related: ["naval/overview", "logistics/shipping", "logistics/public-stockpiles", "naval/large-ships"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Naval logistics vessels and capacities are adjusted between updates."
    },
    {
      slug: "landing-operations", section: "naval", icon: "ship",
      title: "Landing Operations",
      seoTitle: "Foxhole Landing Operations Guide",
      metaDescription: "Foxhole landing operations guide: amphibious assaults, why landings need follow-up logistics, and coordination.",
      tagline: "Assaults from the sea.",
      summary: "Landing operations put troops ashore from the water, opening new fronts and flanking entrenched enemies. But a landing without follow-up logistics collapses — getting ashore is only the beginning.",
      teaches: ["What a landing operation is", "Why landings open new fronts", "Why follow-up logistics is essential", "Coordinating an amphibious assault"],
      sections: [
        { heading: "What a landing operation is", body: [
          "A landing operation moves infantry, and sometimes vehicles, from water onto a hostile or contested shore. It is a way to attack where the enemy did not expect a front.",
          "Landings can flank strong defences and pressure undefended coasts."
        ]},
        { heading: "Why landings open new fronts", body: [
          "A successful landing creates a beachhead — a foothold the enemy must now defend against. This can split their attention and relieve pressure elsewhere.",
          "The threat of a landing alone forces the enemy to garrison coasts."
        ]},
        { heading: "Why follow-up logistics is essential", body: [
          "Troops ashore with no supply behind them are quickly contained and destroyed. A beachhead must be reinforced and supplied or it withers.",
          { list: [
            "Plan reinforcement waves before the first landing",
            "Establish supply by sea or a forward base quickly",
            "Build or capture a base so troops can spawn ashore",
            "Do not land more than you can sustain"
          ]}
        ]},
        { heading: "Coordinating the assault", body: [
          "Landings are coordination-heavy: ships, troops, supply, and timing all have to align. They are operations for organised groups, not spontaneous solo efforts.",
          "Communication before and during the landing decides its success."
        ]},
        { heading: "When to attempt a landing", body: [
          "Attempt landings when a group can commit the troops, ships, and logistics to sustain a beachhead. A landing nobody can reinforce simply feeds the enemy easy kills.",
          "Plan the sustain phase before the assault."
        ]},
        { heading: "Related systems", body: [
          "Landing operations build on Naval Logistics and Large Ships, and connect to Field Bases for establishing a beachhead."
        ]}
      ],
      mistake: "Landing troops on a hostile shore with no reinforcement or supply plan. The beachhead collapses and the assault is wasted.",
      tip: "Plan the reinforcement and supply waves before the first boat moves. Getting ashore is the easy part; staying ashore is the operation.",
      related: ["naval/logistics", "naval/large-ships", "building/field-bases", "guides/regiments-and-communication"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Landing craft and amphibious mechanics are adjusted between updates."
    },
    {
      slug: "large-ships", section: "naval", icon: "ship",
      title: "Large Ships",
      seoTitle: "Foxhole Large Ships Guide",
      metaDescription: "Foxhole large ships guide: crewing major naval vessels, their cost, and why they need coordination and support.",
      tagline: "Capital vessels and their crews.",
      summary: "Large ships are among Foxhole's most powerful and expensive assets. They project force across water — but only with a full crew, real coordination, and support. A large ship lost is a serious blow.",
      teaches: ["What large ships do", "Why they need a full crew", "The cost and risk involved", "When large ships are worth committing"],
      sections: [
        { heading: "What large ships do", body: [
          "Large ships project naval power: they can fight other vessels, threaten coastlines, support landings, and dominate sea lanes.",
          "A capital vessel in play reshapes the naval situation of a region."
        ]},
        { heading: "Why they need a full crew", body: [
          "Large ships are heavily crew-dependent. Steering, gunnery, damage control, and coordination all need players, and an undercrewed ship is slow, blind, and easy to defeat.",
          "Never take a large ship out without the crew to run it."
        ]},
        { heading: "Cost and risk", body: [
          "Large ships represent an enormous amount of logistics and facility work. Losing one is a major loss, so they should be committed deliberately, not casually sailed into danger.",
          "Treat a large ship as a faction asset, not a personal vehicle."
        ]},
        { heading: "Support and coordination", body: [
          { list: [
            "Crew every essential station before sailing",
            "Coordinate with escorts and supporting vessels",
            "Plan resupply, repair, and a route home",
            "Have a withdrawal plan before committing to a fight"
          ]}
        ]},
        { heading: "When to commit a large ship", body: [
          "Commit large ships for significant operations — major landings, breaking a sea lane, decisive naval engagements — with the crew and support to back them.",
          "Do not sail a capital ship for sightseeing or solo experiments."
        ]},
        { heading: "Related systems", body: [
          "Large ships tie into the Naval Overview, Landing Operations, and How to Not Waste Supplies given their cost."
        ]}
      ],
      mistake: "Taking an expensive large ship out undercrewed or alone. It performs poorly and its loss sets the faction back badly.",
      tip: "A large ship is a faction asset. Crew it fully, escort it, and never commit it without a way to withdraw.",
      related: ["naval/overview", "naval/landing-operations", "naval/logistics", "guides/how-to-not-waste-supplies"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Large ship types and naval combat balance are adjusted between updates."
    }
  ];

  /* ================= AIRBORNE ================= */
  D.airborne = [
    {
      slug: "overview", section: "airborne", icon: "aircraft",
      title: "Airborne Overview",
      seoTitle: "Foxhole Airborne Guide: Aircraft, Paratroopers, and Anti-Air",
      metaDescription: "Foxhole Airborne update guide: what aircraft, aviation logistics, paratroopers, and anti-air added to the war.",
      tagline: "The war gained a third dimension.",
      summary: "The Airborne update added aircraft to Foxhole. Aviation, paratroopers, and anti-air are now part of the same persistent war, which means no region is fully secure just because the ground is held.",
      teaches: ["What the Airborne update introduced", "How aircraft change the war", "Why even non-pilots need air awareness", "Where to learn more"],
      sections: [
        { heading: "What Airborne introduced", body: [
          "The Airborne update brought aircraft into Foxhole, along with aviation logistics, paratrooper operations, anti-air weapons, and the air-to-ground interaction those create.",
          "It is one of the largest expansions to the game's scope, adding a whole new layer above the existing war."
        ]},
        { heading: "How aircraft change the war", body: [
          "Aircraft can scout, strike, and move troops over terrain and defences. A region's security is no longer just about its ground front — the sky is now a threat axis.",
          "This affects how bases are placed, defended, and watched."
        ]},
        { heading: "Why everyone needs air awareness", body: [
          "Even players who never fly are affected. Knowing when aircraft are overhead, what they can do, and how to respond is now basic frontline awareness.",
          "Anti-air and radar intel became part of normal ground planning."
        ]},
        { heading: "Aircraft are not solo toys", body: [
          "Aircraft must be produced, fuelled, armed, maintained, and crewed. They depend on aviation logistics and ground support, exactly like every other powerful asset in Foxhole.",
          "A pilot without that support chain cannot keep flying."
        ]},
        { heading: "A note on balance", body: [
          "Airborne systems — aircraft, anti-air, and the counterplay between them — are actively being tuned, especially around Update 64. Treat any specific figures you read as provisional.",
          "Learn the roles and concepts; confirm numbers against current patch notes."
        ]},
        { heading: "Related systems", body: [
          "Continue with Aircraft Logistics, Paratroopers, and Anti-Air."
        ]}
      ],
      mistake: "Treating the sky as someone else's problem. Air awareness is now part of every frontline role, not just the pilots'.",
      tip: "Even if you never fly, learn what aircraft can do to you and how anti-air answers them. That awareness keeps your position alive.",
      related: ["airborne/aircraft-logistics", "airborne/paratroopers", "airborne/anti-air", "updates"],
      sources: ["official-wiki", "foxhole-site", "steam-news"],
      updateNotes: "Airborne is recent and actively balanced, especially around Update 64. Confirm specifics against current patch notes."
    },
    {
      slug: "aircraft-logistics", section: "airborne", icon: "aircraft",
      title: "Aircraft Logistics",
      seoTitle: "Foxhole Aircraft Logistics Guide",
      metaDescription: "Foxhole aircraft logistics guide: producing, fuelling, arming, and maintaining aircraft and the airfields they need.",
      tagline: "Keeping the air arm flying.",
      summary: "Aircraft are not free firepower. They have to be produced, fuelled, armed, maintained, and based somewhere. Aviation logistics is what keeps a faction's air arm in the sky.",
      teaches: ["What aviation logistics involves", "Why airfields and ground support matter", "Keeping aircraft maintained and armed", "Why pilots depend on a supply chain"],
      sections: [
        { heading: "What aviation logistics is", body: [
          "Aviation logistics is the supply chain dedicated to aircraft: producing them, fuelling them, arming them, repairing them, and keeping their bases stocked.",
          "It is a specialised branch of the same logistics thinking the rest of the war runs on."
        ]},
        { heading: "Airfields and ground support", body: [
          "Aircraft operate from airfields and depend on ground support to rearm, refuel, and repair between sorties. An air arm with no functioning base behind it cannot sustain operations.",
          "Securing and supplying airfields is itself an important job."
        ]},
        { heading: "Maintaining and arming aircraft", body: [
          { list: [
            "Aircraft need fuel for every sortie",
            "They need the right munitions to perform their role",
            "They need repair and maintenance after taking damage",
            "Their airfields need to be stocked and defended"
          ]}
        ]},
        { heading: "Why pilots depend on logistics", body: [
          "A pilot can only fly as long as the supply chain behind them holds. Ground crew, logistics players, and airfield defenders make sustained air operations possible.",
          "Aviation logistics is a genuine, high-value role for players who do not want to fly."
        ]},
        { heading: "Getting involved", body: [
          "If aviation interests you but flying does not, aviation logistics and airfield support are the way in. They are essential and currently in demand.",
          "Learn the ground side first; it makes you valuable immediately."
        ]},
        { heading: "Related systems", body: [
          "This builds on the Airborne Overview and connects to the wider Logistics section and Anti-Air for airfield defence."
        ]}
      ],
      mistake: "Producing aircraft with no fuel, munitions, or maintenance behind them. They fly once and then sit grounded.",
      tip: "If you want into aviation but not the cockpit, run aircraft logistics. Fuel, munitions, and airfield supply are always needed.",
      related: ["airborne/overview", "airborne/anti-air", "logistics/refinery-factory-loop", "facilities/production-chains"],
      sources: ["official-wiki", "foxhole-site"],
      updateNotes: "Aircraft production and logistics are recent systems, actively tuned around Update 64."
    },
    {
      slug: "paratroopers", section: "airborne", icon: "aircraft",
      title: "Paratroopers",
      seoTitle: "Foxhole Paratroopers Guide",
      metaDescription: "Foxhole paratroopers guide: inserting troops behind enemy lines by air and why follow-up support is essential.",
      tagline: "Troops delivered behind the line.",
      summary: "Paratroopers let infantry be inserted behind a frontline by air. It is a powerful way to flank and disrupt — but, like a landing, a drop without support quickly becomes a handful of stranded soldiers.",
      teaches: ["What paratrooper operations are", "Why they disrupt the enemy", "Why drops need follow-up", "Coordinating an airborne insertion"],
      sections: [
        { heading: "What paratrooper operations are", body: [
          "Paratrooper operations use aircraft to drop infantry behind or around an enemy frontline, placing troops where the enemy did not expect them.",
          "It is a way to bypass a defended line entirely rather than assaulting through it."
        ]},
        { heading: "Why they disrupt the enemy", body: [
          "Troops appearing in the enemy's rear threaten supply, infrastructure, and undefended objectives. Even a small drop forces the enemy to react and divert forces.",
          "The disruption is often worth more than the drop's direct combat power."
        ]},
        { heading: "Why drops need follow-up", body: [
          "Dropped troops have no frontline behind them. Without a plan to reinforce, supply, or extract, a paratrooper force is quickly hunted down.",
          { list: [
            "Have an objective the drop can realistically achieve",
            "Plan reinforcement, resupply, or extraction in advance",
            "Consider securing a base so troops can spawn nearby",
            "Do not drop more troops than the plan can sustain"
          ]}
        ]},
        { heading: "Coordinating an insertion", body: [
          "Airborne insertions need aircraft, troops, timing, and a ground plan to align. They are coordinated operations, best run by organised groups with clear communication.",
          "A disorganised drop scatters troops and wastes them."
        ]},
        { heading: "When to use paratroopers", body: [
          "Use paratrooper drops for deliberate operations against worthwhile rear objectives, when a group can support the troops after they land.",
          "An unsupported drop is just a gift of kills to the enemy."
        ]},
        { heading: "Related systems", body: [
          "Paratroopers connect to the Airborne Overview, Aircraft Logistics, and Recon and Partisans for behind-the-lines thinking."
        ]}
      ],
      mistake: "Dropping paratroopers behind enemy lines with no objective and no follow-up. They are quickly surrounded and lost.",
      tip: "Treat a drop like a landing: plan the objective and the sustain phase first. Insertion is the easy part.",
      related: ["airborne/overview", "airborne/aircraft-logistics", "combat/recon-and-partisans", "naval/landing-operations"],
      sources: ["official-wiki", "foxhole-site"],
      updateNotes: "Paratrooper mechanics are recent and actively tuned around Update 64."
    },
    {
      slug: "anti-air", section: "airborne", icon: "crosshair",
      title: "Anti-Air",
      seoTitle: "Foxhole Anti-Air Guide",
      metaDescription: "Foxhole anti-air guide: defending against aircraft with anti-air weapons, radar, and ground awareness.",
      tagline: "Answering the threat from above.",
      summary: "Anti-air is how the ground war fights back against aircraft. With the Airborne update, anti-air weapons, radar, and air awareness became part of defending any position that matters.",
      teaches: ["What anti-air does", "Anti-air weapons and radar", "Why air awareness is everyone's job", "Defending bases against aircraft"],
      sections: [
        { heading: "What anti-air does", body: [
          "Anti-air weapons threaten and destroy enemy aircraft, denying them free rein over your positions. Effective anti-air makes the sky dangerous for the enemy's pilots.",
          "It is the ground war's primary counter to aviation."
        ]},
        { heading: "Anti-air weapons and radar", body: [
          "Anti-air ranges from weapons that engage aircraft directly to radar and detection structures that warn of incoming air activity. Detection and firepower work together.",
          "Radar turns a surprise air attack into an expected one, which is half the defence."
        ]},
        { heading: "Why air awareness is everyone's job", body: [
          "Every player near a base contributes to air defence by noticing aircraft and responding. If you hear or see aircraft and a base has anti-air, crewing it is more useful than watching.",
          "Air defence is a shared frontline responsibility, not a niche specialism."
        ]},
        { heading: "Defending bases against aircraft", body: [
          { list: [
            "Place anti-air to cover the bases and approaches that matter",
            "Use radar and intel to get early warning",
            "Keep anti-air positions crewed when air threat is active",
            "Maintain and resupply anti-air like any other weapon"
          ]}
        ]},
        { heading: "A note on balance", body: [
          "The balance between aircraft and anti-air is actively being tuned, particularly around Update 64, which emphasises ground counterplay against air. Specific values shift between patches.",
          "Focus on the principle: bases without air awareness are easier targets."
        ]},
        { heading: "Related systems", body: [
          "Anti-air connects to the Airborne Overview, Aircraft Logistics, and the Map, Intel, and Radio guide for detection."
        ]}
      ],
      mistake: "Leaving anti-air weapons uncrewed while aircraft attack. Unused air defence protects nothing.",
      tip: "If aircraft are active and a base has anti-air, crew it. Air defence only works when someone is at the controls.",
      related: ["airborne/overview", "airborne/aircraft-logistics", "guides/map-intel-radio", "building/bunkers"],
      sources: ["official-wiki", "foxhole-site", "steam-news"],
      updateNotes: "Anti-air and air-ground balance is a primary focus of Update 64; confirm specifics against current patch notes."
    }
  ];

  /* ================= MAPS ================= */
  D.maps = [
    {
      slug: "world-map", section: "maps", icon: "mappin",
      title: "World Map Basics",
      seoTitle: "Foxhole World Map Guide: Reading the War",
      metaDescription: "Foxhole world map guide: regions, victory towns, and how to read the strategic state of the war.",
      tagline: "Learn to read the whole war.",
      summary: "Foxhole's world map is not decoration — it is the war. Understanding regions, victory towns, and the strategic picture matters more for new players than memorising any weapon stat.",
      teaches: ["How the world map is structured", "What victory towns are", "How to read the strategic picture", "Why map sense beats trivia"],
      sections: [
        { heading: "How the map is structured", body: [
          "The Foxhole world is divided into connected regions. Each region is its own playable area, and they link together into a single continuous war.",
          "The strategic map shows these regions, who controls what, and where the fronts are."
        ]},
        { heading: "Victory towns", body: [
          "Certain towns are victory towns — the strategic objectives that decide the war. Capturing enough of them is how a faction wins.",
          "Knowing which towns matter tells you where the war is really being decided, as opposed to where the loudest fighting is."
        ]},
        { heading: "Reading the strategic picture", body: [
          "A glance at the map should tell you where your faction is pushing, where it is under pressure, and which regions are quiet. That picture should shape where you choose to play.",
          "The map shows only what your faction has intel on, so read it knowing parts are hidden."
        ]},
        { heading: "Why map sense beats trivia", body: [
          "A player who understands the map can be useful anywhere — they go where they are needed. A player who memorised weapon stats but cannot read the war often ends up where they are not.",
          "Strategy is the skill that scales."
        ]},
        { heading: "Using the map day to day", body: [
          "Check the map when you log in, before you pick a region, and when deciding whether to hold or move. Let it guide your contribution.",
          "The map is the closest thing Foxhole has to orders."
        ]},
        { heading: "Related systems", body: [
          "Continue with Frontline Regions, Backline Regions, and Supply Lines, and pair this with Map, Intel, and Radio."
        ]}
      ],
      mistake: "Ignoring the map and playing wherever you happen to spawn. You may be grinding a quiet sector while the war is decided elsewhere.",
      tip: "Check the world map every time you log in. Let where the war needs you decide where you play.",
      related: ["maps/frontline-regions", "maps/backline-regions", "maps/supply-lines", "guides/map-intel-radio"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Map regions and victory conditions are stable in structure but specific layouts vary by war and update."
    },
    {
      slug: "frontline-regions", section: "maps", icon: "mappin",
      title: "Frontline Regions",
      seoTitle: "Foxhole Frontline Regions Guide",
      metaDescription: "Foxhole frontline regions guide: how contested regions behave, border travel, and region queues at a high level.",
      tagline: "Where the war is actively fought.",
      summary: "Frontline regions are the contested areas where factions clash directly. They behave differently from the backline: faster, more dangerous, and more demanding of supply and coordination.",
      teaches: ["What makes a region a frontline", "How frontline regions behave", "Border travel and region queues", "Choosing where to fight"],
      sections: [
        { heading: "What a frontline region is", body: [
          "A frontline region is one where the two factions' controlled territory meets and is actively contested. The front line runs through it, anchored by towns and bases.",
          "These regions consume supply and players fastest."
        ]},
        { heading: "How they behave", body: [
          "Frontline regions are volatile. Towns and bases change hands, supply drains quickly, and the situation can shift in an hour. They reward coordination and punish carelessness.",
          "Expect harder fighting and a greater need for logistics here than anywhere else."
        ]},
        { heading: "Border travel and region queues", body: [
          "Moving between regions happens at borders, and busy regions can have a queue to enter when they are at capacity. This is worth knowing so a border crossing does not surprise you.",
          "Plan movement between regions with travel and possible queues in mind."
        ]},
        { heading: "Choosing where to fight", body: [
          { list: [
            "A hot frontline region needs fighters and supply but is unforgiving",
            "A region one step back is a gentler place to learn",
            "Watch which frontline regions are decisive, not just loud",
            "Go where the war needs help, not just where it is exciting"
          ]}
        ]},
        { heading: "When to commit", body: [
          "Commit to a frontline region when you are equipped, have a fallback, and ideally are with others. Avoid wandering into the hottest region alone and unprepared.",
          "Frontline regions reward preparation."
        ]},
        { heading: "Related systems", body: [
          "Pair this with World Map Basics, Backline Regions, and Frontline Basics."
        ]}
      ],
      mistake: "Wandering into the hottest frontline region alone and unequipped, then feeding the enemy easy kills.",
      tip: "As a newer player, fight one region back from the worst front. It is a more forgiving classroom and still useful work.",
      related: ["maps/world-map", "maps/backline-regions", "guides/frontline-basics", "maps/supply-lines"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Border travel and region queue behaviour are adjusted between updates."
    },
    {
      slug: "backline-regions", section: "maps", icon: "mappin",
      title: "Backline Regions",
      seoTitle: "Foxhole Backline Regions Guide",
      metaDescription: "Foxhole backline regions guide: the safe regions where production and logistics happen, and why they matter.",
      tagline: "Where the war is supplied.",
      summary: "Backline regions are the safer areas away from the fighting where production, refining, and logistics happen. They are not where the war is fought, but they are where it is won or lost.",
      teaches: ["What backline regions are for", "Why they are strategically vital", "Good jobs for the backline", "How backlines can still be threatened"],
      sections: [
        { heading: "What backline regions are", body: [
          "Backline regions sit behind the front, away from direct combat. They host salvage fields, refineries, factories, facilities, and the rail and road networks that feed the war.",
          "They are the industrial heart of a faction."
        ]},
        { heading: "Why they are vital", body: [
          "Every shirt, shell, and vehicle at the front came from the backline. A faction with a productive, well-run backline can sustain heavy fighting; one with a neglected backline cannot.",
          "The backline is quiet, but it is decisive."
        ]},
        { heading: "Good backline jobs", body: [
          { list: [
            "Gathering scrap and resources at salvage fields",
            "Running refineries and factories",
            "Contributing to facilities",
            "Loading and running trains and bulk shipments"
          ]}
        ]},
        { heading: "Backlines can still be threatened", body: [
          "A backline is safer, not invulnerable. Partisans, raids, naval landings, and aircraft can all reach behind the lines. A backline that assumes it is safe can be disrupted badly.",
          "Even backline regions need some awareness and defence."
        ]},
        { heading: "When to play the backline", body: [
          "Play the backline when production or logistics is short, when you want lower-pressure but high-impact work, or when you are learning systems before facing the front.",
          "It is a perfect place for new and solo players to be genuinely useful."
        ]},
        { heading: "Related systems", body: [
          "This connects to World Map Basics, the Logistics section, and Trains for bulk transport."
        ]}
      ],
      mistake: "Dismissing the backline as boring. The backline is where the war is supplied, and supply decides wars.",
      tip: "If the front feels overwhelming, spend time in the backline. Production and logistics work there is high-impact and lower-pressure.",
      related: ["maps/world-map", "logistics/scrap-to-frontline", "logistics/trains", "maps/supply-lines"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Region roles shift as a war develops; backline and frontline status is not fixed."
    },
    {
      slug: "supply-lines", section: "maps", icon: "mappin",
      title: "Supply Lines",
      seoTitle: "Foxhole Supply Lines Guide",
      metaDescription: "Foxhole supply lines guide: how supply routes connect production to the front and why cutting them wins wars.",
      tagline: "The routes that feed the war.",
      summary: "Supply lines are the routes that carry materials and equipment from backline production to the front. Protecting your own and cutting the enemy's is one of the most decisive things players do.",
      teaches: ["What supply lines are", "Why cutting them is decisive", "How to protect your own", "Reading supply lines on the map"],
      sections: [
        { heading: "What supply lines are", body: [
          "A supply line is the chain of roads, rail, and sea routes that moves supply from where it is produced to the bases that consume it.",
          "Every active front sits at the end of one or more supply lines."
        ]},
        { heading: "Why cutting them is decisive", body: [
          "A front cut off from supply collapses even if its defenders are skilled — they simply run out of shirts, ammo, and equipment. Cutting an enemy supply line can win a region without assaulting it.",
          "Supply denial is one of the most powerful strategies in the game."
        ]},
        { heading: "Protecting your own", body: [
          { list: [
            "Watch the regions and routes your supply passes through",
            "Respond quickly to raids and partisans on your lines",
            "Keep alternate routes in mind if a line is threatened",
            "Treat a quiet supply route as something to guard, not ignore"
          ]}
        ]},
        { heading: "Reading supply lines", body: [
          "On the map, trace how supply must travel from backline production to each front. The chokepoints — borders, key regions, single routes — are where the war is most vulnerable.",
          "Both attacking and defending those chokepoints is high-value work."
        ]},
        { heading: "When to focus on supply lines", body: [
          "Focus on supply lines when a front is stable and the war is grinding — that is when logistics, not firefights, decides the outcome. Partisan and recon players especially should think in supply lines.",
          "Find the chokepoint and you find the decisive ground."
        ]},
        { heading: "Related systems", body: [
          "This ties together the Maps section with Recon and Partisans, Trains, and the Logistics section."
        ]}
      ],
      mistake: "Focusing only on the firefight at the front while the supply line behind it goes unwatched and gets cut.",
      tip: "Trace your faction's supply lines on the map and find the chokepoints. That is where both attack and defence pay off most.",
      related: ["maps/world-map", "combat/recon-and-partisans", "logistics/trains", "maps/backline-regions"],
      sources: ["official-wiki", "subreddit"],
      updateNotes: "Region connections and route layouts vary by war; the principle of supply denial is constant."
    }
  ];

  return D;
})();
