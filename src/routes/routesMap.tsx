import { IRouting } from '@types';
import { AboutMe, Home, StarWarsMovieInfo, NotFound } from '@views';
import { config } from '@config';

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
  },
  {
    path: '*',
    element: <NotFound />
  }
]