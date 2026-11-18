import getMovies from "../lib/movies";
import Image from "next/image";
import { Card, Button } from "antd";

export default async function MovieList() {
  const data = await getMovies();

  return (
    <div className="grid md:grid-cols-2 grid-cols-1  justify-items-center items-center gap-4 w-[950px] h-[900px]">
      {data.results.slice(0,6).map((movie) => (
        <Card
          styles={{ body: { padding: 0 } }}
          hoverable
          key={movie.id}
          className="!border-0 !rounded-none shadow-lg w-[451px] h-[279px]  "
        >
          <div className="flex">
            <div>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                width={183}
                height={281}
              />
            </div>
            <div className="p-4">
              <h1 className=" max-w-[228px] text-[15px] font-medium">
                {movie.title}
              </h1>
              <time className="text-[#827E7E]">
                {new Date(movie.release_date).toLocaleDateString("en-En", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <div className="flex gap-2">
                <Button className="!w-[55px] !h-[20px] !text-[12px] !rounded-none !bg-amber-50 !text-[#827E7E] ">
                  Action
                </Button>
                <Button className="!w-[55px] !h-[20px] !text-[12px] !rounded-none !bg-amber-50 !text-[#827E7E]">
                  Drama
                </Button>
              </div>
              <p className="w-[228px] h-[129px] text-[12px] line-clamp-6 ">
                {movie.overview}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
