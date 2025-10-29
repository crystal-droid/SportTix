// "use client"
import { useEffect, useState } from 'react'
import { Fixtures, League, TeamsResponse } from '@/types/sportsType'
import { useSports } from '@/app/context/SportsContext'
import React from 'react'



const TrendingGames = () => {

  const { games, loading, error, fetchTrendingGames } = useSports();

  useEffect(() => {
    fetchTrendingGames();
  }, []);

  if (loading) {
    return <div>Loading trending games... </div>
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>
  }

  if (!games || games.length === 0) {
    return <div>No upComing games found.</div>
  }

  return (
    <div>
      <ul className=' mt-7 w-[98vw] gap-5 flex flex-wrap justify-around' style={{ listStyle: 'none', padding: 0 }}>

        {
          games.map((game) => (

            <div className=' p-2 border border-gray-400 h-[8.5rem] shadow-md rounded-[5px] bg-white w-[30%]' >

            <li key={game.idEvent} style={{ padding: '1 rem', marginBottom: '1rem', }} >

              
               <div className='font-bold'><h3>{game.strEvent}</h3></div>
                <p><span className='text-gray-500 font-bold' >League:</span>{game.strLeague} </p>
                <p><span className='text-gray-500 font-bold'>Date:</span> {new Date(game.dateEvent).toLocaleDateString()} </p>
                <p><span className='text-gray-500 font-bold'>Time:</span> {game.strTime}</p>
              

            </li>

            </div>

          ))

        }

      </ul>

    </div>

  )
}

export default TrendingGames;