import { BiHomeAlt2 } from "react-icons/bi";
import { BiMoviePlay } from "react-icons/bi";
import { BiColor } from "react-icons/bi";
import { BiNews } from "react-icons/bi";
import { BsFillBookFill } from "react-icons/bs";

const time = new Date();
const month = Number(time.getMonth() + 1) / 4;

export const navItems = [
  { name: "Home", url: "/", id: 1, image: BiHomeAlt2 },
  { name: "Anime", url: "/animes", id: 2, image: BiColor },
  { name: "Manga", url: "/manga", id: 3, image: BsFillBookFill },
  { name: "Movie", url: "/movies", id: 4, image: BiMoviePlay },
  { name: "Seasons", url: "/seasons", id: 5, image: BiNews },
];

export const year = time.getFullYear();

const mapSeasons = ["winter", "summer", "spring", "fall"];
export const animeSeason = mapSeasons[month];

export const currentDay = time
  .toLocaleString("default", { weekday: "long" })
  .toLowerCase();

export { mapSeasons };
export let timer = null;

export const BASE_ANIME_API = "https://api.jikan.moe/v4";
