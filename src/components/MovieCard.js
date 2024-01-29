import React from "react";
import { MOVIE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie card" src={MOVIE_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
