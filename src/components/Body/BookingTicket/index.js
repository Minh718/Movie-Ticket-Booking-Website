import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { img_url } from "../api";
import { AiFillStar } from "react-icons/ai";
import { useGlobalContext } from "../../../context";
import { useEffect, useState } from "react";
import Select from "react-select";

function BookingTicket() {
  const movie = useLocation().state.movie;
  // const topMovie = useLocation().state.moviesArePlaying?.splice(0, 3);
  const canPlaceTicket = useLocation().state.canPlaceTicket || false;
  const { moviesArePlaying } = useGlobalContext();
  const [showtimeSelected, setShowtimeSelected] = useState({
    date: "",
    time: "",
  });
  const [dateOptions, setDateOptions] = useState([]);
  const [timeOptions, setTimeOptions] = useState([]);

  const [showtime, setShowtime] = useState([
    {
      date: "15/10/2022",
      time: ["09:30", "13:30", "15:30", "20:30"],
    },
    {
      date: "16/10/2022",
      time: ["09:30", "13:30", "15:30", "20:30"],
    },
    {
      date: "17/10/2022",
      time: ["09:30", "13:30", "15:30", "20:30"],
    },
    {
      date: "18/10/2022",
      time: ["09:30", "13:30", "15:30", "20:30"],
    },
    {
      date: "19/10/2022",
      time: ["09:30", "13:30", "15:30", "20:30"],
    },
  ]);

  useEffect(() => {
    setDateOptions(
      showtime.map((item) => ({ value: item.date, label: item.date }))
    );
    setTimeOptions([
      { value: "09:30", label: "09:30" },
      { value: "13:30", label: "13:30" },
    ]);
  }, [showtime]);

  function handleDateSelect(option) {
    setShowtimeSelected({ ...showtimeSelected, date: option.value });
  }

  function handleTimeSelect(option) {
    setShowtimeSelected({ ...showtimeSelected, time: option.value });
  }

  return (
    <div className="booking-page">
      <div className="booking-page-layout">
        <div className="left-part">
          <div className="movie-poster">
            <img src={img_url + movie.poster_path} alt="Movie poster here" />
          </div>

          <div className="movie-info">
            <div>
              <h2 className="movie-title">{movie.title}</h2>
              <div className="movie-rate">
                <AiFillStar color="yellow" />
                <span className="movie-rate-star">{movie.vote_average}/10</span>
                <span className="movie-rate-count">
                  ({movie.vote_count} đánh giá)
                </span>
              </div>
            </div>
            <button className="orange-btn rate-btn">Đánh giá</button>
          </div>

          <div className="movie-overview-part">
            <h2 className="movie-booking-header">Nội Dung Phim</h2>
            <hr />
            <div className="movie-overview">{movie.overview}</div>
          </div>

          {canPlaceTicket && (
            <div className="movie-booking">
              <h2 className="movie-booking-header">Đặt Vé Ngay</h2>
              <hr />
              <div className="movie-booking-area">
                <Select
                  options={dateOptions}
                  className="date-selection"
                  onChange={handleDateSelect}
                />
                <Select
                  options={timeOptions}
                  className="time-selection"
                  onChange={handleTimeSelect}
                />

                <button className="btn-buy-ticket orange-btn">
                  {/* <Link to='/seatSelection' color="black" state={{ movie, showtimeSelected }}> */}
                  <Link to="/seatSelection" color="black" state={{ movie }}>
                    Mua vé
                  </Link>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="right-part">
          <h2 className="movie-booking-header">Phim Thịnh Hành</h2>
          <hr />

          {moviesArePlaying?.splice(0, 3).map((item, idx) => (
            <div className="mini-movie-container" key={idx}>
              <img src={img_url + item.backdrop_path} alt="Movie poster here" />
              <div className="mini-right-part">
                <h2 className="mini-movie-title">{item.title}</h2>
                <button className="orange-btn">Mua Vé</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default BookingTicket;
