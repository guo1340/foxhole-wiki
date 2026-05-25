(function(root){
  root.WikiData = root.WikiData || {};
  root.WikiData["logistics"] = [
  {
    "slug": "scrap-to-frontline",
    "section": "logistics",
    "icon": "scrap",
    "title": "Scrap to Frontline",
    "seoTitle": "Foxhole Logistics: Scrap Gathering to Frontline Supply",
    "metaDescription": "Foxhole logistics guide: gathering scrap and salvage, refining it, and moving the result to the front line.",
    "tagline": "Where every supply chain begins.",
    "summary": "The whole war starts with scrap. Players harvest salvage, it becomes basic materials, materials become gear, and gear reaches the front. This page walks the chain from the very first node.",
    "teaches": [
      "Where scrap comes from",
      "Why raw resources matter",
      "The full gather-to-front path",
      "How to avoid breaking the chain"
    ],
    "sections": [
      {
        "heading": "What scrap is",
        "body": [
          "Scrap, or salvage, is the raw resource gathered from salvage fields and resource nodes scattered across the map. It is the seed material for almost everything the war consumes.",
          "Gathering scrap is unglamorous, low-risk work that absolutely anyone can do, including brand-new players."
        ]
      },
      {
        "heading": "Why the first node matters",
        "body": [
          "If nobody gathers, nothing downstream exists — no materials, no crates, no shirts at the front. Scrap gathering is the foundation the rest of the chain stands on.",
          "Backline regions usually have safe salvage fields, making this a perfect first job."
        ]
      },
      {
        "heading": "The gather-to-front path",
        "body": [
          "The chain is a clear sequence. Learn it once and the rest of logistics makes sense.",
          {
            "list": [
              "Harvest scrap and components at salvage fields",
              "Deliver scrap to a refinery to produce basic materials",
              "Use materials at a factory to produce crates of gear",
              "Load crates onto a truck or into containers",
              "Drive to a frontline base and submit the supplies"
            ]
          }
        ]
      },
      {
        "heading": "Common mistakes",
        "body": [
          "Gathering huge piles of scrap and leaving them in the backline. Scrap that never moves forward does nothing.",
          "Skipping the delivery step because the front looks dangerous. Hand off to another driver rather than abandoning the run."
        ]
      },
      {
        "heading": "When to gather and when not to",
        "body": [
          "Gather when backline stockpiles or refineries are low and the front is quiet. Switch to delivery or defence when the front is collapsing and bases are empty.",
          "Read the war: the chain needs whichever node is currently starved."
        ]
      },
      {
        "heading": "Related systems",
        "body": [
          "Continue with the Refinery and Factory Loop, then Public Stockpiles to see where deliveries land."
        ]
      }
    ],
    "mistake": "Stockpiling raw scrap as if it were the goal. Scrap is worthless until it is refined, produced, and delivered.",
    "tip": "If you only learn one logistics job, learn this one. A single completed scrap-to-front run is real, visible war effort.",
    "related": [
      "logistics/refinery-factory-loop",
      "logistics/public-stockpiles",
      "guides/logistics-quickstart",
      "vehicles/logistics-trucks"
    ],
    "sources": [
      "official-wiki",
      "subreddit"
    ],
    "updateNotes": "Resource node types and yields are adjusted between updates; the chain structure is stable."
  },
  {
    "slug": "refinery-factory-loop",
    "section": "logistics",
    "icon": "factory",
    "title": "Refinery and Factory Loop",
    "seoTitle": "Foxhole Refinery and Factory Guide",
    "metaDescription": "How Foxhole refineries and factories work: turning scrap into materials and materials into crates of usable gear.",
    "tagline": "Turning raw materials into war.",
    "summary": "Refineries convert raw resources into materials; factories convert materials into crated equipment. This middle of the supply chain is where logistics labour becomes usable gear.",
    "teaches": [
      "What refineries do",
      "What factories do",
      "The basic vs refined material split",
      "How to keep the loop efficient"
    ],
    "sections": [
      {
        "heading": "What the loop is",
        "body": [
          "The refinery-factory loop is the processing stage of logistics. Raw scrap and components go in; basic materials, refined materials, and crates of gear come out.",
          "It sits between gathering and delivery, and it is where most of a faction's equipment is actually born."
        ]
      },
      {
        "heading": "Refineries",
        "body": [
          "Refineries take raw resources and produce materials. Basic materials cover common needs like construction and simple gear; refined materials feed more advanced production.",
          "Refining takes time, so feeding refineries early keeps the rest of the chain from stalling."
        ]
      },
      {
        "heading": "Factories",
        "body": [
          "Factories consume materials to produce crates of equipment: weapons, ammo, uniforms, medical supplies, and more. A crate is the unit you actually haul to the front.",
          "Producing the right mix matters — a stack of crates the front does not need is wasted material."
        ]
      },
      {
        "heading": "Basic vs refined materials",
        "body": [
          "Basic materials are the workhorse resource for everyday gear and construction. Refined materials are scarcer and feed higher-tier equipment and facilities.",
          "Spend refined materials deliberately; they represent far more upstream work than basic ones."
        ]
      },
      {
        "heading": "Common mistakes",
        "body": [
          "Producing only what is fun to make. The front needs shirts, ammo, and bandages far more than niche equipment.",
          "Letting a refinery sit empty while scrap piles up beside it. Keep the inputs flowing."
        ]
      },
      {
        "heading": "Related systems",
        "body": [
          "Feed the loop with Scrap to Frontline, then move output through Shipping and Containers and into Public Stockpiles. Facilities extend this into advanced production."
        ]
      }
    ],
    "mistake": "Burning refined materials on vanity equipment while frontline bases sit short of basic shirts and ammo.",
    "tip": "Check what frontline bases are missing before you queue production. Make what the war needs, not what is interesting.",
    "related": [
      "logistics/scrap-to-frontline",
      "logistics/shipping",
      "logistics/public-stockpiles",
      "facilities/production-chains"
    ],
    "sources": [
      "official-wiki",
      "subreddit"
    ],
    "updateNotes": "Production recipes and material costs change between updates; confirm current crate costs in patch notes."
  },
  {
    "slug": "public-stockpiles",
    "section": "logistics",
    "icon": "crate",
    "title": "Public Stockpiles",
    "seoTitle": "Foxhole Public Stockpiles Guide",
    "metaDescription": "How Foxhole public stockpiles work: shared reserves at bases, submitting supplies, and using them without draining the war.",
    "tagline": "Shared reserves that strangers fight from.",
    "summary": "Public stockpiles are the shared supply pools held in bases. They let players who never met equip each other. Filling them is generous; draining them carelessly is how regions fall.",
    "teaches": [
      "What public stockpiles are",
      "How submitting supplies works",
      "Fair-use etiquette",
      "How stockpile health predicts a region's fate"
    ],
    "sections": [
      {
        "heading": "What public stockpiles are",
        "body": [
          "A public stockpile is the supply reserve inside a base that any friendly player can draw from. It holds uniforms, weapons, ammo, medical supplies, materials, and more.",
          "It is the mechanism that lets a soldier spawn fully equipped without knowing who manufactured the gear."
        ]
      },
      {
        "heading": "Why they matter",
        "body": [
          "Public stockpiles are the difference between a base that can sustain a fight and one that collapses. A frontline base with a healthy stockpile absorbs losses; an empty one cannot.",
          "Submitting supplies into them is one of the most direct ways to strengthen a region."
        ]
      },
      {
        "heading": "Submitting supplies",
        "body": [
          "When you deliver crates to a base, you submit them into its stockpile so others can use them. Always confirm the supplies registered before you leave.",
          "Submitting to the right base — a struggling frontline one, not a comfortable backline one — multiplies the impact."
        ]
      },
      {
        "heading": "Fair-use etiquette",
        "body": [
          "Public stockpiles belong to the war effort, not to individuals.",
          {
            "list": [
              "Take what your current job needs, not a personal reserve",
              "Do not strip a frontline base to stock a private base",
              "Do not pull vehicles you cannot crew, protect, or return",
              "If you over-pull, put the surplus back"
            ]
          }
        ]
      },
      {
        "heading": "Reading stockpile health",
        "body": [
          "Stockpile levels are a forecast. A frontline region with empty bases is about to be in trouble regardless of how the shooting looks right now.",
          "Logistics players watch stockpiles the way generals watch the map."
        ]
      },
      {
        "heading": "Related systems",
        "body": [
          "This connects to How to Not Waste Supplies, the Logistics Quickstart, and Trains for moving bulk supply into stockpiles."
        ]
      }
    ],
    "mistake": "Emptying a public stockpile to outfit a private base or garage. That is taking the war's shared reserves for personal use.",
    "tip": "When a delivery run finishes, glance at the base stockpile. If it is thin on shirts or ammo, that is your next run.",
    "related": [
      "guides/how-to-not-waste-supplies",
      "guides/logistics-quickstart",
      "logistics/trains",
      "building/field-bases"
    ],
    "sources": [
      "official-wiki",
      "subreddit",
      "discord"
    ],
    "updateNotes": "Stockpile capacity and submission rules are periodically adjusted; the etiquette is constant."
  },
  {
    "slug": "shipping",
    "section": "logistics",
    "icon": "crate",
    "title": "Shipping and Containers",
    "seoTitle": "Foxhole Shipping and Containers Guide",
    "metaDescription": "Foxhole guide to shipping and containers: moving bulk crates and materials efficiently across regions.",
    "tagline": "Moving supply in bulk, not by hand.",
    "summary": "Carrying crates one at a time does not scale. Containers and dedicated shipping let logistics players move large volumes of supply efficiently — the difference between supplying a squad and supplying a front.",
    "teaches": [
      "What containers are for",
      "Bulk vs single-crate hauling",
      "Matching transport to distance",
      "How to ship without bottlenecks"
    ],
    "sections": [
      {
        "heading": "What shipping is",
        "body": [
          "Shipping is bulk logistics: using containers, large vehicles, trains, and ships to move many crates or large material volumes at once instead of hauling them individually.",
          "It is the scaling layer that lets a handful of players keep a whole region supplied."
        ]
      },
      {
        "heading": "Why bulk matters",
        "body": [
          "Single-crate hauling is fine for a quick top-up but collapses under the demand of an active front. Containers let one trip do the work of many.",
          "Efficient shipping frees players to fight, build, and gather instead of all of them driving."
        ]
      },
      {
        "heading": "Containers and how to use them",
        "body": [
          "Containers hold large quantities of crates or materials and are moved by suitable vehicles and cranes at depots and ports.",
          {
            "list": [
              "Pack containers with what a destination actually needs",
              "Use cranes at ports and depots to load and unload",
              "Stage containers near production so loading is quick",
              "Label your intent in chat so others do not duplicate the run"
            ]
          }
        ]
      },
      {
        "heading": "Matching transport to distance",
        "body": [
          "Short hops suit trucks; long backline hauls suit trains; cross-water moves suit ships. Picking the wrong tool wastes fuel and time.",
          "Plan the route before you load, including where you will refuel."
        ]
      },
      {
        "heading": "Common mistakes",
        "body": [
          "Shipping huge volumes to a base that is already full while a starving base nearby gets nothing. Confirm the need first.",
          "Leaving loaded containers stranded at a depot because the next leg was never arranged."
        ]
      },
      {
        "heading": "Related systems",
        "body": [
          "Shipping connects the Refinery and Factory Loop to Public Stockpiles, and overlaps with Trains and Naval Logistics."
        ]
      }
    ],
    "mistake": "Hand-carrying crates one by one to supply an active front. It does not scale and burns time the war cannot spare.",
    "tip": "Before loading a container, decide its exact destination and the need it fills. Bulk delivered to the wrong base is bulk wasted.",
    "related": [
      "logistics/refinery-factory-loop",
      "logistics/trains",
      "logistics/public-stockpiles",
      "naval/logistics"
    ],
    "sources": [
      "official-wiki",
      "subreddit"
    ],
    "updateNotes": "Container, crane, and vehicle capacities are tuned between updates."
  },
  {
    "slug": "trains",
    "section": "logistics",
    "icon": "truck",
    "title": "Trains and Bulk Transport",
    "seoTitle": "Foxhole Trains Guide: Bulk Rail Transport",
    "metaDescription": "Foxhole trains guide: using rail for bulk transport of materials, crates, and equipment across long backline routes.",
    "tagline": "Rail moves the war by the ton.",
    "summary": "Trains are Foxhole's heavy-haul transport. Over rail networks they move enormous quantities of materials and crates across the backline far faster than any convoy of trucks.",
    "teaches": [
      "What rail transport is for",
      "Trains vs trucks vs ships",
      "How rail infrastructure works",
      "How to use trains responsibly"
    ],
    "sections": [
      {
        "heading": "What rail transport is",
        "body": [
          "Trains run on player-relevant rail networks and pull cars loaded with containers, materials, and equipment. One train can carry what would take a long line of trucks.",
          "Rail is the backbone of large-scale backline logistics."
        ]
      },
      {
        "heading": "Why trains matter",
        "body": [
          "When a front is consuming supply faster than trucks can deliver, rail is what keeps up. It concentrates huge throughput into a single coordinated run.",
          "A well-run rail line can supply multiple regions from a central production hub."
        ]
      },
      {
        "heading": "How rail works",
        "body": [
          "Rail requires track, stations, and the discipline to keep lines clear and trains moving.",
          {
            "list": [
              "Load cars and containers at production hubs and depots",
              "Run the train along established track to forward stations",
              "Unload near the front, then hand crates to trucks for the last leg",
              "Keep the line clear so trains are not blocked or abandoned"
            ]
          }
        ]
      },
      {
        "heading": "Trains vs trucks vs ships",
        "body": [
          "Trains win on long overland bulk hauls. Trucks win on flexible short-range delivery, especially the dangerous last stretch to the front. Ships win across water.",
          "Most efficient logistics chains the three together rather than relying on one."
        ]
      },
      {
        "heading": "Using trains responsibly",
        "body": [
          "Trains are shared, expensive infrastructure. Do not abandon one on the main line, do not block stations, and coordinate so two players are not running empty trains on the same route.",
          "A blocked rail line can choke a whole faction's logistics."
        ]
      },
      {
        "heading": "Related systems",
        "body": [
          "Trains pair with Shipping and Containers for loading, Public Stockpiles for the destination, and Backline Regions for understanding routes."
        ]
      }
    ],
    "mistake": "Abandoning a train mid-line or blocking a station. One stuck train can stall every shipment behind it.",
    "tip": "Treat rail as shared infrastructure. Announce your route, keep moving, and clear the line when you are done.",
    "related": [
      "logistics/shipping",
      "logistics/public-stockpiles",
      "maps/backline-regions",
      "vehicles/logistics-trucks"
    ],
    "sources": [
      "official-wiki",
      "subreddit"
    ],
    "updateNotes": "Rail mechanics and train capacities are refined between updates."
  }
];
})(typeof window !== 'undefined' ? window : globalThis);
