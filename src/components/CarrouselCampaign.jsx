import C from "./Carrousel.module.css";
import D from "./CarrouselCampaign.module.css"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import estrellas from '../Images/estrellas2023.jpg';
import diaDeDonar from '../Images/diaDeDonar.jpg';
import ramonazo from '../Images/ramonazo2023.jpg'


function CarouselCampaign() {
  return (
    <div className={C.carouselWrapper}>
      <div className="row">
        <div className="col">
          <div className={C.containerImage}>
            <img className={D.carouselImage} src={estrellas} alt="Primera imagen" />
            <div className={C.imageCaption}>
              <h3 style={{ paddingTop: '10px', }}>Suma tu deseo de Navidad en una estrella </h3>
            {/*   <div className="d-flex justify-content-center">
                <Link to="/donaciónDeSangre">
                <button className={C.btn}>Como aportar mi ayuda</button>
                </Link>

              </div> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className={C.containerImage}>
            <img className={D.carouselImage} src={diaDeDonar} alt="Segunda imagen" />
            <div className={C.imageCaption}>
              <h3 style={{ paddingTop: '10px', }}>Hoy te convertis en héroe. Acercate a nuestro Stand</h3>
              
              {/* <div className="d-flex justify-content-center">
                <Link to="/sumateOdona">
                <button className={C.btn}>Sumate a FEDEH</button>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        <div className="col">
          <div className={C.containerImage}>
            <img className={D.carouselImage} src={ramonazo} alt="Tercera imagen" />
            <div className={C.imageCaption}>
              <h3 style={{ paddingTop: '10px', }}>Participa del Ramonazo y gana fabulosos premios</h3>
              
              {/* <div className="d-flex justify-content-center pb-3">
                <Link to="/historia">
                <button className={C.btn}>Ver Nuestra historia</button>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselCampaign;
