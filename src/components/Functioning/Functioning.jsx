import React from "react";
import s from "../Functioning/Functioning.module.css"

export default function Funtioning(){


return(
    <div className={s.main} >
        <div>
            <span className={s.mainTitle} >Cómo Funciona FEDEH</span><br />
            <span className={s.mainSubTitle}>Todo nuestro accionar está centrado, sobre todo, en la asistencia solidaria brindada al  servicio, en todo lo referido a capacitación y especialización de Recursos Humanos. Lo fundamental, son las acciones de apoyo institucional orientadas sobre todo, a resguardar la excelencia de los diagnósticos, tratamientos y derivaciones, que realiza el equipo interdisciplinario.</span>
        </div>
        <div>
           <span className={s.mainTitle}>FEDEH / Organización General</span>
        </div>
        <div className={s.container}>
            <div>   
            <div className={s.contain}>
                <span className={s.category} >Comisión Directiva</span>
                <span className={s.work}>Presidente</span>
                <span className={s.name}>Ana María Juárez de Cruz Prats</span>
                <span className={s.work}>Secretaria</span>
                <span className={s.name}>María de los A. Rovira de Ramos</span>
                <span className={s.work}>Tesorera</span>
                <span className={s.name}>Mariana Sawaya</span>
                <span className={s.work}>Vocal Primera</span>
                <span className={s.name}>M. Gabriela Martínes de la Orden</span>
                <span className={s.work}>Vocal Segunda</span>
                <span className={s.name}>M. Victoria Fonts </span>
            </div>

            {/* <div className={s.contain}>
                <span className={s.category} >Departamento de Organización y Gestión Administrativa Informática</span>
                <span className={s.work}>Coordinadoras</span>
                <span className={s.name}>Ana María Fonio de Molina</span>
                <span className={s.name}>Adriana Martínez</span>
                <span className={s.work}>Auxiliares</span>
                <span className={s.name}>Silvina Elías</span>
                <span className={s.name}>Josefina Pedraza, Eugenia Araoz</span>
                <span className={s.name}>Joaquín Fermoselle</span>
            </div> */}

            <div className={s.contain}>
                <span className={s.category} >Colaboradores</span>
                {/* <span className={s.work}>Coordinadoras</span> */}
                <span className={s.name}>M. Alejandra Cruz Prats De Fermoselle</span>
                <span className={s.name}>Juana Bretovisky de Julia</span>
                <span className={s.name}>Rosa Paz De Bonano</span>
                <span className={s.name}>Angelina Vaquero</span>
                <span className={s.name}>Eloísa Martínez Aráoz</span>
                <span className={s.name}>Carolina Cuello</span>
                <span className={s.name}>Roxana Ríos</span>
                <span className={s.name}>Patricia Jorrat</span>
                <span className={s.name}>Noemí Leggio</span>
                <span className={s.name}>Nora Contreras</span>
                <span className={s.name}>Ana Cusa</span>
                <span className={s.name}>Blanca Yasbek De Jalil</span>
                <span className={s.name}>Marta Ternavasio</span>
                <span className={s.name}>Mariana Parajón De León</span>
                <span className={s.name}>Marta Pizarro</span>
                <span className={s.name}>Cecilia Herbst</span>
                <span className={s.name}>Carlos Cruz Prats</span>
                <span className={s.name}>Lucas Fermoselle</span>
            </div>
            </div>
            <div>

         
            <div className={s.contain}>
                <span className={s.category} >Asistentes Administrativos Contables</span>
                <span className={s.name}>Josefina Pedraza Kobak</span>
                <span className={s.name}>Jessica Tapia Herrera</span>
                <span className={s.name}>Horacio Colabella</span>
            </div>
               <div className={s.contain}>
                <span className={s.category} >Responsables de Proyectos y Obra</span>
                <span className={s.work}>Arquitecta</span>
                <span className={s.name}>Paola Yanicelli</span>
                <span className={s.work}>Arquitecto</span>
                <span className={s.name}>Federico Auvieux</span>
               
            </div>
            <div className={s.congrats} >
            <img
              src="https://res.cloudinary.com/dhmz7s3gc/image/upload/v1678849296/logoSinBorde_dzcn7u.jpg"
              alt=""
              className={s.logo}
            />
            <span className={s.work}>
                Palabras de agradecimiento para quienes colaboraron en nuestros primeros pasos:
            </span><br />
            <span className={s.name}>
                Carlos María Juárez Dappe, María Laura Babot, Viviana Balella, Marta Billone, Marta Esquide, María Rosa Armayor, Alba Castaldo, Teresa Di Lullo, Gustavo Juárez, Carlos Esteban Cruz Prats, Alejandra Lavergne, Viviana Carol y Olga Apud.
            </span><br />
            <span className={s.name}>
                Homenaje Póstumo a nuestra querida Silvina Recalde de Juri
            </span><br />


            </div>
            </div>
        </div>
    </div>
)
}