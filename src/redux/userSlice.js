import { createSlice } from "@reduxjs/toolkit"

// data should be saved in local storage
// data that should be saved:
// - bobaCount
// - bps
// - totalBoba
// - totalClicks
// - name
// - items
// - item amounts
// time played

const initialState = {
    name: "Bob A.",
    items: [
        { id: 0, amount: 0, tier: 0 },
        { id: 1, amount: 0, tier: 0 },
        { id: 2, amount: 0, tier: 0 },
        { id: 3, amount: 0, tier: 0 },
        { id: 4, amount: 0, tier: 0 },
        { id: 5, amount: 0, tier: 0 },
        { id: 6, amount: 0, tier: 0 },
        { id: 7, amount: 0, tier: 0 },
        { id: 8, amount: 0, tier: 0 },
        { id: 9, amount: 0, tier: 0 },
    ],
    weaponDamage: 2,
    monstersSeen: 0,
    monstersSlain: 0,
    timePlayed: 0,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updatePlayerName: (state, action) => {
            state.name = action.payload
        },
        updateItemAmount: (state, action) => {
            const id  = action.payload
            const item = state.items.find(item => item.id === id)
            item.amount += 1
        },
        updateTimePlayed: (state, action) => {
            state.timePlayed += action.payload
        },
        updateUserState: (state, action) => {
            const { name, items, timePlayed } = action.payload
            state.name = name || state.name
            state.items = items || state.items
            state.timePlayed = timePlayed || state.timePlayed
        },
        updateMonstersSeen: (state) => {
            state.monstersSeen += 1
        },
        updateMonstersSlain: (state) => {
            state.monstersSlain += 1
        }
    },
})

const { actions, reducer } = userSlice
export const { updatePlayerName, updateItemAmount, updateTimePlayed, updateUserState, updateMonstersSeen, updateMonstersSlain } = actions
export default reducer