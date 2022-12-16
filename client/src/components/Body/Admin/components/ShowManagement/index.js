import "./index.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { useState, useEffect } from "react";
import Select from "react-select";
import {
  getAllMovies,
  getAllRooms,
  getAllShows,
  addShow,
  deleteShow,
} from "../../../../../apiRequest";
import axios from "axios";
export default function ShowManagement() {
  const [idMovie, setIdMovie] = useState(null);
  const [price, setPrice] = useState(null);
  const [room, setRoom] = useState(null);
  const [shows, setShows] = useState(null);

  const [roomOptions, setRoomOptions] = useState([]);
  const [movieOptions, setMovieOptions] = useState([]);
  const fetchShows = async () => {
    const resShows = await getAllShows();
    setShows(
      resShows.map((show) => ({
        showID: show.idShow,
        movieID: show.idMovie,
        price: show.price,
        name: show.title,
        room: show.room,
      }))
    );
  };
  useEffect(() => {
    fetchShows();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const resMovies = await getAllMovies();
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
    await fetchShows();
  };
  console.log(shows);
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
        <input
          name="dateShow"
          id="dateShow"
          className="select_tag"
          placeholder="Nhập giá"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <Select
          name="room"
          id="room"
          className="select_tag"
          placeholder="Chọn phòng"
          options={roomOptions}
          onChange={(e) => {
            setRoom(e.value);
          }}
        />
        <button type="submit">Thêm show</button>
      </form>
      <div className="show-container">
        <ul className="show-info">
          {shows?.map((show) => {
            return (
              <li>
                <div className="info-container">
                  <p>{show.showID}</p>
                  <p>{show.movieID}</p>
                  <p>{show.name}</p>
                  <p>{show.price}</p>
                  <p>{show.room}</p>
                </div>
                <div className="show-modify">
                  <AiFillEdit className="show-mod edit-show" />
                  <AiFillDelete
                    className="show-mod delete-show"
                    onClick={async () => {
                      await deleteShow({
                        showID: show.showID,
                      });
                      await fetchShows();
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
