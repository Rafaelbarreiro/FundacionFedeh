import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Carrousel";
import H from "../Home/Home.module.css";
import Join from "../../components/Join/Join";
import Articles from "../Articles/Articles";


export default function Home() {
  
  const dispatch = useDispatch();
   
  return (
        <div className={H.gridContainer}>
           
            <Carousel />
          <main className={H.main}>

           <Articles />
         
          </main>
          <div>
            <Join />
          </div>
        
        </div>
  );
}
