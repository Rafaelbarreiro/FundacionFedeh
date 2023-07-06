import React from "react";
import s from "../JoinDonate/JoinDonate.module.css"

export default function JoinDonate(){

return(
    < div className={s.main} >
    <div>
        <span>
            Apoyanos y acompañanos en esta causa aportando tu granito de arena
        </span>
    </div>
    <div className={s.container} >
        <div>
            <span>a traves de transferencia bancaria</span>
            <h2>CBU</h2>
            <h3>002021521512121231321</h3>
            <h2>ALIAS</h2>
            <h3>FEDEH.SUMATE.DONA</h3>
        </div>  
        <div>
            <span>a traves de mercado pago con tarjeta de credito o debito</span>
            <div>
                <input type="text"
                placeholder="ingrese su donacion"
                 />
                 <button>DONAR</button>
                 
            </div>
        </div>
      
    </div>
    
    </div>
)
}