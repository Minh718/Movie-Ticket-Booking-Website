import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import {
  deleteMovie,
  deleteShow,
  getAllMovies,
} from "../../../../../apiRequest";
import { url_img } from "../../../api";
import "./style.css";
export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const { setOption } = useOutletContext();
  useEffect(() => {
    (async () => {
      try {
        setMovies(await getAllMovies());
        // console.log(await getAllMovies());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const handleDeleteMovie = async (id) => {
    try {
      await deleteMovie(id);
      setMovies(movies.filter((movie) => movie.id !== id));
      setOption({
        isOpen: true,
        text: "Xóa movie thành công",
        color: "#D2001A",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container_table_voucher" style={{ textAlign: "center" }}>
      <h1>Bảng quản lý movies</h1>
      <table className="table_voucher">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên movie</th>
            {/* <th>Poster movie</th> */}
            <th>Backdrop movie</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr>
              <td>{movie.id}</td>
              <td>{movie?.title}</td>
              {/* <td>
                <img
                  src={url_img + movie?.poster_path}
                  className="img_poster_show"
                />
              </td> */}
              <td>
                <img
                  src={url_img + movie?.backdrop_path}
                  className="img_poster_show"
                />
              </td>
              <td>
                <div style={{ padding: "5px", cursor: "pointer" }}>
                  <FaTrashAlt onClick={() => handleDeleteMovie(movie.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
