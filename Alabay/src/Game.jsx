import React from 'react'
import gameImg from './Alabay Assets/Alabay Games/game.png'

function Game() {
    return (
        <div
            className="fixed h-screen w-full bg-cover bg-center z-1"
            style={{ backgroundImage: `url(${gameImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >Game</div>
    )
}

export default Game