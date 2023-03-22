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
                <p className={H.description} >Que Tucumán cuente con un Centro Especializado y de excelencia, en el diagnóstico y tratamiento de las enfermedades hematooncologicas</p>
              </div>
              <div className={H.submission}>
                <span className={H.title}>Visión</span>
                <p className={H.description} >Asistir y contener a los pacientes y familiares para limitar el traslado hacia  Centros de Capital Federal y evitar la angustia del desarraigo</p>
              </div>
              <div className={H.submission}>
                <span className={H.title}>Valores</span>
                <p className={H.description} >Desarrollar la solidaridad y profundizar en la permanente búsqueda de la verdad, el desarrollo de la ciencia y la excelencia profesional, en estudios y tratamientos hematoontologicos</p>
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
