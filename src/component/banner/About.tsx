import React from 'react'
import { IoPeopleCircleSharp } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { BsTrophy } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <div className='About-Section1'>
        <div className='Booking'>

          <div className='About-p'>
            <h1 className='w-[100%]'>About <span className='text-amber-500'>SportsTix</span></h1>
          </div>

          <div>
            <h1 className='ml-64 h-[96px] w-[55%]'>We're passionate about connecting sports fans with unforgettable live experiences. Since 2020, we've been the trusted platform for premium sports tickets, serving over 500,000 customers nationwide.</h1>
          </div>

          <div className='h-40 w-[100%] flex justify-around'>

            <div className='w-[25%]'>
              <p><IoPeopleCircleSharp className='text-5xl flex justify-center w-[100%]' /></p>
              <h1 className='font-bold'>500K+</h1>
              <p className='text-[14px]'>Happy Customers</p>
            </div>

            <div className='w-[25%]'>
              <p><FaTrophy className='text-5xl flex justify-center w-[100%]' /></p>
              <h1 className='font-bold'>1,200+</h1>
              <p className='text-[14px]'>Games Available</p>
            </div>

            <div className='w-[25%]'>
              <p> <FaLocationDot className='text-5xl flex justify-center w-[100%]' /> </p>
              <h1 className='font-bold'>50+</h1>
              <p className='text-[14px]'>Venues Partnered</p>
            </div>

            <div className='w-[25%]'>
              <p> <FaRegStar className='text-5xl flex justify-center w-[100%]' /> </p>
              <h1 className='font-bold'>4.9/5</h1>
              <p className='text-[14px]'>Customer Rating</p>
            </div>

          </div>

        </div>

        <div className=' border border-amber-100  h-[23rem] rounded-[5px] w-[95%] ml-7 bg-gradient-to-r from-blue-950 to-blue-500 '>

          <div>
            <h1 className='text-3xl align-middle flex justify-center h-14'>Our Story</h1>
          </div>

          <div className=' rounded-[5px] w-[100%] flex justify-around align-middle  p-1'>

            <div className=' h-80 w-[47%]'>
              <p>SportsTix was born from a simple frustration: buying sports tickets was too complicated, expensive, and often unreliable. As lifelong sports fans, our founders knew there had to be a better way.</p>
              <br />
              <p>We set out to create a platform that puts fans first – offering transparent pricing, premium seat selection, and a seamless buying experience. Today, we're proud to be the go-to destination for sports tickets across the country.</p>
              <br />
              <p>Every ticket we sell represents a memory waiting to be made, a moment of pure joy, and the electric energy that only live sports can provide.</p>
            </div>

            <div className='w-[47%] text-center h-60 mt-4 rounded-2xl flex flex-col justify-center                         bg-gradient-to-r from-orange-500 to-red-500'>
              <p><FaTrophy className='text-5xl flex justify-center w-[100%]' /></p>
              <h1 className='font-bold'>Our Mission</h1>
              <p className='text-[14px] w-[86%] ml-9'>To make live sports accessible to every fan by providing the best tickets, the best prices, and the best experience in the industry.</p>
            </div>

          </div>
        </div>


        <div className='h-[auto] rounded-[5px] w-[100%] mt-7'>

          <div>
            <h1 className='text-3xl align-middle flex justify-center h-14'>Why Fans Choose Us</h1>
          </div>

          <div className=' rounded-[5px] w-[100%] flex justify-around align-middle p-1'>

            <div className=' h-44 p-4 w-[47%] rounded-[5px] border-b-blue-600 bg-gradient-to-r from-blue-950 to-blue-700'>
              <div className='bg-amber-600 w-[8%] rounded-[5px] h-[23%]'>
                <IoShieldOutline className='text-2xl ml-1 w-[80%] h-[80%]' />
              </div>

              <div className='w-[100%]'>
                <h1 className='mt-4 h-[2.5rem] w-[50%]'>Secure & Trusted</h1>
                <h1 className='text-[15px]'>All transactions are protected with industry-leading security. Your personal information and payment details are always safe with us.</h1>
              </div>
            </div>

            <div className=' h-44 p-4 w-[47%] rounded-[5px] border-b-blue-600 bg-gradient-to-r from-blue-950 to-blue-600'>
              <div className='bg-amber-600 w-[9%] rounded-[5px] h-[23%]'>
                <FaRegClock className='text-2xl ml-1 w-[80%] h-[80%]' />
              </div>

              <div className='w-[100%]'>
                <h1 className='mt-4 h-[2.5rem] w-[50%]'>Instant Delivery</h1>
                <h1>Get your tickets immediately after purchase. Mobile tickets delivered to your phone for quick and easy entry.</h1>
              </div>
            </div>

          </div>

          <div className=' rounded-[5px] w-[100%] flex justify-around align-middle border-b-blue-600 p-1'>

            <div className=' h-44 p-4 w-[47%] rounded-[5px] bg-gradient-to-r from-blue-950 to-blue-700'>
              <div className='bg-amber-600 w-[8%] rounded-[5px] h-[23%]'>
                <IoMdPeople className='text-2xl ml-1 w-[80%] h-[80%]' />
              </div>

              <div className='w-[100%]'>
                <h1 className='mt-4 h-[2.5rem] w-[50%]'>Secure & Trusted</h1>
                <h1 className='text-[15px]'>All transactions are protected with industry-leading security. Your personal information and payment details are always safe with us.</h1>
              </div>
            </div>

            <div className=' h-44 p-4 w-[47%] rounded-[5px] border-b-blue-600 bg-gradient-to-r from-blue-950 to-blue-600'>
              <div className='bg-amber-600 w-[9%] rounded-[5px] h-[23%]'>
                <BsTrophy className='text-2xl ml-1 w-[80%] h-[80%]' />
              </div>

              <div className='w-[100%]'>
                <h1 className='mt-4 h-[2.5rem] w-[50%]'>Instant Delivery</h1>
                <h1>Get your tickets immediately after purchase. Mobile tickets delivered to your phone for quick and easy entry.</h1>
              </div>
            </div>

          </div>

        </div>

        <div className='booking'>

          <div className='About-p'>
            <h1 className='w-[100%] text-3xl'>Meet Our Team</h1>
          </div>

          <div className='h-[17rem] p-3 w-[100%] flex justify-around'>

            <div className='h-56 p-4 w-[30%] rounded-[5px] border-b-blue-600 bg-gradient-to-r from-blue-950 to-blue-600'>
              <p><IoPeopleCircleSharp className='text-7xl flex justify-center w-[100%]' /></p>
              <h1 className='ml-20 w-[43%] font-bold'>Alex Johnson <span className='text-orange-600'>CEO & Founder</span></h1>
              <p className='text-[14px]'>Former sports marketing executive with 15+ years in the industry.</p>
            </div>

            <div className='h-56 p-4 w-[30%] rounded-[5px] border-b-blue-600 bg-gradient-to-r from-blue-950 to-blue-600'>
              <p><IoPeopleCircleSharp className='text-7xl flex justify-center w-[100%]' /></p>
              <h1 className='ml-20 w-[43%] font-bold'>Sarah Chen <span className='text-orange-600'>Head of Technology</span></h1>
              <p className='text-[14px]'>Leading our platform development with cutting-edge solutions.</p>
            </div>

            <div className='h-56 p-4 w-[30%] rounded-[5px] border-b-blue-600 bg-gradient-to-r from-blue-950 to-blue-600'>
              <p> <IoPeopleCircleSharp className='text-7xl flex justify-center w-[100%]' /> </p>
              <h1 className='ml-20 w-[43%] font-bold'> Mike Rodriguez <span className='text-orange-600'>Partnerships Director</span></h1>
              <p className='text-[14px]'>Building relationships with teams and venues across the country.</p>
            </div>

          </div>

        </div>

        <div className='w-[97%] text-center h-60 ml-4 rounded-[10px] flex flex-col justify-center bg-gradient-to-r from-orange-500 to-red-500'>
          <h1 className='font-bold text-3xl mb-8'>Ready to Experience Live Sports?</h1>
          <p className='w-[55%] mb-11 ml-60'>Join thousands of fans who trust SportsTix for their sports entertainment. Browse games and secure your seats today!</p>
          <button className='text-[14px] ml-[30rem] bg-amber-50 rounded-[5px] font-bold w-[17%] text-amber-600 h-10'> Browse Games </button>
        </div>
      </div>
    </div>
  )
}

export default About