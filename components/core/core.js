import axios from 'axios'
let baseURL = 'http://localhost:3000/v0'
if( process.env.NODE_ENV === "production" ) {
    baseURL = 'http://localhost:5555/v0/';
}
const instance = axios.create({    
    baseURL,
    withCredentials: true,
});

instance.interceptors.request.use(function (config) {
    // config.headers.authorization = `Bearer ${localStorage.getItem('UserToken')}`
    return config
}, function (error) {
    return Promise.reject(error)
})

export default instance; 
