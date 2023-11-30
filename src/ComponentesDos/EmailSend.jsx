import React from 'react'
import { Container, Hand } from './styled'
import { Link } from "react-router-dom";

import Manitos from '../Images/gracias.jpg'

function EmailSend() {
  return (
    <>
      <Container>
      </Container>
      <Hand>
        <img src={Manitos} alt="Manitos" />
        <p>Gracias por interesarte en ser colaborador.</p>
        <p>Nos pondremos en contacto a la brevedad</p>
        
      </Hand>
    </>

  )
}

export default EmailSend