import React from 'react'
import { IoPeopleCircleSharp } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { useSports } from '@/app/context/SportsContext';
import { useState } from 'react';

const Sports = () => {

    const { games, loading, error, fetchTrendingGames } = useSports();

    return (
        <div>
            <div className='Sports-Section1'>
                <div className='Categories'>

                    <div className='Categories-p'>
                        <p>Sports Categories</p>
                    </div>
                    <div className='Categories-h1'>
                        <p>Discover tickets for all your favorite sports. From basketball to tennis, we have premium seats for the biggest games and tournaments.</p>
                    </div>
                </div>

                {/* <div className='For-api'>
                    
                </div> */}

                <div className='For-api'>
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

                <div className='Booking'>

                    <div className='Booking-p'>
                        <p>Why Choose SportsTix?</p>
                    </div>
                    <div className='h-40 w-[100%] flex justify-around'>

                        <div className='w-[30%]'>
                            <p><FaTrophy className='text-7xl flex justify-center w-[100%]' /></p>
                            <h1 className='font-bold'>Premium Seats</h1>
                            <p className='text-[14px]'>Access to the best seats in every venue, from courtside to VIP boxes.</p>
                        </div>

                        <div className='w-[30%]'>
                            <p><IoPeopleCircleSharp className='text-7xl flex justify-center w-[100%]' /></p>
                            <h1 className='font-bold'>Premium Seats</h1>
                            <p className='text-[14px]'>Over 500,000 satisfied customers trust us for their sports entertainment.</p>
                        </div>

                        <div className='w-[30%]'>
                            <p>
                                <CiCalendar className='text-7xl flex justify-center w-[100%]' /> </p>
                            <h1 className='font-bold'>Premium Seats</h1>
                            <p className='text-[14px]'>Simple, secure checkout process with instant ticket delivery.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sports