import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Event from "../../components/Event/Event";
import { useEffect } from "react";
import { getComunications } from "../../redux/actions";
import s from "./AllComunications.module.css"



export default function AllComunications(){
    const comunications = useSelector(state => state.comunications)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComunications())
    }, [dispatch])
    const lastComunications = comunications.slice(0,3)
    
   


return (
    <div className={s.grid}>
        {lastComunications?.reverse().map(el =>(
    <Event 
        key={el.id}
        img={el.img}
        title={el.title}
        subtitle={el.subtitle}
        id={el.id}
        detail={el.detail}
        date={el.date}
    />
    ) )}
    </div>
)
}