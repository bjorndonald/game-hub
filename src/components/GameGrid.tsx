import { SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import useGames from '../hooks/useGames';
import apiClient from '../services/api-client';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';



const GameGrid = () => {
    const { games, error, isLoading } = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {error && <p>Error occured</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={10}>
                {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
                {!isLoading && games.map(game => <GameCard game={game} />)}
            </SimpleGrid>
        </>

    )
}

export default GameGrid