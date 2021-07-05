import * as actionTypes from "./shopping-types";

export const addToCart = (data) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: data,
  };
};

export const listcartitem = (id) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  };
};
export const addQty =(data)=>{
  return{
    type:actionTypes.LOAD_CURRENT_ITEM,
    payload:data,
  };
};
export const decrementQty =(data)=>{
  return{
    type:actionTypes.DECREMENT_PRODUCT,
    payload:data,
  };
};