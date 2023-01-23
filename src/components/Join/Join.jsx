import React from "react";
import { Link } from "react-router-dom";
import s from "../Join/Join.module.css"


export default function Join(){

return(
<div className={s.main}>
    <div>
        <Link to="/donar" style={{ textDecoration: "none" }}>
              <button>Donar</button>
        </Link>      
    </div>
    <div>
        <Link to="/sumate" style={{ textDecoration: "none" }}>
              <button>Sumate</button>
        </Link>      
    </div>

</div>

)
}