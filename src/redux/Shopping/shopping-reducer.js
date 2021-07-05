import * as actionTypes from "./shopping-types";
const cart = [];
const shopreducer = (state = cart, { type,payload }) => {
  debugger
  switch (type) {
    case actionTypes.ADD_TO_CART:
      return [...state, payload ];

      case actionTypes.REMOVE_FROM_CART:
        const index = state.findIndex(item => item.id === payload);
        return state.filter((_, i) => i !== index);
  

      case actionTypes.LOAD_CURRENT_ITEM:
        // const index1 = state.findIndex(item => item.id === payload.item.id);

        state.map((item)=>{
          debugger
          if(item.id === payload.item.id)
            {
              
              let abc = [...state,item.qty = item.qty + 1,item.total = item.qty * item.price]
              console.log(abc)
            }

        })    
          // let abc = [...state,item.qty = item.qty + 1]
          // console.log(abc)
       
        //return item.qty; 
      return state;
      
     case  actionTypes.DECREMENT_PRODUCT:
      state.map((item)=>{
        debugger
        if(item.id === payload.item.id)
          {
            
            let abc = [...state, item.qty=item.qty !== 1 ? item.qty - 1 : 1,,item.total = item.qty * item.price]
            console.log(abc)
          }

      })    
      return state;

        default:
          return state;  
        
  } 
};

export default shopreducer;
