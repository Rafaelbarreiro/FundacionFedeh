import React from "react";
import s from "../JoinForm/JoinForm.module.css"

export default function JoinForm() {

return(
    <div>
        <div>
            <h2> Quiero unirme a Fedeh como voluntario!</h2>
            <h5> Los campos marcados con * son obligatorios</h5>
        </div>
        <div className={s.containerForm} >
            <div>
                <form>
                    <div>
                        <h5>Nombre *</h5>
                        <input/>
                    </div>
                    <div>
                        <h5>Edad *</h5>
                        <input
                        type="number"
                        placeholder="Debes ser mayor de 18 años"
                        />
                    </div>
                    <div>
                        <h5>Email *</h5>
                        <input/>
                    </div>
                    <div>
                        <h5>Telefono</h5>
                        <input></input>
                    </div>
                   
                    <div >
            <button
              type="submit"
            >
              Enviar
            </button>
          </div>
                </form>
                

            </div>
            <div>
            <img src="https://res.cloudinary.com/dbtekd33p/image/upload/v1671422387/cqws5x8n/enyl4rknrg9ub2vtpmb6.png"
              alt=""
              className={s.logo} 
              />
            </div>
        </div>

    </div>
)    
}