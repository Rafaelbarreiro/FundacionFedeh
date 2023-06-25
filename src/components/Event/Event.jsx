import React from "react"
import s from "./Event.module.css"
import { Link } from "react-router-dom"
import moment from "moment"

export default function Event(props) {
    const description = props.detail
    const newDate = moment(props.date).utc().format('DD-MM-YYYY')
    //modificar para que quede dia-mes-año
    //console.log(props)
    return (
        <div className={s.main}>
            <div className={s.container}>
                <h2 className="container d-flex justify-content-center bg-dark rounded pb-4">{newDate}</h2>
                <img src={props.img} alt="" className={s.img} />
                <div className={s.subitem}>
                    <h2 className={s.title}>{props.title}</h2>
                    <h3>{props.subtitle}</h3>
                    <span className={s.texto}>{description[0].substr(0, 90) + "..."}</span>
                    <Link to={`/event/${props._id}`} className={s.imgContainer}>
                        <button className={s.boton}>Ver Más</button>
                    </Link>
                </div>
                <div></div>
            </div>
        </div>
    )
}