import React, { useState } from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import "./index.css";
const Thumbnails = [
  {
    id: "v1",
    src: "/images/Thumbnail1.jpg",
  },
  {
    id: "v2",
    src: "/images/Thumbnail2.jpg",
  },
  {
    id: "v3",
    src: "/images/Thumbnail3.jpg",
  },
  {
    id: "v4",
    src: "/images/Thumbnail4.jpg",
  },
  {
    id: "v5",
    src: "/images/Thumbnail5.jpg",
  },
  {
    id: "v6",
    src: "/images/Thumbnail6.jpg",
  },
];
export default function Slide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === Thumbnails.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? Thumbnails.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = Thumbnails.map((Thumbnail) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={Thumbnail.src}
      >
        <img src={Thumbnail.src} />
      </CarouselItem>
    );
  });
  return (
    <div className="slider-container">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={Thumbnails}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>

      <form className="quick-booking" action="#">
        <span>MUA VÉ NHANH</span>
        <select name="day" id="day" required>
          <option selected>Chọn ngày</option>
          <option value="18/10/202">18/10/2022</option>
          <option value="19/10/202">19/10/2022</option>
          <option value="20/10/202">20/10/2022</option>
          <option value="21/10/202">21/10/2022</option>
        </select>
        <select name="movie" id="movie" required>
          <option selected>Chọn phim</option>
          <option value="SG">Alo alo</option>
          <option value="19/10/202">19/10/2022</option>
          <option value="20/10/202">20/10/2022</option>
          <option value="21/10/202">21/10/2022</option>
        </select>
        <select name="theater" id="theater" required>
          <option selected>Chọn rạp</option>
          <option value="SG">SG</option>
          <option value="19/10/202">19/10/2022</option>
          <option value="20/10/202">20/10/2022</option>
          <option value="21/10/202">21/10/2022</option>
        </select>
        <select name="time" id="time" required>
          <option selected>Chọn xuất xem</option>
          <option value="SG">13h</option>
          <option value="19/10/202">19/10/2022</option>
          <option value="20/10/202">20/10/2022</option>
          <option value="21/10/202">21/10/2022</option>
        </select>
        <div className="container-btn">
          <button type="submit">MUA VÉ</button>
        </div>
      </form>
    </div>
  );
}
