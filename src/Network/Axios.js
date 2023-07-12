import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://3.120.37.202/accounts', 
});

Axios.interceptors.response.use(
    response => response,
    error => error.response
)
export default Axios;