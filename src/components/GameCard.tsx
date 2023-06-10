import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'
import PlatformIconList from './PlatformIconList'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (

        <Card >
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack marginBottom={3} justifyContent={"space-between"}>
                    <PlatformIconList platforms={game.parent_platforms.map(({ platform }) => platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
            </CardBody>
        </Card>

    )
}

export default GameCard