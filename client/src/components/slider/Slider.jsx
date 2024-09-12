import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/left-arrow" alt="Left Arrow" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="Slide" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="/left-arrow" className="right" alt="Right Arrow" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            <img src="close" alt="Close" />
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="Big Image" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt={`Small Image ${index}`}
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
