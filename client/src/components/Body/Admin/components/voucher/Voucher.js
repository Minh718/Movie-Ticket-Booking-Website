import React, { useEffect, useState } from "react";
import { deleteVoucherById, getAllVouchers } from "../../../../../apiRequest";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./style.css";
export const Voucher = () => {
  const navigate = useNavigate();
  const [vouchers, setVouchers] = useState([]);
  const { setOption } = useOutletContext();
  useEffect(() => {
    (async () => {
      try {
        setVouchers(await getAllVouchers());
        // console.log(await getAllVouchers());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const handleDeleteVoucher = async (idVoucher) => {
    try {
      await deleteVoucherById(idVoucher);
      setVouchers(
        vouchers.filter((voucher) => voucher.idVoucher !== idVoucher)
      );
      setOption({
        isOpen: true,
        text: "Xóa voucher thành công",
        color: "#CB1C8D",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container_table_voucher">
      <h1>Bảng voucher</h1>
      <table className="table_voucher">
        <thead>
          <tr>
            <th>Mã</th>
            <th>Voucher</th>
            <th>Giá trị</th>
            <th>Tối đa</th>
            <th>Điểm</th>
            <th>Ngày bắt dầu</th>
            <th>Ngày kết thúc</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vouchers.map((voucher) => (
            <tr key={voucher.idVoucher}>
              <td>{voucher.idVoucher}</td>
              <td>{voucher.name}</td>
              <td>{voucher.value + voucher.suffix}</td>
              <td>{voucher.maximum}k</td>
              <td>{voucher.point}</td>
              <td>{voucher.start_date} 00:00:00</td>
              <td>{voucher.end_date} 23:59:59</td>
              <td className="container-btns">
                <button
                  onClick={() =>
                    navigate("/adminPage/editVoucher", { state: { voucher } })
                  }
                >
                  <FaEdit />
                </button>
                <button onClick={() => handleDeleteVoucher(voucher.idVoucher)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
