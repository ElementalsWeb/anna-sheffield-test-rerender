export interface colorInterf {
    value: string
    id: string
    nameConfig: string
    name: string
}
export interface caratInterf {
    value: string
    id: string
    nameConfig: string
}
export interface groupRingsInterf {
    name: string;
    id: string;
}
export type groupMainRing = 'engagement' | 'bands';

export interface sectionRing {
    indexSection: number;
    idSection: groupMainRing;
}

export const colors: colorInterf[] = [
    {
        value: "#D7BD91",
        id: "color_1",
        nameConfig: "Yellow Gold",
        name: "Yellow Gold",
    },
    {
        value: "#F2CDC1",
        id: "color_2",
        nameConfig: "Rose Gold",
        name: "Rose Gold",
    },
    {
        value: "#DCDCDC",
        id: "color_3",
        nameConfig: "White Gold",
        name: "White Gold",
    },
];

export const carats: caratInterf[] = [
    {
        value: ".50ct",
        id: "carats_05",
        nameConfig: ".50ct",
    },
    {
        value: ".75ct",
        id: "carats_075",
        nameConfig: ".75ct",
    },
    {
        value: "1.00ct",
        id: "carats_100",
        nameConfig: "1.00ct",
    }
]


export const listGroup: groupRingsInterf[] = [
    {
        name: 'bands',
        id: 'bands',
    },
    {
        name: 'engagement',
        id: 'engagement',
    }
]

