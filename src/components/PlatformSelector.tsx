import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useData from '../hooks/useData'
import usePlatforms, { Platform } from '../hooks/usePlatforms'

const PlatformSelector = () => {
    const { data, isLoading, error } = usePlatforms()
    if (error) return null
    if (isLoading) return null
    return (
        <Menu >
            <MenuButton as={Button} rightIcon={<BsChevronDown />} ></MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector