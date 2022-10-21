import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          Phim sắp chiếu
        </button>
      </span>
      <div className="movie-store">
        {movieStore.map((movie, index) => {
          return (
            <div className="movie" key={index}>
              <div className="movie-img">
                <img src={process.env.PUBLIC_URL + movie.url} alt="" />
              </div>
              <div className="booking">
                <Link href="/">MUA VÉ</Link>
              </div>
              <div className="namefilm">{movie.name}</div>
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
