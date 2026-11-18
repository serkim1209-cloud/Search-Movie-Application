import MovieList from "./movieList/page";
import { Suspense } from "react";


export default function Home() {
  return (
    <div>
      <Suspense fallback={<div className="p-6 text-gray-500 animate-pulse">Загрузка фильмов...</div>}>
        <MovieList />
      </Suspense>
    </div>
  );
}
