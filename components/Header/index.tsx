import Link from 'next/link';
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineMenu } from "react-icons/md";
const Header = () => {
    return (
        <div className='py-2 bg-[#1E66FF] '>
            <div className='flex flex-col md:flex-row justify-around items-center mx-4'>
                {/* logo starts */}
                <div className='mb-2'>
                    
                    <img src='../../assets/logo.png' alt="" className=' h-[50px] w-full md:w-[90px] xl:w-full object-contain'  />
                </div>
                {/* logo ends */}

                {/* search starts */}
                <div className='flex flex-row relative mb-2'>
                    <input className='p-1 rounded-full w-full md:w-[350px] xl:w-[550px]' type="text" />
                    <AiOutlineSearch className='absolute right-2 top-1' size={25} />
                </div>
                {/* search ends */}

                {/* icons starts */}
                <div className='flex flex-col sm:flex-row justify-between items-center mb-2'>
                    <div className='flex flex-row justify-between items-center mr-4'>
                        <CiUser size={25} color='white' />
                        <p className='text-white text-xs'>Account</p>
                    </div>
                    <div className='flex flex-row justify-between items-center mr-4'>
                        <CiHeart size={25} color='white' />
                        <p className='text-white text-xs '>My Items</p>
                    </div>
                    <div className='flex flex-row justify-between relative  items-center mr-4'>
                        <HiOutlineShoppingBag color='white' size={25} />
                        <div className='bg-[#FFC221] right-0 top-[-250px] h-4 w-4 rounded-full flex justify-center items-center'><p className='text-white text-xs'>1</p></div>
                        
                    </div>
                    <div className='hidden sm:flex flex-row justify-between items-center '>
                        <MdOutlineMenu color='white' size={25} />
                        
                    </div>
                </div>
                {/* icons ends */}
            </div>
        </div>
    )
}

export default Header