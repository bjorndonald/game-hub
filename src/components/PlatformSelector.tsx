import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useData from '../hooks/useData'
import usePlatforms, { Platform } from '../hooks/usePlatforms'
interface Props {
    onSelectPlatform: (platform: Platform) => void,
    selectedPlatform: Platform | null
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, isLoading, error } = usePlatforms()
    if (error) return null
    if (isLoading) return null
    return (
        <Menu >
            <MenuButton as={Button} rightIcon={<BsChevronDown />} >
                {selectedPlatform?.name || 'Platform'}
            </MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector