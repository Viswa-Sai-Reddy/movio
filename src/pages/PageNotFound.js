import pageNotFound from "../assets/images/pageNotFound.jpg";
import {Link} from "react-router-dom"
import { Button } from "../components";
import { useUpdateTitle } from "../hooks/useUpdateTitle";

export const PageNotFound = () => {

  useUpdateTitle("Page Not Found");

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-6xl text-gray-700 font-bold my-10 dark:text-white">
            404, Oops!
          </p>
          <div className="max-w-md">
            <img
              className="rounded"
              src={pageNotFound}
              alt="Page Not Found Poster"
            />
          </div>
        </div>
        <div className="flex justify-center my-1">
          <Link to="/">
            <Button inputText={"Back to home"} />
          </Link>
        </div>
      </section>
    </main>
  );
};
