import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import "./style.css";
export default function HomeAdmin() {
  const navigate = useNavigate();
  return (
    <>
      <div className="page-admin">
        <h2 className="title-page-admin">Trang chủ Admin</h2>
        <div className="body-page-admin">
          <h4 className="bottom-title-page-admin">Quản lý</h4>
          <div className="bottom-page-admin">
            <Card
              className="my-2"
              color="dark"
              outline
              style={{
                maxWidth: "400px",
              }}
            >
              {/* <CardHeader>Phim</CardHeader> */}
              <CardBody
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardTitle tag="h5">Quản lý phim</CardTitle>
                <CardText>
                  Thêm movie và xem danh sách movie chiếu tại rạp
                </CardText>
                <div className="container-btns">
                  {" "}
                  <Button
                    color="primary"
                    onClick={() => navigate("/adminPage/addMovie")}
                  >
                    Thêm phim
                  </Button>{" "}
                  <Button
                    color="primary"
                    outline
                    onClick={() => navigate("/adminPage/movie")}
                  >
                    Danh sách phim
                  </Button>
                </div>
              </CardBody>
            </Card>
            <Card
              className="my-2"
              color="dark"
              outline
              style={{
                maxWidth: "400px",
              }}
            >
              {/* <CardHeader>Phim</CardHeader> */}
              <CardBody
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardTitle tag="h5">Quản lý giờ chiếu</CardTitle>
                <CardText>
                  Thêm giờ chiếu và xem danh sách giờ chiếu tại rạp.
                </CardText>
                <div className="container-btns">
                  {" "}
                  <Button
                    color="primary"
                    // onClick={() => navigate("/adminPage/addSlideShow")}
                    onClick={() => navigate("/adminPage/show")}
                  >
                    Thêm show
                  </Button>{" "}
                  <Button
                    color="primary"
                    outline
                    // onClick={() => navigate("/adminPage/slideShow")}
                    onClick={() => navigate("/adminPage/show")}
                  >
                    Danh sách cácshow
                  </Button>
                </div>
              </CardBody>
            </Card>

            <Card
              className="my-2"
              color="dark"
              outline
              style={{
                maxWidth: "400px",
              }}
            >
              {/* <CardHeader>Phim</CardHeader> */}
              <CardBody
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardTitle tag="h5">Quản lý bài báo</CardTitle>
                <CardText>
                  Thêm bài báo movie và xem danh sách các bài báo
                </CardText>
                <div className="container-btns">
                  {" "}
                  <Button
                    color="primary"
                    onClick={() => navigate("/adminPage/addArticle")}
                  >
                    Thêm bài báo
                  </Button>{" "}
                  <Button
                    color="primary"
                    outline
                    onClick={() => navigate("/adminPage/article")}
                  >
                    Danh sách bài báo
                  </Button>
                </div>
              </CardBody>
            </Card>
            <Card
              className="my-2"
              color="dark"
              outline
              style={{
                maxWidth: "400px",
              }}
            >
              {/* <CardHeader>Phim</CardHeader> */}
              <CardBody
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardTitle tag="h5">Quản lý vouchers</CardTitle>
                <CardText>
                  Thêm voucher và danh sách voucher cho người dùng
                </CardText>
                <div className="container-btns">
                  {" "}
                  <Button
                    color="primary"
                    onClick={() => navigate("/adminPage/addVoucher")}
                  >
                    Thêm voucher
                  </Button>{" "}
                  <Button
                    color="primary"
                    outline
                    onClick={() => navigate("/adminPage/voucher")}
                  >
                    Danh sách vouchers
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
