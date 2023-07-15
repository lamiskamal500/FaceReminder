import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://52.58.150.200/accounts', 
});

Axios.interceptors.response.use(
    response => response,
    error => error.response
)
export default Axios;