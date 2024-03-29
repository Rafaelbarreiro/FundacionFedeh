import React from "react";
import s from "../JoinDonate/JoinDonate.module.css"
import 'animate.css/animate.min.css';
import mercadopago from '../../Images/mercadopago.png'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postDonation } from "../../redux/actions";
import CartItem from "../MercadoPago/cartItem";
import dona from '../../Images/dona.png'

export default function JoinDonate() {
    const dispatch = useDispatch();
    const url = import.meta.env.VITE_REACT_APP_URL
    const homeurl = import.meta.env.FRONT_URL
    

    const donation = useSelector((state) => state.donation)
    const [input, setInput] = useState({
        amount: 0,
        email : ""

      });
    const paymenturl = useSelector((state) => state.paymenturl);
    const initialState = {
        amount: 0,
        email : ""
    }
    const handleChange = e => {
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    function clearInput(){
        setInput({...initialState})
    }
    const handleAddToDonate = () => {
        dispatch(postDonation(input));
  };
    const handleKeyDown = (event) => {
        const key = event.key;
        if (!/^[0-9]+$/.test(key) && key !== "Backspace" && key !== "Delete") {
            event.preventDefault();
        }
    };

    const [datos, setDatos] = useState({
        email: "alguienenDatos@gmail.com",
        amount: input.amount,
    })

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
                <div className={s.centro} >
                    <div>
                        <form  action="https://formsubmit.co/rafael84barreiro@gmail.com" method="POST">

                        
                        <span className={s.title} > Hacete socio de Fedeh</span>
                        <h2>Completa tus datos</h2>
                        <h2>y te contactaremos</h2>
                        <div className={s.inputForm} >
                            <h5>Nombre *</h5>
                            <input 
                            className={s.input}
                            name="name"
                            id="name"
                            value={input.name}
                            onChange={e => {
                                handleChange(e);
                            }}
                            />
                        </div>
                        <div className={s.inputForm} >
                            <h5>Celular *</h5>
                            <input 
                            className={s.input}
                            name="celular"
                            id="celular"
                            value={input.celular}
                            onChange={e => {
                                handleChange(e);
                            }}
                            />
                        </div>
                        <div className={s.inputForm} >
                            <h5>Email *</h5>
                            <input 
                            className={s.input}
                            name="email"
                            id="email"
                            value={input.email}
                            onChange={e => {
                                handleChange(e);
                            }}
                            />
                        </div>
                        <div>
            <h6 className={s.obligation}> Los campos marcados con * son obligatorios</h6>
              <button type="submit" className={s.activeBtn}>
                Enviar
              </button>
              <imput type="hidden" name="_next" value="http://localhost:5173"></imput>
              <input type="hidden" name="_next" value="http://localhost:5173/emailenviado"></input>
              <input type="hidden" name="_captcha" value="false"></input>
            </div>
            </form>
                    </div>

                </div>

                <div className={s.derecho} >
                    <img className={s.img} src={mercadopago} alt="pago" />
                    <span className={s.title}> Mercado Pago </span>
                    <div className={s.pago}>
                        <input  type="integer" 
                                name="amount"
                                inputMode="numeric" 
                                pattern="[0-9]*" 
                                placeholder="Ingresar monto" 
                                className={s.inputCenter}
                                onChange={e => {
                                    handleChange(e);
                                }}
                                 onKeyDown={handleKeyDown} />

                        <div className="pt-2">
                            <button className={s.boton}
                                    onClick={handleAddToDonate}
                            >Donar</button>
                          {paymenturl ?  <div className="modal-action">
              <a
                href={paymenturl}
                htmlFor="Pagaritem"
                /* className="btn bg-green-500 text-white hover:bg-green-600 " */
              >
                Ir a pagar
              </a>

              <a
                href={url}
                htmlFor="Pagaritem"
                /* className="btn bg-red-500 text-white hover:bg-red-600 " */
              >
                Cerrar
              </a>
            </div> :   
            <></> 
          } 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}