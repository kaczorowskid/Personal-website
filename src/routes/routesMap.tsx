import { IRouting } from "../types/IRouting";
import AboutMe from "../views/AboutMe/AboutMe";
import Home from "../views/Home/Home";
import StarWarsMovieInfo from "../views/StarWarsMovieInfo/StarWarsMovieInfo";
import { config } from "../config";

const { home, aboutMe, movie } = config.routerPath;

export const routesMap: Array<IRouting> = [
  {
    path: home,
    element: <Home />
  },
  {
    path: aboutMe,
    element: <AboutMe />
  },
  {
    path: movie,
    element: <StarWarsMovieInfo />
  }
]