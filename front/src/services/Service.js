import axios from 'axios';

const baseURL = `https://jsonplaceholder.typicode.com`

class Service {
    constructor() {
        this.client = axios.create({
            headers: {
                common : {
                    "Access-Control-Allow-Origin" : "*",
                },
            },
            baseURL
        });
        this.setInterceptor();
    }

    setInterceptor() {
        this.client.interceptors.request.use(config => {
            const token = window.localStorage.getItem("token");

            if(!!token) {
                Object.assign(config.headers, {
                    Authorization: `${token}`
                });
            }

            return config;
        });
    };

    attachHeaders(headers) {
        Object.assign(this.client.defaults.headers, headers);
    }

    detachHeader(headerKey) {
        delete this.client.defaults.headers[headerKey];
    }

    getApiClient() {
        return this.client;
    }
}

export default Service;