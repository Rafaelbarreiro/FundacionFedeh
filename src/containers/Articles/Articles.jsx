import React from "react";
import Article from "../../components/Article/Article"
import jsonArticles from "../../articlesJson/articles.json";
import a from "./Articles.module.css"

export default function Articles() {

    
return (


<div className={a.grid}>

{jsonArticles.map(el =>(


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