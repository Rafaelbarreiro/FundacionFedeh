import React from "react";
import s from "../JoinForm/JoinForm.module.css";

export default function JoinForm() {
  return (
    <div className={s.main}>
      <div>
        <h2> Quiero unirme a Fedeh como voluntario!</h2>
        
      </div>
      <div className={s.containerForm}>
        <div>
          <form>
            <div>
              <h5>Nombre *</h5>
              <input />
            </div>
            <div>
              <h5>Edad *</h5>
              <input type="number" placeholder="Debes ser mayor de 18 años" />
            </div>
            <div>
              <h5>Email *</h5>
              <input />
            </div>
            <div>
              <h5>Telefono</h5>
              <input></input>
            </div>
            <div>
              <h5>Cuentanos un poco de ti</h5>
              <input></input>
            </div>

            <div>
            <h6 className={s.obligation}> Los campos marcados con * son obligatorios</h6>
              <button type="submit" className={s.submit}>
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className={s.logoContainer}>
            <img
              src="https://res.cloudinary.com/dbtekd33p/image/upload/v1671422387/cqws5x8n/enyl4rknrg9ub2vtpmb6.png"
              alt=""
              className={s.logo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
