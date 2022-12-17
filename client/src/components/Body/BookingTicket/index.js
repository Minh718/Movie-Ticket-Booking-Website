import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useGlobalContext } from "../../../context";
import { img_url } from "../api";
import "./index.css";

function BookingTicket() {
  const idMovie = useLocation().state.idMovie;
  const canPlaceTicket = useLocation().state.canPlaceTicket || false;
  const { moviesArePlaying } = useGlobalContext();
  const [movie, setMovie] = useState(null);
  const [selectedDate, setSelectdDate] = useState(null);
  const [dateOptions, setDateOptions] = useState([]);
  const [selectedHour, setSelectedHour] = useState("");
  const [hourOptions, setHoursOptions] = useState([]);
  const [openHour, setOpenHour] = useState(false);
  const [canBooking, setCanBooking] = useState(false);
  const [show, setShow] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${idMovie}?api_key=14ccdb96456935bbb41591e99697d262`
      );
      const resShow = await axios.get(`/movies/${idMovie}/show`);
      setShow(resShow.data[0]);
      const jsonMoive = await res.json();
      setMovie(jsonMoive);
      if (canPlaceTicket) {
        const resDates = await axios.get(
          `/movies/${resShow.data[0].idShow}/dates`
        );
        setDateOptions(
          resDates.data.map((date) => ({
            value: {
              dateShow: date.dateShow,
              dateShowRender: date.dateShowRender,
            },
            label: date.dateShowRender,
          }))
        );
      }
    })();
  }, []);
  useEffect(() => {
    setCanBooking(false);
    setOpenHour(false);
    setSelectedHour("");
    const fetchHours = async () => {
      const resHours = await axios.post(`/movies/hours`, {
        dateShow: selectedDate.dateShow,
        idShow: show.idShow,
      });
      setHoursOptions(
        resHours.data.map((hour) => ({
          value: hour.hour,
          label: hour.hour,
        }))
      );
      setOpenHour(true);
    };
    if (selectedDate) {
      fetchHours();
    }
  }, [selectedDate]);
  return (
    <div className="booking-page">
      <div className="booking-page-layout">
        <div className="left-part">
          <div className="movie-poster">
            <img src={img_url + movie?.poster_path} alt="Movie poster here" />
          </div>

          <div className="movie-info">
            <div>
              <h2 className="movie-title">{movie?.title}</h2>
              <div className="movie-rate">
                <AiFillStar color="yellow" />
                <span className="movie-rate-star">
                  {movie?.vote_average}/10
                </span>
                <span className="movie-rate-count">
                  ({movie?.vote_count} đánh giá)
                </span>
              </div>
              <div>
                <div>
                  <b>Genre: </b>{" "}
                  {movie?.genres.map((genre) => (
                    <span className="genre-movie" key={genre.id}>
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button className="orange-btn rate-btn">Đánh giá</button>
          </div>

          <div className="movie-overview-part">
            <h2 className="movie-booking-header">Nội Dung Phim</h2>
            <hr />
            <div className="movie-overview">{movie?.overview}</div>
          </div>
          {canPlaceTicket && (
            <div className="movie-booking">
              <h2 className="movie-booking-header">Đặt Vé Ngay</h2>
              <hr />
              <div className="movie-booking-area">
                <Select
                  placeholder="Chọn ngày"
                  options={dateOptions}
                  className="date-selection"
                  onChange={(e) => {
                    setSelectdDate(e.value);
                  }}
                />

                {openHour && (
                  <Select
                    placeholder="Chọn giờ"
                    options={hourOptions}
                    className="time-selection"
                    onChange={(e) => {
                      setCanBooking(true);
                      setSelectedHour(e.value);
                    }}
                    // noOptionsMessage={() => "Vui lòng chọn ngày"}
                  />
                )}
                {canBooking && (
                  <Link
                    to="/seatSelection"
                    className="orange-btn"
                    style={{ margin: 0 }}
                    color="black"
                    state={{
                      show,
                      idMovie,
                      hour: selectedHour,
                      date: selectedDate,
                    }}
                  >
                    Mua vé
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="right-part">
          <h2 className="movie-booking-header">Phim Thịnh Hành</h2>
          <hr />
          {moviesArePlaying?.map((item, idx) => {
            if (idx > 2) return <></>;

            return (
              <div className="mini-movie-container" key={idx}>
                <img
                  src={img_url + item.backdrop_path}
                  alt="Movie poster here"
                />
                <div className="mini-right-part">
                  <h2 className="mini-movie-title">{item.title}</h2>
                  <Link className="orange-btn">Mua Vé</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default BookingTicket;
