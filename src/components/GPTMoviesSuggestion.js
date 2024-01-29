import React from "react";
import { useSelector } from "react-redux";
import { showMovieNames, showMovieResults } from "../utils/gptSlice";
import MovieList from "./MovieList";

const GPTMoviesSuggestion = () => {
  const movieNames = useSelector(showMovieNames);
  const movieResults = useSelector(showMovieResults);

  if (!movieNames) return;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMoviesSuggestion;
