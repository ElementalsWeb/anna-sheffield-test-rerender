type Item = string;
export type rulesMap = Record<string, Item[] | null>

let allRingBands: Item[] = ["Tiara Band", "Grand Tiara Band", "Grand Tiara Pave Band", "Tiara Curve Band", "Marquise Tiara Band", "Butterfly Marquise Tiara Band", "Triple Baguette Tiara Band", "Tiny Crescent Band", "Crescent Band", "Chevron Band", "Celestine Tiara Band", "Meridian Scallop Band", "Meridian Scallop Pave Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band", "Cosmic Tiara Curve Band", "Cosmic Luna Band"]


export const rulesEngagement: rulesMap = {
    "Hazeline Solitaire Ring 1ct round": allRingBands,
    "Hazeline Solitaire Ring .50ct round": allRingBands,
    "Hazeline Solitaire Ring 1.50ct round": ["Tiara Band", "Grand Tiara Band", "Grand Tiara Pave Band", "Tiara Curve Band", "Marquise Tiara Band", "Butterfly Marquise Tiara Band", "Triple Baguette Tiara Band", "Crescent Band", "Chevron Band", "Celestine Tiara Band", "Meridian Scallop Band", "Meridian Scallop Pave Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band", "Cosmic Tiara Curve Band", "Cosmic Luna Band"],
    "Hazeline Three Stone Ring 1ct round": allRingBands,
    "Bea Solitaire (East-West) 1.5ct oval": ["Grand Tiara Band", "Grand Tiara Pave Band", "Tiara Curve Band", "Marquise Tiara Band", "Butterfly Marquise Tiara Band", "Triple Baguette Tiara Band", "Crescent Band", "Chevron Band", "Celestine Tiara Band", "Meridian Scallop Band", "Meridian Scallop Pave Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band", "Cosmic Tiara Curve Band", "Cosmic Luna Band"],
    "Bea Solitaire (North-South) 1ct Oval": ["Grand Tiara Band", "Grand Tiara Pave Band", "Tiara Curve Band", "Marquise Tiara Band", "Butterfly Marquise Tiara Band", "Triple Baguette Tiara Band", "Crescent Band", "Chevron Band", "Celestine Tiara Band", "Meridian Scallop Band", "Meridian Scallop Pave Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band", "Cosmic Tiara Curve Band", "Cosmic Luna Band"],
    "Bea Three Stone Ring 8x6 EC": ["Grand Tiara Band", "Grand Tiara Pave Band", "Tiara Curve Band", "Marquise Tiara Band", "Triple Baguette Tiara Band", "Crescent Band", "Chevron Band", "Celestine Tiara Band", "Meridian Scallop Band", "Meridian Scallop Pave Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band", "Cosmic Tiara Curve Band", "Cosmic Luna Band"],
    "Bea Three Stone Ring 7x5 EC": ["Grand Tiara Band", "Grand Tiara Pave Band", "Tiara Curve Band", "Marquise Tiara Band", "Butterfly Marquise Tiara Band", "Triple Baguette Tiara Band", "Crescent Band", "Chevron Band", "Celestine Tiara Band", "Meridian Scallop Band", "Meridian Scallop Pave Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band", "Cosmic Tiara Curve Band", "Cosmic Luna Band"],
    "Marquise Bea Ring 1ct": ["Marquise Tiara Band", "Celestine Tiara Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band", "Chevron Band"],
    "Eleonore Ring 1ct Round": allRingBands,
    "Eleonore Ring .75ct Round": allRingBands,
    "Eleonore Ring 1.25ct Round": allRingBands,
}
//BANDS THAT FIT ON TOP (OUTSIDE OF CURVE)
export const rulesBangStandard: rulesMap = {
    "Grand Tiara Band": ["Tiara Curve Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band"],
    "Tiara Band": ["Tiara Curve Band", "Grand Tiara Band", "Grand Tiara Pave Band", "Marquise Tiara Band", "Butterfly Marquise Tiara Band", "Triple Baguette Tiara Band", "Celestine Tiara Band", "Crescent Band", "Meridian Scallop Band","Meridian Scallop Pave Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band", "Cosmic Tiara Curve Band", "Cosmic Luna Band"],
    "Tiara Curve Band": ["Tiara Curve Band", "Celestine Tiara Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band", "Cosmic Luna Band", "Cosmic Tiara Curve Band"],
    "Marquise Tiara Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band"],
    "Butterfly Marquise Tiara Band": [],
    "Triple Baguette Tiara Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band"],
    "Tiny Crescent Band": ["Grand Tiara Band", "Grand Tiara Pave Band", "Tiara Curve Band", "Marquise Tiara Band", "Butterfly Marquise Tiara Band", "Triple Baguette Tiara Band", "Crescent Band", "Celestine Tiara Band", "Meridian Scallop Band", "Meridian Scallop Pave Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Chevron Band", "Orbit Band", "Cosmic Tiara Curve Band"],

    "Crescent Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band", "Marquise Tiara Band", "Cosmic Tiara Curve Band", "Tiara Curve Band"],
    "Chevron Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band"],
    "Celestine Tiara Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band", "Celestine Tiara Band"],

    "Meridian Scallop Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band"],
    "Meridian Scallop Pave Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band"],
    "Chrysalis Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band"],
    "Orbit Band": ["Crescent Band", "Chevron Band", "Celestine Tiara Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Orbit Band","Cosmic Tiara Curve Band","Cosmic Luna Band"],
    "Cosmic Tiara Curve Band": [  "Tiara Curve Band", "Celestine Tiara Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Triple Baguette Tiara Band", "Cosmic Luna Band", "Cosmic Tiara Curve Band"],
    "Cosmic Luna Band": ["Tiara Curve Band", "Celestine Tiara Band ", "Marquise Tiara Band", "Orbit Band", "Chrysalis Band ", "Diamond Dusted Chrysalis Band", "Meridian Scallop Band", "Diamond Dusted Meridian Scallop Band", "Cosmic Tiara Curve Band"],
    "Diamond Dusted Chrysalis Band": ["Chrysalis Band", "Diamond Dusted Chrysalis Band"],
    "Grand Tiara Pave Band": ["Tiara Curve Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band"],

}

