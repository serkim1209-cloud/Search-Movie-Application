
type Movie ={
    title: string,
    date: string,
    overview: string,
    poster: string,
}

export default async function getMovies({Movie:[]}){
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjAyODMxMzQ1YTVlMDA4MDk5NDgzYTNjMDBjYmE1MiIsIm5iZiI6MTc5NDkxNjA1OS40NTYsInN1YiI6IjZhZmMzZWRiNjUxY2FjOWU0NGY4MGQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7k-nOohDXZQE62FPWG6Vof8NNL6EcQThtY8JB5AmLaY"
   
    try{
    const res = await fetch("https://api.themoviedb.org/3/search/movie?query=return",{
        method: "GET",
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        }
    });
    if(!res.ok) {
        throw new Error("Произошла ошибка")
        
    }
    
    return await res.json();
    }catch{
        throw new Error("Произошла ошибка загрузки попробуйте позже")
    }

}