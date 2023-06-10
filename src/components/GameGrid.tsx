import { SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import useGames from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';
import apiClient from '../services/api-client';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
    selectedGenre: Genre | null
}

const GameGrid = ({ selectedGenre }: Props) => {
    const { data, error, isLoading } = useGames(selectedGenre as Genre)
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {error && <p>Error occured</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3} padding={10}>
                {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton /></GameCardContainer>)}
                {!isLoading && data.map(game =>
                    <GameCardContainer key={game.id}><GameCard game={game} /></GameCardContainer>
                )}
            </SimpleGrid>
        </>

    )
}

export default GameGrid