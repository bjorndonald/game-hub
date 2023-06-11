import axios from 'axios';

export interface FetchResponse<T> {
    results: T[],
    count: number
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "36a817bfe6ec462bbcb98977ff93308b"
    }
})