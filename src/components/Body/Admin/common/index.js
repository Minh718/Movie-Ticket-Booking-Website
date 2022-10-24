import "./index.css";
import { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useGlobalContext } from "../../../../context";
import { useNavigate } from "react-router-dom";
function Common({ children }) {
  const navigate = useNavigate();
  const { openBar, setInPageAdmin } = useGlobalContext();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setInPageAdmin(true);
  }, []);
  return (
    <div class="admin-page">
      <div className={openBar ? "left-page" : "left-page move-left-page"}>
        <div
          className="accordion"
          onClick={() => (index !== 1 ? setIndex(1) : setIndex(0))}
        >
          Quản trị Tài khoản
          {index === 1 ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        <div className={index === 1 ? "click-down active" : "click-down"}>
          Cấp quyền admin
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
          Quản trị Phim
          {index === 2 ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        <div className={index === 2 ? "click-down active" : "click-down"}>
          Thêm phim
        </div>
        <div className={index === 2 ? "click-down active" : "click-down"}>
          Danh sách phim
        </div>
        <div
          className="accordion"
          onClick={() => (index !== 3 ? setIndex(3) : setIndex(0))}
        >
          Quản trị Tin tức
          {index === 3 ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        <div className={index === 3 ? "click-down active" : "click-down"}>
          Thêm tin tức
        </div>
        <div className={index === 3 ? "click-down active" : "click-down"}>
          Danh sách tin tức
        </div>
        <div
          className="accordion"
          onClick={() => (index !== 4 ? setIndex(4) : setIndex(0))}
        >
          Quản trị Voucher
          {index === 4 ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        <div className={index === 4 ? "click-down active" : "click-down"}>
          Thêm voucher
        </div>
        <div className={index === 4 ? "click-down active" : "click-down"}>
          Danh sách voucher
        </div>
      </div>
      <div className="right-page">{children}</div>
    </div>
  );
}

export default Common;
