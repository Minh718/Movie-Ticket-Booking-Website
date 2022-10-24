import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import { fetchUpcomingMovies, img_url, fetchPopularMovies } from "../api";
import sliderSettings from "./Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Movie() {
  const { moviesArePlaying, setMoviesArePlaying } = useGlobalContext();
  const [canPlaceTicket, setCanPlaceTicket] = useState(true);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(fetchUpcomingMovies(1));
      const res2 = await fetch(fetchPopularMovies(1));
      const data = await res.json();
      const data2 = await res2.json();
      setMoviesArePlaying(data2.results);

      setUpcomingMovies(data.results);
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
            <>
              <div className="movie" key={movie.id}>
                <div className="movie-img">
                  <img src={img_url + movie.poster_path} alt="" />
                </div>
                <div className="booking">
                  {/* <Link to={`/detailMovie/${movie.id}`}>MUA VÉ</Link> */}
                  <Link
                    to="/booking"
                    className={!canPlaceTicket && "viewDetail"}
                    state={{ movie, canPlaceTicket }}
                  >
                    {canPlaceTicket ? "MUA VÉ" : "Xem Nội dung"}
                  </Link>
                </div>
              </div>
              <div className="namefilm">{movie.title}</div>
            </>
          );
        })}
      </Slider>
    </div>
  );
}
