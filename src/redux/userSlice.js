import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "Bob A.",
    items: [
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
            const id  = action.payload
            console.log(state, action, id, JSON.stringify(state.items))

            const item = state.items.find(item => item.id === id)
            item.amount += 1
            console.log(state.items)
        },
    },
})

const { actions, reducer } = userSlice
export const { updateName, updateItemAmount } = actions
export default reducer