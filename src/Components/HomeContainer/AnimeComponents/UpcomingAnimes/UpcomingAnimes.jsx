import { useState, useEffect } from "react";
import { BASE_ANIME_API } from "../../../../assets/navItems.js";
import axios from "axios";
import AnimeBox from "../TopAnimes/TopAnimeBox/AnimeBox.jsx";
import { AiFillInfoCircle } from "react-icons/ai";
import ClassLoaderMini from "../../../ClassLoader/ClassLoaderMini.jsx";

function UpcomingAnimes({ MdOutlineUpcoming }) {
  const type = "/top/anime";
  const filter = "?filter=upcoming";

  const [animesDetails, setAnimesDetails] = useState({ state: "pending" });

  const callTopAnimesApi = async () => {
    axios
      .get(BASE_ANIME_API + type + filter)
      .then((response) => {
        setAnimesDetails({ state: "ok", response });
      })
      .catch((error) => console.log("error occured"));
  };

  useEffect(() => {
    setTimeout(() => {
      callTopAnimesApi();
    }, 1500);
  }, []);

  return (
    <div className="animes_container_style">
      <div style={{ flexGrow: 1 }}>
        <div className="animes_title_style">
          <MdOutlineUpcoming />
          <h4>Upcoming Anime</h4>
        </div>
        {animesDetails.state === "ok" ? (
          <div>
            <AnimeBox
              animesDetails={animesDetails.response.data.data}
              InfoImage={AiFillInfoCircle}
            />
          </div>
        ) : (
          <ClassLoaderMini />
        )}
      </div>
    </div>
  );
}

export default UpcomingAnimes;
