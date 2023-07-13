"use client"
import Image from "next/image";
import Link from "next/link";
import {BsArrowDown} from 'react-icons/bs'
import { useState, useEffect } from "react";

async function fetchShows() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
  const data = await response.json();
  return data;
}

export default function Page() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShowsData = async () => {
      const data = await fetchShows();
      setShows(data.slice(0, 3));
    };

    fetchShowsData();
  }, []);

  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-white text-3xl font-semibold mb-4">Popular Shows</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
          {shows.map((show) => (
            <Link key={show.show.id} href=''>
                <div className="relative rounded-lg overflow-hidden aspect-w-2 aspect-h-3">
                  <Image
                    src={show.show.image?.medium}
                    alt={show.show.name}
                    className="object-cover w-full h-full"
                    width={200}
                    height={200}
                  />
                </div>
                <h2 className="text-white text-lg flex flex-col font-medium">{show.show.name}
                
                </h2>
              
                

            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
