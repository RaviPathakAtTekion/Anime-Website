import { BiHomeAlt2 } from "react-icons/bi";
import { BiMoviePlay } from "react-icons/bi";
import { BiColor } from "react-icons/bi";
import { BiNews } from "react-icons/bi";
import { BsFillBookFill } from "react-icons/bs";

// time and data parameters for season anime acess
const time = new Date();

const month = Number(time.getMonth() + 1) / 4;

export const year = time.getFullYear();

// season access based on weather
const mapSeasons = ["winter", "summer", "spring", "fall"];
export const animeSeason = mapSeasons[month];

// current day name 
export const currentDay = time
  .toLocaleString("default", { weekday: "long" })
  .toLowerCase();

export { mapSeasons };
export let timer = null;

// navbar items array
export const navItems = [
  { name: "Home", url: "/", id: 1, image: BiHomeAlt2 },
  { name: "Anime", url: "/animes", id: 2, image: BiColor },
  { name: "Manga", url: "/manga", id: 3, image: BsFillBookFill },
  { name: "Movie", url: "/movies", id: 4, image: BiMoviePlay },
  { name: "Seasons", url: "/seasons", id: 5, image: BiNews },
];

// navigation button access
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

export const NextButton =  GrFormNext;
export const PrevButton =  GrFormPrevious;

// base api 
export const BASE_ANIME_API = "https://api.jikan.moe/v4";

// website footer date content
const currentMonth = time.getUTCMonth() + 1;
const day = time.getUTCDate();
const currentYear = time.getUTCFullYear();

export const footerDate = currentYear + "/" + currentMonth + "/" + day;