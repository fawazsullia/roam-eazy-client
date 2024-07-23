import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:9005',
    withCredentials: true,
})