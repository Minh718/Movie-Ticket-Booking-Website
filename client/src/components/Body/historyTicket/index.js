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
      <div className="table-tickets">
        <h2>Lịch sử giao dịch</h2>
        <table className="table-ticket">
          <tr>
            <th>Ngày</th>
            <th>Giờ</th>
            <th>Giá</th>
            <th>Phim</th>
            <th>qrcode</th>
          </tr>
          <tr>
            <td>20-12-2020</td>
            <td>8:00</td>
            <td>59.000đ</td>
            <td>film red</td>
            <td>
              <img
                className="img-qrcode"
                src="https://www.qrcode-gen.com/images/qrcode-default.png"
              />
            </td>
          </tr>
          <tr>
            <td>30-10-1945</td>
            <td>12:00</td>

            <td>98999đ</td>
            <td>phim nhím</td>
            <td>
              <img
                className="img-qrcode"
                src="https://www.qrcode-gen.com/images/qrcode-default.png"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
