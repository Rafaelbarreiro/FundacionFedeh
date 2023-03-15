import C from "./Carrousel.module.css";

function Carousel() {
  return (
    <div className={C.container}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        style={{ textAlign: "center" }}
        data-ride="carousel"
        data-interval="4000"
      >
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
          </div>
          <div className="carousel-item" style={{ backgroundColor: "#cc162c" }}>
            <img
              className={C.carouselImg}
              src="https://res.cloudinary.com/degd9cgyd/image/upload/v1674528606/slider_three_xt2xoe_vt91wc.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className={C.carouselImg}
              src="https://res.cloudinary.com/degd9cgyd/image/upload/c_scale,h_381,w_546/v1672020190/gracias_f4vh9s.jpg"
              alt="Third slide"
            />
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
