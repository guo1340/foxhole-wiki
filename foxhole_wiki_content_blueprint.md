# Foxhole Wiki Project — Content + Design Blueprint

This document is meant to be pasted into Claude as the product/content brief for building a Foxhole wiki similar in structure to the Project Zomboid wiki project.

## 1. Project Goal

Build a practical, SEO-friendly Foxhole guide site for new and intermediate players. The site should not try to replace the official wiki item-by-item. Instead, it should be a readable field manual that explains what to do, why it matters, and what mistakes beginners make.

Foxhole is a persistent war MMO where thousands of players contribute to the outcome of a long-running war through infantry combat, logistics, base building, facilities, naval warfare, artillery, reconnaissance, and aircraft. The wiki should focus on practical usefulness: how a new player becomes valuable without wasting public resources or getting yelled at by veterans.

## 2. Target Audience

Primary audience:
- New players who joined Foxhole and feel overwhelmed.
- Players who want to understand logistics, frontline etiquette, and combined-arms roles.
- Players searching Google for quick answers like “Foxhole logistics guide”, “Foxhole beginner guide”, “Foxhole Warden vs Colonial”, “Foxhole vehicles guide”, “Foxhole artillery guide”, and “Foxhole airborne guide”.

Secondary audience:
- Returning players who missed recent updates such as Airborne.
- Regiment leaders who want to link concise explanations to recruits.
- Solo players who want useful jobs that do not require a large clan.

## 3. Overall Tone

Tone should be:
- Tactical, practical, and slightly military-field-manual inspired.
- Beginner-friendly, but not childish.
- Honest about social etiquette and resource waste.
- Opinionated where useful: tell the reader what to do first, not just what exists.

Example tone:
> Your first job is not to be a hero. Your first job is to arrive at the front with a rifle, ammo, bandage, and enough awareness not to drain shirts from a base by dying every thirty seconds.

Avoid:
- Overly encyclopedic pages that just list stats.
- Copying the official wiki wording.
- Fake exact numbers that may change between updates.
- Treating both factions as only cosmetic; they have asymmetric equipment and culture even when core gameplay is shared.

## 4. Core Site Structure

Use the existing Project Zomboid wiki architecture as the reference: a static site with a central `data.js` file, client-side routing, SEO metadata, source notes, related pages, and reusable card/list/detail renderers.

Recommended top-level routes:

```text
/
/getting-started
/guides
/guides/first-deployment
/guides/frontline-basics
/guides/logistics-quickstart
/guides/how-to-not-waste-supplies
/guides/map-intel-radio
/guides/regiments-and-communication

/factions
/factions/colonials
/factions/wardens
/factions/choosing-a-faction

/logistics
/logistics/scrap-to-frontline
/logistics/refinery-factory-loop
/logistics/public-stockpiles
/logistics-shipping
/logistics-trains

/combat
/combat/infantry-basics
/combat/trenches-and-cover
/combat/anti-tank
/combat/medic-guide
/combat/recon-and-partisans

/weapons
/weapons/rifles
/weapons/smgs
/weapons/machine-guns
/weapons/explosives
/weapons/anti-tank-weapons

/vehicles
/vehicles/logistics-trucks
/vehicles/armored-cars
/vehicles/tanks
/vehicles/half-tracks
/vehicles/field-guns

/artillery
/artillery/mortar-basics
/artillery/howitzers
/artillery-spotting
/artillery-counterbattery

/building
/building/field-bases
/building/trenches
/building/bunkers
/building/maintenance-supplies
/building/common-mistakes

/facilities
/facilities/overview
/facilities/power-and-pipelines
/facilities/production-chains
/facilities/facility-etiquette

/naval
/naval/overview
/naval/logistics
/naval/landing-operations
/naval/large-ships

/airborne
/airborne/overview
/airborne/aircraft-logistics
/airborne/paratroopers
/airborne/anti-air

/maps
/maps/world-map
/maps/frontline-regions
/maps/backline-regions
/maps-supply-lines

/updates
/tips
/about
/privacy-policy
/contact
```

## 5. Homepage Sections

Homepage should quickly communicate what this site is for.

Recommended homepage layout:

1. Hero section
   - Title: `Foxhole Field Manual`
   - Subtitle: `A practical guide to logistics, infantry, vehicles, facilities, naval warfare, and airborne operations in the persistent war MMO.`
   - CTA buttons:
     - `Start as a New Soldier` → `/guides/first-deployment`
     - `Learn Logistics` → `/logistics`

2. “Start Here” cards
   - First Deployment
   - Frontline Basics
   - Logistics Quickstart
   - Faction Guide

3. “Core War Roles” cards
   - Infantry
   - Logistics Driver
   - Medic
   - Builder
   - Partisan
   - Tank Crew
   - Artillery Crew
   - Pilot / Air Crew

