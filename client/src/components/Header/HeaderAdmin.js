import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { useGlobalContext } from "../../context";
import "./index.css";
function HeaderAdmin() {
  const { openBar, setOpenBar, setInPageAdmin } = useGlobalContext();
  return (
    <div id="header">
      <div className="header-left">
        <div
          className={
            openBar ? `container-btn-bar active-bar ` : `container-btn-bar`
          }
          onClick={() => setOpenBar(!openBar)}
        >
          <FaBars />
        </div>

        <Link to={"/admin-page"}>
          <img className="logo-web" src="./BK-cinema_1.png" />
        </Link>

        <div className="right-part">
          <Link to="/" onClick={() => setInPageAdmin(false)}>
            {" "}
            <Button color="info" outline>
              Trang chủ
            </Button>
          </Link>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default HeaderAdmin;
