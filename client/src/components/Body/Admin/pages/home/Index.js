import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import "./style.css";
export default function HomeAdmin() {
  const navigate = useNavigate();
  const createStatistic = (bgColor) => {
    return (
      <div className="img-statis">
        {new Array(10).fill(0).map((data) => {
          return (
            <div
              className={`height${Math.floor(
                Math.random() * 20
              )}pxx2 columns-${bgColor}`}
            ></div>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <div className="page-admin">
        <h2 className="title-page-admin">Trang chủ Admin</h2>
        <h4 className="body-title-page-admin">Thống kê</h4>
        <div className="body-page-admin">
          <div className="statistics">
            <div className="statistic">
              <h6>Tổng vé bán tháng này</h6>
              {/* <div> */}
              <div className="statistic-bottom">
                {createStatistic("ticket")}
                <div className="statistic-ticket">120 vé</div>
              </div>
              {/* </div> */}
            </div>
            <div className="statistic">
              <h6>Doanh thu trong tháng này</h6>
              <div className="statistic-bottom">
                {createStatistic("danh-thu")}
                <div className="statistic-danh-thu">12.000.000 đ</div>
              </div>
            </div>
            <div className="statistic">
              <h6>Số phim đang công chiếu</h6>
              <div className="statistic-bottom">
                {createStatistic("film-playing")}
                <div className="statistic-film-playing">12 Bộ</div>
              </div>
            </div>
          </div>
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
                  <Button color="primary">Thêm phim</Button>{" "}
                  <Button color="primary" outline>
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
                  <Button color="primary">Thêm giờ chiếu</Button>{" "}
                  <Button color="primary" outline>
                    Danh sách giờ chiếu
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
                <CardTitle tag="h5">Quản lý slides</CardTitle>
                <CardText>Thêm slide và xem danh sách slides.</CardText>
                <div className="container-btns">
                  {" "}
                  <Button color="primary">Thêm slide</Button>{" "}
                  <Button color="primary" outline>
                    Danh sách slides
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
                  <Button color="primary">Thêm bài báo</Button>{" "}
                  <Button color="primary" outline>
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
                <CardTitle tag="h5">Quản lý khách hàng</CardTitle>
                <CardText>Thêm tài khoản và xem danh sách tài khoản</CardText>
                <div className="container-btns">
                  {" "}
                  <Button color="primary">Thêm tài khoản</Button>{" "}
                  <Button color="primary" outline>
                    Danh sách tài khoản
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
                  <Button color="primary">Thêm voucher</Button>{" "}
                  <Button color="primary" outline>
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
