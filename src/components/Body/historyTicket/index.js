import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";

export default function HistoryTicket() {
  return (
    <div className="container-profile">
      <Breadcrumb listTag="div">
        <BreadcrumbItem>
          <Link to={"/"}>Trang chủ</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          Lịch sử giao dịch
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="form-profile">
        <h2>Thông tin cá nhân</h2>
        <table className="table-ticket">
          <tr>
            <th>Ngày</th>
            <th>Số giao dịch</th>
            <th>Giá</th>
            <th>Phim</th>
            <th>Mã vé</th>
          </tr>
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
