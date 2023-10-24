import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularTvSeries } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";

const useTvSeriesList = () => {
  const dispatch = useDispatch();

  const tvSeriesList = useSelector((store) => store.movies.popularTv);

  const getPopularTv = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularTvSeries(json.results));
  };

  useEffect(() => {
    !tvSeriesList && getPopularTv();
  }, []);
};

export default useTvSeriesList;
