import { SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import useGames from '../hooks/useGames';
import apiClient from '../services/api-client';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';



const GameGrid = () => {
    const { data, error, isLoading } = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {error && <p>Error occured</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={10}>
                {isLoading && skeletons.map(skeleton => <GameCardContainer><GameCardSkeleton key={skeleton} /></GameCardContainer>)}
                {!isLoading && data.map(game =>
                    <GameCardContainer><GameCard game={game} /></GameCardContainer>
                )}
            </SimpleGrid>
        </>

    )
}

export default GameGrid