import React from "react";
import { useState } from "react";
import s from "../JoinForm/JoinForm.module.css";

export default function JoinForm() {

  const [input, setInput] = useState({
    name: "",
    age: "",
    email: "",
    about: ""
  });

  const initialState = {
    name: "",
    age: "",
    email: "",
    about: ""
  };

  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
              <input 
               name="name"
               id="name"
               value={input.name}
               onChange={e => {
                 handleChange(e);
               }}
              />
            </div>
            <div>
              <h5>Edad *</h5>
              <input 
              type="integer" 
              placeholder="Debes ser mayor de 18 años"
              name="age"
              id="age"
              value={input.age}
              onChange={e => {
                handleChange(e);
              }} />
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
              <textarea
              name="about"
              value={input.about}
              id="about"
              cols="50"
              rows="4"
              onChange={e => {
                handleChange(e);
              }}
              ></textarea>
            </div>

            <div>
            <h6 className={s.obligation}> Los campos marcados con * son obligatorios</h6>
              <button type="submit" className={s.activeBtn}>
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
