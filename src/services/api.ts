import axios from "axios";

const token = localStorage.getItem('@Token')

export const api = axios.create({
    baseURL: '',
    headers: {'Authorization': `Bearer ${token}`}
})