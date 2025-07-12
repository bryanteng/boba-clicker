const publicPath = process.env.PUBLIC_URL || '';
const imagePath = `${publicPath}/images/`;

function getImageUrl(imageName) {
    return `${imagePath}/${imageName}`;
}

export const monsterImage = getImageUrl("bobamonster.png");
export const defaultImage = getImageUrl("boba_pearl.webp");

const items = [
    {
        id: 0,
        name: "pointer",
        description: "A simple pointer that collects boba.",
        baseCost: 10,
        increment: 10,
        image: getImageUrl("pointer.png"),
        bps: .1,
    },
    {
        id: 1,
        name: "bobarista",
        description: "A barista that brews boba drinks.",
        baseCost: 100,
        increment: 100,
        image: getImageUrl("barista.png"),
        bps: .8,
    },
    {
        id: 2,
        name: "boba farm",
        description: "A farm that grows boba plants.",
        baseCost: 10000,
        increment: 10000,
        image: getImageUrl("bobafarm.png"),
        bps: 400,
    },
    {
        id: 3,
        name: "boba factory",
        description: "A factory that produces boba at an industrial scale.",
        baseCost: 1500000,
        increment: 1500000,
        image: getImageUrl("bobafactory.png"),
        bps: 1600,
    },
    {
        id: 4,
        name: "tapioca mine",
        description: "A mine that extracts pure tapioca pearls.",
        baseCost: 75000000,
        increment: 75000000,
        image: getImageUrl("tapiocamine.png"),
        bps: 13000,
    },
    {
        id: 5,
        name: "tea reasearch lab",
        description: "Enhances tea DNA for optimized output.",
        baseCost: 500000000,
        increment: 500000000,
        image: getImageUrl("tearesearchlab.png"),
        bps: 34000,
    },
    {
        id: 6,
        name: "quantum tea generator",
        description: "Uses quantum fusion to brew tea instantly.",
        baseCost: 3000000000,
        increment: 3000000000,
        image: getImageUrl("quantumteagenerator.png"),
        bps: 78000,
    },
    {
        id: 7,
        name: "intergalactic boba station",
        description: "Boba for space travelers and alien connoisseurs.",
        baseCost: 20000000000,
        increment: 20000000000,
        image: getImageUrl("intergalacticbobastation.png"),
        bps: 180000,
    },
    {
        id: 8,
        name: "time warped bubble chamber",
        description: "Produces boba across timelines simultaneously.",
        baseCost: 100000000000,
        increment: 100000000000,
        image: defaultImage,
        bps: 400000,
    },
    {
        id: 9,
        name: "bobalithic singularity core",
        description: "Boba condensed into pure universal essence.",
        baseCost: 600000000000,
        increment: 600000000000,
        image: defaultImage,
        bps: 890000,
    }

]

export default items;