(function(root){
  root.WikiData = root.WikiData || {};
  root.WikiData["building"] = [
  {
    "slug": "field-bases",
    "section": "building",
    "icon": "bunker",
    "title": "Field Bases",
    "seoTitle": "Foxhole Field Bases Guide",
    "metaDescription": "Foxhole field bases guide: placing forward bases that support a frontline without becoming an easy enemy objective.",
    "tagline": "Forward footholds, placed with care.",
    "summary": "Field bases are the forward positions that let infantry spawn, resupply, and hold near the front. A good one anchors a push; a badly placed one is a gift to the enemy.",
    "teaches": [
      "What field bases provide",
      "Where to place them",
      "Supplying a forward base",
      "Common placement errors"
    ],
    "sections": [
      {
        "heading": "What field bases do",
        "body": [
          "Field bases give frontline troops a forward point to spawn, resupply, and fall back to. They shorten the distance between the stockpile and the fight.",
          "A push without a forward base often stalls simply because reinforcements take too long to arrive."
        ]
      },
      {
        "heading": "Where to place them",
        "body": [
          "A field base should be close enough to support the front but not so exposed that it is overrun immediately. Cover, terrain, and supply access all matter.",
          "Think about how the enemy will approach it before you place it."
        ]
      },
      {
        "heading": "Supplying a field base",
        "body": [
          "A forward base is only useful with supplies in it. It needs uniforms, ammo, medical gear, and maintenance materials delivered and kept topped up.",
          "Plan the logistics route to the base as part of placing it."
        ]
      },
      {
        "heading": "Common placement errors",
        "body": [
          {
            "list": [
              "Placing a base too far forward where it cannot be defended",
              "Placing it with no cover or supply route",
              "Building a base nobody is willing to garrison",
              "Forgetting maintenance, so the base decays and is lost passively"
            ]
          }
        ]
      },
      {
        "heading": "When to build one",
        "body": [
          "Build a field base when a front needs a forward foothold and players will actually use and supply it. Do not scatter bases that no one defends or stocks.",
          "A single well-supplied base beats three neglected ones."
        ]
      },
      {
        "heading": "Related systems",
        "body": [
          "Field bases connect to Public Stockpiles, Maintenance Supplies, and Bunkers for heavier fortification."
        ]
      }
    ],
    "mistake": "Dropping a field base far forward with no cover, no supply route, and no garrison. It just hands the enemy a target.",
    "tip": "Before placing a field base, confirm two things: someone will defend it and someone will supply it. Without both, do not build it.",
    "related": [
      "logistics/public-stockpiles",
      "building/maintenance-supplies",
      "building/bunkers",
      "building/common-mistakes"
    ],
    "sources": [
      "official-wiki",
      "subreddit"
    ],
    "updateNotes": "Base mechanics and decay rules are adjusted between updates."
  },
  {
    "slug": "trenches",
    "section": "building",
    "icon": "trench",
    "title": "Building Trenches",
    "seoTitle": "Foxhole Trench Building Guide",
    "metaDescription": "Foxhole trench building guide: digging trench lines that help defenders instead of the enemy.",
    "tagline": "Dig lines that defend, not betray.",
    "summary": "Trench networks are cheap, powerful defences — when built well. Built badly, they channel your own troops poorly and hand the enemy ready-made cover.",
    "teaches": [
      "What trench networks do",
      "Where to dig and where not to",
      "Connecting trenches sensibly",
      "Why bad trenches help the enemy"
    ],
    "sections": [
      {
        "heading": "What trench networks do",
        "body": [
          "Trenches let infantry fight under cover, move along a line protected, and reinforce threatened sections without crossing open ground.",
          "A well-built trench network multiplies the defensive value of every soldier in it."
        ]
      },
      {
        "heading": "Where to dig",
        "body": [
          "Dig trenches where defenders need to hold, with fields of fire over the ground the enemy must cross, supported by friendly bases and fire positions.",
          "The position should make the attacker's approach costly."
        ]
      },
      {
        "heading": "Connecting trenches",
        "body": [
          "Trenches should connect into a network so troops can move and reinforce under cover, with depth — a second line behind the first — so the position can be defended in layers.",
          "Disconnected trench stubs are far weaker than a coherent network."
        ]
      },
      {
        "heading": "Why bad trenches help the enemy",
        "body": [
          "A trench is terrain that anyone can use. Dug too far forward or facing the wrong way, it becomes the enemy's staging position and cover once they reach it.",
          {
            "list": [
              "Avoid trenches the enemy can capture and turn around",
              "Do not block friendly movement or counterattack routes",
              "Do not dig isolated trenches with no support",
              "Plan the network; do not dig reflexively"
            ]
          }
        ]
      },
      {
        "heading": "When to dig",
        "body": [
          "Dig when a line needs holding and someone has planned the layout. If you are new, dig where experienced builders direct rather than improvising.",
          "Thoughtless digging can be worse than no trench at all."
        ]
      },
      {
        "heading": "Related systems",
        "body": [
          "This pairs with Trenches and Cover on the combat side, and with Field Bases and Common Building Mistakes."
        ]
      }
    ],
    "mistake": "Digging a long trench forward of your line. When the enemy reaches it, they get free cover aimed at your own positions.",
    "tip": "Plan the whole network before digging: where it holds, how it connects, and the second line behind it. Then dig.",
    "related": [
      "combat/trenches-and-cover",
      "building/field-bases",
      "building/common-mistakes",
      "building/bunkers"
    ],
    "sources": [
      "official-wiki",
      "subreddit"
    ],
    "updateNotes": "Trench and entrenchment mechanics are periodically adjusted."
  },
  {
    "slug": "bunkers",
    "section": "building",
    "icon": "bunker",
    "title": "Bunkers",
    "seoTitle": "Foxhole Bunker Building Guide",
    "metaDescription": "Foxhole bunker guide: building fortified bunker bases with AI coverage, supply access, and maintenance in mind.",
    "tagline": "Fortifications that hold regions.",
    "summary": "Bunkers are heavy fortifications that can turn a region into a hard problem for the enemy. They demand planning: defensive coverage, supply access, repair access, and maintenance all have to be designed in.",
    "teaches": [
      "What bunkers provide",
      "Designing for coverage and supply",
      "Why maintenance is non-negotiable",
      "Avoiding overbuilding"
    ],
    "sections": [
      {
        "heading": "What bunkers do",
        "body": [
          "Bunkers are durable fortified structures that resist direct and indirect fire and anchor a defensive position. A good bunker network can hold a region against repeated assaults.",
          "They are among the strongest defensive tools players can build."
        ]
      },
      {
        "heading": "Designing for coverage and supply",
        "body": [
          "A bunker has to do more than be tough. It needs defensive coverage over the approaches, supply access so it can be stocked, and repair access so it can be maintained under pressure.",
          "Builders should think about enemy vehicle angles, infantry approaches, and how defenders move and resupply inside it."
        ]
      },
      {
        "heading": "Why maintenance is non-negotiable",
        "body": [
          "Bunkers decay without maintenance supplies. A grand bunker network that nobody maintains will weaken and fall on its own, without the enemy doing much at all.",
          "Maintenance has to be planned from the moment construction starts."
        ]
      },
      {
        "heading": "Avoiding overbuilding",
        "body": [
          "Bigger is not automatically better. Sprawling bunkers that exceed what players can garrison, supply, and maintain become liabilities.",
          {
            "list": [
              "Build to the size the defenders can actually hold",
              "Ensure supply routes exist before expanding",
              "Plan maintenance before adding more structure",
              "A compact, maintained bunker beats a sprawling, decaying one"
            ]
          }
        ]
      },
      {
        "heading": "When to build bunkers",
        "body": [
          "Build bunkers where a region must be held and a community will commit to garrisoning and maintaining them. Casual bunker construction usually produces decaying liabilities.",
          "Coordinate with the players who will live in the bunker."
        ]
      },
      {
        "heading": "Related systems",
        "body": [
          "Bunkers connect to Maintenance Supplies, Field Bases, and the Facilities section for the industry that supplies them."
        ]
      }
    ],
    "mistake": "Building a huge bunker network with no maintenance plan. It decays and falls without the enemy needing to assault it.",
    "tip": "Design coverage, supply, and maintenance before you design walls. A bunker is only as strong as its weakest support system.",
    "related": [
      "building/maintenance-supplies",
      "building/field-bases",
      "building/common-mistakes",
      "facilities/overview"
    ],
    "sources": [
      "official-wiki",
      "subreddit"
    ],
    "updateNotes": "Bunker mechanics, decay, and maintenance rules are actively adjusted, including around Update 64."
  },
  {
    "slug": "maintenance-supplies",
    "section": "building",
    "icon": "wrench",
    "title": "Maintenance Supplies",
    "seoTitle": "Foxhole Maintenance Supplies Guide",
    "metaDescription": "Foxhole maintenance supplies guide: preventing structure decay and keeping bases and bunkers alive.",
    "tagline": "The supplies that stop decay.",
    "summary": "Structures in Foxhole decay over time. Maintenance supplies are what keep bases, bunkers, and fortifications standing. A region can be lost simply because nobody kept its maintenance topped up.",
    "teaches": [
      "What decay is and why it exists",
      "What maintenance supplies do",
      "Keeping maintenance topped up",
      "Why this is a real job"
    ],
    "sections": [
      {
        "heading": "What decay is",
        "body": [
          "Player-built structures gradually decay if left unattended. This prevents the map from filling permanently with abandoned construction and keeps fortifications a living responsibility.",
          "Decay means a base is never finished — it has to be sustained."
        ]
      },
      {
        "heading": "What maintenance supplies do",
        "body": [
          "Maintenance supplies are consumed to keep structures from decaying. Stocked in a base, they hold its structures and fortifications in good condition over time.",
          "Without them, even a strong position quietly weakens."
        ]
      },
      {
        "heading": "Keeping maintenance topped up",
        "body": [
          "Maintenance is an ongoing logistics task, not a one-time delivery.",
          {
            "list": [
              "Check maintenance levels at bases you rely on",
              "Deliver maintenance supplies before they run out, not after",
              "Treat key bunkers and field bases as standing maintenance routes",
              "Coordinate so important positions are never left to decay"
            ]
          }
        ]
      },
      {
        "heading": "Why this is a real job",
        "body": [
          "Maintenance runs are unglamorous but decisive. A region lost to decay is lost without a fight, and preventing that is a genuine contribution.",
          "Solo players in particular can own maintenance for a sector."
        ]
      },
      {
        "heading": "When maintenance matters most",
        "body": [
          "Maintenance matters most for the bunkers and bases a faction depends on. The bigger the fortification, the more catastrophic it is to let it decay.",
          "Build maintenance into the plan for every major structure."
        ]
      },
      {
        "heading": "Related systems",
        "body": [
          "Maintenance ties Bunkers and Field Bases to the logistics chain through Public Stockpiles and Logistics Trucks."
        ]
      }
    ],
    "mistake": "Building impressive fortifications and assuming they are done. Without maintenance, they decay and fall on their own.",
    "tip": "Adopt a maintenance route. Pick a few important bases and make keeping their maintenance stocked your standing job.",
    "related": [
      "building/bunkers",
      "building/field-bases",
      "logistics/public-stockpiles",
      "vehicles/logistics-trucks"
    ],
    "sources": [
      "official-wiki",
      "subreddit"
    ],
    "updateNotes": "Decay rates and maintenance mechanics are actively tuned, including around Update 64."
  },
  {
    "slug": "common-mistakes",
    "section": "building",
    "icon": "wrench",
    "title": "Common Building Mistakes",
    "seoTitle": "Foxhole Building Mistakes to Avoid",
    "metaDescription": "Common Foxhole building mistakes: bad placement, ignoring maintenance, overbuilding, and blocking friendly movement.",
    "tagline": "What new builders get wrong.",
    "summary": "Building is easy to do badly and hard to fix later. This page collects the mistakes that new builders make most often, so you can avoid creating problems your faction has to live with.",
    "teaches": [
      "The most common building errors",
      "Why placement mistakes are permanent",
      "How overbuilding backfires",
      "How to build responsibly"
    ],
    "sections": [
      {
        "heading": "Why building mistakes are costly",
        "body": [
          "Structures are persistent and slow to remove. A bad build is not a quick mistake — it sits on the map affecting players for the rest of the war.",
          "That is why builders should plan before they place."
        ]
      },
      {
        "heading": "Bad placement",
        "body": [
          "The most common error is placement: trenches dug forward that the enemy captures, structures blocking friendly movement, bases with no cover or supply route.",
          "Placement mistakes cannot usually be undone, so they must be avoided up front."
        ]
      },
      {
        "heading": "Ignoring maintenance",
        "body": [
          "New builders build and then walk away. Without maintenance, the structure decays and is lost, and the materials spent on it are wasted.",
          "Never build something you have not planned to maintain."
        ]
      },
      {
        "heading": "Overbuilding and clutter",
        "body": [
          {
            "list": [
              "Sprawling defences nobody can garrison or supply",
              "Redundant structures that just consume materials and maintenance",
              "Construction that blocks roads, movement, or counterattacks",
              "Vanity builds that serve no defensive purpose"
            ]
          }
        ]
      },
      {
        "heading": "How to build responsibly",
        "body": [
          "Plan the position, check supply and maintenance, coordinate with the players who will use it, and build only what is needed. When unsure, ask an experienced builder before placing anything.",
          "Good building is mostly restraint and planning."
        ]
      },
      {
        "heading": "Related systems",
        "body": [
          "This page summarises the cautions detailed in Field Bases, Building Trenches, Bunkers, and Maintenance Supplies."
        ]
      }
    ],
    "mistake": "Building enthusiastically without a plan. Enthusiasm plus no plan produces clutter the whole faction has to work around.",
    "tip": "When unsure, do not place the structure. Ask a veteran builder first — an unbuilt mistake costs nothing to avoid.",
    "related": [
      "building/field-bases",
      "building/trenches",
      "building/bunkers",
      "building/maintenance-supplies"
    ],
    "sources": [
      "official-wiki",
      "subreddit"
    ],
    "updateNotes": "Building rules and structure types are adjusted between updates."
  }
];
})(typeof window !== 'undefined' ? window : globalThis);
