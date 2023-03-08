import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams} from "react-router-dom";
import s from "../ArticleDetail/ArticleDetail.module.css"
import {getArticleDetail} from "../../redux/actions/index"

export default function Detail() {
    const dispatch = useDispatch()
    const params = useParams();
    const detailarticle = useSelector(state => state.article)

    useEffect(() =>{
        dispatch(getArticleDetail(params.id))
    }, [dispatch])
   console.log(detailarticle.imgdetail)


    return (
        <div className={s.main} >
            <div>
                <h1> {detailarticle.title} </h1>
            </div>
            <div>
                <h3> {detailarticle.subtitle} </h3>
            </div>
            <div>
                <div className={s.containerimg} >
                <img src={detailarticle.img} alt="" 
                className={s.img} />
                
                </div>
                <div>
                    <span> {detailarticle.detail} </span>
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