import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyEvent } from "../../redux/actions";
import { Link } from "react-router-dom";
import image from "../../assets/charity-donation-hand-love-icon.svg"
import s from "../MercadoPago/cartItem.module.css"
//import { getMaxListeners } from "../../../../FedeBack/models/Events";



export default function CartItem ({_id}) {
  const url = import.meta.env.VITE_REACT_APP_URL
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    const userId = user.id;
    var [amount,setamount]=useState(0)


    amount = useSelector((state) => state.event)
   
    const paymenturl = useSelector((state) => state.paymenturl);
     console.log(paymenturl)
    //console.log(url) 
    if(amount){
        var datos={
            amount: parseInt(amount.amount),
            //email: user.email,
            email: "prueba@gmail.com",
            name: "prueba"
            //name: user.email
        }
        /* console.log(amount.amount) */
    }
    function Generarlink() {
        dispatch(buyEvent(datos, _id));
        //dispatch(postDonation(dbDonation))
       
    }
/* console.log(datos) */
return(
    <div className={s.checkout} >
        {amount
          ?<label
            htmlFor="Pagaritem"
            onClick={Generarlink}
            className="btn  btn-ghost  "
          >
            Comprar entrada
            {/* <img src={image}></img> */}
          </label>
          :<></>
        }
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
)

}