import React from "react"
import s from "./Event.module.css"
import { Link } from "react-router-dom"

export default function Event(props){
    const description = props.detail
    return (
        <div className={s.main}>
            <div className={s.container}>
                 <img src={props.img} alt="" className={s.img}/>
            <div className={s.subitem} >
                <h2 className={s.title}>{props.title}</h2> 
                <h3>{props.subtitle} </h3>
                <span>{description[0].substr(0, 90) + "..."} </span> 
                <Link to={`/event/${props.id}`} className={s.imgContainer}>
              
                <button>Ver Más</button>
              </Link>
            </div>
            <div>
              

            </div>
            </div>
           
        </div>
    )
}