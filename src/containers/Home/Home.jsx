import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getEvents } from "../../redux/actions";
import Carousel from "../../components/Carrousel";
import H from "../Home/Home.module.css";
import Event from "../../components/Event/Event";
import mujeres from '../../Images/mujeresFedeh.jpg'
import eventos from '../../Images/eventosfedeh.png'


export default function Home() {

  const dispatch = useDispatch();
  const [renderizar, setRenderizar] = useState([]);
  const events = useSelector(state => state.events)

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])
  const lastEvents = events.slice(events.length - 3)

  useEffect(() => {
    setRenderizar(
      lastEvents?.reverse().map(el => (
        <Event
          key={el.id}
          img={el.img}
          title={el.title}
          subtitle={el.subtitle}
          _id={el._id}
          detail={el.detail}
          date={el.date}
        />
      ))
    )
  }, [events]);


  return (
    <div className={H.gridContainer}>
      <Carousel />
      <hr className={H.hrr} />
      <div className='container-fluid w-100 d-flex flex-wrap justify-content-center pt-4'>
        <span className={H.zoom}>
          <div className='container mb-4' style={{ background: '#E57373', borderRadius: '10px', paddingBottom: '15px' }}>
            <h1 className={H.title}>Misión</h1>
            <p className={H.description}>Nuestra misión es establecer y mantener un Centro Especializado y de excelencia en Tucumán, dedicado al diagnóstico y tratamiento de las enfermedades hematooncológicas. Nos comprometemos a ofrecer atención médica de la más alta calidad, utilizando tecnologías de vanguardia y enfoques terapéuticos avanzados.</p>
          </div>
        </span>
        <span className={H.zoom}>
          <div className='container mb-4' style={{ background: '#64B5F6', borderRadius: '10px', paddingBottom: '15px' }}>
            <h1 className={H.title}>Visión</h1>
            <p className={H.description}>Nuestra visión es convertirnos en un referente en la atención hematooncológica en Tucumán, brindando servicios de calidad que eviten la necesidad de trasladarse a centros médicos en la Capital Federal y así reducir la angustia del desarraigo para los pacientes y sus familias.</p>
          </div>
        </span>
        <span className={H.zoom}>
          <div className='container mb-4' style={{ background: '#81C784', borderRadius: '10px', paddingBottom: '15px' }}>
            <h1 className={H.title}>Valores</h1>
            <p className={H.description}>En nuestro centro, nos regimos por un conjunto de valores fundamentales que guían nuestra labor diaria Solidaridad: Nos comprometemos a brindar apoyo y atención compasiva a nuestros pacientes y sus familias. Nos preocupamos por su bienestar físico, emocional y social, y nos esforzamos por crear un ambiente de confianza y apoyo mutuo.</p>
          </div>
        </span>
      </div>

      <div className={H.containerMujeres}>
        <img className={H.img} src={mujeres} alt="mujeresFedeh" />
        <div className={H.textOverlay}>
          <h2>Team FedeH</h2>
        </div>
      </div>

      {/* EVENTOS  */}
      <div className={H.containerEvents}>
        <div className={H.eventos}>
          <img src={eventos} alt="eventos" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className={H.grid}>
          <div className={H.eventosLista}>
            {renderizar}
          </div>
        </div>
      </div>

      <div className={H.centerContent}>
        <p>Enterate de todos los eventos para unir toda la comunidad de FEDEH</p>
        <Link to={`/events`}>
          <button className={H.boton}>
            Ingresar a todos los eventos
          </button>
        </Link>
      </div>

    </div>
  );
}
