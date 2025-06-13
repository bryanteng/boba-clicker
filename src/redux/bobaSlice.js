import { createSlice } from '@reduxjs/toolkit'

// totalBoba is total boba lifetime
// totalClicks is total clicks lifetime

const initialState = {
    bobaCount: 0,
    bps: 0,
    totalBoba: 0,
    totalClicks: 0,
}

export const bobaSlice = createSlice({
  name: 'boba',
  initialState,
  reducers: {
    increment: (state) => {
        state.bobaCount += 1
        state.totalBoba += 1
    },
    decrementByAmount: (state, action) => {
        state.bobaCount -= action.payload
    },
    incrementByAmount: (state, action) => {
        state.bobaCount += action.payload
        state.totalBoba += action.payload
    },
    incrementBPS: (state, action) => {
        state.bps += action.payload
    },
    incrementTotalClicks: (state) => {
        state.totalClicks += 1
        state.totalBoba += 1
        state.bobaCount += 1
    },
    updateBobaState: (state, action) => {
        const { bobaCount, bps, totalBoba, totalClicks } = action.payload
        state.bobaCount = bobaCount || state.bobaCount
        state.bps = bps || state.bps
        state.totalBoba = totalBoba || state.totalBoba
        state.totalClicks = totalClicks || state.totalClicks
    },
  },
})

const { actions, reducer } = bobaSlice
export const { increment, decrementByAmount, incrementByAmount, incrementBPS, incrementTotalClicks, updateBobaState } = actions
export default reducer