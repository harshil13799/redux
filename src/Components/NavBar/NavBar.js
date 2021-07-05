import React from "react";
import logo from "../../Components/icons/cart.svg";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function NavBar() {
  let history = useHistory();
  const cart = useSelector((state) => state.shop);
  console.log(cart);
  return (
    <>
      <nav
        class="navbar navbar-dark"
        style={{
          backgroundColor: "lightgray",
          padding: "15px",
        }}
      >
        <div class="container">
          <h2>Redux Shopping Cart</h2>
          <img
            src={logo}
            alt="..."
            width="50px"
            onClick={() => {
              history.push("/cart");
              
            }}
          />

          {cart.length === 0 ? (
            ""
          ) : (
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ marginLeft: "-74px", marginTop: "15px" }}
            >
              {cart.length}
            </span>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
