import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useGameStore from '../games/store'
import usePlatform from '../hooks/usePlatform'

import usePlatforms, { Platform } from '../hooks/usePlatforms'

const PlatformSelector = () => {
    const { data, isLoading, error } = usePlatforms()
    if (error) return null
    if (isLoading) return null
    const selectedPlatformId = useGameStore(s => s.gameQuery.platformId)
    const onSelectPlatform = useGameStore(s => s.setPlatformId)
    const platform = usePlatform(selectedPlatformId)
    return (
        <Menu >
            <MenuButton as={Button} rightIcon={<BsChevronDown />} >
                {platform?.name || 'Platform'}
            </MenuButton>
            <MenuList>
                {data?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform.id)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector