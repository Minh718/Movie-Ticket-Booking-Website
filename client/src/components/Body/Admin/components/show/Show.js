import React, { useEffect, useState } from "react";
import {
  deleteShow,
  getAllShows,
  getInfoMovie,
} from "../../../../../apiRequest";
import Popup from "reactjs-popup";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { url_img } from "../../../api";
import { SlideShow } from "./slideshow";
export const Show = ({ show, handleDeleteShow }) => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    (async () => {
      setMovie(await getInfoMovie(show.idMovie));
    })();
  }, []);
  return (
    <>
      <tr key={show.idShow}>
        <td>{show.idShow}</td>
        <td>{movie?.title}</td>
        <td>
          <img
            src={url_img + movie?.backdrop_path}
            className="img_poster_show"
          />
        </td>
        <td>{show?.price}k</td>
        <td>{show?.room}</td>
        <td className="container-btns-date">
          <button
            onClick={() => navigate("/adminPage/editShow", { state: { show } })}
          >
            <FaEdit />
          </button>
          <button onClick={() => handleDeleteShow(show.idShow)}>
            <FaTrashAlt />
          </button>
        </td>
        <td>
          <Popup
            trigger={
              <button className="btn-place_slideshow">Đặt giờ chiếu</button>
            }
            modal
            nested
          >
            {(close) => (
              <SlideShow idShow={show.idShow} close={close} room={show.room} />
            )}
          </Popup>
        </td>
      </tr>
    </>
  );
};
