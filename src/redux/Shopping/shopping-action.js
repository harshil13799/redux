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
