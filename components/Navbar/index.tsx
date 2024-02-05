"use client"

import React, { useState } from 'react'
import Navlink from '../Navlink'

const Navbar = () => {
    const data = [
        {
            id: 1,
            name: 'Jewelry & Accessories',
            path: '/jewelry'
        },
        {
            id: 2,
            name: 'Clothing & Shoes',
            path: '/clothing'
        },
        {
            id: 3,
            name: 'Home & Living',
            path: '/home'
        },{
            id: 4,
            name: 'Wedding & Party',
            path: '/wedding'
        },{
            id: 5,
            name: 'Toys & Entertainment',
            path: '/toys'
        },{
            id: 6,
            name: 'Art & Collectibles',
            path: '/art'
        },{
            id: 7,
            name: 'Vintage',
            path: '/vintage'
        },
        
    ]
    const [navlink, setNavlink] = useState(data)
    return (
        <div className='flex flex-row justify-around items-center mx-[150px] my-4'>
           {navlink.map((item) => {
 return(
    <Navlink navlink={item} setNavlink={setNavlink} />
 )
})
           
          }
            {/* <p className='text-[12px]'>Jewelry & Accessories</p>
        <p className='text-[12px]'>Clothing & Shoes</p>
        <p className='text-[12px]'>Home & Living</p>
        <p className='text-[12px]'>Wedding & Party</p>
        <p className='text-[12px]'>Toys & Entertainment</p>
        <p className='text-[12px]'>Art & Collectibles</p>
        <p className='text-[12px]'>Craft Supplies & Tools</p>
        <p className='text-[12px]'>Vintage</p> */}
        </div>
    )
}

export default Navbar