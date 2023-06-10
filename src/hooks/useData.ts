import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
    id: number; name: string
}

interface FetchResponse<T> {
    results: T[],
    count: number
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<FetchResponse<T>>(endpoint)
            .then(res => { setData(res.data.results); setIsLoading(false) })
            .catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
                setIsLoading(false)
            })

        return () => {
            controller.abort()
        }
    }, [])
    return { data, error, isLoading }
}

export default useData