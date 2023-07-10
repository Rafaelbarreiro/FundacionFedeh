import React from "react";
import s from "../JoinDonate/JoinDonate.module.css"
import 'animate.css/animate.min.css';
import mercadopago from '../../Images/mercadopago.png'
import dona from '../../Images/dona.png'

export default function JoinDonate() {

    const handleKeyDown = (event) => {
        const key = event.key;
        if (!/^[0-9]+$/.test(key) && key !== "Backspace" && key !== "Delete") {
            event.preventDefault();
        }
    };


    return (
        <>
            <div className={s.container}>
                <div className={s.fondo} >
                    <h1 className={`${s.title} animate__animated animate__fadeInUp`}>
                        Apoyanos y acompañanos en esta causa aportando tu granito de arena
                    </h1>
                </div>
            </div>
            < div className={s.main} >
                <div className={s.izquierda}>
                    <div>
                        <span className={s.title} > Transferencia bancaria</span>
                        <h2>CBU</h2>
                        <h3 style={{ color: 'white', fontSize: '25px' }}>002021521512121231321</h3>
                        <h2>ALIAS</h2>
                        <h3 style={{ color: 'white', fontSize: '25px' }}>FEDEH.SUMATE.DONA</h3>
                    </div>
                </div>
                <div className={s.derecho} >
                    <img className={s.img} src={mercadopago} alt="pago" />
                    <span className={s.title}> Mercado Pago </span>
                    <div className={s.pago}>
                        <input type="text" inputMode="numeric" pattern="[0-9]*" placeholder="Ingresar monto" className={s.inputCenter} onKeyDown={handleKeyDown} />

                        <div className="pt-2">
                            <button className={s.boton}>Donar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}