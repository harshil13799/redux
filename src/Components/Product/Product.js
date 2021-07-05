import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-action";

function Product() {
  const [product, setProduct] = useState([{}]);

  
  const dispatch = useDispatch();

  const getdata = async () => {
    await axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div
        class="row row-cols-1 row-cols-md-4 g-4"
        id="collapse1"
        style={{ marginTop: "1rem", padding: "2rem" }}
      >
        {product.map((item) => (
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
              <div class="card-body" onClick={()=>{}}>
                <h6>{item.title}</h6>
                <p>${item.price}</p>
                <button
                  type="button"
                  class="btn btn-outline-dark btn-sm"
                  style={{ width: "100%" }}
                  onClick={() => {
                    let data = {
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      image:item.image,
                      qty:1,
                      total:item.price
                    };
                    dispatch(addToCart(data));
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
