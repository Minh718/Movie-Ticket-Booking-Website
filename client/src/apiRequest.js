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
    const data = await axios.post(`/users/logout`);
    console.log(data)
}