import React from "react";
import "./style.css";
import { FaGreaterThan, FaTh, FaPaypal, FaCheckCircle } from "react-icons/fa";
export default function BreadcrumbPayment({ index }) {
  return (
    <div className="containerBCP">
      <div className={index === 1 ? "active-text-BCP text-BCP" : "text-BCP"}>
        {" "}
        <FaTh /> Chọn ghế
      </div>
      <div>
        <FaGreaterThan style={{ fontSize: "22px" }} />
      </div>
      <div className={index === 2 ? "active-text-BCP text-BCP" : "text-BCP"}>
        <FaPaypal /> Thanh toán
      </div>
      <div>
        <FaGreaterThan style={{ fontSize: "22px" }} />
      </div>
      <div className={index === 3 ? "active-text-BCP text-BCP" : "text-BCP"}>
        <FaCheckCircle /> Thông tin vé
      </div>
    </div>
  );
}
