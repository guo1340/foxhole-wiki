(function(root){
  root.WikiData = root.WikiData || {};
  root.WikiData["facilities"] = [
  {
    "slug": "overview",
    "section": "facilities",
    "icon": "factory",
    "title": "Facilities Overview",
    "seoTitle": "Foxhole Facilities Guide: An Overview",
    "metaDescription": "Foxhole facilities guide: what player-built facilities are, why they are advanced logistics, and why beginners should not overbuild.",
    "tagline": "Advanced industry, not a beginner toy.",
    "summary": "Facilities are large player-built industrial sites that produce the war's advanced equipment. They are powerful and important — and they are an advanced project, not something a new player should start solo.",
    "teaches": [
      "What facilities are",
      "Why they are advanced logistics",
      "Why beginners should not overbuild",
      "How to get involved safely"
    ],
    "sections": [
      {
        "heading": "What facilities are",
        "body": [
          "Facilities are player-constructed industrial complexes that process resources and produce advanced materials and equipment beyond what standard refineries and factories make.",
          "They are infrastructure projects: large, ongoing, and central to a faction's high-end production."
        ]
      },
      {
        "heading": "Why they are advanced logistics",
        "body": [
          "A facility is not a single building. It is a system of connected production, power, and resource flow that has to be planned, maintained, and supplied continuously.",
          "Running one well requires understanding the whole logistics chain it sits inside."
        ]
      },
      {
        "heading": "Why beginners should not overbuild",
        "body": [
          "New players sometimes start ambitious facilities they cannot finish, supply, or maintain. The result is a half-built site that consumes resources and produces nothing.",
          "Facilities you cannot sustain are a drain, not an asset."
        ]
      },
      {
        "heading": "How to get involved safely",
        "body": [
          {
            "list": [
              "Join an existing facility run by experienced players first",
              "Learn power, pipelines, and production flow before building",
              "Contribute resources and labour to a working facility",
              "Only start your own once you understand the full system"
            ]
          }
        ]
      },
      {
        "heading": "Why facilities matter",
        "body": [
          "Despite the caution, facilities are vital. They produce advanced equipment that decides late-war fights. The point is to respect their complexity, not avoid them.",
          "Learn them properly and facility work becomes one of the most rewarding logistics roles."
        ]
      },
      {
        "heading": "Related systems",
        "body": [
          "Continue with Power and Pipelines, Production Chains, and Facility Etiquette."
        ]
      }
    ],
    "mistake": "Starting a large solo facility as a new player. You will most likely leave behind a half-built, resource-draining site.",
    "tip": "Join a working facility before building your own. Contributing to an established one teaches the whole system safely.",
    "related": [
      "facilities/power-and-pipelines",
      "facilities/production-chains",
      "facilities/facility-etiquette",
      "logistics/refinery-factory-loop"
    ],
    "sources": [
      "official-wiki",
      "subreddit"
    ],
    "updateNotes": "Facility mechanics are complex and frequently adjusted between updates."
  },
  {
    "slug": "power-and-pipelines",
    "section": "facilities",
    "icon": "wrench",
    "title": "Power and Pipelines",
    "seoTitle": "Foxhole Facility Power and Pipelines Guide",
    "metaDescription": "Foxhole guide to facility power and pipelines: keeping advanced production running with energy and resource flow.",
    "tagline": "Keeping the lights on and the resources moving.",
    "summary": "Facilities do not run on their own. Power keeps production buildings working, and pipelines move resources between them. Get either wrong and the whole facility stalls.",
    "teaches": [
      "Why facilities need power",
      "How pipelines move resources",
      "Planning facility layout",
      "Avoiding bottlenecks"
    ],
    "sections": [
      {
        "heading": "Why facilities need power",
        "body": [
          "Many facility buildings require power to operate. Without an adequate, steady supply, production slows or stops regardless of how much raw material is on hand.",
          "Power generation and fuel for it are part of the facility's ongoing logistics."
        ]
      },
      {
        "heading": "How pipelines work",
        "body": [
          "Pipelines carry resources — such as liquids and processed materials — between facility buildings, replacing the need to haul everything by hand inside the site.",
          "A facility laid out with sensible pipeline runs is far more efficient than one that is not."
        ]
      },
      {
        "heading": "Planning layout",
        "body": [
          "Facility layout should be planned before construction: where power is generated, how pipelines connect production, and how trucks and trains reach the site to deliver and collect.",
          "Retrofitting a badly planned facility is painful, so plan first."
        ]
      },
      {
        "heading": "Avoiding bottlenecks",
        "body": [
          {
            "list": [
              "Ensure power keeps up with the buildings that need it",
              "Route pipelines so no production stage starves",
              "Keep fuel and inputs flowing, not just stockpiled once",
              "Leave access for vehicles to load and unload"
            ]
          }
        ]
      },
      {
        "heading": "When this matters",
        "body": [
          "Power and pipeline planning matters the moment a facility grows beyond a couple of buildings. Small additions can be informal; real facilities need design.",
          "Treat it as engineering, because that is what it is."
        ]
      },
      {
        "heading": "Related systems",
        "body": [
          "This connects to the Facilities Overview, Production Chains, and the broader Logistics section."
        ]
      }
    ],
    "mistake": "Adding production buildings without scaling power and pipelines. The new buildings sit idle and the materials are wasted.",
    "tip": "Plan power and pipeline routes before you build. A facility is an engineering project, so design it like one.",
    "related": [
      "facilities/overview",
      "facilities/production-chains",
      "facilities/facility-etiquette",
      "logistics/refinery-factory-loop"
    ],
    "sources": [
      "official-wiki",
      "subreddit"
    ],
    "updateNotes": "Power and pipeline mechanics are complex and adjusted between updates."
  },
  {
    "slug": "production-chains",
    "section": "facilities",
    "icon": "factory",
    "title": "Production Chains",
    "seoTitle": "Foxhole Facility Production Chains Guide",
    "metaDescription": "Foxhole production chains guide: how facility output is built from multi-stage processing of resources.",
    "tagline": "Multi-stage industry, planned end to end.",
    "summary": "Facility output comes from production chains: resources processed through several stages into advanced materials and equipment. Understanding the chain is what lets a facility actually produce something useful.",
    "teaches": [
      "What a production chain is",
      "Why each stage depends on the last",
      "Planning output around need",
      "Keeping a chain flowing"
    ],
    "sections": [
      {
        "heading": "What a production chain is",
        "body": [
          "A production chain is a sequence of processing steps. Raw and refined resources pass through multiple facility buildings, each adding a stage, until the final advanced product emerges.",
          "Nothing high-end appears in one step; it is the end of a chain."
        ]
      },
      {
        "heading": "Why stages depend on each other",
        "body": [
          "Each stage consumes the output of the previous one. If any stage stalls — from missing inputs, no power, or no labour — everything downstream stops with it.",
          "A chain is only as fast as its slowest or most-starved stage."
        ]
      },
      {
        "heading": "Planning output around need",
        "body": [
          "Decide what the war actually needs before committing a facility's chain to producing it. Producing advanced equipment nobody is using wastes enormous upstream effort.",
          "Coordinate facility output with frontline demand."
        ]
      },
      {
        "heading": "Keeping a chain flowing",
        "body": [
          {
            "list": [
              "Keep every stage supplied with its inputs",
              "Watch for the bottleneck stage and reinforce it",
              "Maintain power and pipelines feeding the chain",
              "Move finished output forward instead of letting it pile up"
            ]
          }
        ]
      },
      {
        "heading": "When chains matter",
        "body": [
          "Production chains matter most for advanced equipment that frontline factories cannot make. For everyday gear, the standard refinery-factory loop is simpler and sufficient.",
          "Use facilities for what only facilities can produce."
        ]
      },
      {
        "heading": "Related systems",
        "body": [
          "This builds on the Facilities Overview and Power and Pipelines, and connects back to the Refinery and Factory Loop."
        ]
      }
    ],
    "mistake": "Running a full production chain to make advanced equipment that no one at the front is asking for. The whole chain's effort is wasted.",
    "tip": "Identify the bottleneck stage and feed it first. A chain only moves as fast as its most-starved step.",
    "related": [
      "facilities/overview",
      "facilities/power-and-pipelines",
      "logistics/refinery-factory-loop",
      "facilities/facility-etiquette"
    ],
    "sources": [
      "official-wiki",
      "subreddit"
    ],
    "updateNotes": "Production recipes and chain stages are complex and frequently adjusted."
  },
  {
    "slug": "facility-etiquette",
    "section": "facilities",
    "icon": "wrench",
    "title": "Facility Etiquette",
    "seoTitle": "Foxhole Facility Etiquette Guide",
    "metaDescription": "Foxhole facility etiquette: respecting public and shared facilities, not hoarding, and contributing fairly.",
    "tagline": "Shared industry, shared responsibility.",
    "summary": "Many facilities are public or shared. They only work if players respect them: contributing resources, taking output fairly, and not hoarding or sabotaging the work of others.",
    "teaches": [
      "Why facility etiquette exists",
      "Respecting public facilities",
      "Contributing fairly",
      "How bad behaviour breaks facilities"
    ],
    "sections": [
      {
        "heading": "Why etiquette matters here",
        "body": [
          "Facilities represent huge amounts of collective labour. A shared facility only functions if the players using it treat it as common infrastructure, not a personal resource.",
          "Etiquette is what keeps facilities running for everyone."
        ]
      },
      {
        "heading": "Respecting public facilities",
        "body": [
          "Public facilities belong to the war effort. Use their output for the front, not for a private hoard, and do not dismantle or repurpose other players' work without coordination.",
          "Treat someone else's facility the way you would want yours treated."
        ]
      },
      {
        "heading": "Contributing fairly",
        "body": [
          {
            "list": [
              "If you take output, contribute resources or labour back",
              "Help maintain power, pipelines, and supply",
              "Coordinate before changing a shared facility's layout",
              "Do not strip a facility's stock for personal projects"
            ]
          }
        ]
      },
      {
        "heading": "How bad behaviour breaks facilities",
        "body": [
          "Hoarding output, draining inputs, blocking access, or carelessly altering shared builds can collapse a facility that many players relied on.",
          "One inconsiderate player can undo days of collective work."
        ]
      },
      {
        "heading": "When to build private versus public",
        "body": [
          "If you want full control, contribute to a clearly private regiment facility with its owners' agreement. If you use public facilities, accept the shared rules that come with them.",
          "Know which kind you are using and behave accordingly."
        ]
      },
      {
        "heading": "Related systems",
        "body": [
          "This extends How to Not Waste Supplies into facility play, alongside the Facilities Overview and Production Chains."
        ]
      }
    ],
    "mistake": "Treating a public facility as a personal supply depot — taking its output while contributing nothing back.",
    "tip": "If you draw from a shared facility, give back: resources, labour, or maintenance. Shared industry runs on reciprocity.",
    "related": [
      "facilities/overview",
      "facilities/production-chains",
      "guides/how-to-not-waste-supplies",
      "logistics/public-stockpiles"
    ],
    "sources": [
      "official-wiki",
      "discord"
    ],
    "updateNotes": "Facility ownership and access mechanics are adjusted between updates."
  }
];
})(typeof window !== 'undefined' ? window : globalThis);
