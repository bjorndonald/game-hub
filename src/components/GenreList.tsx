import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import { Fragment } from 'react'
import useGenres, { Genre } from '../hooks/useGenres'

interface Props {
    onSelectGenre: (genreId: number) => void,
    selectedGenreId?: number
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
    const { data, isLoading, error } = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <Fragment>
            <Heading>Genres</Heading>
            <List>
                {data?.results?.map(genre => <ListItem padding={'5px'}>
                    <HStack>
                        <Image objectFit={'cover'} boxSize={'32px'} borderRadius={8} src={genre.image_background} />
                        <Button textAlign={'left'} whiteSpace={'normal'} fontWeight={selectedGenreId === genre.id ? "bold" : "normal"} onClick={() => onSelectGenre(genre.id)} fontSize={'lg'} variant="link">{genre.name}</Button>
                    </HStack>
                </ListItem>)}
            </List>
        </Fragment>
    )
}

export default GenreList