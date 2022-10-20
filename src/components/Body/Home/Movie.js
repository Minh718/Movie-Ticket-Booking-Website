import React from "react";

export default function Movie({ movie }) {
  return (
    <div className="movie">
      <div className="movie-img">
        <img src={process.env.PUBLIC_URL + movie.url} alt="" />
      </div>
      <div className="booking">
        <a href="#">MUA VÉ</a>
      </div>
      <span>{movie.name}</span>
    </div>
  );
}
