export type colorsType = 'color_1' | 'color_2' | 'color_3';
export type caratsType = 'carats_05' | 'carats_075' | 'carats_100';

export interface engagementRingInterf {
    id: string,
    name: string,
    subName: string,
    valueConfig: string,
    imgUrl: string,
    price: number,
    colors: colorsType[],
    carats: caratsType[],
}


export interface bandsRingInterf {
    id: string,
    name: string,
    subName: string,
    valueConfig: string,
    imgUrl: string,
    price: number,
    colors: colorsType[],
}




// https://www.annasheffield.com/products/eleonore-ring-white-diamond-1-25ct
// 6620972548154 eleonore-ring-white-diamond-1-25ct Eleonore Ring - 14k Gold & White Diamond (1.25ct)
/////// --------------------------------
// https://www.annasheffield.com/products/eleonore-ring-white-diamond-1-00ct
// 6620972679226 eleonore-ring-white-diamond-1-00ct Eleonore Ring - 14k Gold & White Diamond (1.00ct)
/////// --------------------------------
// https://www.annasheffield.com/products/eleonore-ring-75ct-white-diamond
// 6583093657658 eleonore-ring-75ct-white-diamond Eleonore Ring - 14 Gold & White Diamond (.75ct)
/////// --------------------------------
// https://www.annasheffield.com/products/bea-three-stone-ring-8x6mm-white-diamond
// 6583416225850 bea-three-stone-ring-8x6mm-white-diamond Bea Three Stone Ring - 14k Gold & White Diamond (8x6mm)
/////// --------------------------------
// https://www.annasheffield.com/products/hazeline-solitaire-ring-1-50ct-white-diamond
// 6583089922106 hazeline-solitaire-ring-1-50ct-white-diamond Hazeline Solitaire Ring - 14k Gold & White Diamond (1.50ct)
/////// --------------------------------
// 5519613253

// 6635570364474 marquise-bea-ring-14k-gold-white-diamond-1-00ct Marquise Bea Ring - 14k Gold & White Diamond (1.00ct)


// 6583416225850 bea-three-stone-ring-8x6mm-white-diamond Bea Three Stone Ring - 14k Gold & White Diamond (8x6mm)
// 434827852 bea-three-stone-ring-gold-emerald-cut-1-00ct-white-diamond Bea Three Stone Ring - 14k Gold & White Diamond (1.00ct)   ????

// 5519613253 hazeline-solitaire-ring-gold-50ct-white-diamond Hazeline Solitaire Ring - 14k Gold & White Diamond (.50ct)
// 2230507525 hazeline-solitaire-ring-gold-white-diamond-1ct Hazeline Solitaire Ring - 14k Gold & White Diamond (1.00ct)
// 6583089922106 hazeline-solitaire-ring-1-50ct-white-diamond Hazeline Solitaire Ring - 14k Gold & White Diamond (1.50ct)

// 395067196 hazeline-three-stone-ring-gold-1-00ct-white-diamond Hazeline Three Stone Ring - 14k Gold & White Diamond

// 9306353104 diamond-dusted-chrysalis-band-gold-white-diamonds Diamond Dusted Chrysalis Band - 14k Gold & White Diamonds

// 2514533974074 bea-east-west-solitaire-ring-gold-oval-1-50ct-white-diamond Bea East/West Solitaire Ring - 14k Gold & White Diamond (1.50ct)
// 4562533580858 bea-solitaire-ring-14k-gold-white-diamond-1-00ct Bea Solitaire Ring - 14k Gold & White Diamond (1.00ct)

// 4487216857146 chrysalis-band-gold Chrysalis Band - 14k Gold

// 4486755123258 orbit-band-gold Orbit Band - 14k Gold

// 4478505320506 triple-baguette-tiara-band-gold-white-diamond Triple Baguette Tiara Band - 14k Gold & White Diamond

// 4478414585914 celestine-tiara-band-gold-white-diamonds Celestine Tiara Band - 14k Gold & White Diamonds

// 4478245208122 tiny-crescent-band-gold-white-diamonds Tiny Crescent Band - 14k Gold & White Diamonds
// 4478219649082 crescent-band-gold-white-diamonds Crescent Band - 14k Gold & White Diamonds

// 4478198939706 marquise-tiara-band-gold-white-diamonds Marquise Tiara Band - 14k Gold & White Diamonds


// 4475119894586 grand-tiara-band-gold-white-diamond-pave Grand Tiara Band - 14k Gold & White Diamond Pavé
// 4472382750778 grand-tiara-band-gold-white-diamonds Grand Tiara Band - 14k Gold & White Diamonds

