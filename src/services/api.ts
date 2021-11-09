import axios from "axios";

const token = localStorage.getItem('@Token')

export const api = axios.create({
    baseURL: 'http://afmiguez.me:9002',
    headers: {
        Authorization: `Bearer ${token}`
    }
})