4. “Systems That Win Wars” cards
   - Supply chains
   - Map intelligence
   - Public stockpiles
   - Bunker bases
   - Facilities
   - Naval and airborne operations

5. Update callout
   - Mention that Airborne introduced aircraft, aviation logistics, paratroopers, and anti-air considerations.
   - Mention that Update 64 focuses on ground counterplay against air, faction balance, maintenance, and performance/quality-of-life style changes.

## 6. Page Content Pattern

Every guide/detail page should include:

- H1 title
- Short tagline
- Practical summary
- Hero image slot or symbolic icon
- “What this page teaches” bullet list
- 4–7 sections
- Beginner mistake callout
- Field tip callout
- Related pages
- Source/update notes

Use this page formula:

```text
Title
Tagline
Summary

Section 1: What it is
Section 2: Why it matters
Section 3: Step-by-step beginner flow
Section 4: Common mistakes
Section 5: When to use / when not to use
Section 6: Related systems
```

## 7. Important Content Buckets

### Guides
Beginner-oriented, practical pages. These are the main SEO pages.

Pages:
- First Deployment Guide
- Frontline Basics
- Logistics Quickstart
- How to Not Waste Supplies
- Map, Intel, and Radio Guide
- Regiment and Communication Guide

### Factions
Explain Colonials vs Wardens without declaring one universally better.

Pages:
- Faction Overview
- Colonials
- Wardens
- Choosing a Faction

Content angle:
- Both factions play the same war, but equipment and culture differ.
- Pick based on friends/regiment first, equipment preference second.
- Avoid making balance claims that may change after patches.

### Logistics
This should be one of the strongest sections because logistics is Foxhole’s signature system.

Pages:
- Logistics Overview
- Scrap to Frontline
- Refinery and Factory Loop
- Public Stockpiles
- Shipping and Containers
- Trains and Bulk Transport

Must explain:
- Salvage/scrap gathering
- Refining into basic/refined materials
- Producing crates
- Loading trucks/containers
- Delivering to bases
- Submitting supplies to stockpiles
- Why shirts, ammo, bmats, bandages, radios, and gas masks matter

### Combat
Practical infantry and small-team combat pages.

Pages:
- Infantry Basics
- Trenches and Cover
- Anti-Tank Basics
- Medic Guide
- Recon and Partisans

Must explain:
- Staying alive matters because deaths consume shirts.
- Use cover, suppression, night, smoke, and coordination.
- Do not take expensive gear unless you know why you need it.
- Medics save both players and logistics.

### Weapons
Do not turn this into a giant stat dump. Use role-based summaries.

Pages:
- Rifles
- SMGs
- Machine Guns
- Explosives
- Anti-Tank Weapons

For each weapon category include:
- What role it fills
- Beginner recommendation
- What not to waste
- Related ammo/logistics notes

### Vehicles
Vehicles are valuable and should be framed around crew discipline.

Pages:
- Logistics Trucks
- Armored Cars
- Tanks
- Half-Tracks
- Field Guns

Must explain:
- Vehicles require fuel, ammo, repair materials, crew, and map awareness.
- Do not solo expensive vehicles into the front.
- Always know where to repair and where to retreat.

### Artillery
Artillery should explain crew roles and communication, not just guns.

Pages:
- Mortar Basics
- Howitzers
- Spotting
- Counterbattery

Must explain:
- Spotter, gunner, loader, logistics support.
- Shell supply matters as much as the gun.
- Firing without spotting wastes shells.
- Counterbattery and relocation matter.

### Building
Building is easy to do badly and hard to fix later. Make this section practical.

Pages:
- Field Bases
- Trenches
- Bunkers
- Maintenance Supplies
- Common Building Mistakes

Must explain:
- Bad trenches can help the enemy.
- Maintenance supplies prevent decay.
- Builders should think about AI coverage, supply access, repair access, and enemy vehicle angles.

### Facilities
Facilities are advanced logistics. Tell beginners not to overbuild.

Pages:
- Facilities Overview
- Power and Pipelines
- Production Chains
- Facility Etiquette

Must explain:
- Facilities are infrastructure projects, not beginner toys.
- They need maintenance, layout planning, resource flow, and social coordination.
- Public/shared facilities should be respected.

### Naval
Naval content should be concise but useful.

Pages:
- Naval Overview
- Naval Logistics
- Landing Operations
- Large Ships

Must explain:
- Sea lanes are supply lines.
- Landings fail without follow-up logistics.
- Ships need crew coordination and support.

### Airborne
This section should reflect the current post-Airborne state.

Pages:
- Airborne Overview
- Aircraft Logistics
- Paratroopers
- Anti-Air

Must explain:
- Airborne adds aircraft operations, aviation logistics, paratroopers, anti-air, and air-ground interaction.
- Aircraft are not solo toys; they require production, maintenance, pilots, crews, and ground support.
- Anti-air and radar/intel are important for ground survival.
- Exact balance may change, especially around Update 64.

