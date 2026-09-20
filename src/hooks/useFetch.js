import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryParam="") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?query=${queryParam}`;
  useEffect(() => {

    async function fetchMovies() {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: process.env.REACT_APP_TOKEN,
          accept: "application/json",
        },
      });
      const data = await response.json();
      setData(data.results);
    }
    fetchMovies();
  }, [url]);
  return { data };
};
