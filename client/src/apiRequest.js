import axios from "axios";
import { url_database } from "../src/components/Body/api";



export const loginUser = async (user) =>{
    const data = await axios.post('/users/login',user);
    console.log(data)
    return data.data[0];
}
export const handleRefreshWeb = async () => {   
    const data = await axios.post('/users');
    return data.data[0];
}
export const registerUser = async (newUser) =>{
    console.log(newUser)
    const data = await axios.post('/users/register',newUser);
    return data.data[0];
}

export const logoutUser = async () =>{
    await axios.post(`/users/logout`);
}

export const getAllShows = async () =>{
    const data = await axios.get(`/show`);
    return data.data;
}

//import { getAllMovies, getAllRooms,getAllShows, addShow, deleteShow} from "../../../../../apiRequest";
//import { getAllShowTime,getAllShows, addShowTime,deleteShowtime} from "../../../../../apiRequest";
export const getAllMovies = async () =>{
    const data = await axios.get(`/movies`);
    return data.data;
}
export const getAllRooms = async () =>{
    const data = await axios.get(`/rooms`);
    return data.data;
}
export const getAllShowTime = async () =>{
    const data = await axios.get(`/showtime`);
    return data.data;
}
export const deleteShowtime = async (show) =>{
    await axios.post(`/showtime/delete`,show);
}
export const addShowTime = async (show) =>{
    await axios.post(`/showtime/add`,show); 
}
export const deleteShow = async (show) =>{
    await axios.post(`/show/delete`,show);
}

export const addShow = async (show) =>{
    await axios.post(`/show/add`,show);
}

export const getMovieDates = async (idMovie) => {
    const data = await axios.get(`movies/${idMovie}/dates`);
    return data.data;
}
export const getMovieDateHours = async (idMovie,date) => {
    const data = await axios.get(`movies/${idMovie}/${date}/hours`);
    return data.data;
}