// пустий список
//BANDS THAT CAN FIT INSIDE CURVE
export const rulesBangNew: rulesMap = {
    "Grand Tiara Band": ["Tiara Band", "Tiny Crescent Band", "Cosmic Luna Band"],
    "Tiara Band": [],

    "Tiara Curve Band": ["Tiara Curve Band", "Grand Tiara Band", "Grand Tiara Pave Band", "Tiara Band", "Tiny Crescent Band", "Crescent Band", "Orbit Band", "Cosmic Luna Band", "Cosmic Tiara Curve Band"],
    "Marquise Tiara Band": ["Tiara Band", "Tiny Crescent Band", "Grand Tiara Band", "Grand Tiara Pave Band", "Crescent Band", "Tiara Curve Band", "Cosmic Luna Band "],
    "Butterfly Marquise Tiara Band": ['Tiara Band', 'Tiny Crescent Band'],
    "Triple Baguette Tiara Band": ["Tiara Band", "Tiny Crescent Band"],
    "Tiny Crescent Band": [],

    "Crescent Band": ["Tiny Crescent Band", "Tiara Band", "Cosmic Luna Band"],
    "Chevron Band": ["Orbit Band", "Tiara Band", "Tiny Crescent Band", "Tiara Curve Band"],
    "Celestine Tiara Band": ["Orbit Band", "Tiara Band", "Grand Tiara Band", "Grand Tiara Pave Band", "Tiara Curve Band", "Crescent Band", "Celestine Tiara Band", "Cosmic Luna Band", "Cosmic Tiara Curve Band"],
    "Meridian Scallop Band": ["Tiara Band", "Tiny Crescent Band"],
    "Meridian Scallop Pave Band": ["Tiara Band", "Tiny Crescent Band"],
    "Chrysalis Band": ["Orbit Band", "Celestine Tiara Band", "Tiara Band", "Grand Tiara Band", "Grand Tiara Pave Band", "Meridian Scallop Band", "Chevron Band", "Crescent Band", "Tiny Crescent Band", "Triple Baguette Tiara Band", "Marquise Tiara Band", "Tiara Curve Band", "Cosmic Luna Band", "Cosmic Tiara Curve Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Meridian Scallop Pave Band"],
    "Orbit Band": ["Orbit Band", "Tiara Band", "Tiara Curve Band", "Cosmic Luna Band", "Cosmic Tiara Curve Band"],
    "Cosmic Tiara Curve Band": ["Cosmic Tiara Curve Band", "Tiara Curve Band", "Grand Tiara Band", "Grand Tiara Pave Band", "Tiara Band", "Tiny Crescent Band", "Crescent Band", "Orbit Band", "Cosmic Luna Band", "Cosmic Tiara Curve Band"],
    "Cosmic Luna Band": ["Tiara Curve Band", "Tiara Band", "Crescent Band", "Cosmic Tiara Curve Band"],
    "Diamond Dusted Chrysalis Band": ["Orbit Band", "Celestine Tiara Band", "Tiara Band", "Grand Tiara Band", "Meridian Scallop Band", "Chevron Band", "Crescent Band", "Tiny Crescent Band", "Triple Baguette Tiara Band", "Marquise Tiara Band", "Tiara Curve Band", "Cosmic Tiara Curve Band", "Cosmic Luna Band", "Chrysalis Band", "Diamond Dusted Chrysalis Band", "Meridian Scallop Pave Band", "Grand Tiara Pave Band"],
    "Grand Tiara Pave Band": ["Tiara Band", "Tiny Crescent Band", "Cosmic Luna Band"],
}
