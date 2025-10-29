import React from 'react'
import { useSports } from '@/app/context/SportsContext'

const Games = () => {

    const { games, loading, error, fetchTrendingGames } = useSports();

    return (
        <div>
            <div className='Games-Section1'>
                <div className='Upcoming'>

                    <div className='Upcoming-p'>
                        <p>Upcoming Games</p>
                    </div>
                    <div className='Upcoming-h1'>
                        <p>Find and book tickets for your favorite sports events</p>
                    </div>
                </div>


                <div className='SearchBar'>

                    <div className='Search'>
                        <input className='w-[35rem] h-10 border-2 rounded-[5px]' type="text" placeholder='Search teams, venues...' />
                    </div>
                    <div className='Upcoming-button'>
                        <button className='bg-orange-500 h-9 w-24 rounded-[5px]'>All Sports</button>
                        <button className='bg-white h-9 w-24 rounded-[5px] hover:text-black hover:cursor-pointer hover:bg-blue-900 '>Basketball</button>
                        <button className='bg-white h-9 w-24 rounded-[5px] hover:text-black hover:cursor-pointer hover:bg-blue-900 '>Football</button>
                        <button className='bg-white h-9 w-24 rounded-[5px] hover:text-black hover:cursor-pointer hover:bg-blue-900 '>Baseball</button>
                        <button className='bg-white h-9 w-24 rounded-[5px] hover:text-black hover:cursor-pointer hover:bg-blue-900 '>Hockey</button>
                    </div>
                </div>

                <div className=' h-auto'>
                    
                    <ul className=' mt-7 w-[98vw] gap-5 flex flex-wrap justify-around' style={{ listStyle: 'none', padding: 0 }}>

                        {
                            games.map((game) => (

                                <div className=' p-2 border border-gray-400 h-[12.5rem] shadow-md rounded-[5px] bg-blue-800 w-[30%]' >

                                    <li key={game.idEvent} style={{ padding: '1 rem', marginBottom: '1rem', }} >

                                        <div className='h-[10em] flex flex-col gap-4'>
                                            <div className='font-bold'><h3>{game.strEvent}</h3></div>
                                            <p><span className='text-neutral-300 font-bold' >League : </span>{game.strLeague} </p>
                                            <p><span className='text-neutral-300 font-bold'>Date : </span> {new Date(game.dateEvent).toLocaleDateString()} </p>
                                            <p><span className='text-neutral-300 font-bold'>Time : </span> {game.strTime}</p>
                                        </div>


                                    </li>

                                </div>

                            ))

                        }

                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Games