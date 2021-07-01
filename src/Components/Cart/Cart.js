import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { listcartitem } from "../../redux/Shopping/shopping-action";
import { useDispatch } from "react-redux";
import img from "../Cart/empty-cart.jpg";

function Cart() {
  const cartdata = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const [counter,setCounter]=useState(0)
  console.log(cartdata.length);
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
                  <button onClick={()=>setCounter(counter + 1)}>+</button><p>{counter}</p> <button onClick={()=>{setCounter(counter - 1)}}>-</button>
                  <p>{item.price * counter}</p>
                </div>
              </div>
            </div>
          ))}
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
