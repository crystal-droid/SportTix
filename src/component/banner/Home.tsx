import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AiFillThunderbolt } from "react-icons/ai";
import { FaSackDollar } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import TrendingGames from '../TrendingGames';
// import { searchTeam } from '../SportsData';

const Home = () => {

    const [searchTeam, setsearchTeam] = useState();

    const router = useRouter()

    const handleClick = () => {
        router.push('/games')
    }

    return (
        <div>

            <div className='Home'>
                <div className='Home1'>
                    <div className='Home-div-p-span'>
                        <p>Your Game. <br /> <span className='Home-div-span'>Your Seat.</span></p>
                    </div>
                    <div className='Home-div-p'>
                        <p>Experience the thrill of live sports with premium tickets to <br /> the biggest games. From courtside to stadium seats, we've <br /> got your perfect view.</p>
                    </div>

                    <div className='Home-div-buttons'>
                        <div className='Home-div-button1'>

                            <button onClick={handleClick}>Browse Games</button>


                        </div>

                        <div className='Home-div-button2'>
                            <button className='Home-div-button-Search'>Learn more</button>
                        </div>
                    </div>
                </div>


                <div className='Home2'>
                    <div className='Home2-div'>
                        <p className='Home2-p'>FEATURED GAME</p>
                        <h1 className='Home2-h1'>Lakers vs Warriors</h1>
                    </div>
                    <div className='Home2-div-ps'>
                        <p className='Home2-div-p'>  July 15, 2025</p>
                        <p className='Home2-div-p'> 7:30 PM</p>
                        <p className='Home2-div-p'> Crypto.com Arena</p>
                    </div>


                    <div className='Home2-div-buttons'>
                        <div className='Home2-divs-p'>
                            <p>From $45</p>
                        </div>

                        <div className='Home2-div-button2'>
                            <button className='Home-div-button-LearnMore'>Get Tickets</button>
                        </div>
                    </div>

                </div>
            </div>


            <div className='Home-section1'>

                <div className='Home-section1-div'>
                    <h1 className='Home-section1-h1'>Trending Games</h1>
                    <p className='Home-section1-p'>Don't miss out on the hottest games this month. Secure your seats now!</p>

                    <TrendingGames />
                </div>

            </div>

            <div className='Home-section1-divs'>
                <div className='Home-Section1-div'>
                    <h1 className='Home-section1-div-h1'>Why Choose SportsTix?</h1>
                    <p className='Home-section1-div-p'>The easiest and most trusted way to buy sports tickets</p>
                </div>


                <div className='Home-Section2'>
                    <div className='Home-Section2-div'>
                        <p><AiFillThunderbolt className='text-amber-500 size-12' /></p>
                        <h1 className='Home-section2-div-h1'>Instant Tickets</h1>
                        <p className='Home-section2-div-p'>Get your tickets immediately after purchase with <br /> mobile delivery</p>
                    </div>

                    <div className='Home-Section2-div'>
                        <p><FaSackDollar className='text-amber-500 size-12' /></p>
                        <h1 className='Home-section2-div-h1'>Best Prices</h1>
                        <p className='Home-section2-div-p'>Competitive pricing with no hidden fees or surprise <br /> charges</p>
                    </div>

                    <div className='Home-Section2-div'>
                        <p><FaLock className='text-amber-500 size-12' /></p>
                        <h1 className='Home-section2-div-h1'>Secure Platform</h1>
                        <p className='Home-section2-div-p'>Industry-leading security for all your transactions</p>
                    </div>
                </div>

            </div>

            <div className='Home-section3-divs'>
                <div className='Home-Section1-div'>
                    <h1 className='Home-section1-div-h1'>What Fans Say</h1>

                    <div className='Home-Section2'>
                        <div className='Home-Section3-star-div'>
                            <p><AiFillThunderbolt className='text-amber-500 size-12' /></p>
                            <h1 className='Home-section2-div-h1'>Instant Tickets</h1>
                            <p className='Home-section2-div-p'>Get your tickets immediately after purchase with <br /> mobile delivery</p>
                        </div>

                        <div className='Home-Section3-star-div'>
                            <p><FaSackDollar className='text-amber-500 size-12' /></p>
                            <h1 className='Home-section2-div-h1'>Best Prices</h1>
                            <p className='Home-section2-div-p'>Competitive pricing with no hidden fees or surprise <br /> charges</p>
                        </div>

                        <div className='Home-Section3-star-div'>
                            <p><FaLock className='text-amber-500 size-12' /></p>
                            <h1 className='Home-section2-div-h1'>Secure Platform</h1>
                            <p className='Home-section2-div-p'>Industry-leading security for all your transactions</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home