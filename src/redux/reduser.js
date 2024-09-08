
import { createAction, createReducer } from "@reduxjs/toolkit";

const INCREMENT_NUM = "INCREMENT_NUM";
const DECREMENT_NUM = "DECREMENT_NUM";
const INCREMENT_NUM5 = "INCREMENT_NUM5";
const DECREMENT_NUM5 = "DECREMENT_NUM5";
const SET_TEXT = "SET_TEXT";

const initialState = {
  num: 0,
  text: "Hello World!",
};


export const incrementNum = createAction(INCREMENT_NUM);
export const DecrementNum = createAction(DECREMENT_NUM);
export const incrementNum5 = createAction(INCREMENT_NUM5);
export const DecrementNum5 = createAction(DECREMENT_NUM5);
export const setText = createAction(SET_TEXT);
export default createReducer(initialState, (builder) => {
  builder
    .addCase(incrementNum, (state) => {
        state.num = Math.min(state.num + 1, 15);
    })

    .addCase(DecrementNum, (state) => {
           state.num = Math.max(state.num - 1, 0);
    })

    .addCase(incrementNum5, (state) => {
      state.num = Math.min(state.num + 5, 15);
    })

    .addCase(DecrementNum5, (state) => {
            state.num = Math.max(state.num - 5, 0);
    })

    .addCase(setText, (state, action) => {
      state.text = action.payload;
    });
});
