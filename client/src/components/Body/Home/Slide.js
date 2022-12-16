import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselCaption,
} from "reactstrap";
import Select from "react-select";
import { useGlobalContext } from "../../../context";
import "./index.css";
import { img_url } from "../api";
import { getAllShows,getMovieDates, getMovieDateHours} from "../../../apiRequest";
import axios from "axios";
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
  const { moviesArePlaying,user } = useGlobalContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [idMovie, setIdMovie] = useState(null); 
  const [date, setDate] = useState(null); 
  const [hour, setHour] = useState(null); 

  const [dateOptions, setDateOptions] = useState([]);
  const [movieOptions, setMovieOptions] = useState([]);
  const [hourOptions, setHoursOptions] = useState([]);

  const [movie, setMovie] = useState(null);
  const [show, setShow] = useState(null);

  const [canPlaceTicket,setCanPlaceTicket] = useState(false)

  useEffect(() => {
    const fetchShows = async () => {
      const resShows = await await getAllShows();
      setMovieOptions(
        resShows.map((show) => ({
          value: show.idMovie,
          label: show.title,
        }))
      );
    };
    fetchShows();
  }, []);

  useEffect(() => {
    const fetchDates = async () => {
      const resDates = await getMovieDates(idMovie);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${idMovie}?api_key=14ccdb96456935bbb41591e99697d262`
      );
      const resShow = await axios.get(`/movies/${idMovie}/show`);
      setShow(resShow.data[0]);
      const jsonMoive = await res.json();
      setMovie(jsonMoive);

      setDateOptions(
        resDates.map((date) => ({
          value: date.dateShow,
          label: date.dateShow,
        }))
      );
    };
    if (idMovie){
      fetchDates();
    }
  }, [idMovie]);

  useEffect(() => {
    const fetchHours = async () => {
      const resHours = await getMovieDateHours(idMovie,date);
      setHoursOptions(
        resHours.map((hour) => ({
          value: hour.hour,
          label: hour.hour,
        }))
      );
    };
    if (date){
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
  }
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

      <form className="quick-booking" action="/historyTicket" onSubmit={handleSubmitForm}>
        <span>MUA VÉ NHANH</span>
        <Select name="movie" id="movie" className = "select_tag"
                  placeholder="Chọn film"
                  options={movieOptions}
                  onChange={(e) => {
                    setIdMovie(e.value);
                  }}
                />
        <Select name="date" id="date" className = "select_tag"
                  placeholder="Chọn ngày"
                  options={dateOptions}
                  onChange={(e) => {
                    setDate(e.value);
                  }}
                />
        <Select name="time" id="time" className = "select_tag"
                  placeholder="Chọn giờ"
                  options={hourOptions}
                  onChange={(e) => {
                    setCanPlaceTicket(true);
                    setHour(e.value);
                  }}
                />   
        <div className="btn-buy-ticket">
          { canPlaceTicket === true ? 
              <Link
                    to="/seatSelection"
                    className="orange-btn"
                    color="black"
                    state={{
                      show,
                      movie,
                      hour: hour,
                      date: date,
                    }}
                  >
                    Mua vé
                  </Link>:
            <Link
                  to="/"
                  className="orange-btn"
                  color="black"
                  state={{
                    show,
                    movie,
                    hour: hour,
                    date: date,
                  }}
                >
                  Mua vé
                </Link>
          }

        </div>
      </form>
    </div>
  );
}
