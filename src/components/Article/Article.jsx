import React from "react"
import s from "../Article/Article.module.css"
import { Link } from "react-router-dom"

export default function Article(props){


    return (
        <div className={s.main}>
            <div>
            <Link to={`/detail/${props.id}`} className={s.link}>
               <h2 className={s.link}>{props.title}</h2> 
               <img src={props.img} alt="" className={s.img}/>
               </Link>
            </div>
           
        </div>
    )
}