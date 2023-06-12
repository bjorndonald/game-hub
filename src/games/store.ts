import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools'

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string,
    searchText?: string,

}

interface GameStore {
    gameQuery: GameQuery
    setSearchText: (searchText: string) => void
    setGenreId: (genreId: number) => void
    setPlatformId: (platformId: number) => void
    setSortOrder: (sortOrder: string) => void
}

const useGameStore = create<GameStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setSortOrder: (sortOrder) => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
    setGenreId: (genreId) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
    setPlatformId: (platformId) => set((store) => ({ gameQuery: { ...store.gameQuery, platformId } }))
}))

if (process.env.NODE_ENV === 'development')
    mountStoreDevtool("Counter Store", useGameStore)

export default useGameStore
