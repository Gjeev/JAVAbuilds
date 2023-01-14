import axios from 'axios';

// const PORT=import.meta.env.VITE_SERVER_PORT;
const base=`http://localhost:3000/user` ;
const API = axios.create({ baseURL: base });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    console.log(req.headers.Authorization);
    console.log(JSON.parse(localStorage.getItem('profile')));
  }

  return req;
});

export const logIn = (user) => API.post('/logIn', user);
export const signUp = (user) => API.post('/signUp', user);