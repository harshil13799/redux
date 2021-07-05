import * as action_types from  "./cart-types";

export const addQuantity = (qty,price,id)=>{
    return { type: action_types.ADD_QUANTITY, payload:qty,price,id}
};

export const addProductQuantity = (cartdata)=>{
    return {type:action_types.ADD_TO_PRODUCT,payload:cartdata}
}