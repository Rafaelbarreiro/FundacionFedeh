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
                <span className={s.name}>María A. Cruz Prats de Fermoselle</span>
                <span className={s.work}>Tesorera</span>
                <span className={s.name}>Angelina Vaquero</span>
                <span className={s.work}>Vocal Primera</span>
                <span className={s.name}>Marta Ternavasio</span>
                <span className={s.work}>Vocal Segunda</span>
                <span className={s.name}>María de los A. Rovira de Ramos</span>
            </div>

            <div className={s.contain}>
                <span className={s.category} >Departamento de Organización y Gestión Administrativa Informática</span>
                <span className={s.work}>Coordinadoras</span>
                <span className={s.name}>Ana María Fonio de Molina</span>
                <span className={s.name}>Adriana Martínez</span>
                <span className={s.work}>Auxiliares</span>
                <span className={s.name}>Silvina Elías</span>
                <span className={s.name}>Josefina Pedraza, Eugenia Araoz</span>
                <span className={s.name}>Joaquín Fermoselle</span>
            </div>

            <div className={s.contain}>
                <span className={s.category} >Departamento de Acción Social y Organización de Eventos</span>
                <span className={s.work}>Coordinadoras</span>
                <span className={s.name}>Mariana Sawaya</span>
                <span className={s.name}>Rosa Paz de Banano</span>
                <span className={s.name}>Patricia Jorrat de Rico</span>
                <span className={s.name}>Carolina Cuello de Mirande</span>
                <span className={s.name}>Lucas Fermoselle</span>
                <span className={s.name}>Mariel Marfil de Fermoselle</span>
                <span className={s.name}>Irene Cruz Prats</span>
                <span className={s.name}>Roxana Ríos</span>
                <span className={s.name}>Marta Cardenas</span>
                <span className={s.name}>Blanca Yasbek de Jalil</span>
                <span className={s.work}>Colaboradora</span>
                <span className={s.name}>Silvina Elías</span>
            </div>
            </div>
            <div>

            <div className={s.contain}>
                <span className={s.category} >Departamento de Comunicación y Marketing</span>
                <span className={s.work}>Coordinadoras</span>
                <span className={s.name}>Juana Bretovisky de Julia</span>
                <span className={s.name}>Mariana Parajón de León</span>
                <span className={s.name}>Mariana Cueto</span>
                <span className={s.name}>Eloísa Martínez Aráoz</span>
                <span className={s.name}>Alicia de Schilman</span>
                <span className={s.name}>Roxana Ríos de Ferrao</span>
                <span className={s.name}>Nora Contreras</span>
            </div>
            <div className={s.contain}>
                <span className={s.category} >Coordinación y Programación Demandas Científicas y Capacitación</span>
                <span className={s.name}>Dr. Carlos Ríscala</span><br />
                <span className={s.name}>y Equipo Interdisciplinario del Dpto. Hemato-oncológico</span>
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