### Maps
Do not try to recreate the whole map. Focus on how to read the war.

Pages:
- World Map Basics
- Frontline Regions
- Backline Regions
- Supply Lines

Must explain:
- Victory towns
- Frontline vs backline regions
- Logistics routes
- Watchtowers/intel
- Cut supply lines
- Border travel and region queues at a high level

## 8. Visual Design Direction

Foxhole style should feel different from the Project Zomboid site.

Recommended aesthetic:
- Military field manual + war room map.
- Dark navy / charcoal background.
- Muted olive, steel blue, brass, parchment, and off-white accents.
- Tactical grid lines, paper-map textures, stamped labels, subtle noise.
- Avoid zombie/horror colors like blood red as the main theme.

Suggested palette:

```css
--bg: #0d1117;
--panel: #151b23;
--panel-2: #1b2430;
--text: #e6edf3;
--muted: #9aa7b4;
--line: #2d3746;
--accent: #c9a45c;      /* brass */
--accent-2: #6f8f72;    /* olive */
--accent-3: #6e95b8;    /* steel blue */
--danger: #b85c5c;
--paper: #d6c7a1;
```

Suggested fonts:
- Headings: `Oswald`, `Barlow Condensed`, or `Rajdhani`.
- Body: `Inter`, `Source Sans 3`, or `Atkinson Hyperlegible`.
- Mono/labels: `Roboto Mono` or `IBM Plex Mono`.

Recommended font pairing:
```css
font-family heading: 'Rajdhani', 'Oswald', system-ui, sans-serif;
font-family body: 'Inter', system-ui, sans-serif;
font-family mono: 'Roboto Mono', monospace;
```

UI style:
- Cards should look like field report panels.
- Tags should look like stamped labels.
- Source notes should look like a small dossier section.
- Use icons like helmet, truck, radio, wrench, shell, map pin, ship, aircraft, bunker.
- Buttons can use angular corners or clipped borders, but keep readability high.

## 9. SEO Strategy

Primary keywords:
- Foxhole guide
- Foxhole beginner guide
- Foxhole logistics guide
- Foxhole faction guide
- Foxhole Warden vs Colonial
- Foxhole vehicles guide
- Foxhole tank guide
- Foxhole artillery guide
- Foxhole facilities guide
- Foxhole airborne guide
- Foxhole paratrooper guide
- Foxhole anti air guide

SEO page titles should be direct:
- `Foxhole Beginner Guide: First Deployment Field Manual`
- `Foxhole Logistics Guide: Scrap, Refineries, Factories, and Frontline Supply`
- `Foxhole Factions Guide: Colonials vs Wardens`
- `Foxhole Vehicles Guide: Trucks, Tanks, Field Guns, and Crew Discipline`
- `Foxhole Airborne Guide: Aircraft, Paratroopers, and Anti-Air Basics`

Each page should have:
- Unique title
- Unique meta description
- Canonical URL
- OpenGraph metadata
- JSON-LD Article or WebPage schema
- Internal links to related pages

## 10. Data.js Requirements

Create a `js/data.js` file that exposes:

```js
window.WikiData = {
  site: {},
  sourceRegistry: {},
  guides: [],
  factions: [],
  logistics: [],
  combat: [],
  weapons: [],
  vehicles: [],
  artillery: [],
  building: [],
  facilities: [],
  naval: [],
  airborne: [],
  maps: [],
  roles: [],
  tips: [],
  updates: [],
  pages: {},
  sources: []
};
```

The supplied Foxhole `data.js` file should be treated as the first content seed. Claude should adapt the renderer to these Foxhole-specific categories instead of forcing Project Zomboid categories like traits, occupations, and skills.

## 11. What Claude Should Reuse From Project Zomboid Project

Reuse:
- Static routing approach
- Data-driven page rendering
- Search overlay
- Left navigation + right sidebar layout
- SEO generation pattern
- Source notes component
- Related pages component
- Ad slot structure
- Sitemap generation logic if present
- Robots/privacy/contact/about structure

Change:
- All Project Zomboid naming and content
- Icons and color palette
- Categories/navigation
- Tone from “survival horror manual” to “persistent war field manual”
- Data arrays from traits/skills/weapons/maps/build42 to Foxhole-specific buckets

## 12. Suggested Claude Implementation Prompt

Paste something like this into Claude:

> I uploaded my existing Project Zomboid static wiki project. Build a Foxhole version using the same static, data-driven architecture. Replace the Project Zomboid content model with the Foxhole content model in `foxhole_data.js`. Use `foxhole_wiki_content_blueprint.md` as the content/design brief. Keep the project simple: static HTML/CSS/JS, no framework. Update navigation, routes, renderers, metadata, sitemap, and visual theme. Do not scrape huge wiki data into the project. Use concise original guide content from the data file and link official/community sources in source notes. Make sure every page renders from data and every top-level section has index/detail pages.
