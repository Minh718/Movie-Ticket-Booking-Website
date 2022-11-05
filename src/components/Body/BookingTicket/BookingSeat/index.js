import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState, useRef } from "react";
import { Button } from "reactstrap";

function BookingSeat() {
  const movie = useLocation().state.movie;
  // const showtimeSelected = useLocation().state.showtimeSelected;
  const seatRef = useRef();

  const [seatArray, setSeatArray] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  function handleSeatClick(i, j) {
    switch (seatArray[i][j]) {
      case 1: {
        seatArray[i][j] = 0;
        break;
      }
      case 0: {
        seatArray[i][j] = 1;
        seatRef.current.innerText =
          String.fromCharCode("A".charCodeAt(0) + i) + (j + 1);
        break;
      }
      default:
        break;
    }
    setSeatArray([...seatArray]);
  }

  return (
    <>
      <div className="booking-seat-layout">
        <div className="left-part">
          <div className="screen-position">Màn hình</div>

          <div className="seats-area">
            {seatArray.map((seatRow, i) => (
              <div>
                {seatRow.map((seat, j) => {
                  let key = 12 * i + j;
                  if (seat === 1) {
                    return (
                      <div
                        key={key}
                        pos={[i, j]}
                        onClick={() => handleSeatClick(i, j)}
                        className="seat-selected seat"
                      ></div>
                    );
                  } else if (seat === 2) {
                    return (
                      <div
                        key={key}
                        pos={[i, j]}
                        onClick={() => handleSeatClick(i, j)}
                        className="seat-sold seat"
                      ></div>
                    );
                  }
                  return (
                    <div
                      key={key}
                      pos={[i, j]}
                      onClick={() => handleSeatClick(i, j)}
                      className="seat-empty seat"
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="seat-manual">
            <div className="seat-selected seat"></div>
            <span>Ghế đã chọn</span>
            <div className="seat-sold seat"></div>
            <span>Ghế đã bán</span>
            <div className="seat-empty seat"></div>
            <span>Ghế trống</span>
          </div>
        </div>

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
              <span>2</span>
            </div>
            <div className="booking-info-row">
              <h3>Suất chiếu: </h3>
              {/* <span>{showtimeSelected.date}</span> */}
              <span>Thứ 4, 31-10-2022</span>

              <span> | </span>
              {/* <span>{showtimeSelected.time}</span> */}
              <span>9h00-12h00</span>
            </div> 
            {/* <div className='booking-info-row'>
							<h3>Số lượng ghế: </h3>
							<span>2</span>
						</div> */}
            <div className="booking-info-row">
              <h3>Ghế đã chọn: </h3>
              <span ref={seatRef}>Chưa chọn</span>
            </div>
            <div className="booking-info-row">
              <h3>Giá vé: </h3>
              <span className="ticket-price">60.000đ</span>
            </div>
            <div >
              <Button color="success">Tiếp tục</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingSeat;
