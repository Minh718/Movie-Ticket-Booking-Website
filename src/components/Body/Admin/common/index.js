import "./index.css";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useGlobalContext } from "../../../../context";
import { useNavigate } from "react-router-dom";
function Common({ children }) {
  const navigate = useNavigate();
  const { openBar } = useGlobalContext();
  const [index, setIndex] = useState(0);
  return (
    <div class="admin-page">
      <div className={openBar ? "left-page" : "left-page move-left-page"}>
        <div
          className="accordion"
          onClick={() => (index !== 1 ? setIndex(1) : setIndex(0))}
        >
          Khách hàng
          {index === 1 ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        <div className={index === 1 ? "click-down active" : "click-down"}>
          Thêm admin
        </div>
        <div
          className={index === 1 ? "click-down active" : "click-down"}
          onClick={() => navigate("/admin-page/client")}
        >
          Danh sách khách hàng
        </div>
        <div
          className="accordion"
          onClick={() => (index !== 2 ? setIndex(2) : setIndex(0))}
        >
          Movies
          {index === 2 ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        <div className={index === 2 ? "click-down active" : "click-down"}>
          Thêm movie
        </div>
        <div className={index === 2 ? "click-down active" : "click-down"}>
          Danh sách movie
        </div>
        <div
          className="accordion"
          onClick={() => (index !== 3 ? setIndex(3) : setIndex(0))}
        >
          Articles
          {index === 3 ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        <div className={index === 3 ? "click-down active" : "click-down"}>
          Thêm article
        </div>
        <div className={index === 3 ? "click-down active" : "click-down"}>
          Danh sách articles
        </div>
        <div
          className="accordion"
          onClick={() => (index !== 4 ? setIndex(4) : setIndex(0))}
        >
          Vouchers
          {index === 4 ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        <div className={index === 4 ? "click-down active" : "click-down"}>
          Thêm voucher
        </div>
        <div className={index === 4 ? "click-down active" : "click-down"}>
          Danh sách voucher
        </div>
        <div
          className="accordion"
          onClick={() => (index !== 5 ? setIndex(5) : setIndex(0))}
        >
          Showes movie
          {index === 5 ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        <div className={index === 5 ? "click-down active" : "click-down"}>
          Thêm show
        </div>
        <div className={index === 5 ? "click-down active" : "click-down"}>
          Danh sách showes
        </div>
      </div>
      <div className={openBar ? "right-page" : "right-page move-right-page"}>
        {children}
      </div>
    </div>
  );
}

export default Common;
