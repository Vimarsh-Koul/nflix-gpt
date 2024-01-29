import { useSelector } from "react-redux";
import { selectTrailerId } from "../utils/moviesSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const Videobackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerId = useSelector(selectTrailerId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailerId + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

// _rHLOXbFZtI;

export default Videobackground;
