import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useGlobalContext } from "../../../../context";
import { useEffect, useState } from "react";
import Select from "react-select";
import { QrPayment } from "./QrPayment";
import BreadcrumbPayment from "../../BreadcrumbTicket";
import { url_database } from "../../api";
import { getAllUserVouchers } from "../../../../apiRequest";

function Payment() {
  // const selectChairs = useLocation().state.movie;
  const selectedSeatList = useLocation().state.selectedSeatList;
  const movie = useLocation().state.movie;
  const date = useLocation().state.date;
  const hour = useLocation().state.hour;
  const idShow = useLocation().state.idShow;
  const [price, setPrice] = useState(useLocation().state.price);
  const savedPrice = useLocation().state.price;
  const [errorPayment, setErrorPayment] = useState(false);
  const { user } = useGlobalContext();
  const [openPaymentQR, setOpenPaymentQR] = useState(false);
  const room = useLocation().state.room;
  const [methodPayment, setMethodPayment] = useState("");
  const [vouchers, setVouchers] = useState([]);
  const [valueSub, setValueSub] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getAllUserVouchers(user.idUser);
      setVouchers(
        res.map((voucher) => {
          return {
            value: voucher,
            label: `Giảm ${voucher.value + voucher.suffix} cho ${
              voucher.name
            } ${voucher.suffix === "%" ? `(Tối đa ${voucher.maximum}k)` : ""}`,
          };
        })
      );
    })();
  }, []);

  const handlePayment = () => {
    if (methodPayment.length === 0) {
      setErrorPayment(true);
    } else {
      setOpenPaymentQR(true);
    }
  };

  const handleVoucherClick = (e) => {
    if (e.value.suffix === "%") {
      const down = parseInt(savedPrice) * e.value.value;
      if (down > e.value.maximum) {
        setPrice((parseInt(savedPrice) - e.value.maximum).toFixed(0) + ".000");
        setValueSub(e.value.maximum);
      } else {
        setPrice((parseInt(savedPrice) - down).toFixed(0) + ".000");
        setValueSub(down);
      }
    } else {
      setPrice((parseInt(savedPrice) - e.value.value).toFixed(0) + ".000");
      setValueSub(e.value.value);
    }
  };

  return (
    <>
      <BreadcrumbPayment index={2} />
      <div className="booking-seat-layout">
        <div className="left-part">
          <form className="payment-form">
            <label className="payment-label">
              <span className="payment-title">Họ và tên</span>
              <input
                type="text"
                disabled
                value={user.firstName + " " + user.lastName}
              />
            </label>
            <label className="payment-label">
              <span className="payment-title">Địa chỉ email</span>
              <input type="email" disabled value={user.email} />
            </label>
            <label className="payment-label">
              <span className="payment-title">Số điện thoại</span>
              <input type="text" disabled value={user.phone} />
            </label>
            <label className="payment-label">
              <span className="payment-title">Mã khuyến mại</span>
              <Select
                placeholder="Chọn mã khuyến mại"
                // options={[
                //   { value: "Ví điện tử MoMo", label: "Ví điện tử MoMo" },
                //   {
                //     value: "Thanh toán ngân hàng",
                //     label: "Thanh toán ngân hàng",
                //   },
                // ]}
                options={vouchers}
                className="paymentMethods"
                onChange={handleVoucherClick}
                // onChange={(e) => {
                //   setCanBooking(true);
                //   setSelectedHour(e.value);
                // }}
                // noOptionsMessage={() => "Vui lòng chọn ngày"}
              />
            </label>
            <label className="payment-label">
              <span className="payment-title">Phương thức thanh toán</span>
              <Select
                placeholder="Phương thức thanh toán"
                options={[
                  { value: "Ví điện tử MoMo", label: "Ví điện tử MoMo" },
                  {
                    value: "Thanh toán ngân hàng",
                    label: "Thanh toán ngân hàng",
                  },
                ]}
                className="paymentMethods"
                onChange={(e) => {
                  // setCanBooking(true);
                  setErrorPayment(false);
                  setMethodPayment(e.value);
                }}
                // noOptionsMessage={() => "Vui lòng chọn ngày"}
              />
            </label>
            {errorPayment && (
              <div className="error-message">
                Vui lòng chọn phương thức thanh toán
              </div>
            )}
          </form>
        </div>

        <div className="right-part">
          <div className="right-part booking-movie-card">
            <h1 className="movie-title">{movie.title}</h1>

            <div className="movie-rate">
              <AiFillStar color="yellow" />
              <span className="movie-rate-star">{movie.vote_average}/10</span>
              <span className="movie-rate-count">
                ({movie.vote_count} đánh giá)
              </span>
            </div>

            <div className="booking-info">
              <div className="booking-info-row">
                <h3>Rạp phim: </h3>
                <span>BK Dĩ An</span>
              </div>
              <div className="booking-info-row">
                <h3>Phòng chiếu: </h3>
                <span>{room}</span>
              </div>
              <div className="booking-info-row">
                <h3>Suất chiếu: </h3>
                <span>{hour}</span>
                <span> | </span>
                <span>{date.dateShowRender}</span>
              </div>
              <div className="booking-info-row">
                <h3>Số lượng ghế: </h3>
                <span>{selectedSeatList.length}</span>
              </div>
              <div className="booking-info-row">
                <h3>Ghế đã chọn: </h3>
                <span>{selectedSeatList.join(", ")}</span>
              </div>
              {valueSub && (
                <div className="booking-info-row">
                  <h3>Voucher: </h3>
                  <span>-{valueSub}k</span>
                </div>
              )}
              <div className="booking-info-row">
                <h3>Tổng tiền: </h3>
                <span className="ticket-price">{price}đ</span>
              </div>

              <button
                // to="/seatSelection/payment"
                onClick={handlePayment}
                className="orange-btn"
                // state={{ movie, date, selectedSeatList }}
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
      {openPaymentQR && (
        <QrPayment
          chairList={selectedSeatList}
          movie={movie}
          date={date}
          hour={hour}
          idShow={idShow}
          room={room}
          price={price}
          setOpenPaymentQR={setOpenPaymentQR}
        />
      )}
    </>
  );
}

export default Payment;
