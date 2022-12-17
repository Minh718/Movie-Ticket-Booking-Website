import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { useGlobalContext } from "../../../../../context";
import { url_database } from "../../../api";
function HeaderAdmin({ openBar, setOpenBar }) {
  return (
    <div id="header">
      <div className="header-left header-admin">
        <div
          className={
            openBar ? `container-btn-bar active-bar ` : `container-btn-bar`
          }
          onClick={() => setOpenBar(!openBar)}
        >
          <FaBars />
        </div>

        <Link to={"/adminPage"}>
          <img className="logo-web" src={url_database + "/img/BK-cinema.png"} />
        </Link>

        <div className="right-part">
          <Link to="/">
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
