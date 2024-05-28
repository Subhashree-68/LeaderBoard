import React, { useState } from 'react'
import unfluke from "../assets/unfluke.png";
import notification from "../assets/notification.jpg";
import coin from "../assets/coin.png"
import profile from "../assets/profile.png";
import start from "../assets/start.png"
import dropdown from "../assets/dropdown.jpg"
const Navbar = () => {

  const[menu,setMenu]=useState("LeaderBoard");
  return (
    <div className='h-16 flex m-5 '>
      <div className='h-10 w-full'>
        <div className='h-12 w-[100%] flex justify-between  shadow-md  sm:h-12  '>
          <div className='h-10 w-36 cursor-pointer  bg-transparent hover:bg-slate-300 '>
            <img src={unfluke} alt="" className='h-12 w-36 sm:h-12' />
          </div>
          <div className='flex h-14 w-36 justify-between mr-5 cursor-pointer '>
            <img src={notification} alt="" className='h-8 w-8 bg-transparent hover:bg-slate-300 p-1 mt-2 sm:h-9 sm:w-9' />
            <img src={dropdown} alt="" className='w-5 h-5 mt-3 mr-2 sm:h-6 sm:w-6' />
            <img src={coin} alt="" className='h-9 w-10 bg-transparent hover:bg-slate-300  p-1 mt-1 sm:h-10 sm:w-10' />
            <p className='mt-3 mr-3'>10</p> 
            <img src={profile} alt="" className='h-8 w-8 bg-transparent hover:bg-slate-300 p-1 mt-2 sm:h-9 sm:w-9' />
            <img src={dropdown} alt="" className='w-5 h-5 mt-3 mr-3 sm:h-6 sm:w-6' />
          </div>
        </div>
        <div>
          <ul className='flex justify-evenly text-lg font-medium mt-9 sm:text-xl w-full'>

            <li onClick={()=>{setMenu("LeaderBoard")}} className='flex gap-2  text-gray-500 hover:text-black cursor-pointer'> <img src={start} alt="" className=' w-6 h-6 mt-1 mr-2' />
            <div className='flex flex-col'>LeaderBoard {menu==="LeaderBoard"? <hr className='w-[100%] h-1 rounded-sm  bg-black'/>:<></>}</div></li>

            <li onClick={()=>{setMenu("Historical Trading")}} className=' text-gray-500 hover:text-black cursor-pointer'>Historical Trading {menu==="Historical Trading"? <hr className='w-[100%] h-1 rounded-sm  bg-black'/>:<></>}</li>

            <li onClick={()=>{setMenu("Historical Chart")}} className=' text-gray-500 hover:text-black cursor-pointer'>Historical Chart {menu==="Historical Chart"? <hr className='w-[100%] h-1 rounded-sm  bg-black'/>:<></>}</li>

            <li onClick={()=>{setMenu("Scanners")}} className=' text-gray-500 hover:text-black cursor-pointer'>Scanners {menu==="Scanners"? <hr className='w-[100%] h-1 rounded-sm  bg-black'/>:<></>}</li>

            <li onClick={()=>{setMenu("Alerts")}} className=' text-gray-500 hover:text-black cursor-pointer'>Alerts {menu==="Alerts"? <hr className='w-[100%] h-1 rounded-sm  bg-black'/>:<></>}</li>

            <li onClick={()=>{setMenu("Basic Backtest")}} className=' text-gray-500 hover:text-black cursor-pointer'>Basic Backtest {menu==="Basic Backtest"? <hr className='w-[100%] h-1 rounded-sm  bg-black'/>:<></>}</li>

            <li onClick={()=>{setMenu("Advanced Backtest")}} className=' text-gray-500 hover:text-black cursor-pointer'>Advanced Backtest {menu==="Advanced Backtest"? <hr className='w-[100%] h-1 rounded-sm  bg-black'/>:<></>}</li>

            <li onClick={()=>{setMenu("Pricing")}} className=' text-gray-500 hover:text-black cursor-pointer'>Pricing {menu==="Pricing"? <hr className='w-[100%] h-1 rounded-sm  bg-black'/>:<></>}</li>

            <li onClick={()=>{setMenu("My Earnings")}} className=' text-gray-500 hover:text-black cursor-pointer'>My Earnings {menu==="My Earnings"? <hr className='w-[100%] h-1 rounded-sm  bg-black'/>:<></>}</li>
            
          </ul>
        </div>
      </div>


    </div>
  )
}

export default Navbar
