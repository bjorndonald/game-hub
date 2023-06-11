import { Box, Button, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'

import { Genre } from './hooks/useGenres'
import { Platform } from './hooks/usePlatforms'

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string,
  searchText: string,
  pageSize: number,
}

const pageSize = 15

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({ pageSize } as GameQuery)
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"` // 1024px
    }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area={"nav"}><NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} /></GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genreId) => setGameQuery({ ...gameQuery, genreId })} />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <Box marginLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector selectedPlatformId={gameQuery.platformId}
                onSelectPlatform={(platformId) => setGameQuery({ ...gameQuery, platformId })} />
            </Box>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={sortOrder => setGameQuery({ ...gameQuery, sortOrder })} />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
