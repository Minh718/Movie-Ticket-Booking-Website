import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopRatedMovies, img_url } from "../api";
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
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(fetchTopRatedMovies(1));
      const data = await res.json();
      setMovies(data.results.slice(0, 6));
      // console.log(data.results.slice(0, 6));
    };
    fetchMovies();
  });
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
        {movies.map((movie, index) => {
          return (
            <div className="movie" key={movie.id}>
              <div className="movie-img">
                <img src={img_url + movie.backdrop_path} alt="" />
              </div>
              <div className="booking">
                <Link href="/detailMovie">MUA VÉ</Link>
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
