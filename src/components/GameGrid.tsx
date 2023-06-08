import React, { useEffect, useState } from 'react'
import useGames from '../hooks/useGames';
import apiClient from '../services/api-client';



const GameGrid = () => {
    const { games, error } = useGames()

    return (
        <>
            {error && <p>Error occured</p>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>

    )
}

export default GameGrid