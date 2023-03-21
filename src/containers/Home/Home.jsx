import React from "react";
import Carousel from "../../components/Carrousel";
import H from "../Home/Home.module.css";
import Join from "../../components/Join/Join";
import Articles from "../Articles/Articles";
import AllEvents from "../AllEvents/AllEvents";
import Newsletter from "../../components/Newsletter/Newsletter";



export default function Home() {
  
   
  return (
        <div className={H.gridContainer}>
           
            <Carousel className={H.carousel} />
            
           {/*  <div className={H.main}>

              <Articles />
            </div> */}
          <div className={H.history} >
            <AllEvents />
          </div>
          <div></div>
          <div>
            <Newsletter/>
          </div>
          <div>
            <Join />
          </div>
        
        </div>
  );
}
