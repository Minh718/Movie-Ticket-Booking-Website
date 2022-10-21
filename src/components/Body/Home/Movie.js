import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopRatedMovies, img_url, fetchPopularMovies } from "../api";
const movieStore = [
  {
    id: "m1",
    url: "/images/movie1.jpg",
    name: "Kimetsu no Yaiba",
  },
  {
    id: "m2",
    url: "/images/movie2.jpg",
    name: "jujutsu kaisen",
  },
  {
    id: "m3",
    url: "/images/movie3.jpg",
    name: "Hero academy",
  },
  {
    id: "m4",
    url: "/images/movie4.jpg",
    name: "Your name",
  },
  {
    id: "m5",
    url: "/images/movie5.jpg",
    name: "Josee to Tora to Sakana-tachi",
  },
  {
    id: "m6",
    url: "/images/movie6.jpg",
    name: "Ame wo Tsugeru Hyouryuu Danchi",
  },
];

export default function Movie() {
  const [toggleFilm, setToggleFilm] = useState(false);
  const [premierMovies, setPremierMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(fetchTopRatedMovies(1));
      const res2 = await fetch(fetchPopularMovies(1));
      const data = await res.json();
      const data2 = await res2.json();
      setPopularMovies(data2.results.slice(0, 6));

      setPremierMovies(data.results.slice(0, 6));
    };
    fetchMovies();
  }, []);
  const movies = toggleFilm ? popularMovies : premierMovies;
  console.log(movies);
  return (
    <div className="movie-container">
      <span className={toggleFilm ? "movie-nav ative-movie-nav" : "movie-nav"}>
        <button
          className="btn-category-film"
          onClick={() => setToggleFilm(false)}
        >
          Phim đang chiếu
        </button>
        <button
          className="btn-category-film"
          onClick={() => setToggleFilm(true)}
        >
          Phim top rated
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
                <Link to="/booking" state={{ movie, movies }}>
                  MUA VÉ
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
