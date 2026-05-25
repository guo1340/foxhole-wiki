(function(root){
  root.WikiData = root.WikiData || {};
  root.WikiData.searchIndex = [
  {
    "id": "guides",
    "route": "/guides",
    "title": "Guides",
    "eyebrow": "Section",
    "sectionKey": "guides",
    "kind": "index",
    "desc": "Beginner-first practical walkthroughs."
  },
  {
    "id": "guides/first-deployment",
    "route": "/guides/first-deployment",
    "title": "First Deployment Guide",
    "eyebrow": "Guides",
    "sectionKey": "guides",
    "kind": "detail",
    "desc": "Your first hour, done right."
  },
  {
    "id": "guides/frontline-basics",
    "route": "/guides/frontline-basics",
    "title": "Frontline Basics",
    "eyebrow": "Guides",
    "sectionKey": "guides",
    "kind": "detail",
    "desc": "How to be useful once you arrive."
  },
  {
    "id": "guides/logistics-quickstart",
    "route": "/guides/logistics-quickstart",
    "title": "Logistics Quickstart",
    "eyebrow": "Guides",
    "sectionKey": "guides",
    "kind": "detail",
    "desc": "The job that quietly wins wars."
  },
  {
    "id": "guides/how-to-not-waste-supplies",
    "route": "/guides/how-to-not-waste-supplies",
    "title": "How to Not Waste Supplies",
    "eyebrow": "Guides",
    "sectionKey": "guides",
    "kind": "detail",
    "desc": "Respect the work behind every item."
  },
  {
    "id": "guides/map-intel-radio",
    "route": "/guides/map-intel-radio",
    "title": "Map, Intel, and Radio Guide",
    "eyebrow": "Guides",
    "sectionKey": "guides",
    "kind": "detail",
    "desc": "Information wins more fights than aim."
  },
  {
    "id": "guides/regiments-and-communication",
    "route": "/guides/regiments-and-communication",
    "title": "Regiment and Communication Guide",
    "eyebrow": "Guides",
    "sectionKey": "guides",
    "kind": "detail",
    "desc": "The war is won by groups, not individuals."
  },
  {
    "id": "factions",
    "route": "/factions",
    "title": "Factions",
    "eyebrow": "Section",
    "sectionKey": "factions",
    "kind": "index",
    "desc": "Colonials, Wardens, and how to choose."
  },
  {
    "id": "factions/colonials",
    "route": "/factions/colonials",
    "title": "The Colonials",
    "eyebrow": "Factions",
    "sectionKey": "factions",
    "kind": "detail",
    "desc": "One of the war's two great powers."
  },
  {
    "id": "factions/wardens",
    "route": "/factions/wardens",
    "title": "The Wardens",
    "eyebrow": "Factions",
    "sectionKey": "factions",
    "kind": "detail",
    "desc": "The war's other great power."
  },
  {
    "id": "factions/choosing-a-faction",
    "route": "/factions/choosing-a-faction",
    "title": "Choosing a Faction",
    "eyebrow": "Factions",
    "sectionKey": "factions",
    "kind": "detail",
    "desc": "Warden vs Colonial, decided properly."
  },
  {
    "id": "logistics",
    "route": "/logistics",
    "title": "Logistics",
    "eyebrow": "Section",
    "sectionKey": "logistics",
    "kind": "index",
    "desc": "Foxhole's signature supply system."
  },
  {
    "id": "logistics/scrap-to-frontline",
    "route": "/logistics/scrap-to-frontline",
    "title": "Scrap to Frontline",
    "eyebrow": "Logistics",
    "sectionKey": "logistics",
    "kind": "detail",
    "desc": "Where every supply chain begins."
  },
  {
    "id": "logistics/refinery-factory-loop",
    "route": "/logistics/refinery-factory-loop",
    "title": "Refinery and Factory Loop",
    "eyebrow": "Logistics",
    "sectionKey": "logistics",
    "kind": "detail",
    "desc": "Turning raw materials into war."
  },
  {
    "id": "logistics/public-stockpiles",
    "route": "/logistics/public-stockpiles",
    "title": "Public Stockpiles",
    "eyebrow": "Logistics",
    "sectionKey": "logistics",
    "kind": "detail",
    "desc": "Shared reserves that strangers fight from."
  },
  {
    "id": "logistics/shipping",
    "route": "/logistics/shipping",
    "title": "Shipping and Containers",
    "eyebrow": "Logistics",
    "sectionKey": "logistics",
    "kind": "detail",
    "desc": "Moving supply in bulk, not by hand."
  },
  {
    "id": "logistics/trains",
    "route": "/logistics/trains",
    "title": "Trains and Bulk Transport",
    "eyebrow": "Logistics",
    "sectionKey": "logistics",
    "kind": "detail",
    "desc": "Rail moves the war by the ton."
  },
  {
    "id": "combat",
    "route": "/combat",
    "title": "Combat",
    "eyebrow": "Section",
    "sectionKey": "combat",
    "kind": "index",
    "desc": "Infantry and small-team fighting."
  },
  {
    "id": "combat/infantry-basics",
    "route": "/combat/infantry-basics",
    "title": "Infantry Basics",
    "eyebrow": "Combat",
    "sectionKey": "combat",
    "kind": "detail",
    "desc": "Hold ground without burning shirts."
  },
  {
    "id": "combat/trenches-and-cover",
    "route": "/combat/trenches-and-cover",
    "title": "Trenches and Cover",
    "eyebrow": "Combat",
    "sectionKey": "combat",
    "kind": "detail",
    "desc": "Fighting positions, used correctly."
  },
  {
    "id": "combat/anti-tank",
    "route": "/combat/anti-tank",
    "title": "Anti-Tank Basics",
    "eyebrow": "Combat",
    "sectionKey": "combat",
    "kind": "detail",
    "desc": "How infantry answer armour."
  },
  {
    "id": "combat/medic-guide",
    "route": "/combat/medic-guide",
    "title": "Medic Guide",
    "eyebrow": "Combat",
    "sectionKey": "combat",
    "kind": "detail",
    "desc": "Medics save players and supplies at once."
  },
  {
    "id": "combat/recon-and-partisans",
    "route": "/combat/recon-and-partisans",
    "title": "Recon and Partisans",
    "eyebrow": "Combat",
    "sectionKey": "combat",
    "kind": "detail",
    "desc": "Win the war the enemy cannot see."
  },
  {
    "id": "weapons",
    "route": "/weapons",
    "title": "Weapons",
    "eyebrow": "Section",
    "sectionKey": "weapons",
    "kind": "index",
    "desc": "Role-based weapon category guides."
  },
  {
    "id": "weapons/rifles",
    "route": "/weapons/rifles",
    "title": "Rifles",
    "eyebrow": "Weapons",
    "sectionKey": "weapons",
    "kind": "detail",
    "desc": "The default weapon of the war."
  },
  {
    "id": "weapons/smgs",
    "route": "/weapons/smgs",
    "title": "SMGs",
    "eyebrow": "Weapons",
    "sectionKey": "weapons",
    "kind": "detail",
    "desc": "Close-quarters firepower."
  },
  {
    "id": "weapons/machine-guns",
    "route": "/weapons/machine-guns",
    "title": "Machine Guns",
    "eyebrow": "Weapons",
    "sectionKey": "weapons",
    "kind": "detail",
    "desc": "Suppression that wins ground."
  },
  {
    "id": "weapons/explosives",
    "route": "/weapons/explosives",
    "title": "Explosives",
    "eyebrow": "Weapons",
    "sectionKey": "weapons",
    "kind": "detail",
    "desc": "High impact, high cost."
  },
  {
    "id": "weapons/anti-tank-weapons",
    "route": "/weapons/anti-tank-weapons",
    "title": "Anti-Tank Weapons",
    "eyebrow": "Weapons",
    "sectionKey": "weapons",
    "kind": "detail",
    "desc": "The infantry answer to armour."
  },
  {
    "id": "vehicles",
    "route": "/vehicles",
    "title": "Vehicles",
    "eyebrow": "Section",
    "sectionKey": "vehicles",
    "kind": "index",
    "desc": "Trucks, armor, and crew discipline."
  },
  {
    "id": "vehicles/logistics-trucks",
    "route": "/vehicles/logistics-trucks",
    "title": "Logistics Trucks",
    "eyebrow": "Vehicles",
    "sectionKey": "vehicles",
    "kind": "detail",
    "desc": "The workhorse that wins wars."
  },
  {
    "id": "vehicles/armored-cars",
    "route": "/vehicles/armored-cars",
    "title": "Armored Cars",
    "eyebrow": "Vehicles",
    "sectionKey": "vehicles",
    "kind": "detail",
    "desc": "Fast, light, and easily wasted."
  },
  {
    "id": "vehicles/tanks",
    "route": "/vehicles/tanks",
    "title": "Tanks",
    "eyebrow": "Vehicles",
    "sectionKey": "vehicles",
    "kind": "detail",
    "desc": "Powerful, expensive, and easily lost."
  },
  {
    "id": "vehicles/half-tracks",
    "route": "/vehicles/half-tracks",
    "title": "Half-Tracks",
    "eyebrow": "Vehicles",
    "sectionKey": "vehicles",
    "kind": "detail",
    "desc": "Moving infantry into the fight."
  },
  {
    "id": "vehicles/field-guns",
    "route": "/vehicles/field-guns",
    "title": "Field Guns",
    "eyebrow": "Vehicles",
    "sectionKey": "vehicles",
    "kind": "detail",
    "desc": "Towed firepower for the line."
  },
  {
    "id": "artillery",
    "route": "/artillery",
    "title": "Artillery",
    "eyebrow": "Section",
    "sectionKey": "artillery",
    "kind": "index",
    "desc": "Indirect fire and crew coordination."
  },
  {
    "id": "artillery/mortar-basics",
    "route": "/artillery/mortar-basics",
    "title": "Mortar Basics",
    "eyebrow": "Artillery",
    "sectionKey": "artillery",
    "kind": "detail",
    "desc": "Your introduction to indirect fire."
  },
  {
    "id": "artillery/howitzers",
    "route": "/artillery/howitzers",
    "title": "Howitzers",
    "eyebrow": "Artillery",
    "sectionKey": "artillery",
    "kind": "detail",
    "desc": "Heavy artillery, run as a crew."
  },
  {
    "id": "artillery/spotting",
    "route": "/artillery/spotting",
    "title": "Spotting",
    "eyebrow": "Artillery",
    "sectionKey": "artillery",
    "kind": "detail",
    "desc": "The eyes that make artillery work."
  },
  {
    "id": "artillery/counterbattery",
    "route": "/artillery/counterbattery",
    "title": "Counterbattery",
    "eyebrow": "Artillery",
    "sectionKey": "artillery",
    "kind": "detail",
    "desc": "Artillery against artillery."
  },
  {
    "id": "building",
    "route": "/building",
    "title": "Building",
    "eyebrow": "Section",
    "sectionKey": "building",
    "kind": "index",
    "desc": "Bases, trenches, and fortifications."
  },
  {
    "id": "building/field-bases",
    "route": "/building/field-bases",
    "title": "Field Bases",
    "eyebrow": "Building",
    "sectionKey": "building",
    "kind": "detail",
    "desc": "Forward footholds, placed with care."
  },
  {
    "id": "building/trenches",
    "route": "/building/trenches",
    "title": "Building Trenches",
    "eyebrow": "Building",
    "sectionKey": "building",
    "kind": "detail",
    "desc": "Dig lines that defend, not betray."
  },
  {
    "id": "building/bunkers",
    "route": "/building/bunkers",
    "title": "Bunkers",
    "eyebrow": "Building",
    "sectionKey": "building",
    "kind": "detail",
    "desc": "Fortifications that hold regions."
  },
  {
    "id": "building/maintenance-supplies",
    "route": "/building/maintenance-supplies",
    "title": "Maintenance Supplies",
    "eyebrow": "Building",
    "sectionKey": "building",
    "kind": "detail",
    "desc": "The supplies that stop decay."
  },
  {
    "id": "building/common-mistakes",
    "route": "/building/common-mistakes",
    "title": "Common Building Mistakes",
    "eyebrow": "Building",
    "sectionKey": "building",
    "kind": "detail",
    "desc": "What new builders get wrong."
  },
  {
    "id": "facilities",
    "route": "/facilities",
    "title": "Facilities",
    "eyebrow": "Section",
    "sectionKey": "facilities",
    "kind": "index",
    "desc": "Advanced production infrastructure."
  },
  {
    "id": "facilities/overview",
    "route": "/facilities/overview",
    "title": "Facilities Overview",
    "eyebrow": "Facilities",
    "sectionKey": "facilities",
    "kind": "detail",
    "desc": "Advanced industry, not a beginner toy."
  },
  {
    "id": "facilities/power-and-pipelines",
    "route": "/facilities/power-and-pipelines",
    "title": "Power and Pipelines",
    "eyebrow": "Facilities",
    "sectionKey": "facilities",
    "kind": "detail",
    "desc": "Keeping the lights on and the resources moving."
  },
  {
    "id": "facilities/production-chains",
    "route": "/facilities/production-chains",
    "title": "Production Chains",
    "eyebrow": "Facilities",
    "sectionKey": "facilities",
    "kind": "detail",
    "desc": "Multi-stage industry, planned end to end."
  },
  {
    "id": "facilities/facility-etiquette",
    "route": "/facilities/facility-etiquette",
    "title": "Facility Etiquette",
    "eyebrow": "Facilities",
    "sectionKey": "facilities",
    "kind": "detail",
    "desc": "Shared industry, shared responsibility."
  },
  {
    "id": "naval",
    "route": "/naval",
    "title": "Naval",
    "eyebrow": "Section",
    "sectionKey": "naval",
    "kind": "index",
    "desc": "Sea lanes, landings, and ships."
  },
  {
    "id": "naval/overview",
    "route": "/naval/overview",
    "title": "Naval Overview",
    "eyebrow": "Naval",
    "sectionKey": "naval",
    "kind": "detail",
    "desc": "The war reaches across the water."
  },
  {
    "id": "naval/logistics",
    "route": "/naval/logistics",
    "title": "Naval Logistics",
    "eyebrow": "Naval",
    "sectionKey": "naval",
    "kind": "detail",
    "desc": "Supply that travels by sea."
  },
  {
    "id": "naval/landing-operations",
    "route": "/naval/landing-operations",
    "title": "Landing Operations",
    "eyebrow": "Naval",
    "sectionKey": "naval",
    "kind": "detail",
    "desc": "Assaults from the sea."
  },
  {
    "id": "naval/large-ships",
    "route": "/naval/large-ships",
    "title": "Large Ships",
    "eyebrow": "Naval",
    "sectionKey": "naval",
    "kind": "detail",
    "desc": "Capital vessels and their crews."
  },
  {
    "id": "airborne",
    "route": "/airborne",
    "title": "Airborne",
    "eyebrow": "Section",
    "sectionKey": "airborne",
    "kind": "index",
    "desc": "Aircraft, paratroopers, and anti-air."
  },
  {
    "id": "airborne/overview",
    "route": "/airborne/overview",
    "title": "Airborne Overview",
    "eyebrow": "Airborne",
    "sectionKey": "airborne",
    "kind": "detail",
    "desc": "The war gained a third dimension."
  },
  {
    "id": "airborne/aircraft-logistics",
    "route": "/airborne/aircraft-logistics",
    "title": "Aircraft Logistics",
    "eyebrow": "Airborne",
    "sectionKey": "airborne",
    "kind": "detail",
    "desc": "Keeping the air arm flying."
  },
  {
    "id": "airborne/paratroopers",
    "route": "/airborne/paratroopers",
    "title": "Paratroopers",
    "eyebrow": "Airborne",
    "sectionKey": "airborne",
    "kind": "detail",
    "desc": "Troops delivered behind the line."
  },
  {
    "id": "airborne/anti-air",
    "route": "/airborne/anti-air",
    "title": "Anti-Air",
    "eyebrow": "Airborne",
    "sectionKey": "airborne",
    "kind": "detail",
    "desc": "Answering the threat from above."
  },
  {
    "id": "maps",
    "route": "/maps",
    "title": "Maps",
    "eyebrow": "Section",
    "sectionKey": "maps",
    "kind": "index",
    "desc": "Reading the war and its supply lines."
  },
  {
    "id": "maps/world-map",
    "route": "/maps/world-map",
    "title": "World Map Basics",
    "eyebrow": "Maps",
    "sectionKey": "maps",
    "kind": "detail",
    "desc": "Learn to read the whole war."
  },
  {
    "id": "maps/frontline-regions",
    "route": "/maps/frontline-regions",
    "title": "Frontline Regions",
    "eyebrow": "Maps",
    "sectionKey": "maps",
    "kind": "detail",
    "desc": "Where the war is actively fought."
  },
  {
    "id": "maps/backline-regions",
    "route": "/maps/backline-regions",
    "title": "Backline Regions",
    "eyebrow": "Maps",
    "sectionKey": "maps",
    "kind": "detail",
    "desc": "Where the war is supplied."
  },
  {
    "id": "maps/supply-lines",
    "route": "/maps/supply-lines",
    "title": "Supply Lines",
    "eyebrow": "Maps",
    "sectionKey": "maps",
    "kind": "detail",
    "desc": "The routes that feed the war."
  },
  {
    "id": "getting-started",
    "route": "/getting-started",
    "title": "Getting Started",
    "eyebrow": "Manual",
    "sectionKey": "static",
    "kind": "static",
    "desc": "Read this before your first war."
  },
  {
    "id": "about",
    "route": "/about",
    "title": "About",
    "eyebrow": "Manual",
    "sectionKey": "static",
    "kind": "static",
    "desc": "What this site is and is not."
  },
  {
    "id": "privacy-policy",
    "route": "/privacy-policy",
    "title": "Privacy Policy",
    "eyebrow": "Manual",
    "sectionKey": "static",
    "kind": "static",
    "desc": "How this fan site handles data."
  },
  {
    "id": "contact",
    "route": "/contact",
    "title": "Contact",
    "eyebrow": "Manual",
    "sectionKey": "static",
    "kind": "static",
    "desc": "Corrections, questions, and live help."
  },
  {
    "id": "updates",
    "route": "/updates",
    "title": "Updates",
    "eyebrow": "Manual",
    "sectionKey": "static",
    "kind": "updates",
    "desc": "What the latest updates changed."
  },
  {
    "id": "tips",
    "route": "/tips",
    "title": "Field Tips",
    "eyebrow": "Manual",
    "sectionKey": "static",
    "kind": "tips",
    "desc": "Quick practical tips for new soldiers."
  },
  {
    "id": "home",
    "route": "/",
    "title": "Foxhole Field Manual",
    "eyebrow": "Home",
    "sectionKey": "home",
    "kind": "home",
    "desc": "A practical guide to logistics, infantry, vehicles, facilities, naval warfare, and airborne operations in the persistent war MMO."
  }
];
})(typeof window !== 'undefined' ? window : globalThis);
