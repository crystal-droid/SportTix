'use client'
import React from 'react'
import About from './banner/About'
import Games from './banner/Games'
import Home from './banner/Home'
import Sports from './banner/Sports'
import { CurrentTabProps } from '@/types'
import { useState, useRef } from 'react'

const HomeComponent = () => {


    //state to keep track of the active form
    const [activeBanner, setActiveBanner] = useState('home')
    const[footballTeams, setFootballTeams] = useState()

    //function to handle form change
    const handleBannerChange = (currentTab: CurrentTabProps) => {
        setActiveBanner(currentTab)
    }

    return (
        <div>
            <div className='Navbar'>

                <div className='Navbar-div'>

                    <div className='w-[25%] flex justify-around'>
                        <div className='Navbar-p'>
                            <p>S</p>
                        </div>

                        <div className='Navbar-h1'>
                            <h1>SprtsTix</h1>
                        </div>

                    </div>



                    <div className='RotoWireBanner'>
                        <button
                            className={`${activeBanner === 'home' && 'active-home'} buttonsforhome`}
                            onClick={() => handleBannerChange('home')}
                        >
                            Home
                        </button>

                        <button
                            className={`${activeBanner === 'game' && 'active-game'} buttonsforgame`}
                            onClick={() => handleBannerChange('games')}
                        >
                            Games
                        </button>

                        <button
                            className={`${activeBanner === 'sports' && 'active-sports'} buttonsforsports`}
                            onClick={() => handleBannerChange('sports')}
                        >
                            Sports
                        </button>

                        <button
                            className={`${activeBanner === 'about' && 'active-about'} buttonsforabout`}
                            onClick={() => handleBannerChange('about')}
                        >
                            About
                        </button>

                    </div>
                </div>

            </div>

            <div className='activeforms'>
                {activeBanner === 'home' && <Home />}
                {activeBanner === 'games' && <Games />}
                {activeBanner === 'sports' && <Sports />}
                {activeBanner === 'about' && <About />}
            </div>
        </div>
    )
}

export default HomeComponent