import axios from "axios";
import { url_database } from "../src/components/Body/api";
export const loginUser = async (user) => {
  const data = await axios.post(`${url_database}/users/login`, user);
  console.log(data);
  return data.data[0];
};
export const handleRefreshWeb = async () => {
  const data = await axios.post(`${url_database}/users`);
  return data.data[0];
};
export const registerUser = async (newUser) => {
  const data = await axios.post(`${url_database}/users/register`, newUser);
  return data.data[0];
};

export const getAllShows = async () => {
  const data = await axios.get(`${url_database}/show`);
  return data.data;
};

export const getAllMoviesLeft = async () => {
  const data = await axios.get(`${url_database}/movies/left`);
  return data.data;
};
export const getAllMovies = async () => {
  const data = await axios.get(`${url_database}/movies`);
  return data.data;
};
export const getAllRooms = async () => {
  const data = await axios.get(`${url_database}/rooms`);
  return data.data;
};
export const getAllShowTime = async () => {
  const data = await axios.get(`${url_database}/showtime`);
  return data.data;
};
export const deleteShowtime = async (show) => {
  await axios.post(`${url_database}/showtime/delete`, show);
};
export const addShowTime = async (show) => {
  await axios.post(`${url_database}/showtime/add`, show);
};
export const deleteShow = async (show) => {
  await axios.post(`${url_database}/show/delete`, show);
};

export const addShow = async (show) => {
  await axios.post(`${url_database}/show/add`, show);
};
export const deleteMovie = async (id) => {
  await axios.get(`${url_database}/movies/delete/${id}`);
};

export const getMovieDates = async (idMovie) => {
  const data = await axios.get(`${url_database}/movies/${idMovie}/dates`);
  return data.data;
};
export const getMovieHours = async (values) => {
  const data = await axios.post(`${url_database}/movies/hours`, values);
  return data.data;
};

export const insertVoucher = async (values) => {
  console.log(values);
  const data = await axios.post(`${url_database}/vouchers/insert`, values);
  return data.data[0];
};
export const insertMovie = async (values) => {
  const data = await axios.post(`${url_database}/movies/insert`, values);
  return data.data[0];
};
export const convertVoucher = async (values) => {
  const data = await axios.post(`${url_database}/vouchers/convert`, values);
  return data.data[0];
};
export const updateVoucher = async (values) => {
  const data = await axios.post(`${url_database}/vouchers/update`, values);
  return data.data[0];
};
export const getAllVouchers = async () => {
  const data = await axios.get(`${url_database}/vouchers`);
  return data.data;
};

export const getAllVouchersLeft = async (idUser) => {
  const data = await axios.get(`${url_database}/vouchers/${idUser}`);
  console.log(data);

  return data.data;
};
export const getAllUserVouchers = async (idUser) => {
  console.log(idUser);
  const data = await axios.get(`${url_database}/vouchers/${idUser}/user`);
  console.log(data);
  return data.data;
};
export const getAllUserTickets = async (idUser) => {
  const data = await axios.get(`${url_database}/tickets/${idUser}`);
  return data.data[0];
};

export const deleteVoucherById = async (idVoucher) => {
  console.log(idVoucher);
  const data = await axios.get(`${url_database}/vouchers/delete/${idVoucher}`);
  return data.data[0];
};

export const getInfoMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=14ccdb96456935bbb41591e99697d262`
  );
  const data = await res.json();
  return data;
};
export const getAllHourInRoom = async (values) => {
  const data = await axios.post(`${url_database}/showtime/hours`, values);
  return data.data[0].map((item) => item.hour);
};
export const insertHours = async (values) => {
  const data = await axios.post(`${url_database}/showtime/insert`, values);
  return data.data[0];
};
