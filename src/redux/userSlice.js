import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "Bob A.",
    inventory: [
        { id: 0, amount: 0 },
        { id: 1, amount: 0 },
        { id: 2, amount: 0 },
        { id: 3, amount: 0 },
    ],
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload
        },
        updateItemAmount: (state, action) => {
            const { id } = action.payload
            const item = state.inventory.find(item => item.id === id)
            item.amount += 1
        },
    },
})

const { actions, reducer } = userSlice
export const { updateItemAmount } = actions
export default reducer