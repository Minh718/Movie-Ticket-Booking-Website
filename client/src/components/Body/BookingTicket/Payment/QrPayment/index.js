import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Spinner } from "reactstrap";
import { useGlobalContext } from "../../../../../context";
import { url_database } from "../../../api";
import "./style.css";
export const QrPayment = ({
  setOpenPaymentQR,
  chairList,
  idShow,
  date,
  hour,
  room,
  movie,
  price,
  idVoucher,
}) => {
  const [countdown, setCountdown] = useState(360);
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const { user } = useGlobalContext();
  React.useEffect(() => {
    if (countdown === 0) setOpenPaymentQR(false);
    setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
  }, [countdown]);
  const handlePaymentQR = async () => {
    try {
      await axios.post(`/movies/tickets`, {
        chairList,
        idShow,
        date: date.dateShow,
        hour,
        idVoucher,
      });
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/paymentSuccess", {
          state: {
            selectedSeatList: chairList,
            movie,
            room,
            date,
            hour,
            price,
          },
        });
      }, 1500);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="container-qr" onClick={() => setOpenPaymentQR(false)}>
      <div className="qr-main">
        <h3>Quét QR để thanh toán</h3>
        {!isSuccess ? (
          <div
            className="qr-img"
            onClick={(e) => {
              e.stopPropagation();
              handlePaymentQR();
            }}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" />
          </div>
        ) : (
          <Spinner
            color="primary"
            style={{
              height: "3rem",
              width: "3rem",
            }}
            type="grow"
          >
            Loading...
          </Spinner>
        )}

        <p>Thời gian còn lại: {countdown}</p>
      </div>
    </div>
  );
};
