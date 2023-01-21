import React from "react"
import s from "../Article/Article.module.css"
import { Link } from "react-router-dom"

export default function Article(props){

[]
    return (
        <div className={s.main}>
            <div>
               <h1>{props.title}</h1> 
               <img src={props.img} alt="" />
               
            </div>
           
        </div>
    )
}