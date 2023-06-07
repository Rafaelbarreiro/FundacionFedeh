import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getEvents } from "../../redux/actions";
import Carousel from "../../components/Carrousel";
import H from "../Home/Home.module.css";
import Join from "../../components/Join/Join";
import Newsletter from "../../components/Newsletter/Newsletter";
import AllComunications from "../AllComunications/AllComunications";
import Event from "../../components/Event/Event";



export default function Home() {
  
  const dispatch = useDispatch();
  const [renderizar, setRenderizar] = useState([]);
  const events = useSelector(state => state.events)

  useEffect(() => {
    dispatch(getEvents())
}, [dispatch])
const lastEvents = events.slice(0,3)

useEffect(() => {
  setRenderizar(
    lastEvents?.reverse().map(el => (
      <Event
      key={el.id}
      img={el.img}
      title={el.title}
      subtitle={el.subtitle}
      id={el.id}
      detail={el.detail}
      date={el.date}
      />
  ))
)
},[events]);
  
   
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
          <div className={H.containerEvents} >
            <div>
            <div id="triangulo_div" /* class="col-sm-2 triangulo_div" */><p className={H.triangulo_rectangulo}>triangulo rectangulo.</p></div>
            </div>
            <div>
            <h2 className={H.events} >Nuestros Eventos</h2>
            <div className={H.grid} >
              {renderizar}
            </div>
              <Link to={`/events`} >
                <button>
                  Ingresar a todos los eventos
                </button>
              </Link>
            </div>
          </div>

          <div className={H.AllComunications} > 
                <AllComunications />
          </div>
            
          <div className={H.join} >
                <Join />
          </div>
         
          <div>
            <Newsletter/>
          </div>
        </div>
  );
}
