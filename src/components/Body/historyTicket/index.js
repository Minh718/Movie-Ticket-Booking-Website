import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function HistoryTicket() {
  return (
    <div className="container-profile">
      <div className="breadcrumb">
        <Link to={"/"} className="prev-bread">
          Trang chủ{" "}
        </Link>
        {">"}
        <Link className="current-bread"> Lịch sử giao dịch</Link>
      </div>
      <div className="form-profile">
        <h2>Thông tin cá nhân</h2>
        <table className="table-ticket">
          {/* <thead> */}
          <tr>
            <th>Ngày</th>
            <th>Số giao dịch</th>
            <th>Giá</th>
            <th>Phim</th>
            <th>Mã vé</th>
          </tr>
          {/* </thead> */}
          <tr>
            <td>20-12-2020</td>
            <td>34</td>
            <td>59.000đ</td>
            <td>film red</td>
            <td>KTLDM</td>
          </tr>
          <tr>
            <td>30-10-1945</td>
            <td>93</td>
            <td>989999 triệu</td>
            <td>phim nhí</td>
            <td>KTLDM</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
