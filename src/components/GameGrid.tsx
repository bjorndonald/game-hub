import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import React, { Fragment, useEffect, useState } from 'react'
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';
import apiClient from '../services/api-client';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
    gameQuery: GameQuery,

}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <Box padding={"10px"}>
            {error && <p>Error occured</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} >
                {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton /></GameCardContainer>)}
                {!isLoading &&
                    data?.pages.map((page, index) =>
                        <Fragment key={index}>
                            {page.results.map(game =>
                                <GameCardContainer key={game.id}><GameCard game={game} /></GameCardContainer>
                            )}
                        </Fragment>
                    )}
            </SimpleGrid>
            {hasNextPage && <Button onClick={() => fetchNextPage()} marginY={2}>{isFetchingNextPage ? 'Loading...' : ' Load more'}</Button>
            }
        </Box>

    )
}

export default GameGrid