"use client"
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleTheme = () => {
    setIsNightMode(prev => !prev);
  };

  return (
    <div>
      <nav className={`bg-${isNightMode ? 'black' : 'cyan-950'} h-32`}>
        <ul className="flex justify-end px-10 space-x-10">
          <Link href="/">
            <li className="text-white hover:text-3xl hover:text-cyan-300 text-2xl font-bold mt-10">
              HOME
            </li>
          </Link>
          <Link href="/all-american">
            <li className="text-white hover:text-3xl hover:text-cyan-300 text-2xl font-bold mt-10">
              SHOWS
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
