"use client"
import Link from 'next/link'
import React from 'react'

const Navlink = ({navlink,setNavlink}:any) => {
console.log('hellllo',navlink)
  return (
    <div>
       <ul>
      <li>
        <Link className='text-[12px]' href={navlink.path}>{navlink.name}</Link>
      </li>
     
    </ul>
    </div>
  )
}

export default Navlink