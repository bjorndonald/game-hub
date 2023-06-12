import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useGameStore from '../games/store'

function SortSelector() {
    const sortOrder = useGameStore(s => s.gameQuery.sortOrder)
    const onSelectSortOrder = useGameStore(s => s.setSortOrder)
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ]

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder)
    return (
        <Menu >
            <MenuButton as={Button} rightIcon={<BsChevronDown />} >
                {/* {selectedPlatform?.name || 'Platform'} */}
                Order By: {currentSortOrder?.label}
            </MenuButton>
            <MenuList>
                {sortOrders.map(order => <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value}
                    value={order.value}>{order.label}</MenuItem>)}
                {/* {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)} */}
            </MenuList>
        </Menu>
    )
}

export default SortSelector