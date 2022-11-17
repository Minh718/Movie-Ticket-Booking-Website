import './index.css';
import { Link, useLocation } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

function Payment() {
	const movie = useLocation().state.movie;
	const selectedShowtime = useLocation().state.selectedShowtime;
	const selectedSeatList = useLocation().state.selectedSeatList;

	return (
		<>
			<div className="booking-seat-layout">
				<div className="left-part">
					<form className='payment-form'>
						<label className='payment-label'>
							<span className='payment-title'>Họ và tên</span>
							<input type='text' />
						</label>
						<label className='payment-label'>
							<span className='payment-title'>Địa chỉ email</span>
							<input type='email' />
						</label>
						<label className='payment-label'>
							<span className='payment-title'>Số điện thoại</span>
							<input type='text' />
						</label>
						<label className='payment-label'>
							<span className='payment-title'>Địa chỉ email</span>
							<input type='email' />
						</label>
						<label className='payment-label'>
							<span className='payment-title'>Mã khuyến mại</span>
							<select></select>
						</label>
						<label className='payment-label'>
							<span className='payment-title'>Phương thức thanh toán</span>
							<select>
								<option value="" disabled selected hidden></option>
								<option value="CK">Chuyển khoản</option>
								<option value="VDT">Ví điện tử</option>
							</select>
						</label>
					</form>
				</div>

				<div className="right-part">
					<div className="right-part booking-movie-card">
						<h1 className='movie-title'>
							{movie.title}
						</h1>

						<div className="movie-rate">
							<AiFillStar color="yellow" />
							<span className="movie-rate-star">{movie.vote_average}/10</span>
							<span className="movie-rate-count">
								({movie.vote_count} đánh giá)
							</span>
						</div>

						<div className='booking-info'>
							<div className='booking-info-row'>
								<h3>Rạp phim: </h3>
								<span>BK Dĩ An</span>
							</div>
							<div className='booking-info-row'>
								<h3>Phòng chiếu: </h3>
								<span>2</span>
							</div>
							<div className='booking-info-row'>
								<h3>Suất chiếu: </h3>
								<span>{selectedShowtime.date}</span>
								<span> | </span>
								<span>{selectedShowtime.time}</span>
							</div>
							<div className='booking-info-row'>
								<h3>Số lượng ghế: </h3>
								<span>{selectedSeatList.length}</span>
							</div>
							<div className='booking-info-row'>
								<h3>Ghế đã chọn: </h3>
								<span>{selectedSeatList.join(',')}</span>
							</div>
							<div className='booking-info-row'>
								<h3>Giá vé: </h3>
								<span className='ticket-price'>60.000đ</span>
							</div>

							<Link
								to='/seatSelection/payment'
								className='orange-btn'
								state={{ movie, selectedShowtime, selectedSeatList }}>
								Thanh toán
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Payment;