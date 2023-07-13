"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {  BsMoonFill, BsSunFill } from "react-icons/bs";

async function fetchShows() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
  const data = await response.json();
  return data;
}

export default function Page() {
  const [shows, setShows] = useState([]);
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const fetchShowsData = async () => {
      const data = await fetchShows();
      setShows(data);
    };

    fetchShowsData();
  }, []);

  const toggleTheme = () => {
    setIsNightMode(prevMode => !prevMode);
  };

  return (
    <div className={`bg-${isNightMode ? 'black' : 'white'}`}>
      <div className={`flex justify-between p-5 px-8 text-${isNightMode ? 'white' : 'black'} font-semibold text-3xl mb-4`}>
        <Link href='popular-shows'><h1>Popular Shows</h1></Link>
        <p onClick={toggleTheme}> {isNightMode ? <BsMoonFill /> : <BsSunFill />} 
        
        </p>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
          {shows.map((show) => (
            <Link key={show.show.id} href="/">
              <div className={`relative rounded-lg overflow-hidden aspect-w-2 aspect-h-3 ${isNightMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <Image
                  src={show.show.image?.original}
                  alt={show.show.name}
                  className="object-cover w-full h-full"
                  width={200} height={200}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

