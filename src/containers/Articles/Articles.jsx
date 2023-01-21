import React from "react";
import Article from "../../components/Article/Article"
import jsonArticles from "../../articlesJson/articles.json";

export default function Cards() {

    
return (


<div>

{jsonArticles.map(el =>(


    <Article
        key={el.id}
        img={el.img}
        title={el.title}
        id={el.id}
    />
    ) )}
</div>
)
}