import axios from 'axios';

export const axiosInstance = axios.create({
     baseUrl: "http://192.168.152.60:8000/",
     timeout: 1000,
     headers: { 'Content-Type': 'multipart/form-data',
     'Accept': "application/json"}
})