import axios from 'axios';
const requestInterceptor = (config) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => resolve(config), 1000);
    });
};

const responseInterceptor = (response) => {
    return response;
};
const errorHandler=(error)=>{

        return Promise.reject(error)
}
const API_AXIOS = axios.create({
    baseURL: 'https://swapi.dev/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});
API_AXIOS.interceptors.request.use(requestInterceptor);
API_AXIOS.interceptors.response.use(responseInterceptor,errorHandler);
export { API_AXIOS };
