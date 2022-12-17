import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import { deleteMovie, getAllMovies } from "../../../../../apiRequest";
import ReactPaginate from "react-paginate";

import { url_img } from "../../../api";
import "./style.css";
export const Movie = () => {
  const [slicedMovies, setSlicedMovies] = useState([]);
  const { setOption } = useOutletContext();

  //paginate
  const [index, setIndex] = useState(0);
  const [numbersPerPage, setNumberPerPage] = useState(5);
  const [countPages, setCountPage] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getAllMovies();
        setMovies(res);
        setSlicedMovies(res.slice(0, numbersPerPage));
        setCountPage(Math.ceil(res.length / numbersPerPage));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const handleAddNPP = (e) => {
    setNumberPerPage(e.target.value);

    const pages = Math.ceil(movies.length / e.target.value);
    setCountPage(pages);
    if (pages - 1 < index) {
      setIndex(pages - 1);
      setSlicedMovies(
        movies.slice((pages - 1) * e.target.value, pages * e.target.value)
      );
    } else {
      setSlicedMovies(
        movies.slice(index * e.target.value, (index + 1) * e.target.value)
      );
    }
  };
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
  const handlePageClick = (e) => {
    console.log("??");
    setIndex(e.selected);
    setSlicedMovies(
      movies.slice(
        e.selected * numbersPerPage,
        (e.selected + 1) * numbersPerPage
      )
    );
  };
  return (
    <div className="container_table_voucher" style={{ textAlign: "center" }}>
      <h1>Bảng quản lý movies</h1>
      <div className="table_voucher text-left">
        Số movie mỗi trang
        <select
          className="sellect_number_per_page"
          value={numbersPerPage}
          onChange={handleAddNPP}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
      <table className="table_voucher mt-0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên movie</th>
            <th>Backdrop movie</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {slicedMovies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie?.title}</td>
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
      <div className="table_voucher">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          forcePage={index}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={countPages}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          containerClassName="phantrangadmin"
        />
      </div>
    </div>
  );
};
