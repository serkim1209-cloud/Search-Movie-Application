import MovieList from "./movieList/page";
import { Suspense } from "react";
import { Skeleton } from "antd";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<Skeleton active />}>
        <MovieList />
      </Suspense>
    </div>
  );
}
