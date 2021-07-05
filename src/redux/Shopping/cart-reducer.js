import * as action_types from "./cart-types";
const initalState = {
  id:0,
  title: "",
  qty: 1,
  price: 0,
  total: 0,
};

export const ProductQuantityReducer = (state = initalState, action) => {
  debugger
  switch (action.type) {
    case action_types.ADD_TO_PRODUCT:
      const { id, title, price } = action.payload;
      state.total = price;
      return { ...state, id, title, price };

    case action_types.ADD_QUANTITY:
     let qty = state.qty + 1;
        return { ...state, qty: qty,total: qty * action.payload.price ,id:action.payload.id};
       
      
    default:
      return state;
  }
};
export default ProductQuantityReducer;
