import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Event from "../../components/Event/Event";
import { useEffect } from "react";
import { getEvents } from "../../redux/actions";
import s from "./AllEvents.module.css"


export default function AllEvents() {
    const events = useSelector(state => state.events)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch])
    var events2 = []
    events?  events2 = events.reverse() : events2 = events
    console.log(events2, "events2")
    console.log(events, "events")

    return (
        <div className={s.grid}>
            {events2?.reverse().map(el => (

                <Event
                    key={el._id}
                    img={el.img}
                    title={el.title}
                    subtitle={el.subtitle}
                    _id={el._id}
                    detail={el.detail}
                    date={el.date}

                />

            ))}
        </div>
    )
}