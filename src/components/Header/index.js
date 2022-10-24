import "./index.css";
import { useState, useEffect } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { FaSearch } from "react-icons/fa";
import { Spinner } from "reactstrap";
import { FaBars } from "react-icons/fa";
function Header() {
  const {
    openSetting,
    setInPageAdmin,
    setOpenSetting,
    user,
    setUser,
    query,
    setQuery,
    inPageAdmin,
    openBar,
    setOpenBar,
  } = useGlobalContext();
  // const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoadding, setIsLoadding] = useState(false);
  const img_url = "http://image.tmdb.org/t/p/w500";
  useEffect(() => {
    const fetchMovies = async () => {
      const parsedQuery = query.replaceAll(" ", "+");
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=14ccdb96456935bbb41591e99697d262&language=en-US&query=${parsedQuery}&page=1&include_adult=false`
      );
      const resJson = await res.json();
      setMovies(resJson.results);
      setIsLoadding(false);
    };
    let mySetTimeout;
    if (query) {
      setIsLoadding(true);
      mySetTimeout = setTimeout(() => fetchMovies(), 300);
    } else {
      setIsLoadding(false);

      setMovies([]);
    }

    return () => clearTimeout(mySetTimeout);
  }, [query]);
  console.log(openBar);
  return (
    <div id="header">
      <div className="header-left">
        {inPageAdmin && (
          <div
            className={
              openBar ? `container-btn-bar active-bar ` : `container-btn-bar`
            }
            onClick={() => setOpenBar(!openBar)}
          >
            <FaBars />
          </div>
        )}
        <Link to={"/"}>
          <img className="logo-web" src="./BK-cinema_1.png" />
        </Link>
        {/* <div className="right-part"> */}
        {!inPageAdmin && (
          <div className="nav-middle">
            <span className="icon-search">
              <FaSearch />
            </span>
            <input
              className="search-input"
              value={query}
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm phim"
            />
            <div className="contaier-movies-search">
              {isLoadding ? (
                <div
                  className="container-single-movie"
                  style={{ justifyContent: "center" }}
                >
                  <Spinner>Loading...</Spinner>
                </div>
              ) : query.length !== 0 && movies.length === 0 ? (
                <div
                  className="container-single-movie"
                  style={{ justifyContent: "center" }}
                >
                  <h3>Không tìm thấy kết quả</h3>
                </div>
              ) : (
                movies.map((movie) => (
                  <Link to="/booking" state={{ movie }}>
                    <div key={movie.id} className="container-single-movie">
                      <div>
                        <p className="title-movie">{movie.title}</p>
                        <p>{movie.release_date}</p>
                      </div>
                      <div className="container-img">
                        <img src={img_url + movie.poster_path}></img>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        )}
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

                {user?.isAdmin && !inPageAdmin && (
                  <Link to="/admin-page" onClick={() => setInPageAdmin(true)}>
                    Admin
                  </Link>
                )}
                {user?.isAdmin && inPageAdmin && (
                  <Link to="/" onClick={() => setInPageAdmin(false)}>
                    Trang chủ
                  </Link>
                )}
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
              {user.name}
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
