import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
    results: T[],
    count: number,
    next: string | null
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "36a817bfe6ec462bbcb98977ff93308b"
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }
}

export default APIClient