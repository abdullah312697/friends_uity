import axios from 'axios';
export const axiosInst = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:5000/api/"
});