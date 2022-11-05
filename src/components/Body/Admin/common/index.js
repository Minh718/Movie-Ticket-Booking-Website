import "./index.css";
import { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useGlobalContext } from "../../../../context";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
function Common({ children }) {
  const navigate = useNavigate();
  const { openBar, setInPageAdmin, setUser } = useGlobalContext();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setInPageAdmin(true);
  }, []);
  return (
    <div class="common-page">
      <div className={openBar ? "left-page" : "left-page move-left-page"}>
        <div>
          <div>
            <div
              className="accordion"
              onClick={() => (index !== 1 ? setIndex(1) : setIndex(0))}
            >
              Quản lý Tài khoản
              {index === 1 ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div className={index === 1 ? "click-down active" : "click-down"}>
              Thêm tài khoản
            </div>
            <div
              className={index === 1 ? "click-down active" : "click-down"}
              onClick={() => navigate("/admin-page/client")}
            >
              Danh sách khách hàng
            </div>
          </div>
          <div>
            <div
              className="accordion"
              onClick={() => (index !== 2 ? setIndex(2) : setIndex(0))}
            >
              Quản lý movie
              {index === 2 ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div className={index === 2 ? "click-down active" : "click-down"}>
              Thêm movie
            </div>
            <div className={index === 2 ? "click-down active" : "click-down"}>
              Danh sách movies
            </div>
          </div>
          <div>
            <div
              className="accordion"
              onClick={() => (index !== 3 ? setIndex(3) : setIndex(0))}
            >
              Quản lý Tin tức
              {index === 3 ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div className={index === 3 ? "click-down active" : "click-down"}>
              Thêm tin tức
            </div>
            <div className={index === 3 ? "click-down active" : "click-down"}>
              Danh sách tin tức
            </div>
          </div>
          <div>
            <div
              className="accordion"
              onClick={() => (index !== 4 ? setIndex(4) : setIndex(0))}
            >
              Slides
              {index === 4 ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div className={index === 4 ? "click-down active" : "click-down"}>
              Thêm slide
            </div>
            <div className={index === 4 ? "click-down active" : "click-down"}>
              Danh sách slide
            </div>
          </div>
          <div>
            <div
              className="accordion"
              onClick={() => (index !== 5 ? setIndex(5) : setIndex(0))}
            >
              Vouchers
              {index === 5 ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div className={index === 5 ? "click-down active" : "click-down"}>
              Thêm voucher
            </div>
            <div className={index === 5 ? "click-down active" : "click-down"}>
              Danh sách voucher
            </div>
          </div>
          <div>
            <div
              className="accordion"
              onClick={() => (index !== 6 ? setIndex(6) : setIndex(0))}
            >
              Lịch chiếu
              {index === 6 ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div className={index === 6 ? "click-down active" : "click-down"}>
              Thêm giờ chiếu
            </div>
            <div className={index === 6 ? "click-down active" : "click-down"}>
              Danh sách lịch chiếu
            </div>
          </div>
        </div>
        <div className="ctn-btn-out">
          <Button
            color="warning"
            className="btn-out"
            outline
            onClick={() => {
              setUser(null);
              setInPageAdmin(false);
              navigate("/login");
            }}
          >
            Đăng xuất
          </Button>
        </div>
      </div>
      <div className={openBar ? "right-page" : "right-page move-right-page"}>
        {" "}
        {children}{" "}
      </div>
    </div>
  );
}

export default Common;
