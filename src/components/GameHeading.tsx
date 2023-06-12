import { Heading } from '@chakra-ui/react'
import React from 'react'

import useGameStore from '../games/store'
import useGenre from '../hooks/useGenre'
import useGenres from '../hooks/useGenres'
import usePlatform from '../hooks/usePlatform'
import usePlatforms from '../hooks/usePlatforms'

const GameHeading = () => {

    const gameQuery = useGameStore(s => s.gameQuery)
    const genre = useGenre(gameQuery.genreId)
    const platform = usePlatform(gameQuery.platformId)
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
    return (
        <Heading fontSize={'5xl'} marginY={5} as={'h1'}>
            {heading}
        </Heading>
    )
}

export default GameHeading