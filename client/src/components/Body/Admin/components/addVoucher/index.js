import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { insertVoucher } from "../../../../../apiRequest";
import "./style.css";
import moment from "moment";
import { useOutletContext } from "react-router-dom";
export const AddVoucher = () => {
  const [endDate, setEndDate] = useState(null);
  const [suffix, setSuffix] = useState("k");
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [point, setPoint] = useState("");
  const [maximum, setMaximum] = useState(0);
  const { setOption } = useOutletContext();
  const handleSubmit = async () => {
    try {
      console.log(
        name,
        value,
        maximum,
        suffix,
        point,
        moment(endDate).format("YYYY-MM-DD")
      );
      await insertVoucher({
        name,
        value,
        maximum,
        suffix,
        point,
        end_date: moment(endDate).format("YYYY-MM-DD"),
        // end_date: `${endDate.getFullYear()}-${
        //   endDate.getMonth() + 1
        // }-${endDate.getDate()}`,
      });
      setEndDate(null);
      setName("");
      setValue("");
      setPoint("");
      setMaximum(0);
      setOption({
        isOpen: true,
        text: "Thêm voucher thành công",
        color: "#C689C6",
      });
      // await insertVoucher({name, value, maximum, suffix, end_date: `${end_date.getFullYear}-${end_date.getMonth + 1}-${end_date.getDate}`})
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-addVoucher">
      <h2>Thêm voucher</h2>
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
          onChange={(e) => {
            setSuffix(e.target.value);
            e.target.value === "k" && setMaximum(0);
          }}
          className="height-100"
        >
          <option value="k">k</option>
          <option value={"%"}>%</option>
        </select>
      </div>
      {suffix === "%" && (
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
      )}
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
        Thêm discount
      </button>
    </div>
  );
};
