import store from "../redux/store";

const items = [
    {
        id: 0,
        name: "pointer",
        description: "pointer automatically clicks boba every second",
        baseCost: 1,
        increment: 1,
        image: "./images/boba_pearl.webp",
        bps: 1,
    },
    {
        id: 1,
        name: "bobarista",
        description: "bobarista automatically creates 3 boba every second",
        baseCost: 10,
        increment: 5,
        image: "./images/boba_pearl.webp",
        bps: 3,
    },
    {
        id: 2,
        name: "boba farm",
        description: "boba farm produces 10 boba every second",
        baseCost: 100,
        increment: 10,
        image: "./images/boba_pearl.webp",
        bps: 10,
    },
    {
        id: 3,
        name: "boba factory",
        description: "boba factory produces 100 boba every second",
        baseCost: 1000,
        increment: 5,
        image: "./images/boba_pearl.webp",
        bps: 100,
    },

]

export default items;