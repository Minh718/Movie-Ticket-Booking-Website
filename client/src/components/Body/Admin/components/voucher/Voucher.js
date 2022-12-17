import React, { useEffect, useState } from "react";
import { deleteVoucherById, getAllVouchers } from "../../../../../apiRequest";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useNavigate, useOutletContext } from "react-router-dom";
import ReactPaginate from "react-paginate";

import "./style.css";
export const Voucher = () => {
  const navigate = useNavigate();
  const [vouchers, setVouchers] = useState([]);
  const { setOption } = useOutletContext();

  const [slicedVouchers, setSlicedVoucher] = useState([]);

  const [index, setIndex] = useState(0);
  const [numbersPerPage, setNumberPerPage] = useState(5);
  const [countPages, setCountPage] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        // setVouchers(await getAllVouchers());
        const res = await getAllVouchers();
        setVouchers(res);
        setSlicedVoucher(res.slice(0, numbersPerPage));
        setCountPage(Math.ceil(res.length / numbersPerPage));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const handleAddNPP = (e) => {
    setNumberPerPage(e.target.value);

    const pages = Math.ceil(vouchers.length / e.target.value);
    setCountPage(pages);
    if (pages - 1 < index) {
      setIndex(pages - 1);
      setSlicedVoucher(
        vouchers.slice((pages - 1) * e.target.value, pages * e.target.value)
      );
    } else {
      setSlicedVoucher(
        vouchers.slice(index * e.target.value, (index + 1) * e.target.value)
      );
    }
  };
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
  const handlePageClick = (e) => {
    console.log("??");
    setIndex(e.selected);
    setSlicedVoucher(
      vouchers.slice(
        e.selected * numbersPerPage,
        (e.selected + 1) * numbersPerPage
      )
    );
  };
  return (
    <div className="container_table_voucher">
      <h1>Bảng voucher</h1>
      <div className="table_voucher text-left">
        Số movie mỗi trang
        <select
          className="sellect_number_per_page"
          value={numbersPerPage}
          onChange={handleAddNPP}
        >
          <option value={8}>8</option>
          <option value={16}>16</option>
          <option value={24}>24</option>
        </select>
      </div>
      <table className="table_voucher mt-0">
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
          {slicedVouchers.map((voucher) => (
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
