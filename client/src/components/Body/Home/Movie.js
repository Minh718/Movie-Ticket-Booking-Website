import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import {
  fetchUpcomingMovies,
  img_url,
  fetchPopularMovies,
  url_database,
} from "../api";
import sliderSettings from "./Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
export default function Movie() {
  const { moviesArePlaying, setMoviesArePlaying } = useGlobalContext();
  const [canPlaceTicket, setCanPlaceTicket] = useState(true);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const resUpcongming = await fetch(fetchUpcomingMovies(1));
      // const resPlaying = await fetch(fetchPopularMovies(1));
      const resPlaying = await axios.get(`${url_database}/movies`);

      const dataUpcongming = await resUpcongming.json();
      // const dataPlaying = await resPlaying.json();
      setMoviesArePlaying(resPlaying.data);

      setUpcomingMovies(dataUpcongming.results);
    };
    fetchMovies();
  }, []);
  const movies = canPlaceTicket ? moviesArePlaying : upcomingMovies;
  return (
    <div className="movie-container">
      <span
        className={!canPlaceTicket ? "movie-nav ative-movie-nav" : "movie-nav"}
      >
        <button
          className="btn-category-film"
          onClick={() => setCanPlaceTicket(true)}
        >
          PHIM ĐANG CHIẾU
        </button>
        <button
          className="btn-category-film"
          onClick={() => setCanPlaceTicket(false)}
        >
          PHIM SẮP CHIẾU
        </button>
      </span>
      {/* <div className="movie-store"> */}
      <Slider {...sliderSettings}>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <div className="movie">
                <div className="movie-img">
                  <img src={img_url + movie.poster_path} alt="" />
                </div>
                <div className="booking">
                  {/* <Link to={`/detailMovie/${movie.id}`}>MUA VÉ</Link> */}
                  <Link
                    to="/booking"
                    className={!canPlaceTicket ? "viewDetail" : undefined}
                    state={{ idMovie: movie.id, canPlaceTicket }}
                  >
                    {canPlaceTicket ? "MUA VÉ" : "Xem Nội dung"}
                  </Link>
                </div>
              </div>
              <div className="namefilm">{movie.title}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
