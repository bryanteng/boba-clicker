import store from "../redux/store";

const items = [
    {
        id: 0,
        name: "pointer",
        description: "pointer automatically clicks boba every second",
        baseCost: 10,
        increment: 10,
        image: "./images/boba_pearl.webp",
        bps: 1,
    },
    {
        id: 1,
        name: "bobarista",
        description: "bobarista automatically creates 3 boba every second",
        baseCost: 100,
        increment: 100,
        image: "./images/boba_pearl.webp",
        bps: 3,
    },
    {
        id: 2,
        name: "boba farm",
        description: "boba farm produces 10 boba every second",
        baseCost: 10000,
        increment: 10000,
        image: "./images/boba_pearl.webp",
        bps: 10,
    },
    {
        id: 3,
        name: "boba factory",
        description: "boba factory produces 100 boba every second",
        baseCost: 1000000,
        increment: 1000000,
        image: "./images/boba_pearl.webp",
        bps: 100,
    },

]

export default items;