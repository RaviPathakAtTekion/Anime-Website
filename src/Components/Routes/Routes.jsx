import { createBrowserRouter } from "react-router-dom";
import AnimesContainer from "../AnimesContainer/AnimesContainer.jsx";
import HomeContainer from "../HomeContainer/HomeContainer.jsx";
import MoviesContainer from "../MoviesContainer/MoviesContainer.jsx";
import LoginContainer from "../AccessContainer/LoginContainer/LoginContainer.jsx";
import SignUpContainer from "../AccessContainer/SignUpContainer/SignUpContainer.jsx";
import MangaContainer from "../MangaContainer/MangaContainer.jsx";
import SeasonsContainer from "../SeasonsContainer/SeasonsContainer.jsx";
import IndividualAnimeComponent from "../IndividualAnimeComponent/IndividualAnimeComponent.jsx";
import SearchComponent from "../SearchComponent/SearchComponent.jsx";
import DownloadAnimes from "../DownloadAnimes/DownloadAnimes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeContainer />,
  },
  {
    path: "/animes",
    element: <AnimesContainer />,
  },
  {
    path: "/movies",
    element: <MoviesContainer />,
  },
  {
    path: "/manga",
    element: <MangaContainer />,
  },
  {
    path: "/seasons",
    element: <SeasonsContainer />,
  },
  {
    path: "/login",
    element: <LoginContainer />,
  },
  {
    path: "/signup",
    element: <SignUpContainer />,
  },
  {
    path: "/anime/:id",
    element: <IndividualAnimeComponent />,
  },
  {
    path: "/search",
    element: <SearchComponent />,
  },
  {
    path: "/download",
    element: <DownloadAnimes />
  }
]);

export default router;
