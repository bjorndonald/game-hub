import { SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import useGames from '../hooks/useGames';
import apiClient from '../services/api-client';
import GameCard from './GameCard';



const GameGrid = () => {
    const { games, error } = useGames()

    return (
        <>
            {error && <p>Error occured</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={10}>
                {games.map(game => <GameCard game={game} />)}
            </SimpleGrid>
        </>

    )
}

export default GameGrid