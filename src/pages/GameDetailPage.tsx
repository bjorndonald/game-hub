import { Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom'
import CriticScore from '../components/CriticScore';
import DefinitionItem from '../components/DefinitionItem';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import useGame from '../hooks/useGame';

function GameDetailPage() {
    const { slug } = useParams();
    const { data: game, error, isLoading } = useGame(slug!)

    if (isLoading) return <Spinner />

    if (error || !game) throw error;

    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandableText>
                {game.description_raw}
            </ExpandableText>
            <GameAttributes game={game} />
            <GameTrailer gameId={game.id} />
        </>
    )
}

export default GameDetailPage