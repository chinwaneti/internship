async function fetchImages(){
const response = await fetch('https://api.tvmaze.com/search/shows?q=all', {"cache":"no-store"})

const data = await response.json()
return data
}

export default async function page() {
    const data1 = await fetchImages()

    const list = data1.map(shows => (
      <section key={shows['show']['id']} className="text-center mb-5 mt-5 w-[50%] ml-[24%] px-10 py-20 shadow-xl shadow-black rounded-lg  bg-cyan-500">
      <h2 className="font-bold">Show Images: {shows['show']['image']['original']} </h2>
      
      </section>
    ))
 return(
  <div className="bg-cyan-950">{list}</div>
 )
}
