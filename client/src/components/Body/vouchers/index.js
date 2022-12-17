import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import {
  convertVoucher,
  getAllUserVouchers,
  getAllVouchersLeft,
} from "../../../apiRequest";
import { useGlobalContext } from "../../../context";
import "./style.css";
export default function Vouchers() {
  const navigate = useNavigate();
  const [vouchers, setVouchers] = useState([]);
  const [userVouchers, setUserVouchers] = useState(null);
  const { user, setUser } = useGlobalContext();
  const handleConvertVoucher = async (voucher) => {
    if (user.point >= voucher.point) {
      try {
        await convertVoucher({
          idUser: user.idUser,
          idVoucher: voucher.idVoucher,
          point: voucher.point,
        });
        setVouchers(
          vouchers.filter(
            (voucher1) => voucher1.idVoucher !== voucher.idVoucher
          )
        );
        setUserVouchers([...userVouchers, voucher]);
        setUser({ ...user, point: user.point - voucher.point });
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    (async () => {
      setVouchers(await getAllVouchersLeft(user.idUser));
      setUserVouchers(await getAllUserVouchers(user.idUser));
    })();
  }, []);
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
        <div>Số điểm hiện tại của bạn là {user.point}</div>
        <table className="table-voucher-user">
          <tr>
            <th>Tên voucher</th>
            <th>Số điểm cần</th>
            <th>Hạn sử dụng</th>

            <th>Action</th>
          </tr>
          {userVouchers?.map((voucher) => (
            <tr key={voucher.idVoucher}>
              <td>
                Giảm {voucher.value + voucher.suffix} cho {voucher.name}{" "}
                {voucher.suffix === "%" && `(Tối đa ${voucher.maximum}k )`}
              </td>
              <td>{voucher.point}</td>
              <td>{voucher.end_date}</td>
              <td>
                <button
                  onClick={() => navigate("/")}
                  className="btn-voucher-user"
                >
                  Sử dụng
                </button>
              </td>
            </tr>
          ))}
          {vouchers.map((voucher) => (
            <tr key={voucher.idVoucher}>
              <td>
                Giảm {voucher.value + voucher.suffix} cho {voucher.name}{" "}
                {voucher.suffix === "%" && `(Tối đa ${voucher.maximum}k )`}
              </td>
              <td>{voucher.point}</td>
              <td>{voucher.end_date}</td>
              <td>
                <button
                  className={
                    user.point >= voucher.point
                      ? "btn-can-convert"
                      : "btn-not-convert"
                  }
                  onClick={() => handleConvertVoucher(voucher)}
                >
                  Đổi voucher
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
