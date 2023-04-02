import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams} from "react-router-dom";
import s from "../ArticleDetail/ArticleDetail.module.css"
import {getEventDetail} from "../../redux/actions/index"

export default function EventDetail() {
    const dispatch = useDispatch()
    const params = useParams();
    const detailarticle = useSelector(state => state.event)

    useEffect(() =>{
        dispatch(getEventDetail(params.id))
    }, [dispatch])


    return (
        <div className={s.main} >
            <div>
                <h1 className={s.title}> {detailarticle.title} </h1>
            </div>
            <div>
                <h3 className={s.subt} > {detailarticle.subtitle} </h3>
            </div>
            <div className={s.contain} >
                <div className={s.containerimg} >
                <img src={detailarticle.img} alt="" 
                className={s.img} />
                
                </div>
                <div className={s.description} >
                    {
                       detailarticle.detail?.map(el =>(
                        <div>
                            <p className={s.text} >{el} </p><br></br>
                           </div> 
                       )) 
                    }
                </div>
               
            </div>
            <div className={s.detailImg} >
                {detailarticle.imgdetail?.map(el =>(
                    <div className={s.imgContainer}>
                        <img src={el} />
                    </div>
                ))}
            </div>
        </div>
    )
}