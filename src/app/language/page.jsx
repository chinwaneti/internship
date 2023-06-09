async function fetchLanguage(){
  const response = await fetch('https://api.tvmaze.com/search/shows?q=all')
  const data = await response.json()
  return data
}
export default async function page() {
 const data1 = await fetchLanguage()

 const list = data1.map(shows =>(
  <section key={shows.show.id} className="text-center  mt-5 w-[50%] ml-[24%] px-10 py-20 shadow-2xl shadow-black rounded-lg  bg-cyan-500">
  <h2 className="font-bold text-2xl"><strong>Show Languages: </strong>{shows.show.language}</h2>
  </section>
 ))
 return(
  <div className="bg-cyan-950">{list}</div>
 )
}
