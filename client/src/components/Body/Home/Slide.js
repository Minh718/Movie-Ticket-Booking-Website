import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import { getAllShows, getMovieDates, getMovieHours } from "../../../apiRequest";
import { useGlobalContext } from "../../../context";
import { img_url } from "../api";
import "./index.css";

export default function Slide() {
  const { moviesArePlaying, user } = useGlobalContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [date, setDate] = useState(null);
  const [hour, setHour] = useState(null);

  const [dateOptions, setDateOptions] = useState([]);
  const [movieOptions, setMovieOptions] = useState([]);
  const [hourOptions, setHoursOptions] = useState([]);
  const [price, setPrice] = useState([]);
  const [movie, setMovie] = useState(null);
  const [show, setShow] = useState(null);

  const [canPlaceTicket, setCanPlaceTicket] = useState(false);

  useEffect(() => {
    const fetchShows = async () => {
      const resShows = await getAllShows();
      setMovieOptions(
        resShows.map((show) => ({
          value: {
            idShow: show.idShow,
            price: show.price,
            idMovie: show.idMovie,
          },
          label: show.title,
        }))
      );
    };
    fetchShows();
  }, []);

  useEffect(() => {
    const fetchDates = async () => {
      const resDates = await getMovieDates(show.idShow);
      setDateOptions(
        resDates.map((date) => ({
          value: {
            dateShow: date.dateShow,
            dateShowRender: date.dateShowRender,
          },
          label: date.dateShowRender,
        }))
      );
    };
    if (show) {
      fetchDates();
    }
  }, [show]);
  useEffect(() => {
    const fetchHours = async () => {
      const resHours = await getMovieHours({
        idShow: show.idShow,
        dateShow: date.dateShow,
      });
      setHoursOptions(
        resHours.map((hour) => ({
          value: hour.hour,
          label: hour.hour,
        }))
      );
    };
    if (date) {
      fetchHours();
    }
  }, [date]);

  const movies = moviesArePlaying.slice(0, 7);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === movies.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? movies.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = movies.map((movie) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={movie.id}
      >
        <img src={img_url + movie.backdrop_path} />
        <CarouselCaption captionText="" captionHeader={movie?.title} />
      </CarouselItem>
    );
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="slider-container">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={movies}
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

      <form
        className="quick-booking"
        action="/historyTicket"
        onSubmit={handleSubmitForm}
      >
        <span>MUA VÉ NHANH</span>
        <Select
          name="movie"
          id="movie"
          className="select_tag"
          placeholder="Chọn film"
          options={movieOptions}
          onChange={(e) => {
            setShow(e.value);
          }}
        />
        <Select
          name="date"
          id="date"
          className="select_tag"
          placeholder="Chọn ngày"
          options={dateOptions}
          onChange={(e) => {
            setDate(e.value);
          }}
        />
        <Select
          name="time"
          id="time"
          className="select_tag"
          placeholder="Chọn ngày"
          options={hourOptions}
          onChange={(e) => {
            setCanPlaceTicket(true);
            setHour(e.value);
          }}
        />
        <div className="btn-buy-ticket">
          {canPlaceTicket == true ? (
            <Link
              to="/seatSelection"
              className="orange-btn"
              color="black"
              state={{
                show,
                idMovie: show.idMovie,
                hour: hour,
                date: date,
              }}
            >
              Mua vé
            </Link>
          ) : (
            <button to="/" className="orange-btn" color="black" disabled>
              Mua vé
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
