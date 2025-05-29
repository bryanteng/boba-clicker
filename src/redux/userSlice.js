import { createSlice } from "@reduxjs/toolkit"

// save data should be a hash of game state. sha256 hash all data on save -> decode on load
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
        { id: 0, amount: 0 },
        { id: 1, amount: 0 },
        { id: 2, amount: 0 },
        { id: 3, amount: 0 },
        { id: 4, amount: 0 },
        { id: 5, amount: 0 },
        { id: 6, amount: 0 },
        { id: 7, amount: 0 },
        { id: 8, amount: 0 },
        { id: 9, amount: 0 },
    ],
    timePlayed: 0,
    saveData: ""
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
    },
})

const { actions, reducer } = userSlice
export const { updatePlayerName, updateItemAmount, updateTimePlayed } = actions
export default reducer