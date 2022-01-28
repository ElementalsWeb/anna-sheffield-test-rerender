type Item = string;
export type rulesMap = Record<string, Item[] | null>

let allRingBands: Item[] = ["Tiara Band", "Grand Tiara Band", "Tiara Curve Band", "Marquise Tiara Band", "Butterfly Marquise Tiara Band", "Triple Baguette Tiara Band", "Tiny Crescent Band", "Crescent Band", "Chevron Band", "Celestine Tiara Band", "Meridian Scallop Band",  "Meridian Scallop Pave Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band"]
 

export const rulesEngagement: rulesMap = {
    "Hazeline Solitaire Ring 1ct round": allRingBands,
    "Hazeline Solitaire Ring .50ct round": allRingBands,
    "Hazeline Solitaire Ring 1.50ct round": ["Grand Tiara Band", "Tiara Curve Band", "Marquise Tiara Band", "Butterfly Marquise Tiara Band", "Triple Baguette Tiara Band", "Crescent Band", "Chevron Band", "Celestine Tiara Band", "Meridian Scallop Band",  "Meridian Scallop Pave Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band"],
    "Hazeline Three Stone Ring 1ct round": allRingBands,
    "Bea Solitaire (East-West) 1.5ct oval": ["Grand Tiara Band", "Tiara Curve Band", "Marquise Tiara Band", "Butterfly Marquise Tiara Band", "Triple Baguette Tiara Band", "Crescent Band", "Chevron Band", "Celestine Tiara Band", "Meridian Scallop Band",  "Meridian Scallop Pave Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band"],
    "Bea Solitaire (North-South) 1ct Oval": ["Grand Tiara Band", "Tiara Curve Band", "Marquise Tiara Band", "Butterfly Marquise Tiara Band", "Triple Baguette Tiara Band", "Crescent Band", "Chevron Band", "Celestine Tiara Band", "Meridian Scallop Band",  "Meridian Scallop Pave Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band"],
    "Bea Three Stone Ring 8x6 EC": ["Grand Tiara Band", "Tiara Curve Band", "Marquise Tiara Band", "Butterfly Marquise Tiara Band", "Triple Baguette Tiara Band", "Crescent Band", "Chevron Band", "Celestine Tiara Band", "Meridian Scallop Band",  "Meridian Scallop Pave Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band"],
    "Bea Three Stone Ring 7x5 EC": ["Grand Tiara Band", "Tiara Curve Band", "Marquise Tiara Band", "Butterfly Marquise Tiara Band", "Triple Baguette Tiara Band", "Crescent Band", "Chevron Band", "Celestine Tiara Band", "Meridian Scallop Band",  "Meridian Scallop Pave Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band"],
    "Marquise Bea Ring 1ct": ["Marquise Tiara Band", "Celestine Tiara Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band", "Chevron Band"],
    "Eleonore Ring 1ct Round": allRingBands,
    "Eleonore Ring .75ct Round": allRingBands,
    "Eleonore Ring 1.25ct Round": allRingBands,
}

export const rulesBang: rulesMap = {
    "Grand Tiara Band": ["Tiara Curve Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band"],
    "Tiara Band": ["Tiara Curve Band", "Grand Tiara Band", "Marquise Tiara Band", "Butterfly Marquise Tiara Band", "Triple Baguette Tiara Band", "Celestine Tiara Band", "Crescent Band", "Meridian Scallop Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band"],

    "Tiara Curve Band": ["Tiara Curve Band", "Celestine Tiara Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band"],
    "Marquise Tiara Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band"],
    "Butterfly Marquise Tiara Band": [],
    "Triple Baguette Tiara Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band"],
    "Tiny Crescent Band": ["Grand Tiara Band", "Tiara Curve Band", "Marquise Tiara Band", "Butterfly Marquise Tiara Band", "Triple Baguette Tiara Band", "Crescent Band", "Celestine Tiara Band", "Meridian Scallop Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Chevron Band", "Orbit Band"],

    "Crescent Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band", "Marquise Tiara Band"],
    "Chevron Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band", "Marquise Tiara Band"],
    "Celestine Tiara Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band", "Marquise Tiara Band"],
    "Meridian Scallop Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band", "Marquise Tiara Band"],
     "Meridian Scallop Pave Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band", "Marquise Tiara Band"],
    "Chrysalis Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band", "Marquise Tiara Band"],
    "Orbit Band": ["Crescent Band", "Chevron Band", "Celestine Tiara Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band"],
    "Diamond Dusted Chrysalis Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band", "Marquise Tiara Band"],
    "Grand Tiara Pave Band": ["Tiara Curve Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band"],

}

 