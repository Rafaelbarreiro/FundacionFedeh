import React from "react";
import { Link } from "react-router-dom";
import s from "../Join/Join.module.css"


export default function Join(){

return(
<div className={s.main}>
   
    <div className={s.donar} >
        <Link to="/donar">
    <button type="button" className={s.button} >Donar</button>
        </Link>
    </div>
    <div className={s.sumate} >
        <Link to="/sumate">
    <button type="button" className={s.button}>Sumate</button>
        </Link>
    </div>

</div>

)
}