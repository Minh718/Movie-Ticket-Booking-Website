import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
export default function Profile() {
  return (
    <div className="container-profile">
      <Breadcrumb listTag="div">
        <BreadcrumbItem>
          <Link to={"/"}>Trang chủ</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          Thông tin cá nhân
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="form-profile">
        <h2>Thông tin cá nhân</h2>
        <div className="control-info">
          <div className="one">
            <span>Họ và tên</span>
            <div className="input-div">Lò văn tèn</div>
          </div>
          <div className="two">
            <span>Điểm đổi thưởng</span>
            <div className="input-div">20</div>
          </div>
        </div>
        <div className="control-info">
          <div className="one">
            <span>Số Điện thoại</span>
            <div className="input-div">012345698</div>
          </div>
          <div className="two">
            <span>Giới tính</span>
            <div className="input-div">name</div>
          </div>
        </div>
        <div className="control-info">
          <div className="full">
            <span>Email</span>
            <div className="input-div">minhkuku@mguadfs</div>
          </div>
        </div>
        <div className="control-info">
          <div className="full">
            <span>Đổi mật khẩu</span>
            <input
              type="text"
              className="input-div"
              placeholder="Nhập mật khẩu cũ"
            />
            <input
              type="text"
              className="input-div"
              placeholder="Nhập mật khẩu mới"
            />
            <input
              type="text"
              className="input-div"
              placeholder="Xác nhận mật khẩu"
            />
          </div>
        </div>
        <Button color="primary">Lưu lại</Button>
      </div>
    </div>
  );
}
