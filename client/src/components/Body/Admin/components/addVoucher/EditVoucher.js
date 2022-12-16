import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import moment from "moment";
import { insertVoucher, updateVoucher } from "../../../../../apiRequest";
import "./style.css";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
export const EditVoucher = () => {
  const voucher = useLocation().state?.voucher;
  const [endDate, setEndDate] = useState();
  const [suffix, setSuffix] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [point, setPoint] = useState("");
  const [maximum, setMaximum] = useState(null);
  const navigate = useNavigate();
  const { setOption } = useOutletContext();

  const handleSubmit = async () => {
    try {
      await updateVoucher({
        idVoucher: voucher.idVoucher,
        name,
        value,
        maximum,
        suffix,
        point,
        end_date: `${endDate.getFullYear()}-${
          endDate.getMonth() + 1
        }-${endDate.getDate()}`,
      });
      navigate("/adminPage/voucher");
      setOption({
        isOpen: true,
        text: "Sửa voucher thành công",
        color: "#ADE792",
      });
      // await insertVoucher({name, value, maximum, suffix, end_date: `${end_date.getFullYear}-${end_date.getMonth + 1}-${end_date.getDate}`})
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!voucher) {
      navigate("/adminPage/voucher");
    } else {
      setName(voucher.name);
      //   setEndDate(new Date(voucher.end_date));
      setEndDate(moment(voucher.end_date, "DD/MM/YYY").toDate());
      setMaximum(voucher.maximum);
      setValue(voucher.value);
      setPoint(voucher.point);
      setSuffix(voucher.suffix);
    }
  }, []);
  return (
    <div className="container-addVoucher">
      <h2>Sửa voucher</h2>
      <div>
        <label htmlFor="voucher" className="label-addVoucher">
          Tên mã giảm giá:
        </label>
        <input
          type="text"
          className="voucher"
          name="voucher"
          placeholder="Tên mã giảm giá"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="value-discount" className="label-addVoucher">
          Giảm:
        </label>
        <input
          type="number"
          placeholder="Giá trị giảm"
          className="value-discount"
          name="value-discount"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select
          value={suffix}
          onChange={(e) => setSuffix(e.target.value)}
          className="height-100"
        >
          <option value="k">k</option>
          <option value={"%"}>%</option>
        </select>
      </div>
      <div>
        <label htmlFor="value-discount" className="label-addVoucher">
          Giảm tối đa:
        </label>
        <input
          type="number"
          value={maximum}
          onChange={(e) => setMaximum(e.target.value)}
          className="value-discount"
          name="value-discount"
          placeholder="Số tiền giảm tối đa"
        />
        <div>k</div>
      </div>
      <div>
        <label htmlFor="value-discount" className="label-addVoucher">
          Số điểm đổi:
        </label>
        <input
          type="number"
          value={point}
          onChange={(e) => setPoint(e.target.value)}
          className="value-discount"
          name="value-discount"
          placeholder="Điểm đổi voucher"
        />
      </div>
      <div>
        <div className="lable-date">Ngày hết hạn</div>
        <DatePicker
          selected={endDate}
          minDate={new Date()}
          onChange={(date) => setEndDate(date)}
          placeholderText="Chọn ngày hết hạn"
          className="end-date-voucher"
        />
      </div>
      <button className="btn-discount" onClick={handleSubmit}>
        Lưu thây đổi
      </button>
      <button
        className="btn-discount"
        onClick={() => navigate("/adminPage/voucher")}
      >
        Hủy
      </button>
    </div>
  );
};
