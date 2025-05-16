import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bobaCount: 0,
    bps: 1
}

export const bobaSlice = createSlice({
  name: 'boba',
  initialState,
  reducers: {
    increment: (state) => {
      state.bobaCount += 1
    },
    decrementByAmount: (state, action) => {
      state.bobaCount -= action.payload
    },
    incrementByAmount: (state, action) => {
      state.bobaCount += action.payload
    },
    incrementBPS: (state, action) => {
      state.bps += action.payload
    },
  },
})

const { actions, reducer } = bobaSlice
export const { increment, decrementByAmount, incrementByAmount } = actions
export default reducer