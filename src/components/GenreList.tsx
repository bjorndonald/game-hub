import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import { Fragment } from 'react'
import useGameStore from '../games/store'
import useGenres from '../hooks/useGenres'
import { Genre } from "../entities/Genre"

const GenreList = () => {
    const { data, isLoading, error } = useGenres()
    const selectedGenreId = useGameStore(s => s.gameQuery.genreId)
    const setSelectedGenreId = useGameStore(s => s.setGenreId)
    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <Fragment>
            <Heading>Genres</Heading>
            <List>
                {data?.results?.map(genre => <ListItem padding={'5px'}>
                    <HStack>
                        <Image objectFit={'cover'} boxSize={'32px'} borderRadius={8} src={genre.image_background} />
                        <Button textAlign={'left'} whiteSpace={'normal'} fontWeight={selectedGenreId === genre.id ? "bold" : "normal"} onClick={() => setSelectedGenreId(genre.id)} fontSize={'lg'} variant="link">{genre.name}</Button>
                    </HStack>
                </ListItem>)}
            </List>
        </Fragment>
    )
}

export default GenreList