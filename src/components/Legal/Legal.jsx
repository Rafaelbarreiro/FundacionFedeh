import React from "react";
import s from "../Legal/Legal.module.css"

export default function Legal(){


return(
    <div className={s.main}>
        <div className={s.contain}>
            <div>
                <img src="https://res.cloudinary.com/dhmz7s3gc/image/upload/v1678892698/Resolucion_kiibfw.jpg" alt="" className={s.img}/>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dhmz7s3gc/image/upload/v1678893231/normal_funcionamiento_bi7qm7.jpg" alt="" className={s.img} />
            </div>

        </div>
    </div>  
)
}