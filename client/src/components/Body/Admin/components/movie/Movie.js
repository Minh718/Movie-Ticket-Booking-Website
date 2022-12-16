import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import "./style.css";
export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoadding, setIsLoadding] = useState(false);
  const img_url = "http://image.tmdb.org/t/p/w500";
  const [query, setQuery] = useState("a");
  useEffect(() => {
    const fetchMovies = async () => {
      const parsedQuery = query.replaceAll(" ", "+");
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=14ccdb96456935bbb41591e99697d262&language=en-US&query=${parsedQuery}&page=1&include_adult=false`
      );
      const resJson = await res.json();
      // console.log(resJson);
      setMovies(resJson.results);
    };

    fetchMovies();
  }, [query]);
  return (
    <div className="wrap-">
      {isLoadding ? (
        <div
          className="container-single-movie"
          style={{ justifyContent: "center" }}
        >
          <Spinner>Loading...</Spinner>
        </div>
      ) : query.length !== 0 && movies.length === 0 ? (
        <div
          className="container-single-movie"
          style={{ justifyContent: "center" }}
        >
          <h3>Không tìm thấy kết quả</h3>
        </div>
      ) : (
        <div className="all-movie">
          {movies?.map((movie) => (
            <div key={movie.id} className="container-single-movie">
              <div>
                <p className="title-movie">{movie.title}</p>
                <p>{movie.release_date}</p>
              </div>
              <div className="container-img">
                <img className="movie-img" src={img_url + movie.poster_path} alt='movie-img'></img>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
