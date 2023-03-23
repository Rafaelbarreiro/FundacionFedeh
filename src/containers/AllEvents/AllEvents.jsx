import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Event from "../../components/Event/Event";
import { useEffect } from "react";
import { getEvents } from "../../redux/actions";
import s from "./AllEvents.module.css"


export default function AllEvents(){
    const events = useSelector(state => state.events)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch])
    const lastEvents = events.slice(0,3)
    console.groupCollapsed(lastEvents)
   


return (
    <div className={s.grid}>
        {lastEvents?.reverse().map(el =>(
    <Event 
        key={el.id}
        img={el.img}
        title={el.title}
        subtitle={el.subtitle}
        id={el.id}
        detail={el.detail}
    />
    ) )}
    </div>
)
}