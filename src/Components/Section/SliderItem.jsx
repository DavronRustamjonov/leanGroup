import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Section.css"; 
import Slider_pic1 from '/slider-pic1.svg';
import Slider_pic2 from '/slider-pic2.svg';
import Slider_pic3 from '/slider-pic3.svg';
import Slider_pic4 from '/slider-pic4.svg';
import Slider_pic5 from '/slider-pic5.svg';

function SliderItem() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgba(239, 124, 0, 1)" ,borderRadius:"50%"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgba(239, 124, 0, 1)" , borderRadius:"50%"}}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    arrows: true, 
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        
          
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1
        }
      }
      
    ]
  };

  return (
    <div className="slider-container container">
      <h2 className="slider__title">Качество продукции подтверждают <span className="slider__span">сертификаты</span></h2>
      <Slider {...settings} >
        <div >
          <img  className="slider-pic"  src={Slider_pic1} alt="Certificate 1" />
        </div>
        <div >
          <img  className="slider-pic"  src={Slider_pic2} alt="Certificate 2" />
        </div>
        <div >
          <img  className="slider-pic"  src={Slider_pic3} alt="Certificate 3" />
        </div>
        <div >
          <img  className="slider-pic"  src={Slider_pic4} alt="Certificate 4" />
        </div>
        <div >
          <img  className="slider-pic"  src={Slider_pic5} alt="Certificate 5" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderItem;
