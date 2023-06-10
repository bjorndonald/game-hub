import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'

interface Props {
    onSelectGenre: (genre: Genre) => void,
    selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <List>
            {data.map(genre => <ListItem padding={'5px'}>
                <HStack>
                    <Image boxSize={'32px'} borderRadius={8} src={genre.image_background} />
                    <Button fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"} onClick={() => onSelectGenre(genre)} fontSize={'lg'} variant="link">{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    )
}

export default GenreList