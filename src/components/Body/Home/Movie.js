import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import { fetchUpcomingMovies, img_url, fetchPopularMovies } from "../api";

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
      setMoviesArePlaying(data2.results.slice(0, 6));

      setUpcomingMovies(data.results.slice(0, 6));
    };
    fetchMovies();
  }, []);
  const movies = canPlaceTicket ? moviesArePlaying : upcomingMovies;
  console.log(movies);
  return (
    <div className="movie-container">
      <span
        className={!canPlaceTicket ? "movie-nav ative-movie-nav" : "movie-nav"}
      >
        <button
          className="btn-category-film"
          onClick={() => setCanPlaceTicket(true)}
        >
          Công chiếu tại rạp
        </button>
        <button
          className="btn-category-film"
          onClick={() => setCanPlaceTicket(false)}
        >
          Phim sắp công chiếu
        </button>
      </span>
      <div className="movie-store">
        {movies.map((movie) => {
          return (
            <div className="movie" key={movie.id}>
              <div className="movie-img">
                <img src={img_url + movie.backdrop_path} alt="" />
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
              <div className="namefilm">{movie.title}</div>
            </div>
          );
        })}
      </div>
      <Link to="/movies" class="more-movies-wraper">
        <button className="more-movies">XEM THÊM</button>
      </Link>
    </div>
  );
}
