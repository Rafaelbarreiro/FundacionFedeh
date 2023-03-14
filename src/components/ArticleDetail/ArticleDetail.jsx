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
   //console.log(detailarticle.imgdetail)
/*    function prueba (detailarticle){
       const myPara = detailarticle.detail.parse('p')
       console.log(myPara)
   }
   if(detailarticle.detail){

       prueba()
   } */
   //console.log(detailarticle.detail)
  
 

    return (
        <div className={s.main} >
            <div>
                <h1> {detailarticle.title} </h1>
            </div>
            <div>
                <h3> {detailarticle.subtitle} </h3>
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
                            <p>{el} </p><br></br>
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