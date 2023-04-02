import C from "./Carrousel.module.css";
import { Link } from "react-router-dom";

function Carousel() {
  return (
    <div className={C.container}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        style={{ textAlign: "center" }}
        data-ride="carousel"
        data-interval="2500"
      >
        <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{ backgroundColor: "#f0e359" }}
          >
         
            <img
              className={C.carouselImg}
              src="https://res.cloudinary.com/degd9cgyd/image/upload/v1678229904/slider_one-2_aozutl_xtlttj.jpg"
              alt="First slide"
            />
         
              <Link to="/sumateOdona" style={{ textDecoration: "none" }} className={C.a1} >
                <div className={C.button}>Sumate a FEDEH</div>
            </Link>
          </div>
          <div className="carousel-item" style={{ backgroundColor: "#cc162c" }}>
          <div class="carousel-caption d-none d-md-block">
    <h5>Conocenos un poco más</h5>
    
  </div>
            <img
              className={C.carouselImg}
              src="https://res.cloudinary.com/dhmz7s3gc/image/upload/v1679354774/donacion_portada_hdskdv.jpg"
              alt="Second slide"
            />
            
            
              <Link to="/historia" style={{ textDecoration: "none" }} className={C.a1}>
                <div className={C.button}>Ver Nuestra historia</div>
            </Link>
          </div>
          <div className="carousel-item">
            <img
              className={C.carouselImg}
              src="https://res.cloudinary.com/dhmz7s3gc/image/upload/v1679354944/donarSangre_ercmsc.jpg"
              alt="Third slide"
            />
              <Link to="/donaciónDeSangre" style={{ textDecoration: "none" }} className={C.a1}>
                <div className={C.button}>Cómo aportar mi ayuda</div>
            </Link>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
