import "./index.css";
import { useLocation, Link } from "react-router-dom";
import { img_url, fetchTopRatedMovies } from "../api";
import { AiFillStar } from "react-icons/ai";
import { useGlobalContext } from "../../../context";

function BookingTicket() {
  const movie = useLocation().state.movie;
  // const topMovie = useLocation().state.moviesArePlaying?.splice(0, 3);
  const canPlaceTicket = useLocation().state.canPlaceTicket || false;
  const { moviesArePlaying } = useGlobalContext();
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
                <select className="date-selection">
                  <option value="" hidden>
                    Chọn ngày
                  </option>
                  <option>15/10/2022</option>
                  <option>16/10/2022</option>
                  <option>17/10/2022</option>
                  <option>18/10/2022</option>
                  <option>19/10/2022</option>
                </select>
                <select className="time-selection">
                  <option value="" hidden>
                    Chọn giờ
                  </option>
                  <option>09:30</option>
                  <option>13:30</option>
                  <option>15:30</option>
                  <option>20:30</option>
                </select>
                <button className="orange-btn">Mua Vé</button>
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
