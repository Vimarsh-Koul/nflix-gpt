import React from "react";
import MovieList from "./MovieList";
import {
  selectNowPlayingMovies,
  selectPopularMovies,
  selectTopRated,
  selectUpcomingMovies,
} from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector(selectNowPlayingMovies);
  const popularMovies = useSelector(selectPopularMovies);
  const topRated = useSelector(selectTopRated);
  const upcoming = useSelector(selectUpcomingMovies);

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated"} movies={topRated} />
        <MovieList title={"Upcoming movies"} movies={upcoming} />
        {/* <MovieList title={"Trending"} movies={movies} />
        // <MovieList title={"Upcoming movies"} movies={movies} />
        <MovieList title={"Horror"} movies={movies} /> */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
