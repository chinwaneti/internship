async function fetchSummary(){
  const response = await fetch('https://api.tvmaze.com/search/shows?q=all', {"cache":"no-store"})
  
  
    const data = await response.json()
    return data
  }
  
  export default async function page(){
    const data1 = await fetchSummary()

      const list = data1.map(shows =>(
        <section key ={shows['show']['id']} className=" text-left px-10 py-20 shadow-xl mt-5 shadow-black rounded-lg  bg-cyan-500">
        
      <h2>Show Summary: {shows['show']['summary']}</h2></section>
    ))

    return(
      <div className="bg-cyan-950 ">{list}</div>
    )
};

