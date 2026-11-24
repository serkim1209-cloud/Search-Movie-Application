
type Movie ={
    title: string,
    date: string,
    overview: string,
    poster: string,
}

export default async function getMovies(){
    const token = process.env.TMDB
   
    try{
    const res = await fetch("https://api.themoviedb.org/3/search/movie?query=return",{
        method: "GET",
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        }
    });
   if (!res.ok) {
      const details = await res.text();
      throw new Error(`TMDB ошибка ${res.status}: ${details}`);
    }
    
    return await res.json();
    }catch{
        throw new Error("Произошла ошибка загрузки попробуйте позже")
    }

}