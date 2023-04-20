import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./DownloadAnimes.scss";

function DownloadAnimes() {
  const navigate = useNavigate();
  const location = useLocation();
  const animeData = location.state.animeContext;

  const handleNavigationToHomePage = () => {
    navigate("/");
  };

  // const [data, setData] = useState({ state: "pending" });

  // const getAPIData = async (page) => {
  //   axios
  //     .get("https://gogoanime.consumet.stream/streamsb/watch/naruto-episode-220")
  //     .then((response) => {
  //       setData({ state: "ok", response });
  //     })
  //     .catch((error) => console.log("error occured"));
  // };

  // const getAPIData = () => {
  //   axios.get("https://gogoanime.consumet.stream/download", {
  //     method: "GET",
  //     headers: {

  //     }
  //   })
  // }

  // useEffect(() => {
  //   getAPIData();
  // }, []);

  // console.log(data);

  return (
    <div className="download-container">
      <button onClick={handleNavigationToHomePage}>home navigation</button>
      aldsfjhfadsj
    </div>
  );
}
import { BASE_ANIME_API } from "../../assets/navItems";

export default DownloadAnimes;
