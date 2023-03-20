import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://gp.uniparticle.com/accounts', 
});

Axios.interceptors.response.use(
    response => response,
    error => error.response
)
export default Axios;