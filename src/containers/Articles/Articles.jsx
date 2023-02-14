import React, {useEffect} from "react";
import Article from "../../components/Article/Article";
import { useDispatch, useSelector } from "react-redux";
import a from "./Articles.module.css";
import {getArticles} from "../../redux/actions/index"

export default function Articles() {
    const articles = useSelector(state => state.articles)
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getArticles())
    }, [dispatch])
    
return (


<div className={a.grid}>

{articles.map(el =>(
    <Article className={a.card}
        key={el.id}
        img={el.img}
        title={el.title}
        id={el.id}
    />
    ) )}
</div>
)
}