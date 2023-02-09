import React from "react"
import s from "../Newsletter/Newsletter.module.css"
import { useAuth0 } from "@auth0/auth0-react";
import {LoginButton} from "../Login/Login"
import { Link } from "react-router-dom"

export default function Newsletter(){

    const { user, isAuthenticated } = useAuth0();
    let guest = user ? user.nickname : "default";

    return (
        <div className={s.container}>
           <div className={s.itemMenu}> Suscribite a nuestro Newletter y recibi tomas las novedades de la Fundación </div> 
            <div>
             {guest === "default" ? (
                 <>
                 <div className={s.loginBtn}>
                   <LoginButton />
                 </div>
               </>
             ):(

                 <button type="button" className={s.button} >Suscribirse</button>
             )

             }
            </div>
           
        </div>
    )
}