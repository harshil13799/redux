import { combineReducers } from "redux";

import shoppingReducer from "./Shopping/shopping-reducer";
import ProductQuantityReducer from "./Shopping/cart-reducer";


const rootReducer = combineReducers({
  shop: shoppingReducer,
  cart: ProductQuantityReducer,
  
});

export default rootReducer;
