/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import {ClearDonation, postDonation} from "../../redux/actions/index"

function ItemPayments() {
  const dispatch = useDispatch();
  const donation = useSelector((state) => state.donation)
  const user = useSelector((state) => state.user)
  const shouldUpdate = useRef(true);



  const [input, setInput] = useState({
      donor: user.username,
      cardId: donation[0].title,
      amount: parseInt(donation[0].amount),
      completed: 'completed'
  });

  useEffect(() => {
    if (shouldUpdate.current){
      shouldUpdate.current = false;
      dispatch(postDonation(input)) //esta se ejecuta 2 veces
      
    }
}, [dispatch]);
const handleRemove = () => {
  ClearDonation()
}

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
                src="https://www.ispmalaga.es/wp-content/uploads/2019/11/success.png"
              ></img>
            </h1>
            <p className="mb-5 text-black text-bold font-bold">
            Thank you very much for your help
            </p>
            <Link to={"/"}>
              <button onClick={handleRemove} className="btn btn-accent">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPayments;