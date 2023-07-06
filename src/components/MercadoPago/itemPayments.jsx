/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Manitos from '../../Images/gracias.jpg'
import { Container, Hand } from '../../ComponentesDos/styled'


function ItemPayments() {
//despues setear los datos del comprador
 /*  const [input, setInput] = useState({
      donor: donor,
      cardId: donation[0].title,
      amount: parseInt(donation[0].amount),
      completed: 'completed'
  }); */

  return (
    <div>
      <Container>
      </Container>
      <Hand>
        <img src={Manitos} alt="Manitos" />
        <p>Gracias por su compra. Contáctate con nosotros ante cualquier duda.</p>
        <Link to={"/"}>
        <button>Continuar a FEDEH</button>
        </Link>
      </Hand> 
    </div>
  );
}

export default ItemPayments;