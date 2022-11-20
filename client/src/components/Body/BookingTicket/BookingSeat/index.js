import "./index.css";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState, useRef } from "react";
import { Button, Spinner } from "reactstrap";
import { url_database } from "../../api";
import BreadcrumbPayment from "../../BreadcrumbTicket";
const column = ["A", "B", "C", "D", "E", "F", "G", "H"];
const row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const placedSeat = ["A5", "B4", "C5"];
function BookingSeat() {
  const movie = useLocation().state.movie;
  const show = useLocation().state.show;
  const hour = useLocation().state.hour;
  const date = useLocation().state.date;

  // const seatRef = useRef();
  const seatClassNames = ["seat-empty", "seat-selected", "seat-sold"];
  const [selectedSeatList, setSelectedSeatList] = useState([]);
  // const [seatCount, setSeatCount] = useState(0);
  const [room, setRoom] = useState("01");
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${url_database}/movies/${show?.idShow}/${date}/${hour}/room`
      );
      const resChairs = await axios.get(
        `${url_database}/movies/${show?.idShow}/${date}/${hour}/chairs`
      );
      const newPlacedSeats = resChairs.data.map((chair) => chair.chair);
      const result = [];
      column.forEach((character) => {
        const arrRow = [];
        row.forEach((index) => {
          const seat = character + index;
          if (newPlacedSeats.includes(seat)) {
            arrRow.push(2);
          } else {
            arrRow.push(0);
          }
        });
        result.push(arrRow);
      });
      setSeatArray(result);
      setRoom(res.data[0].room);
    })();
  }, []);
  const [seatArray, setSeatArray] = useState(null);
  // const handlePlacedSeatArr = () => {
  //   const result = [];
  //   column.forEach((character, index) => {
  //     for (let i = 1; i < 11; i++) {}
  //   });
  // };

  // function handleIncreaseSeatCount() {
  //   if (seatCount < 5) setSeatCount(seatCount + 1);
  // }
  // console.log(selectedSeatList);
  // function handleDecreaseSeatCount() {
  //   if (seatCount === selectedSeatList.length) {
  //     return;
  //   }

  //   if (seatCount > 0) setSeatCount(seatCount - 1);
  // }
  const handleShowSelectedSeat = () => {
    if (selectedSeatList.length === 0) return "Chưa chọn";
    else {
      let result = "";
      selectedSeatList.map((seat) => {
        result = result + seat + ", ";
      });
      return result.slice(0, -2);
    }
  };
  const handleDeleteSelectedSeat = (i, j) => {
    setSelectedSeatList(
      selectedSeatList.filter((seat) => seat !== column[i] + j)
    );
  };
  // useEffect(() => {
  //   seatRef.current.innerText =
  //     selectedSeatList.length > 0 ? selectedSeatList : "Chưa chọn";
  // }, []);
  // console.log(selectedSeatList);
  function handleSeatClick(i, j) {
    switch (seatArray[i][j]) {
      case 1: {
        seatArray[i][j] = 0;
        handleDeleteSelectedSeat(i, j);
        break;
      }
      case 0: {
        // if (seatCount > selectedSeatList.length) {
        seatArray[i][j] = 1;
        // selectedSeatList.push(
        //   String.fromCharCode("A".charCodeAt(0) + i) + (j + 1)
        // );
        selectedSeatList.push(column[i] + j);
        // }
        break;
      }
      default:
        break;
    }
    setSeatArray([...seatArray]);
  }
  const handlePrice = () => {
    const handleSurplus = (surplus) => {
      if (surplus < 10) return "00" + surplus;
      else if (surplus >= 100) return surplus;
      else return "0" + surplus;
    };
    let result = "";
    let allPrice = show.price * selectedSeatList.length;
    while (allPrice >= 1000) {
      result = `.${handleSurplus(allPrice % 1000)}` + result;
      allPrice = allPrice / 1000;
    }
    result = Math.floor(allPrice) + result;
    return result;
  };
  return (
    <>
      <BreadcrumbPayment index={1} />
      <div className="booking-seat-layout">
        <div className="left-part">
          <div className="screen-position">Màn hình</div>

          <div className="seats-area">
            {seatArray ? (
              seatArray.map((seatRow, i) => (
                <div key={i}>
                  {seatRow.map((seat, j) => {
                    return (
                      <div
                        key={[i, j]}
                        // pos={[i, j]}
                        onClick={() => handleSeatClick(i, j)}
                        className={`seat ${seatClassNames[seat]}`}
                      ></div>
                    );
                  })}
                </div>
              ))
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
              <span>{room}</span>
            </div>
            <div className="booking-info-row">
              <h3>Suất chiếu: </h3>
              <span>{date}</span>
              <span> | </span>
              <span>{hour}</span>
            </div>
            {/* <div className="booking-info-row">
              <h3>Số lượng ghế: </h3>
              <span>{seatCount}</span>
              <button
                className="count-update-btn"
                onClick={handleIncreaseSeatCount}
              >
                +
              </button>
              <button
                className="count-update-btn"
                onClick={handleDecreaseSeatCount}
              >
                -
              </button>
            </div> */}
            <div className="booking-info-row">
              <h3>Ghế đã chọn: </h3>
              <span>{handleShowSelectedSeat()}</span>
              {/* <span ref={seatRef}>Chưa chọn</span> */}
            </div>
            <div className="booking-info-row">
              <h3>Tổng đơn hàng: </h3>
              <span className="ticket-price">{handlePrice()}đ</span>
            </div>

            <Link
              to="/seatSelection/payment"
              className="orange-btn"
              state={{
                selectedSeatList,
                movie,
                room,
                date,
                hour,
                idShow: show.idShow,
                price: handlePrice(),
              }}
            >
              Đặt vé
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingSeat;
