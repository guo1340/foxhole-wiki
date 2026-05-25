(function(root){
  root.WikiData = root.WikiData || {};
  Object.assign(root.WikiData, {
  "site": {
    "name": "Foxhole Field Manual",
    "tagline": "A practical guide to logistics, infantry, vehicles, facilities, naval warfare, and airborne operations in the persistent war MMO.",
    "origin": "https://foxhole.gamewikihub.com",
    "description": "A practical Foxhole guide for new and intermediate players covering logistics, combat, vehicles, artillery, building, facilities, naval and airborne operations.",
    "updatedLabel": "Current as of Update 64 era"
  },
  "media": {
    "home": {
      "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/505460/ss_1c1d60f0dd0c75837caca2aff1babf66401e7984.1920x1080.jpg?t=1775152848",
      "alt": "Foxhole battlefield with infantry, vehicles, and a persistent war front.",
      "label": "Persistent Battlefield"
    },
    "guides": {
      "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/505460/ss_0f46a6eb53224036d4e67c896ee87f5e364f34a4.1920x1080.jpg?t=1775152848",
      "alt": "Foxhole infantry and vehicles moving through a battlefield.",
      "label": "First Deployment"
    },
    "factions": {
      "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/505460/717ad41391b7f5aba3082c9284bd3bd14a73c1c8/ss_717ad41391b7f5aba3082c9284bd3bd14a73c1c8.1920x1080.jpg?t=1775152848",
      "alt": "Foxhole soldiers and faction equipment in wartime terrain.",
      "label": "Warden / Colonial War"
    },
    "logistics": {
      "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/505460/ss_59358512ce9daf7c68e74c3d809514c7e9b55633.1920x1080.jpg?t=1775152848",
      "alt": "Foxhole logistics vehicles and supply infrastructure.",
      "label": "Supply Chain"
    },
    "combat": {
      "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/505460/ss_a3343fe67c2b174bc0c6ac6c53743dadf05ea8e4.1920x1080.jpg?t=1775152848",
      "alt": "Foxhole infantry combat from a top-down battlefield view.",
      "label": "Frontline Combat"
    },
    "weapons": {
      "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/505460/ss_49b92833151ee56d1c13270c94e934297d0305ab.1920x1080.jpg?t=1775152848",
      "alt": "Foxhole soldiers fighting with infantry weapons.",
      "label": "Infantry Arms"
    },
    "vehicles": {
      "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/505460/ss_f06212b3adf747eddf2df178c441d37fd55e4917.1920x1080.jpg?t=1775152848",
      "alt": "Foxhole armored vehicles and battlefield movement.",
      "label": "Armor Column"
    },
    "artillery": {
      "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/505460/ss_32beb1ebb083e40edd3a0399c67cef4188372805.1920x1080.jpg?t=1775152848",
      "alt": "Foxhole artillery and battlefield fire support.",
      "label": "Fire Support"
    },
    "building": {
      "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/505460/0032030a6d3b9b821a5feabad8a4e09717761c86/ss_0032030a6d3b9b821a5feabad8a4e09717761c86.1920x1080.jpg?t=1775152848",
      "alt": "Foxhole trenches, defensive works, and fortified terrain.",
      "label": "Fortifications"
    },
    "facilities": {
      "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/505460/ss_312a6136bc744c3eb9615db0f79682d12719c885.1920x1080.jpg?t=1775152848",
      "alt": "Foxhole industrial production and player-built logistics systems.",
      "label": "War Industry"
    },
    "naval": {
      "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/505460/ss_75672cd00e554328cffa3bc4ae7aca3e9d830b58.1920x1080.jpg?t=1775152848",
      "alt": "Foxhole naval operations and ships supporting a coastline.",
      "label": "Sea Lanes"
    },
    "airborne": {
      "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/505460/ss_ececfd8834fe4190aefbc7b796137b663339d8f9.1920x1080.jpg?t=1775152848",
      "alt": "Foxhole aircraft and airborne operations over the persistent battlefield.",
      "label": "Airborne Operations"
    },
    "maps": {
      "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/505460/5d84aaa1f09c0a5f33e0123227b2de3459ed7698/ss_5d84aaa1f09c0a5f33e0123227b2de3459ed7698.1920x1080.jpg?t=1775152848",
      "alt": "Foxhole strategic map and regional war lines.",
      "label": "War Map"
    },
    "static": {
      "src": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/505460/ss_1c1d60f0dd0c75837caca2aff1babf66401e7984.1920x1080.jpg?t=1775152848",
      "alt": "Foxhole persistent war gameplay scene.",
      "label": "Field Manual"
    }
  },
  "sources": [
    {
      "id": "official-wiki",
      "name": "Official Foxhole Wiki",
      "url": "https://foxhole.wiki.gg/",
      "note": "Community-maintained reference for items, stats, and mechanics. Use it for exact numbers, which change between updates."
    },
    {
      "id": "foxhole-site",
      "name": "Foxhole — Official Site",
      "url": "https://www.foxholegame.com/",
      "note": "Developer site from Siege Camp with update news and devblogs."
    },
    {
      "id": "steam-news",
      "name": "Foxhole on Steam",
      "url": "https://store.steampowered.com/app/505460/Foxhole/",
      "note": "Patch notes and update announcements are posted here first."
    },
    {
      "id": "subreddit",
      "name": "r/foxholegame",
      "url": "https://www.reddit.com/r/foxholegame/",
      "note": "Community discussion, war stories, and current-war reports."
    },
    {
      "id": "discord",
      "name": "Official Foxhole Discord",
      "url": "https://discord.com/invite/foxhole",
      "note": "Largest live community hub; good for asking faction-specific questions."
    }
  ],
  "sections": [
    {
      "key": "guides",
      "label": "Guides",
      "icon": "book",
      "blurb": "Beginner-first practical walkthroughs."
    },
    {
      "key": "factions",
      "label": "Factions",
      "icon": "flag",
      "blurb": "Colonials, Wardens, and how to choose."
    },
    {
      "key": "logistics",
      "label": "Logistics",
      "icon": "crate",
      "blurb": "Foxhole's signature supply system."
    },
    {
      "key": "combat",
      "label": "Combat",
      "icon": "crosshair",
      "blurb": "Infantry and small-team fighting."
    },
    {
      "key": "weapons",
      "label": "Weapons",
      "icon": "rifle",
      "blurb": "Role-based weapon category guides."
    },
    {
      "key": "vehicles",
      "label": "Vehicles",
      "icon": "truck",
      "blurb": "Trucks, armor, and crew discipline."
    },
    {
      "key": "artillery",
      "label": "Artillery",
      "icon": "shell",
      "blurb": "Indirect fire and crew coordination."
    },
    {
      "key": "building",
      "label": "Building",
      "icon": "bunker",
      "blurb": "Bases, trenches, and fortifications."
    },
    {
      "key": "facilities",
      "label": "Facilities",
      "icon": "factory",
      "blurb": "Advanced production infrastructure."
    },
    {
      "key": "naval",
      "label": "Naval",
      "icon": "ship",
      "blurb": "Sea lanes, landings, and ships."
    },
    {
      "key": "airborne",
      "label": "Airborne",
      "icon": "aircraft",
      "blurb": "Aircraft, paratroopers, and anti-air."
    },
    {
      "key": "maps",
      "label": "Maps",
      "icon": "mappin",
      "blurb": "Reading the war and its supply lines."
    }
  ],
  "roles": [
    {
      "name": "Infantry",
      "icon": "rifle",
      "blurb": "Hold ground, take ground, and stay alive so you do not drain a base of shirts.",
      "link": "/combat/infantry-basics"
    },
    {
      "name": "Logistics Driver",
      "icon": "truck",
      "blurb": "Move materials, crates, and supplies from backline production to the front.",
      "link": "/vehicles/logistics-trucks"
    },
    {
      "name": "Medic",
      "icon": "medic",
      "blurb": "Revive the wounded, save shirts, and keep squads fighting instead of respawning.",
      "link": "/combat/medic-guide"
    },
    {
      "name": "Builder",
      "icon": "bunker",
      "blurb": "Raise field bases, trenches, and bunkers that actually help the people using them.",
      "link": "/building/field-bases"
    },
    {
      "name": "Partisan",
      "icon": "crosshair",
      "blurb": "Operate behind enemy lines, cutting supply and gathering intel.",
      "link": "/combat/recon-and-partisans"
    },
    {
      "name": "Tank Crew",
      "icon": "tank",
      "blurb": "Crew armor with discipline: fuel, ammo, repair, and a plan to retreat.",
      "link": "/vehicles/tanks"
    },
    {
      "name": "Artillery Crew",
      "icon": "shell",
      "blurb": "Spotter, gunner, loader, and logi support working as one fire team.",
      "link": "/artillery/howitzers"
    },
    {
      "name": "Pilot / Air Crew",
      "icon": "aircraft",
      "blurb": "Fly, maintain, and supply aircraft introduced with the Airborne update.",
      "link": "/airborne/overview"
    }
  ],
  "systems": [
    {
      "name": "Supply chains",
      "icon": "crate",
      "blurb": "Scrap becomes materials, materials become crates, crates win wars.",
      "link": "/logistics"
    },
    {
      "name": "Map intelligence",
      "icon": "mappin",
      "blurb": "Knowing where the front moves is worth more than any single kill.",
      "link": "/maps"
    },
    {
      "name": "Public stockpiles",
      "icon": "factory",
      "blurb": "Shared reserves that let strangers fight on your behalf.",
      "link": "/logistics/public-stockpiles"
    },
    {
      "name": "Bunker bases",
      "icon": "bunker",
      "blurb": "Fortified positions that turn a region into a hard problem for the enemy.",
      "link": "/building/bunkers"
    },
    {
      "name": "Facilities",
      "icon": "wrench",
      "blurb": "Player-built industry producing the war's advanced equipment.",
      "link": "/facilities"
    },
    {
      "name": "Naval & airborne",
      "icon": "ship",
      "blurb": "New dimensions of war: sea lanes overhead and paratroopers behind you.",
      "link": "/naval"
    }
  ],
  "updates": [
    {
      "date": "Airborne Update",
      "title": "Airborne — aircraft enter the war",
      "body": [
        "The Airborne update added a full aviation layer to Foxhole. Aircraft now operate above the same persistent battlefield, which means a region is no longer secure just because the ground is held.",
        "Aviation is its own logistics problem. Aircraft must be produced, fuelled, armed, maintained, and crewed, and they rely on airfields and ground support rather than flying as solo toys.",
        "Paratroopers can be inserted behind a frontline, and anti-air weapons and radar intelligence became part of normal ground planning. New players should at least understand that the sky is now a threat axis, even if they never fly."
      ]
    },
    {
      "date": "Update 64 era",
      "title": "Update 64 — ground counterplay and balance",
      "body": [
        "Update 64 focuses on giving ground forces better tools to answer aircraft, alongside faction balance passes, maintenance changes, and quality-of-life and performance work.",
        "Exact values for anti-air, aircraft, and faction equipment shift during this period. Treat any specific number you read as provisional and confirm it against current patch notes.",
        "The practical takeaway: anti-air coverage, radar/intel placement, and maintenance discipline matter more than they used to. Bases without air awareness are easier targets."
      ]
    }
  ],
  "tips": [
    {
      "cat": "First hour",
      "text": "Spawn with a rifle, ammo, a bandage, and a few extra shirts. That basic loadout makes you useful immediately and costs the war almost nothing."
    },
    {
      "cat": "Logistics",
      "text": "A single full truck of basic materials delivered to the right base is often worth more than an hour of frontline shooting."
    },
    {
      "cat": "Survival",
      "text": "Every death consumes a uniform from a base stockpile. Staying alive is itself a contribution to logistics."
    },
    {
      "cat": "Communication",
      "text": "Use local and squad chat, and watch the map. Most coordination failures are information failures, not skill failures."
    },
    {
      "cat": "Vehicles",
      "text": "Never solo an expensive vehicle into the front. Know where you will repair and where you will retreat before you drive."
    },
    {
      "cat": "Building",
      "text": "A badly placed trench helps the enemy. If you are not sure where a structure should go, ask a builder before placing it."
    },
    {
      "cat": "Artillery",
      "text": "Firing artillery without a spotter mostly wastes shells. Pair up before you pull the gun."
    },
    {
      "cat": "Etiquette",
      "text": "Public stockpiles and public facilities belong to everyone. Take what you need for the front, not what you want for your garage."
    },
    {
      "cat": "Airborne",
      "text": "If you hear aircraft and you are near a base, the most useful thing you can do is crew an anti-air weapon, not stare at the sky."
    },
    {
      "cat": "Maps",
      "text": "Learn to read victory towns and supply lines before you learn weapon stats. Strategy beats trivia."
    }
  ]
});
})(typeof window !== 'undefined' ? window : globalThis);
