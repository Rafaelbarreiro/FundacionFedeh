import C from "./Carrousel.module.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import donar from '../Images/donarSangre.jpg';
import fotodos from '../Images/fedeDonation.jpg';
import fototres from '../Images/imagentres.jpeg';
import bienvenidos from '../Images/bienvenidos.png'

function Carousel() {
  return (
    <div className={C.carouselWrapper}>
      <div className={C.bienvenidos}>
        <img className={C.imgInicio} src={bienvenidos} alt="bienvenido" />
      </div>
      <div className="row">
        <div className="col">
          <div className={C.containerImage}>
            <img className={C.carouselImage} src={donar} alt="Primera imagen" />
            <div className={C.imageCaption}>
              <h3 style={{ paddingTop: '10px', }}>Un acto de donación, un mundo de amor</h3>
              <div className="d-flex justify-content-center">
                {/* <Link> */}
                <button className={C.btn}>Como aportar mi ayuda</button>
                {/* </Link> */}

              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={C.containerImage}>
            <img className={C.carouselImage} src={fotodos} alt="Segunda imagen" />
            <div className={C.imageCaption}>
              <h3 style={{ paddingTop: '10px', }}>Únete a FEDEH y juntos hagamos la diferencia</h3>
              <div className="d-flex justify-content-center">
                <button className={C.btn}>Sumate a FEDEH</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={C.containerImage}>
            <img className={C.carouselImage} src={fototres} alt="Tercera imagen" />
            <div className={C.imageCaption}>
              <h3 style={{ paddingTop: '10px', }}>Descubre la inspiradora historia de FEDEH</h3>
              <div className="d-flex justify-content-center pb-3">
                <button className={C.btn}>Ver Nuestra historia</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
