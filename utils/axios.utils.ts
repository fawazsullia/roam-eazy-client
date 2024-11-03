import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: true,
})