import React, { useEffect, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../Style/carousel.css";
// import csvToJson from "convert-csv-to-json";

const items = [
  <div className="img-container">
    <img
      src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg"
      className="carousel-item"
      alt="Image 1"
      draggable={false}
    />
  </div>,
  <div className="img-container">
    <img
      src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/50e513115094373.6047d1f4cf3f1.jpg"
      className="carousel-item"
      alt="Image 2"
      draggable={false}
    />
  </div>,
  <div className="img-container">
    <img
      src="https://www.ie.edu/insights/wp-content/uploads/2022/01/San-Jose-Feature.jpg"
      className="carousel-item"
      alt="Image 3"
      draggable={false}
    />
  </div>,
  <div className="img-container">
    <img
      src="https://www.beyondgames.biz/wp-content/uploads/2022/06/NFT-art.jpg"
      className="carousel-item"
      alt="Image 4"
      draggable={false}
    />
  </div>,
];

const Carousel = (props) => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    1: { items: 2 },
    2: { items: 3 },
    3: { items: 4 },
  };
  const handleSlideChange = (e) => {
    if (carouselRef.current) {
      const currentIndex = carouselRef.current.state.activeIndex;
      const c = currentIndex + 1 === 4 ? 3 : currentIndex + 1;
      props.setImage(items[c].props.children.props.src);
    }
  };
  useEffect(() => {}, []);
  return (
    <AliceCarousel
      items={items}
      responsive={responsive}
      mouseDragDisabled
      buttonsDisabled
      dotsDisabled
      infinite
      mouseTracking
      animationDuration={1000}
      animationType="fadeout"
      autoPlay
      autoPlayInterval={2000}
      autoPlayDirection="ltr"
      controlsStrategy="responsive"
      onSlideChange={handleSlideChange}
      ref={carouselRef}
      disableButtonsControls
      disableDotsControls
    />
  );
};

export default Carousel;
