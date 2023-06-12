import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs'
import useGameStore from '../games/store';


const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameStore(s => s.setSearchText)
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) setSearchText(ref.current.value)
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input borderRadius={20} placeholder='Search games...' variant={'filled'} />
            </InputGroup>
        </form>
    )
}

export default SearchInput