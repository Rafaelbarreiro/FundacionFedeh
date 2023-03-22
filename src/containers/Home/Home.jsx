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
          <div className={H.containerMission} >
            <div className={H.mission} >
              <div className={H.submission} >
                <span className={H.title} >Misión</span>
                <p className={H.description} >Ser partícipes de la transformación del tradicional modelo de donación de sangre</p>
              </div>
              <div className={H.submission}>
                <span className={H.title}>Visión</span>
                <p className={H.description} >Generar un lugar de excelencia en el país </p>
              </div>
              <div className={H.submission}>
                <span className={H.title}>Valores</span>
                <p className={H.description} >Apoyo integral del paciente y su familia, a través de la contención emocional </p>
              </div>
            </div>
          </div>
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
