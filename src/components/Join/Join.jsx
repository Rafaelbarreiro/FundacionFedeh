import React from "react";
import { Link } from "react-router-dom";
import s from "../Join/Join.module.css"
import donacion from "../../Images/manosDonando.png"
import donateCash from "../../Images/donateCash.jpg"
import empresa from "../../Images/empresa.jpg"


export default function Join(){

return(
<div className={s.main}>
      <div id="triangulo_div" /* class="col-sm-2 triangulo_div" */><p className={s.triangulo_rectangulo}>triangulo rectangulo.</p></div>
      <div className={s.contain} >
        <h2 className={s.sumate} >SUMATE</h2>

    <div className={s.container}>
        <div className={s.slidecontainer}>
          <div className={s.card}>
            <h2 className={s.sumate2} >COMO DONANTE</h2>
            
            <div className={s.imagecontent}>
            <img src={donateCash} alt="" className={s.cardimage}/>
            </div>
          </div>
        </div > 

        <div className={s.slidecontainer}>
        <div className={s.card}>
        <h2 className={s.sumate2} >COMO VOLUNTARIO</h2>
            <div className={s.imagecontent}>
            <img src={donacion} alt="" className={s.cardimage}/>
            </div>
          </div>
        </div>

        <div className={s.slidecontainer}>
        <div className={s.card}>
        <h2 className={s.sumate2} >COMO EMPRESA</h2>
            <div className={s.imagecontent}>
            <img src={empresa} alt="" className={s.cardimage}/>
            </div>
          </div>
        </div>


 {/*    <div className={s.slidecontainer}>
            <div className={s.slidecontent}>
                    <div className={s.card}>
                        <div className={s.imagecontent}>
                            <span className={s.overlay}></span>
                            <div className={s.cardimage}>
                                <img src={donacion} alt="" className={s.cardimg}/>
                            </div>
                        </div>
                        <div className={s.cardcontent}>
                        <Link to="/sumate">
                        <button className={s.button}>COMO VOLUNTARIO.</button>
                        </Link>
                            
                        </div>
                    </div>
                
            </div>
        </div> */}
      
       {/*  <div className={s.slidecontainer}>
            <div className={s.slidecontent}>
                    <div className={s.card}>
                        <div className={s.imagecontent}>
                            <span className={s.overlay}></span>
                            <div className={s.cardimage}>
                                <img src={donacion} alt="" className={s.cardimg}/>
                            </div>
                        </div>
                        <div className={s.cardcontent}>
                        <Link to="/donar">
                        <button className={s.button}>COMO DONANTE</button>
                        </Link>
                            
                        </div>
                    </div>
                
            </div>
        </div> */}
       
       {/*  <div className={s.slidecontainer}>
            <div className={s.slidecontent}>
                    <div className={s.card}>
                        <div className={s.imagecontent}>
                            <span className={s.overlay}></span>
                            <div className={s.cardimage}>
                                <img src={donacion} alt="" className={s.cardimg}/>
                            </div>
                        </div>
                        <div className={s.cardcontent}>
                        <button className={s.button}>COMO EMPRESA</button>
                            
                        </div>
                    </div>
                
            </div>
        </div> */}
    </div>
      </div>

</div>

)
}