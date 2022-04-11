import axios from 'axios';
export const axiosInst = axios.create({
    withCredentials: true,
    baseURL: "https://kamilksl.herokuapp.com/api/"
});