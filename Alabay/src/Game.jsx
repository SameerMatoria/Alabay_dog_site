import React from 'react'
import gameImg from './Alabay Assets/Alabay Games/game.png'
import textImg from './Alabay Assets/img.png'
import guard1 from './Alabay Assets/Alabay Games/Alabay Guard/guard1.png'
import guard2 from './Alabay Assets/Alabay Games/Alabay Guard/guard2.png'
import guard3 from './Alabay Assets/Alabay Games/Alabay Guard/guard3.png'
import { FaPlayCircle } from "react-icons/fa";

function Game() {
    return (
        <div
            className="fixed h-screen w-full bg-cover bg-center z-1 text-white overflow-auto"
            style={{ backgroundImage: `url(${gameImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

            <div className="p-10 mt-10 ">
                <div className='fixed top-20'>
                    <img className='text-white w-[500px] h-[120px] object-fill' src={textImg} alt="" />
                    <h2 className="text-4xl  tracking-widest text-purple-300  mt-0 font-bold">SHEPHERD OF THE STEPPES</h2>
                </div>
                <p className="mt-[200px] font-bold text-xl">Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors. </p>
                <button className="mt-4 px-6 py-3 bg-purple-400 text-white font-bold rounded-3xl hover:bg-purple-600 flex items-center">
                    <FaPlayCircle className='text-black mr-2' />
                    PLAY
                </button>
            </div>
            <div className="pl-10 mt-0 ">
                <h2 className="text-2xl tracking-widest text-purple-300  mt-2 font-bold">GAME <span className='text-white'>PREVIEW</span> </h2>
                <div className='flex gap-10 mt-5'>
                    <img src={guard1} className='h-[300px] rounded-3xl border border-white' alt="" />
                    <img src={guard2} className='h-[300px] rounded-3xl border border-white' alt="" />
                    <img src={guard3} className='h-[300px] rounded-3xl border border-white' alt="" />
                </div>
            </div>
            <div className='pl-10 h-screen mt-20'>
                <h2 className="text-3xl tracking-widest text-purple-300  mt-0 font-bold">FEATURES</h2>
                <p className="mt-10  text-xl">Explore a variety of landscapes, including <span className='text-purple-300'>mountains</span>, <span className='text-purple-300'>forests</span>,<span className='text-purple-300'>deserts</span>, and <span className='text-purple-300'>ancient ruins</span>. </p>
                <p className="mt-5 text-xl">Use the Alabay's abilities to solve puzzles that involve moving objects, activating mechanisms, or finding hidden clues. </p>
                <p className="mt-5 text-xl">
                    Discover relics that tell the story of the Alabay’s ancestors, each piece contributing to a larger narrative about the breed's role <br /> in ancient history.</p>
                <p className="mt-5 text-xl">
                    Challenge Modes: <br />
                    -<span className='text-purple-300'>Time Trials</span>: Compete in special timed challenges where the Alabai must navigate through complex mazes or
                    complete puzzles within a time limit.<br />
                    - <span className='text-purple-300'>Exploration Mastery</span>: A mode that rewards players for fully exploring every nook and cranny of the game’s world,
                    uncovering all secrets</p>

            </div>

        </div>
    )
}

export default Game