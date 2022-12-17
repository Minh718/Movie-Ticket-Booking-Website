import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Popup from "reactjs-popup";
import { url_database, url_img } from "../api";
const days = [
  "Chủ nhật",
  "Thứ hai",
  "Thứ ba",
  "Thứ tư",
  "Thứ năm",
  "Thứ sáu",
  "Thứ bảy",
];
export const Ticket = ({ ticket }) => {
  const [chair, setChair] = useState("");
  const [numberChair, setNumberChair] = useState(0);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${url_database}/tickets/${ticket.idTicket}/chairs`
        );
        const resMovie = await fetch(
          `https://api.themoviedb.org/3/movie/${ticket.idMovie}?api_key=14ccdb96456935bbb41591e99697d262`
        );
        setChair(res.data.map((chair) => chair.chair).join(", "));
        setNumberChair(res.data.length);
        setMovie(await resMovie.json());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="container-ticket">
      <div className="container-ticket-left">
        <img src={url_img + movie?.poster_path} />
        <div className="container-ticket-left-right">
          <h3>{movie?.title}</h3>
          <h4>
            Suất: <span>{ticket.hour + " - " + ticket.dateShow}</span>
          </h4>
          <h4>
            Ghế: <span>{chair}</span>
          </h4>
          <h4>
            Giá vé: <span>{ticket.price}đ</span>
          </h4>
        </div>
      </div>
      <div className="container-ticket-right">
        <Popup trigger={<button>Xem chi tiết</button>} modal nested>
          {(close) => {
            return (
              <div className="container-detail-ticket">
                <h1>Chi tiết vé</h1>
                <button onClick={close}>
                  <FaTimes />
                </button>
                <div>
                  <div className="container-detail-ticket-left">
                    <h5>Cảm ơn khách hàng đã mua vé tại</h5>
                    <h4>BK Cimema</h4>
                    <h5>Hãy quét mã này để đổi lấy vé xem phim của bạn.</h5>
                    <img src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png" />
                  </div>
                  <div className="container-detail-ticket-right">
                    <div className="container-ticket-left-right">
                      <h3>{movie?.title}</h3>
                      <h4>
                        Ngày:{" "}
                        <span>
                          {days[moment(ticket.dateShow, "DD/MM/YYYY").day()] +
                            " - " +
                            ticket.dateShow}
                        </span>
                      </h4>
                      <h4>
                        Giờ: <span>{ticket.hour}</span>
                      </h4>
                      <h4>
                        Ghế: <span>{chair}</span>
                      </h4>
                      <h4>
                        Phòng: <span>{ticket.room}</span>
                      </h4>
                      <h4 className="total_price">
                        Tổng tiền: <span>{ticket.price * numberChair} Đ</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Popup>
      </div>
    </div>
  );
};
