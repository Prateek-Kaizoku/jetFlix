import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedTv } from "../utils/movieSlice";
import { useSelector } from "react-redux";

const useTopRatedTv = () => {
  const dispatch = useDispatch();

  const topRatedTv = useSelector((store) => store.movies.topRatedTv);

  const getTopRatedTv = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedTv(json.results));
  };

  useEffect(() => {
    !topRatedTv && getTopRatedTv();
  }, []);
};

export default useTopRatedTv;
