import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import { useUpdateTitle } from "../hooks/useUpdateTitle";

export const MovieList = ({apiPath, title}) => {
  const { data: movies } = useFetch(apiPath);

  useUpdateTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap others:justify-evenly">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}