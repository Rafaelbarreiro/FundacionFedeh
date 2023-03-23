import React from "react";
import JoinForm from "../JoinForm/JoinForm"
import Donate from "../Donate/Donate"
import s from "../JoinDonate/JoinDonate.module.css"

export default function JoinDonate(){

return(
    < div className={s.main} >
    <div>
        <span>
            Podes sumarte a nuestra lucha como voluntario o hacerte socio con tu donación
        </span>
    </div>
    <div>
        <JoinForm/>
        <Donate/>
    </div>
    
    </div>
)
}