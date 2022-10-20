import "./index.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { FaSearch } from "react-icons/fa";
function Header() {
  const { openSetting, setOpenSetting, user, setUser } = useGlobalContext();
  return (
    <div id="header">
      <div className="header-left nav-left">
        <Link to={"/"}>
          <h1 className="title">Booking Website</h1>
        </Link>
        {/* <div className="right-part"> */}
        <div className="nav-middle">
          <input className="search-input" type="text" placeholder="Tìm phim" />
          <span className="icon-search">
            <FaSearch />
          </span>
        </div>
        <div className="right-part">
          <div
            className="user-btn"
            onClick={(e) => {
              e.stopPropagation();
              setOpenSetting(!openSetting);
            }}
          >
            <button className="btn-setting">
              <HiOutlineUserCircle size={40} />
            </button>
            {openSetting && (
              <div className="setting-user">
                <Link to="/profile">Hồ sơ của tôi</Link>
                <Link to="/historyTicket">Giao dịch của tôi</Link>
                <Link to="/">Vouchers</Link>
                <Link
                  to="/"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenSetting(!openSetting);
                    setUser(null);
                  }}
                >
                  Đăng xuất
                </Link>

                {/* <li className="option">Giao dịch của tôi</li>
                <li className="option">Vouchers</li>
                <li className="option">Đăng xuất</li> */}
              </div>
            )}
          </div>
          {user ? (
            <span
              className="login-nav"
              onClick={(e) => {
                e.stopPropagation();
                setOpenSetting(!openSetting);
              }}
            >
              {user}
            </span>
          ) : (
            <Link to="/login" className="login-nav">
              Đăng nhập
            </Link>
          )}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Header;
