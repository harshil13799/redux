import * as actionTypes from "./shopping-types";
const cart = [];
const shopreducer = (state = cart, { type,action, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      return [...state, payload ];

      case actionTypes.REMOVE_FROM_CART:
        const index = state.findIndex(item => item.id === payload);
        return state.filter((_, i) => i !== index);
    default:
      return state;
  }
};

export default shopreducer;