// 4475080441914 marquise-butterfly-tiara-band-gold-white-diamonds Marquise Butterfly Tiara Band - 14k Gold & White Diamonds

// 4472517918778 tiara-curve-band-gold-white-diamonds Tiara Curve Band - 14k Gold & White Diamonds

// 4472517918778 tiara-band-gold-white-diamonds Tiara Band - 14k Gold & White Diamonds

// 4403026919482 diamond-dusted-meridian-scallop-band-gold-white-diamonds Diamond Dusted Meridian Scallop Band - 14k Gold & White Diamonds
// 4403022299194 meridian-scallop-band-gold-white-diamonds Meridian Scallop Band - 14k Gold & White Diamonds

// 4481504346170 chevron-band-gold-white-diamonds Chevron Band - 14k Gold & White Diamonds



export const listRingBands: bandsRingInterf[] = [
    {
        id: "4472517918778",
        name: "Tiara Curve Band",
        subName: "14k Gold & White Diamond",
        valueConfig: "TiaraCurveBand (white diamonds)",
        imgUrl:
            "/img/rings/bands/Tiara Curve Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
    {
        id: "4546438332474",
        name: "Cosmic Tiara Curve Band",
        subName: "14k Gold & White Diamond Pavé",
        valueConfig: "Cosmic_Tiara_Curve",
        imgUrl: "/img/rings/bands/Cosmic_Tiara_Curve.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
    {
        id: "4546449637434",
        name: "Cosmic Luna Band",
        subName: "14k Gold & White Diamond Pavé",
        valueConfig: "Cosmic_Luna_Tiara",
        imgUrl: "/img/rings/bands/Cosmic_Luna_Tiara.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
    {
        id: "4472382750778",
        name: "Grand Tiara Band",
        subName: "14k Gold & White Diamond",
        valueConfig: "GrandTiaraBand",
        imgUrl:
            "/img/rings/bands/Grand Tiara Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
    },
    {
        id: "4475119894586",
        name: "Grand Tiara Pave Band",
        subName: "14k Gold & White Diamond Pavé",
        valueConfig: "GrandTiaraPaveBand",
        imgUrl:
            "/img/rings/bands/Grand Tiara Pave Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
    {
        id: "4478505320506",
        name: "Triple Baguette Tiara Band",
        subName: "14k Gold & White Diamond",
        valueConfig: "TripleBaguetteTiaraBand",
        imgUrl:
            "/img/rings/bands/Triple Baguette Tiara Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
    {
        id: "4478198939706",
        name: "Marquise Tiara Band",
        subName: "14k Gold & White Diamond",
        valueConfig: "Marquise_Tiara_Band",
        imgUrl:
            "/img/rings/bands/Masquise Tiara Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
    {
        id: "4475080441914",
        name: "Butterfly Marquise Tiara Band",
        subName: "14k Gold & White Diamond",
        valueConfig: "MarquiseButterflyTiaraBand1",
        imgUrl:
            "/img/rings/bands/Marquise Butterfly Tiara Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
    {
        id: "4478245208122",
        name: "Tiny Crescent Band",
        subName: "14k Gold & White Diamond",
        valueConfig: "Tiny_Crescent_Band",
        imgUrl:
            "/img/rings/bands/Tiny Crescent Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
    {
        id: "4478219649082",
        name: "Crescent Band",
        subName: "14k Gold & White Diamond",
        valueConfig: "Crescent Band",
        imgUrl:
            "/img/rings/bands/Crescent Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
    {
        id: "4481504346170",
        name: "Chevron Band",
        subName: "14k Gold & White Diamond",
        valueConfig: "ChevronBand",
        imgUrl:
            "/img/rings/bands/Chevron Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
    {
        id: "4478414585914",
        name: "Celestine Tiara Band",
        subName: "14k Gold & White Diamond",
        valueConfig: "CelestineTiaraBand1",
        imgUrl:
            "/img/rings/bands/Celestine Tiara Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
    {
        id: "4487216857146",
        name: "Chrysalis Band",
        subName: "14k Gold & White Diamond",
        valueConfig: "ChrysalisBand",
        imgUrl:
            "/img/rings/bands/Chrysalis Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
    {
        id: "9306353104",
        name: "Diamond Dusted Chrysalis Band",
        subName: "14k Gold & White Diamonds",
        valueConfig: "Diamond_Dusted_Chrysalis_Band",
        imgUrl:
            "/img/rings/bands/Diamond Dusted Chrysalis Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
    {
        id: "4486755123258",
        name: "Orbit Band",
        subName: "14k Gold & White Diamond",
        valueConfig: "OrbitBand",
        imgUrl:
            "/img/rings/bands/Orbit Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
    {
        id: "4403022299194",
        name: "Meridian Scallop Band",
        subName: "14k Gold & White Diamonds",
        valueConfig: "MeridianScallopBand2",
        imgUrl:
            "/img/rings/bands/Meridian Scallop Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
    {
        id: "4403026919482",
        name: "Meridian Scallop Pave Band",
        subName: "14k Gold & White Diamond",
        valueConfig: "MeridianScallopPaveBand3",
        imgUrl:
            "/img/rings/bands/Meridian Scallop Pave Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
    {
        id: "4472402575418",
        name: "Tiara Band",
        subName: "14k Gold & White Diamond",
        valueConfig: "TiaraBand2",
        imgUrl:
            "/img/rings/bands/Tiara Band.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],

    },
]







export const listEngagementRing: engagementRingInterf[] = [
    {
        id: "5519613253",
        name: "Hazeline Solitaire Ring .50ct round",
        subName: "14k Gold & White Diamond",
        valueConfig: "HazelineSolitaireRing0.5ct",
        imgUrl:
            "/img/rings/engagement/Hazeline Solitaire Ring 0.5ct.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "2230507525",
        name: "Hazeline Solitaire Ring 1ct round",
        subName: "14k Gold & White Diamond",
        valueConfig: "HazelineSolitaireRing1ct",
        imgUrl:
            "/img/rings/engagement/Hazeline Solitaire Ring 1ct.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "6583089922106",
        name: "Hazeline Solitaire Ring 1.50ct round",
        subName: "14k Gold & White Diamond",
        valueConfig: "HazelineSolitaireRing1.5ct",
        imgUrl:
            "/img/rings/engagement/Hazeline Solitaire Ring 1.5ct.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "395067196",
        name: "Hazeline Three Stone Ring 1ct round",
        subName: "14k Gold & White Diamond",
        valueConfig: "HazelineThreeStoneRing",
        imgUrl:
            "/img/rings/engagement/Hazeline_Three_Stone_Ring_1ct_Round.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "6583093657658",
        name: "Eleonore Ring .75ct Round",
        subName: "14k Gold & White Diamond",
        valueConfig: "EleonoreRing0.75ct",
        imgUrl:
            "/img/rings/engagement/Eleonore Ring 0.75ct Round.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "6620972679226",
        name: "Eleonore Ring 1ct Round",
        subName: "14k Gold & White Diamond",
        valueConfig: "EleonoreRing1ct",
        imgUrl:
            "/img/rings/engagement/Eleonore Ring 1ct.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "6620972548154",
        name: "Eleonore Ring 1.25ct Round",
        subName: "14k Gold & White Diamond",
        valueConfig: "EleonoreRing1.25ct",
        imgUrl:
            "/img/rings/engagement/Eleonore Ring 1.25ct.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },

    {
        id: "2514533974074",
        name: "Bea Solitaire (East-West) 1.5ct oval",
        subName: "14k Gold & White Diamond",
        valueConfig: "Bea Solitaire (East-West) 1.5ct oval",
        imgUrl:
            "/img/rings/engagement/Bea Solitaire (East-West) 1.5ct Oval.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "4562533580858",
        name: "Bea Solitaire (North-South) 1ct Oval",
        subName: "14k Gold & White Diamond",
        valueConfig: "Bea_Solitaire_North_South_1CT",
        imgUrl:
            "/img/rings/engagement/Bea Solitaire North South 1CT.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "434827852",
        name: "Bea Three Stone Ring 7x5 EC",
        subName: "14k Gold & White Diamond",
        valueConfig: "BeaThreeStoneRing7x5S",
        imgUrl:
            "/img/rings/engagement/Bea Three Stone Ring 7x5.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "6583416225850",
        name: "Bea Three Stone Ring 8x6 EC",
        subName: "14k Gold & White Diamond",
        valueConfig: "BeaThreeStoneRing8x6EC",
        imgUrl:
            "/img/rings/engagement/Bea Three Stone Ring 8x6.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
    {
        id: "6635570364474",
        name: "Marquise Bea Ring 1ct",
        subName: "14k Gold & White Diamond",
        valueConfig: "MarquiseBeaRing1ct",
        imgUrl:
            "/img/rings/engagement/Marquise Bea Ring 1ct.png",
        price: 985000,
        colors: ["color_1", "color_2", "color_3"],
        carats: ["carats_05", "carats_075", "carats_100"],
    },
]



