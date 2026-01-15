import React from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

function Movies({handleAddToWatchlist, handleRemoveFromWatchlist, watchlist}) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handlePrev = () => {
    if (page == 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=30cecc8e33b83ca9acf13ad2ed84dfb7&language=en-US&page=${page}`
      )
      .then(function (response) {
        setMovies(response.data.results);
      });
  }, [page]);

  return (
    <div className="p-3">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>

      <div className="flex flex-row flex-wrap justify-around rounded-2xl gap-5">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              name={movieObj.title}
              handleAddToWatchlist={handleAddToWatchlist}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              movieObj={movieObj}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination page={page} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
}

export default Movies;

//https://api.themoviedb.org/3/movie/popular?api_key=30cecc8e33b83ca9acf13ad2ed84dfb7&language=en-US&page=2
