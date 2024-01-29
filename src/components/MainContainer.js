import React from "react";
import { useSelector } from "react-redux";
import { selectNowPlayingMovies } from "../utils/moviesSlice";
import Videotitle from "./Videotitle";
import Videobackground from "./Videobackground";

const MainContainer = () => {
  const movies = useSelector(selectNowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[1];

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <Videotitle title={original_title} overview={overview} />
      <Videobackground movieId={id} />
    </div>
  );
};

export default MainContainer;
