import React from "react";

import { Link } from "react-router-dom";

function CartPaymentspending() {
  return (
    <div>
      <div
        className="hero   min-h-screen"
        style={{
          backgroundImage: `url("https://fondosmil.com/fondo/17538.jpg")`,
        }}
      >
        <div className="   bg-opacity-60"></div>
        <div className="hero-content   text-center text-neutral-content">
          <div className="max-w-md  ">
            <h1 className="    font-bold">
              <img
                className=" mr-4  inline  "
                alt="malpago"
                src="https://www.aquaticasport.es/wp-content/uploads/2017/09/Proceso.png"
              ></img>
            </h1>
            <p className="mb-5 text-black text-bold font-bold">
              Your payment is in process, wait to be notified by email, or payment account.
            </p>
            <Link to={"/"}>
              <button className="btn btn-info">Go to store</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPaymentspending;