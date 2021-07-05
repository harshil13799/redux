import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { addQty, decrementQty, decrementqty, listcartitem } from "../../redux/Shopping/shopping-action";
import { useDispatch } from "react-redux";
import img from "../Cart/empty-cart.jpg";
import { addProductQuantity, addQuantity } from "../../redux/Shopping/cart-action";

function Cart() {
  const cartdata = useSelector((state) => state.shop);
  const {id,image,title,price,category}=cartdata;
  const [totalprice,setTotalPrice]=useState(price);
  const data = useSelector((state) => state.cart);
  const [amt,setamt]=useState();
  const dispatch = useDispatch();
  const [counter,setCounter]=useState(1)
  console.log(cartdata.length);
  let [totalAmount,settotalAmount]=useState(0);
  useEffect(() => {
    setTotalPrice(price * counter);
  }, [])
  return (
    
    <>
      {cartdata.length > 0 ? (
        <div
          class="row row-cols-1 row-cols-md-4 g-4"
          id="collapse1"
          style={{ marginTop: "1rem", padding: "2rem" }}
        >
          {cartdata.map((item) => (
            <div class="col">
              <div class="card">
                <img
                  src={item.image}
                  class="card-img-top"
                  alt={item.title}
                  style={{
                    padding: "30px",
                    width: "200px",
                    height: "200px",
                    margin: "auto",
                  }}
                />
                <div class="card-body">
                  <h6>{item.title}</h6>
                  <p>${item.price}</p>
                  <p>{item.qty}</p>
                  <p>{item.total.toFixed(2)}</p>
                 
                  <button onClick={()=>{setCounter(counter + 1);dispatch(addQty({item}));settotalAmount(totalAmount += item.price);}}>+</button>
                  <button onClick={()=>{setCounter(counter - 1);dispatch(decrementQty({item}));settotalAmount(totalAmount -= item.total);}}>-</button>
                  <button
                    type="button"
                    class="btn btn-outline-dark btn-sm"
                    style={{ width: "100%" }}
                    onClick={() => {
                      dispatch(listcartitem(item.id));
                    }}
                  >
                    Remove
                  </button>
              
                  
                 {/* {amt.map((index)=>{

                   setamt(amt += item.total);
                   console.log("amt",amt);
                 })} */}
                 
                </div>
              </div>
            </div>
            
          ))}
           <label>Total Amount:</label><h6>{totalAmount.toFixed(2)}</h6>
        </div>
      
           
      ) : (<>
        <div>
          <img src={img} alt="..." />
        </div>
        
        <button
            type="button"
            class="my-3 btn btn-outline-dark btn-sm"
          >
            <Link to="/" className="Link-btn">Continue Shopping</Link>
          </button>
          
      </>)}
    </>
  );
}

export default Cart;
