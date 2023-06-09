import Link from "next/link"
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'


async function fetchData(){
const response = await fetch('https://api.tvmaze.com/search/shows?q=all', {"cache":"no-store"})
  const data = await response.json()


  return data
}

export default async function Page(){
  const data1 = await fetchData()

  const list = data1.map(shows =>(
    <section key ={shows['show']['id']} className="font-bold text-left px-10 py-20 shadow-xl mt-10 shadow-black rounded-lg  bg-cyan-500">
    
  <h2>Show Names: {shows['show']['name']}</h2>
    <h2>Show Genres: {shows['show']['genres'].join(', ')}</h2>
    <h2>Show Languages: {shows['show']['language']}</h2>
    <div className="mt-5">
    <Link href= {`/all-american/${shows['show']['id']}`}>
    <button className="w-32 py-2 hover:bg-cyan-950 bg-white rounded-lg shadow-2xl shadow-black">Summary</button>
    </Link>

    <Link href= {`/image`}>
    <button className="w-32 py-2 mt-3 hover:bg-cyan-950 bg-white rounded-lg shadow-2xl shadow-black">Images</button>
    </Link>
    
    <Link href= {`/language`}>
    <button className="w-32 py-2 mt-3 hover:bg-cyan-950 bg-white rounded-lg shadow-2xl shadow-black"> language</button>
    </Link>
   
    </div>
    
    
    </section>
  ))

  return (
    <div className="grid grid-cols-5 gap-5 p-24 bg-cyan-950 h-[150vh]">
   
   {list}
  
    <button><AiFillGithub size={40} style={{color: 'cyan'}} /> </button>
    <button><BsLinkedin size={40} style={{color: 'cyan'}}/> </button>
    <button><MdEmail size={40} style={{color: 'cyan'}}/> </button>
    </div>
  )
}

