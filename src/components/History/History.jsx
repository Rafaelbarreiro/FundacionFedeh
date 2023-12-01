import React from "react";
import Articles from "../../containers/Articles/Articles";
import s from "../History/History.module.css"

export default function History() {

    return (
        <div className={s.main} >
            <h2 className={s.title} >Acompañanos a descubrir el camino recorrido </h2>
            <Articles />
        </div>

    )
}