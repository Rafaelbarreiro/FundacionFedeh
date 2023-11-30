import React from "react";
import D from "../CarrouselCampaign.module.css"
import C from "../Carrousel.module.css"
import s from "./BloodDonate.module.css"
import sangre1 from '../../Images/Sangre1.jpg'
import sangre2 from '../../Images/Sangre2.jpg'
import sangre3 from '../../Images/Sangre3.jpg'
import sangre4 from '../../Images/Sangre4.jpg'
import sangre5 from '../../Images/Sangre5.jpg'

export default function BloodDonate(){

return (
    <div className={s.carouselWrapper}>
    <div className={s.row}>
      <div className="col">
        <div className={C.containerImage}>
          <img className={s.carouselImage} src={sangre1} alt="Primera imagen" />
         
        </div>
      </div>
      <div className="col">
        <div className={C.containerImage}>
          <img className={s.carouselImage} src={sangre2} alt="Segunda imagen" />
          
        </div>
      </div>
      <div className="col">
        <div className={C.containerImage}>
          <img className={s.carouselImage} src={sangre3} alt="Tercera imagen" />
         
        </div>
      </div>
      <div className="col">
        <div className={C.containerImage}>
          <img className={s.carouselImage} src={sangre4} alt="Tercera imagen" />
         
        </div>
      </div>
      <div className="col">
        <div className={C.containerImage}>
          <img className={s.carouselImage} src={sangre5} alt="Tercera imagen" />
         
        </div>
      </div>
    </div>
  </div>
)
}