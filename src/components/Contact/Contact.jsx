import React from "react";
import s from "../Contact/Contact.module.css"


export default function Contact(){

return(
    <div className={s.main} >
        <div >
            <div className={s.sede}>
                <div className={s.sedetext} >
                    <span>
                        NUESTRA SEDE
                    </span>
                    <span>
                        En Tucumán podes acercarte a Mendoza 128, en el 3° piso del Hospital Néstor Kirchner
                    </span>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/degd9cgyd/image/upload/v1676337981/centro_kirchner_biz251.jpg" alt="" className={s.hospital}/>
                </div>
            </div>
            <div className={s.container} >
                <div className={s.tel}>
                    <div>
                        <p>Teléfonos</p>
                        <span>Presidencia: Ana María Juárez de Cruz Prats</span><br />
                        <span>381- 502-9738</span><br />
                        <span>Sede</span><br />
                        <span>381- 396-7912</span>
                    </div>
                    <div>
                    <p>Email</p>
                        <span>✉ fundacionfedeh@yahoo.com.ar</span><br />
                        <span>381- 502-9738</span>
                    </div>
                    <div></div>
                </div>
                <div>
                    <form>
                        <div>
                            <h5>Nombre y Apellido</h5>
                            <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            />
                        </div>
                        <div>
                        <h5>Telefono</h5>
                        <input 
                        type="integer" 
                        name="telefono" 
                        id="telefono" 
                        />
                        </div>
                        <div>
                        <h5>Mail</h5>
                        <input 
                            type="text" 
                            name="mail" 
                            id="mail" 
                            />
                        </div>
                        <div>
                        <h5>Mensaje</h5>
                        <textarea
                            name="about"
                            /* value={input.about} */
                            id="about"
                            cols="50"
                            rows="5"
                           /*  onChange={e => {
                                handleChange(e);
                            }} */
                        ></textarea>
                        </div>
                        <button type="submit" >
                            Enviar
                        </button>
                        
                    </form>
                </div>
            </div>
        </div>

    </div>
)
}