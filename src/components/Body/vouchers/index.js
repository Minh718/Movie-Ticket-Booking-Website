import React from "react";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { Link } from "react-router-dom";

import "./style.css";
export default function Vouchers() {
  return (
    <div className="page-voucher">
      <Breadcrumb listTag="div">
        <BreadcrumbItem>
          <Link to={"/"}>Trang chủ</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          Vouchers
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="form-profile">
        <h2>Đổi voucher</h2>
        <div>Số điểm hiện tại của bạn là 26</div>
        <table className="table-voucher">
          <tr>
            <th>Tên voucher</th>
            <th>Số điểm cần</th>

            <th>Action</th>
          </tr>
          <tr>
            <td>Giảm 10k cho thanh toán hơn 100k</td>
            <td>20</td>

            <td>
              <Button color="success">Đổi voucher</Button>
            </td>
          </tr>
          <tr>
            <td>Giảm 10% khi đặt 3 vé trở lên (tối đa 20k)</td>
            <td>30</td>
            <td>
              <Button color="danger">Đổi voucher</Button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
