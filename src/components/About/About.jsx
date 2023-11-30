import React from "react";
import { Link } from "react-router-dom";
import s from "../About/About.module.css";
import Nav from "../NavBar/Nav.jsx";
import founder from "../../Images/founder.png";
import federico from "../../Images/federico.jpg"
import martin from "../../Images/martin y los juan.jpg"
import tenori from "../../Images/fra tenori.jpg";
import jazz from "../../Images/jazz.jpg";
import arrieros from "../../Images/viejos arrieros.jpg"

export default function About(){


    return(
        <div className={s.main}>
            
            <div className={s.header}>
                <h3 className={s.textHeader} >FEDEH</h3>
                <h4>Fundación para el Estudio y tratamiento de las Enfermedades Hemato-oncológicas</h4>
            </div>
            <div className={s.contain} >
            <div>
                <img src={founder} alt="Img not found" className={s.img} />
                <div className={s.about} >
                <span className={s.textAbout} >
                Nacimos el 5 de noviembre de 2007, como una organización sin fines de lucro, con registro Jurídico N° 335/07, de la Dirección de Persona Jurídica de la Provincia de Tucumán.
                </span><br/>
                <span className={s.textAbout} >
                Desde ese año, fundadores y socios nos reunimos sin pausa y en agosto ya contábamos con el logo que nos identificaría desde entonces.
                </span><br/>
                <br/>
                <span className={s.textAbout} > 
                <strong>FEDEH</strong> es una organización de bien público sin fines de lucro, que inicia sus actividades en la provincia de Tucumán con el compromiso de colaborar en la articulación del Estudio y lucha De las Enfermedades Hematooncológicas, a través de la generación en la provincia de un centro de atención integral del paciente y su familia, con proyección y extensión a la comunidad.</span>
                </div>
            </div>
            <div>
                <img src={federico} alt="Img not found" className={s.imgF} />
                
                <span>
                Nuestras metas y gran parte del camino a transitar ya habían sido trazado por <strong>Federico Eduardo Cruz Prats</strong>, que antes de fallecer a causa de una leucemia mieloblástica aguda; nos dejó un mandato, trabajar para que Tucumán cuente con un <strong>CENTRO DE EXCELENCIA PARA EL DIAGNÓSTICO Y EL TRATAMIENTO DE ENFERMEDADES HEMATO-ONCOLÓGICAS</strong>.
                </span><br/><br/>
                <span className={s.textAbout}>
                Seamos partícipes de la transformación del tradicional modelo de reposición de sangre, hacia el nuevo modelo de donación VOLUNTARIA, RESPONSABLE Y GRATUITA.
                Seamos solidarios sabiendo que:
                </span><br/>
                <span>
                * Se puede donar sangre por lo menos 3 veces al año.
                </span><br/>
                <span>
                * Donar sangre no genera daños al organismo ni contagia enfermedades.
                </span>
            </div>
                
            </div>
            {/* <div className={s.contain2} >
                <span className={s.title2} >Trabajando con Ilusiones se Construyen Realidades</span><br/>
                <span>En lo Cultural, cubrimos áreas importantes que convistieron a la solidaridad en actos de servicio y nuestro Logo presidió escenarios de espectáculos artísticos, en los que pasaron solidarios intérpretes provinciales y nacionales.</span>
                <div className={s.pictures} >
                   <div>
                        <img src={martin} alt="Img not found" className={s.img2} />
                        <h6>Miguel Martin y Los Juan</h6> 
                    </div> 
                    <div>
                    <img src={tenori} alt="Img not found" className={s.img2} />
                    <h6>Fra tenori</h6> 
                    </div>
                    <div>
                    <img src={jazz} alt="Img not found" className={s.img2} />
                    <h6>Noche de Jazz</h6> 
                    </div>
                    <div>
                    <img src={arrieros} alt="Img not found" className={s.img2} />
                    <h6>Viejos Arrieros</h6> 
                    </div>
                </div>

            </div> */}

        </div>
    )
}