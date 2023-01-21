import React from "react";
import jsonArticles from "../../articlesJson/articles.json";
import { useParams} from "react-router-dom";

export default function Detail() {
    
    const params = useParams();
    const Article = jsonArticles.filter( el => el.id == params.id)

    return (
        <div>
            <div>
                <h1> {Article[0].title} </h1>
            </div>
            <div>
            <img src={Article[0].img} alt="" />
            </div>
            <div>
                <span> {Article[0].detail} </span>
            </div>
        </div>
    )
}