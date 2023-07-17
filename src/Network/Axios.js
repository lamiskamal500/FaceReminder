import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://face-reminder.online/accounts', 
});

// Axios.interceptors.response.use(
//     response => response,
//     error => error.response
// )
Axios.interceptors.response.use(
    (response) => {console.log('response', response) 
    return response},
    error => error.response
)
Axios.interceptors.request.use(
    (request) => {console.log('request', request) 
    return request},
    error => error.request
)
export default Axios; 