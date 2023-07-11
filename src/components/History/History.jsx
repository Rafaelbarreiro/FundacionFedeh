import React from "react";
import Articles from "../../containers/Articles/Articles";
import s from "../History/History.module.css"

export default function History() {

    return (
        <div className={s.main} >
            <span>Historia Fedeh</span>
            <Articles />
        </div>

    )
}