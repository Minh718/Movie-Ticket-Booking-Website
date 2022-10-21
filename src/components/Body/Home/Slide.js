import React, { useState } from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselCaption,
} from "reactstrap";
import { useGlobalContext } from "../../../context";
import "./index.css";
import { img_url } from "../api";
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
  const { moviesArePlaying } = useGlobalContext();
  console.log(moviesArePlaying);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === moviesArePlaying.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? moviesArePlaying.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = moviesArePlaying.map((movieArePlaying) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={moviesArePlaying.id}
      >
        <img src={img_url + movieArePlaying.backdrop_path} />
        <CarouselCaption
          captionText={movieArePlaying.release_date}
          captionHeader={movieArePlaying.title}
        />
      </CarouselItem>
    );
  });
  return (
    <div className="slider-container">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={moviesArePlaying}
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
        <select name="movie" id="movie" required>
          <option selected>Chọn phim</option>
          <option value="18/10/202">18/10/2022</option>
          <option value="19/10/202">19/10/2022</option>
          <option value="20/10/202">20/10/2022</option>
          <option value="21/10/202">21/10/2022</option>
        </select>
        <select name="day" id="day" required>
          <option selected>Chọn ngày</option>
          <option value="SG">Alo alo</option>
          <option value="19/10/202">19/10/2022</option>
          <option value="20/10/202">20/10/2022</option>
          <option value="21/10/202">21/10/2022</option>
        </select>
        <select name="time" id="time" required>
          <option selected>Chọn suất xem</option>
          <option value="SG">13h</option>
          <option value="19/10/202">19/10/2022</option>
          <option value="20/10/202">20/10/2022</option>
          <option value="21/10/202">21/10/2022</option>
        </select>
        <div className="btn-buy-ticket">
          <button type="submit">MUA VÉ</button>
        </div>
      </form>
    </div>
  );
}
