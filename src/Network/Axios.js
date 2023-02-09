import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://gp.uniparticle.com/accounts/auth', 
});

Axios.interceptors.response.use(
    response => response,
    error => error.response
)
export default Axios;