import React from 'react'
import { Container, Hand } from './styled'

import Manitos from '../Images/gracias.jpg'

function Donacion() {
  return (
    <>
      <Container>
      </Container>
      <Hand>
        <img src={Manitos} alt="Manitos" />
        <p>Tu suscripción al plan fue registrada con éxito. Contáctate con ante cualquier duda.</p>
        <button>Continuar a FEDEH</button>
      </Hand>
    </>

  )
}

export default Donacion