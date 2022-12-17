import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Select from "react-select";
import {
  addShow,
  getAllMoviesLeft,
  getAllRooms,
} from "../../../../../apiRequest";
import "./index.css";
export default function AddShow() {
  const [idMovie, setIdMovie] = useState("");
  const [price, setPrice] = useState("");
  const [room, setRoom] = useState("");
  const navigate = useNavigate();
  const [roomOptions, setRoomOptions] = useState([]);
  const [movieOptions, setMovieOptions] = useState([]);
  const { setOption } = useOutletContext();

  useEffect(() => {
    const fetchMovies = async () => {
      const resMovies = await getAllMoviesLeft();
      setMovieOptions(
        resMovies.map((movie) => ({
          value: movie.id,
          label: movie.title,
        }))
      );
    };
    fetchMovies();
  }, []);
  useEffect(() => {
    const fetcRooms = async () => {
      const resRooms = await getAllRooms();
      setRoomOptions(
        resRooms.map((room) => ({
          value: room.name,
          label: room.name,
        }))
      );
    };
    fetcRooms();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newShow = {
      idMovie: idMovie,
      price: parseInt(price),
      room: room,
    };
    await addShow(newShow);

    setOption({ isOpen: true, text: "Thêm show thành công", color: "#38E54D" });
    navigate("/adminPage/show");
  };
  return (
    <div className="show-management">
      <div className="show-header">
        <h2>Quản lý Show</h2>
      </div>
      <form className="add-show-form" onSubmit={handleSubmit}>
        <Select
          name="movieShow"
          id="movieShow"
          className="select_tag"
          placeholder="Chọn film"
          options={movieOptions}
          onChange={(e) => {
            setIdMovie(e.value);
          }}
        />
        <div className="container-input-price">
          <input
            name="dateShow"
            id="dateShow"
            className="price-show-input"
            placeholder="Nhập giá"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
          ></input>
          <span className="vnd-end-input">VNĐ</span>
        </div>
        <Select
          name="room"
          id="room"
          className="select_tag"
          placeholder="Chọn phòng"
          options={roomOptions}
          onChange={(e) => {
            setRoom(e.value);
          }}
          // defaultValue={room}
        />
        <div className="select_tag">
          <button type="submit">Thêm show</button>
        </div>
      </form>
    </div>
  );
}
