import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import { useSearchParams } from "react-router-dom";
import { useUpdateTitle } from "../hooks/useUpdateTitle";

export const Search = ({ apiPath }) => {
  const [searchParam] = useSearchParams();
  const queryTerm = searchParam.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);
  useUpdateTitle(`Search results for ${queryTerm}`);
  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length === 0 ?  `No results for '${queryTerm}'`: `Results for: '${queryTerm }'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
