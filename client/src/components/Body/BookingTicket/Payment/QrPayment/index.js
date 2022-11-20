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
      await axios.post(`${url_database}/movies/tickets`, {
        chairList,
        idShow,
        date,
        hour,
        idUser: user.idUser,
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
      // setIsSuccess(true);
      //   setTimeout(()=>{
      //     setOpenPaymentQR(false);
      //   },2000)
    } catch (err) {
      console.log(err.response);
    }
  };

  // if (isSuccess) {
  //   return (
  //     <div className="container-cs">
  //       <div className="cs-main">
  //         <h3 className="message-success">Giao dịch thành công</h3>
  //         <div>
  //           <Link to="/historyTicket">
  //             <Button color="success">Đến lịch sử giao dịch</Button>
  //           </Link>
  //           <Link to="/">
  //             <Button color="success" outline>
  //               Về trang chủ
  //             </Button>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
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
