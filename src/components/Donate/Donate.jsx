import React from "react";
import s from "../Donate/Donate.module.css"

export default function Donate(){

return(
    <div className={s.main} >
        <div className={s.title} >
            AYUDANOS A CRECER Y LLEGAR A MAS PACIENTES Y FAMILIAS QUE LO NECESITAN
        </div>
        <div>
            <p className={s.title2}>
                Para obtener más información de tu donación, destino de la misma, o cualquier duda por favor comunicarse al Tel: 381-396-7912 o a fundacionfedeh@yahoo.com.ar
            </p>
        </div>
        <div>
            <div className={s.subtitle} >
                <span>
                    Cuanto querés Donar
                </span>
                <span className={s.local} >
                    La moneda local es $(pesos argentinos)
                </span>
            </div>
            <div className={s.amount} >
                <div>
                    <button>
                        $100
                    </button>
                </div>
                <div>
                    <button>
                        $500
                    </button>
                </div>
                <div>
                    <button>
                        $1000
                    </button>
                </div>
                <div>
                    <input
                    className={s.another}
                    name="amount"
                    id="amount"
                    placeholder="otro"
                    />
                </div>
            </div>
            <div>
                <span>
                    Con que frecuencia quieres donar ese monto?
                </span>
                <div className={s.checked} >
                    <div>
                        <h3>Unica vez</h3>
                        <input type="checkbox"/>

                    </div>
                    <div>
                        <h3>Mensual</h3>
                        <input type="checkbox"/>

                    </div>
                    <div>
                        <h3>Trimestral</h3>
                        <input type="checkbox"/>

                    </div>
                
                </div>
            </div>
        </div>

    </div>
)
}