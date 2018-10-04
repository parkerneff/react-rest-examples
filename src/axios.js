import axios from 'axios';

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common['Authorization'] = 'AUTHTOKEN_INST';

// axios.interceptors.request.use(request => {


export default instance;

