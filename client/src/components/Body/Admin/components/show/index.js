import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { deleteShow, getAllShows } from "../../../../../apiRequest";
import { Show } from "./Show";
import ReactPaginate from "react-paginate";

import "./style.css";
export const Shows = () => {
  const [slidedShows, setSlicedShow] = useState([]);

  const [shows, setShows] = useState([]);
  const { setOption } = useOutletContext();

  //paginate
  const [index, setIndex] = useState(0);
  const [numbersPerPage, setNumberPerPage] = useState(5);
  const [countPages, setCountPage] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        // setShows(await getAllShows());
        const res = await getAllShows();
        setShows(res);
        setSlicedShow(res.slice(0, numbersPerPage));
        setCountPage(Math.ceil(res.length / numbersPerPage));
        // console.log(await getAllShows());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const handleAddNPP = (e) => {
    setNumberPerPage(e.target.value);

    const pages = Math.ceil(shows.length / e.target.value);
    setCountPage(pages);
    if (pages - 1 < index) {
      setIndex(pages - 1);
      setSlicedShow(
        shows.slice((pages - 1) * e.target.value, pages * e.target.value)
      );
    } else {
      setSlicedShow(
        shows.slice(index * e.target.value, (index + 1) * e.target.value)
      );
    }
  };
  const handleDeleteShow = async (showID) => {
    try {
      await deleteShow({ showID });
      setShows(shows.filter((show) => show.idShow !== showID));
      setOption({
        isOpen: true,
        text: "Xóa show thành công",
        color: "#EB6440",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handlePageClick = (e) => {
    console.log("??");
    setIndex(e.selected);
    setSlicedShow(
      shows.slice(
        e.selected * numbersPerPage,
        (e.selected + 1) * numbersPerPage
      )
    );
  };
  return (
    <div className="container_table_voucher" style={{ textAlign: "center" }}>
      <h1>Bảng quản lý show</h1>
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
            <th>Poster movie</th>
            <th>Giá</th>
            <th>Phòng</th>
            <th>Actions</th>
            <th>Đặt lịch</th>
          </tr>
        </thead>
        <tbody>
          {slidedShows.map((show) => (
            <Show
              key={show.idShow}
              show={show}
              handleDeleteShow={handleDeleteShow}
            />
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
