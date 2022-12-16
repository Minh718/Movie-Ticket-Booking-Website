import { AiFillStar } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../../../context";
import BreadcrumbPayment from "../../BreadcrumbTicket";
import "./style.css";

function PaymentSuccess() {
  const selectedSeatList = useLocation().state.selectedSeatList;
  const movie = useLocation().state.movie;
  const date = useLocation().state.date;
  const hour = useLocation().state.hour;
  const price = useLocation().state.price;
  const room = useLocation().state.room;
  const { user } = useGlobalContext();
  return (
    <>
      <BreadcrumbPayment index={3} />
      <div className="booking-seat-layout">
        <div className="left-part">
          <div className="left-part-top">
            <h2>Đặt vé thành công</h2>
            <p>Quét mã này tài rạp chiếu phim để đổi lấy vé của bạn.</p>
            <img src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png" />
          </div>
          <div className="left-part-bottom">
            <div>Thông tin vé cũng được gửi về:</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
          </div>
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
              <div className="booking-info-row">
                <h3>Tổng tiền: </h3>
                <span className="ticket-price">{price}đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentSuccess;
