import './index.css'
import { Link, useLocation } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState, useRef } from 'react';

function BookingSeat() {
	const movie = useLocation().state.movie;
	const selectedShowtime = useLocation().state.selectedShowtime;
	const seatRef = useRef();
	const seatClassNames = ['seat-empty', 'seat-selected', 'seat-sold'];
	const [selectedSeatList, setSelectedSeatList] = useState([]);
	const [seatCount, setSeatCount] = useState(0);

	const [seatArray, setSeatArray] = useState([
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	]);

	function handleIncreaseSeatCount() {
		if (seatCount < 5)
			setSeatCount(seatCount + 1);
	}

	function handleDecreaseSeatCount() {
		if (seatCount === selectedSeatList.length)
		{
			return;
		}

		if (seatCount > 0)
			setSeatCount(seatCount - 1);
	}

	useEffect(() => {
		seatRef.current.innerText = (selectedSeatList.length > 0) ? selectedSeatList : "Chưa chọn";
	});

	function handleSeatClick(i, j) {
		switch (seatArray[i][j])
		{
			case 1: {
				seatArray[i][j] = 0;
				selectedSeatList.pop();
				break;
			}
			case 0: {
				if (seatCount > selectedSeatList.length)
				{
					seatArray[i][j] = 1;
					selectedSeatList.push(String.fromCharCode('A'.charCodeAt(0) + i) + (j + 1));
				}
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
					<div className='screen-position'>
						Màn hình
					</div>

					<div className='seats-area'>
						{seatArray.map((seatRow, i) => (
							<div key={i}>
								{seatRow.map((seat, j) => {
									return (
										<div
											key={[i, j]} pos={[i, j]}
											onClick={() => handleSeatClick(i, j)}
											className={`seat ${seatClassNames[seat]}`}>
										</div>
									)
								})}
							</div>
						))}
					</div>

					<div className='seat-manual'>
						<div className='seat-selected seat'></div>
						<span>Ghế đã chọn</span>
						<div className='seat-sold seat'></div>
						<span>Ghế đã bán</span>
						<div className='seat-empty seat'></div>
						<span>Ghế trống</span>
					</div>
				</div>

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
							<span>{seatCount}</span>
							<button className='count-update-btn' onClick={handleIncreaseSeatCount}>
								+
							</button>
							<button className='count-update-btn' onClick={handleDecreaseSeatCount}>
								-
							</button>
						</div>
						<div className='booking-info-row'>
							<h3>Ghế đã chọn: </h3>
							<span ref={seatRef}>Chưa chọn</span>
						</div>
						<div className='booking-info-row'>
							<h3>Giá vé: </h3>
							<span className='ticket-price'>60.000đ</span>
						</div>

						<button className='orange-btn'>
							Đặt vé
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default BookingSeat;