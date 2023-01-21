//import HC from "../HomeCarrousel/HomeCarousel.module.css";

function Carousel() {
    return (
      <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  src="https://res.cloudinary.com/degd9cgyd/image/upload/v1672282350/slider_one-2_aozutl.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img  src="https://res.cloudinary.com/degd9cgyd/image/upload/v1672282350/slider_one-2_aozutl.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img  src="https://res.cloudinary.com/degd9cgyd/image/upload/v1672282350/slider_one-2_aozutl.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      </div>
    );
  }

export default Carousel;