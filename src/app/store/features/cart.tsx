import { Cart } from "@/app/utils/types";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // add to cart functionality
    addToCart(state, action) {
      let uuid = Math.floor(1000 + Math.random() * 9000);
      let newObj = { ...action.payload, uuid };
      state.push(newObj);
    },

    // delete cart functionality

    delItem(state, { payload }) {
      return state.filter((val) => val.uuid !== payload);
    },

    // addition of item

    addCart(state, action) {
      let obj = state.find(
        (val) =>
          val.id == action.payload.id &&
          val.color == action.payload.color &&
          val.size == action.payload.size
      );
      if (obj) {
        ++obj.qty;
        let newState = state.filter((val) => val.id !== obj?.id);
        state = [...newState, obj];
        return;
      }
    },

    // subtraction of item
    subtractCard(state, action) {
      let obj = state.find(
        (val) =>
          val.id == action.payload.id &&
          val.color == action.payload.color &&
          val.size == action.payload.size
      );
      if (obj !== undefined) {
        if (obj.qty < 1) {
          return state.filter((val) => val.uuid !== obj?.uuid);
        }
        --obj.qty;
        let newState = state.filter((val)=>val.uuid== obj.uuid)
        state = [...newState, obj]
        return
      }
    },
  },
});

export const { addToCart, delItem, addCart , subtractCard} = cartSlice.actions;

export default cartSlice.reducer;
