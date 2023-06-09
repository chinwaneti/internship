import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
    <nav className='bg-cyan-950 h-32'>
    <ul className='flex justify-end px-10 space-x-10'>
    <li className='text-white hover:text-3xl hover:text-cyan-300 text-2xl font-bold mt-10'><Link href='/'>HOME</Link></li>
    </ul>
    </nav>
    </div>
  )
}

