import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function Profile() {
  return (
    <div className="container-profile">
      <div className="breadcrumb">
        <Link to={"/"} className="prev-bread">
          Trang chủ{" "}
        </Link>
        {">"}
        <Link className="current-bread"> Thông tin cá nhân</Link>
      </div>
      <div className="form-profile">
        <h2>Thông tin cá nhân</h2>
        <div className="control-info">
          <div className="one">
            <p>Họ và tên</p>
            <div className="input-div">Lò văn tèn</div>
          </div>
          <div className="two">
            <p>Điểm đổi thưởng</p>
            <div className="input-div">20</div>
          </div>
        </div>
        <div className="control-info">
          <div className="one">
            <p>Số Điện thoại</p>
            <div className="input-div">012345698</div>
          </div>
          <div className="two">
            <p>Giới tính</p>
            <div className="input-div">name</div>
          </div>
        </div>
        <div className="control-info">
          <div className="full">
            <p>Email</p>
            <div className="input-div">minhkuku@mguadfs</div>
          </div>
        </div>
        <div className="control-info">
          <div className="full">
            <p>Đổi mật khẩu</p>
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
        <button className="btn-save">lưu lại</button>
      </div>
    </div>
  );
}
