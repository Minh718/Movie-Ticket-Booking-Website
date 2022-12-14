import axios from "axios";
import { url_database } from "../src/components/Body/api";

export const loginUser = async (user) => {
  const data = await axios.post("/users/login", user);
  console.log(data);
  return data.data[0];
};
export const handleRefreshWeb = async () => {
  const data = await axios.post("/users");
  return data.data[0];
};
export const registerUser = async (newUser) => {
  console.log(newUser);
  const data = await axios.post("/users/register", newUser);
  return data.data[0];
};

export const logoutUser = async () => {
  await axios.post(`/users/logout`);
};

export const getAllShows = async () => {
  const data = await axios.get(`/show`);
  return data.data;
};

export const getMovieDates = async (idMovie) => {
  const data = await axios.get(`movies/${idMovie}/dates`);
  return data.data;
};
export const getMovieDateHours = async (idMovie, date) => {
  const data = await axios.get(`movies/${idMovie}/${date}/hours`);
  return data.data;
};

export const insertVoucher = async (values) => {
  const data = await axios.post(`${url_database}/vouchers/insert`, values);
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
export const deleteVoucherById = async (idVoucher) => {
  console.log(idVoucher);
  const data = await axios.get(`${url_database}/vouchers/delete/${idVoucher}`);
  return data.data[0];
};
