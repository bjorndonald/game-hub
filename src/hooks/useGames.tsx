import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import ms from 'ms';
import useGameStore from '../games/store';

import APIClient, { FetchResponse } from '../services/api-client';

import { Platform } from './usePlatforms';

export interface Game {
  id: number,
  name: string,
  background_image: string,
  parent_platforms: { platform: Platform }[],
  metacritic: number,
  rating_top: number,
}

const apiClient = new APIClient<Game>('/games')

const useGames = () => {
  const gameQuery = useGameStore(s => s.gameQuery)
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['game', gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      }
    }),
    staleTime: ms('24h'),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    }
  })
}

export default useGames