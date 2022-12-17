import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { img_url } from "../api";
import "./style.css";
export default function DetailMovie() {
  const [casts, setCasts] = useState([]);
  const [infoMovie, setInfoMovie] = useState({});
  const [reviewMovies, setReviewMovies] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    const fetchData = async () => {
      const resCasts = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=14ccdb96456935bbb41591e99697d262`
      );
      const resInfo = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=14ccdb96456935bbb41591e99697d262`
      );
      const resReviews = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=14ccdb96456935bbb41591e99697d262`
      );
      const dataCasts = await resCasts.json();
      const dataInfo = await resInfo.json();
      const dataReviews = await resReviews.json();
      setCasts(dataCasts.cast);
      setInfoMovie(dataInfo);
      setReviewMovies(dataReviews.results);
    };
    fetchData();
  }, []);
  //   console.log(casts, infoMovie, reviewMovies);
  return (
    <div className="detail-movie">
      <div className="header-movie">
        <div className="header-left">
          <img src={img_url + infoMovie.poster_path} />
        </div>
        <div className="header-right">
          <h1>{infoMovie.original_title}</h1>
          <p>
            <span className="bold">Overview:</span> {infoMovie.overview}
          </p>
          <p>
            <span className="bold">Movie Released Date:</span>{" "}
            {infoMovie.release_date}
          </p>
          <p>
            <span className="bold">Genre:</span>{" "}
            {infoMovie?.genres?.map((genre) => (
              <span className="genre" key={genre.id}>
                {genre.name}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
