import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { deleteShow, getAllShows } from "../../../../../apiRequest";
import { Show } from "./Show";
import "./style.css";
export const Shows = () => {
  const [shows, setShows] = useState([]);
  const { setOption } = useOutletContext();
  useEffect(() => {
    (async () => {
      try {
        setShows(await getAllShows());
        // console.log(await getAllShows());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
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
  return (
    <div className="container_table_voucher" style={{ textAlign: "center" }}>
      <h1>Bảng show</h1>
      <table className="table_voucher">
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
          {shows.map((show) => (
            <Show
              key={show.idShow}
              show={show}
              handleDeleteShow={handleDeleteShow}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
