import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import platforms from './../data/platforms'

export interface Platform {
    id: number; name: string; slug: string
}
const apiClient = new APIClient<Platform>('/platforms/lists/parents')
// const usePlatforms = () => useData<Platform>('/platforms/list/parents')

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24 hours
    initialData: { count: platforms.length, results: platforms, next: null }
})

export default usePlatforms