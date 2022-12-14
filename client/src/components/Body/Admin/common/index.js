import "./index.css";
import { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useGlobalContext } from "../../../../context";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "reactstrap";
function Common({ children, openBar }) {
  const navigate = useNavigate();
  const { setUser } = useGlobalContext();
  const [index, setIndex] = useState(0);
  return (
    <div className="common-page">
      <div className={openBar ? "left-page" : "left-page move-left-page"}>
        <div>
          <div>
            <div
              className="accordion"
              onClick={() => (index !== 1 ? setIndex(1) : setIndex(0))}
            >
              Quản lý movie
              {index === 1 ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div
              className={index === 1 ? "click-down active" : "click-down"}
              onClick={() => navigate("/adminPage/addMovie")}
            >
              Thêm movie
            </div>
            <div
              className={index === 1 ? "click-down active" : "click-down"}
              onClick={() => navigate("/adminPage/movie")}
            >
              Danh sách movies
            </div>
          </div>
          <div>
            <div
              className="accordion"
              onClick={() => (index !== 2 ? setIndex(2) : setIndex(0))}
            >
              Quản lý Show
              {index === 2 ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div
              className={index === 2 ? "click-down active" : "click-down"}
              onClick={() => navigate("/adminPage/addShow")}
            >
              Thêm Show
            </div>
            <div
              className={index === 2 ? "click-down active" : "click-down"}
              onClick={() => navigate("/adminPage/show")}
            >
              Danh sách Show
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
            <div
              className={index === 3 ? "click-down active" : "click-down"}
              onClick={() => navigate("/adminPage/addArticle")}
            >
              Thêm tin tức
            </div>
            <div
              className={index === 3 ? "click-down active" : "click-down"}
              onClick={() => navigate("/adminPage/article")}
            >
              Danh sách tin tức
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
            <div
              className={index === 5 ? "click-down active" : "click-down"}
              onClick={() => navigate("/adminPage/addVoucher")}
            >
              Thêm voucher
            </div>
            <div
              className={index === 5 ? "click-down active" : "click-down"}
              onClick={() => navigate("/adminPage/voucher")}
            >
              Danh sách voucher
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
