import React, { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import {RxDashboard} from 'react-icons/rx'
import{BiSolidUser} from 'react-icons/bi'
import {FaSearch} from 'react-icons/fa'
import {FaRegBell} from 'react-icons/fa'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {SiGoogleanalytics} from 'react-icons/si'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaBoxArchive} from 'react-icons/fa6'
import { Link } from 'react-router-dom'


export default function Dashboard() {
  const menus =[
    {name:'dashboard',link:'/', icon: RxDashboard},
    {name:'user',link:'/', icon: BiSolidUser},
    {name:'messages',link:'/', icon: BiMessageSquareDetail},
    {name:'analytics',link:'/', icon: SiGoogleanalytics},
    {name:'cart',link:'/', icon: AiOutlineShoppingCart},
    {name:'products',link:'/products', icon: FaBoxArchive}
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className='flex gap-6'>
      <div
        className={`bg-[#09ef83] min-h-screen ${
          open ? 'w-72' : 'w-16'
        } duration-500 text-gray-100 px-4`}
      >
        <div className='py-3 flex justify-end'>
          <BiMenuAltRight
            size={26}
            className='cursor-pointer'
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className='mt-4 flex flex-col gap-4 relative'>
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && 'mt-5'
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: '20' })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && 'hidden'
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between h-[70px] w-[100%] shadow-lg px-[20px]">
      <div className="flex items-center rounded-[5px]">
                <input type='text' className='bg-[white] h-[40px] outline-none pl-[12px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search here'/>
                <div className='bg-[#09ef83] h-[40px] px-[16px] flex items-center justify-center cursor-pointer rounded-[5px]'>
                <FaSearch color='white'/>
                </div>
      </div>
      <div className='flex items-center gap-[15px] relative'>
        <div className='flex items-center gap-[20px] border-r-[1px]'>
          <FaRegBell />
          <BsFillEnvelopeFill/>
          </div>
          <div>
            <p>kris-mart</p>
        </div>
      </div>
      </div>
      <div>
        <div>
           
        </div>
      </div>
    </section>
  )
}

