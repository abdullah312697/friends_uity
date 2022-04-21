import axios from 'axios';
export const axiosInst = axios.create({
    withCredentials: true,
    baseURL: "https://damp-dusk-75903.herokuapp.com/api/"
});