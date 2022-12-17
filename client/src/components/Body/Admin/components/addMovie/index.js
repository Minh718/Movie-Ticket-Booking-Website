import React, { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Spinner } from "reactstrap";
import { getAllMovies, insertMovie } from "../../../../../apiRequest";
import { url_database } from "../../../api";
import "./style.css";
export const AddMovie = () => {
  const [idMoviesInDb, setIdMoviesInDb] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoadding, setIsLoadding] = useState(false);
  const [movie, setMovie] = useState(null);
  const [isViewMovie, setIsViewMovie] = useState(false);
  const img_url = "http://image.tmdb.org/t/p/w500";
  const [query, setQuery] = useState("");
  const [isQuering, setIsQuering] = useState(false);
  const [casts, setCasts] = useState([]);
  const [info, setInfo] = useState(null);
  const { setOption } = useOutletContext();

  useEffect(() => {
    (async () => {
      const data = await getAllMovies();
      setIdMoviesInDb(data.map((item) => item.id));
    })();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const resCasts1 = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=14ccdb96456935bbb41591e99697d262`
      );
      const resInfo1 = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=14ccdb96456935bbb41591e99697d262`
      );
      const resInfo2 = await resInfo1.json();
      const resCasts2 = await resCasts1.json();
      setCasts(resCasts2.cast);
      setInfo(resInfo2);
    };

    if (movie) {
      fetchData();
    }
  }, [movie]);
  const handleAddMovie = async () => {
    if (isViewMovie) {
      try {
        await insertMovie({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          backdrop_path: movie.backdrop_path,
        });
        setQuery("");
        setIsViewMovie(false);
        setIdMoviesInDb([...idMoviesInDb, movie.id]);
        setOption({
          isOpen: true,
          text: "Thêm movie thành công",
          color: "#F96666",
        });
        // setMovie(null);
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    const fetchMovies = async () => {
      const parsedQuery = query.replaceAll(" ", "+");
      let res;
      if (query) {
        res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=14ccdb96456935bbb41591e99697d262&language=en-US&query=${parsedQuery}&page=1&include_adult=false`
        );
      } else {
        res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=14ccdb96456935bbb41591e99697d262&page=1`
        );
      }

      const resJson = await res.json();
      setMovies(
        resJson.results.filter((item) => !idMoviesInDb.includes(item.id))
      );
      setIsLoadding(false);
    };
    let myTimeOut;
    if ((query && !isViewMovie) || (!query && isQuering)) {
      setIsLoadding(true);
      myTimeOut = setTimeout(() => {
        fetchMovies();
      }, 300);
    } else if (!query && !isQuering) setMovies([]);
    return () => clearTimeout(myTimeOut);
  }, [query, isQuering]);
  return (
    <div className="container-add-movie" onClick={() => setIsQuering(false)}>
      <div className="add-movie-left">
        <h2>Thêm movie</h2>
        <p>Tìm kiếm phim</p>
        <div className="input-add-movie">
          <input
            placeholder="Nhập tên movie"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setMovie([]);
              setIsViewMovie(false);
            }}
            onClick={(e) => {
              setIsQuering(true);
              e.stopPropagation();
            }}
          />
          <button onClick={handleAddMovie}>Thêm movie</button>
          <div
            className="container-movies"
            onClick={(e) => e.stopPropagation()}
          >
            {!isLoadding ? (
              movies.length !== 0 ? (
                movies.map((movie1) => (
                  <div
                    onClick={() => {
                      setMovie(movie1);
                      setMovies([]);
                      setQuery(movie1.title);
                      setIsViewMovie(true);
                    }}
                    className="container-movie"
                    key={movie1.id}
                  >
                    <img src={img_url + movie1.backdrop_path} />
                    <div>{movie1.title}</div>
                  </div>
                ))
              ) : (
                query && !isViewMovie && <h1>Không tìm thấy dữ liệu</h1>
              )
            ) : (
              <div className="mySprinner">
                <Spinner
                  style={{
                    height: "3rem",
                    width: "3rem",
                  }}
                  type="grow"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="add-movie-right">
        {isViewMovie && (
          <>
            <div className="add-movie-right-top">
              <img src={img_url + movie.poster_path} />
              <div className="add-movie-right-top-right">
                <h3>{movie.title}</h3>
                <div>
                  <span>Diễn viên:</span>{" "}
                  {casts
                    ?.slice(0, 7)
                    ?.map((cast) => `${cast.name}`)
                    .join(", ")}
                </div>
                <div>
                  <span>Thể loại:</span>{" "}
                  {info?.genres?.map((genre) => `${genre.name}`).join(", ")}
                </div>
                <div>
                  <span>Quốc gia:</span>{" "}
                  {info?.production_countries
                    ?.map((country) => `${country.name}`)
                    .join(", ")}
                </div>
                <div>
                  <span>Quốc gia:</span>{" "}
                  {info?.production_companies
                    ?.map((company) => `${company.name}`)
                    .join(", ")}
                </div>
                <div>
                  <span>Ngày ra mắt:</span> {movie.release_date}
                </div>
              </div>
            </div>
            <div className="add_movie_right_bottom">
              <span>Nội dung film:</span> {info?.overview}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
