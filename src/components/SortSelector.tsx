import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

function SortSelector() {
    return (
        <Menu >
            <MenuButton as={Button} rightIcon={<BsChevronDown />} >
                {/* {selectedPlatform?.name || 'Platform'} */}
                Order By: Relevance
            </MenuButton>
            <MenuList>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average rating</MenuItem>
                {/* {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)} */}
            </MenuList>
        </Menu>
    )
}

export default SortSelector