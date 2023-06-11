import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform'

import usePlatforms, { Platform } from '../hooks/usePlatforms'
interface Props {
    onSelectPlatform: (platformId: number) => void,
    selectedPlatformId?: number
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
    const { data, isLoading, error } = usePlatforms()
    if (error) return null
    if (isLoading) return null
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