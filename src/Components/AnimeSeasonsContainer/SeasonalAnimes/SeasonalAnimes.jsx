import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { BASE_ANIME_API } from "../../../assets/navItems.js";
import DetailsContent from "../../MainComponent/DetailsContent/DetailsContent.jsx";

import "../../MainComponent/MainComponent.scss";

function SeasonalAnimes({ selectedSeason }) {
  const [seasonsData, setSeasonsData] = useState({ state: "pending" });
  const [currentPage, setCurrentPage] = useState(1);

  const getAnimeSeason = async (year, season, page) => {
    axios
      .get(BASE_ANIME_API + "/seasons" + `/${year}` + `/${season}`, {
        params: { page: page },
      })
      .then((response) => {
        setSeasonsData({ state: "ok", response });
      })
      .catch((error) => console.log("error occured"));
  };

  const nextPageContent = () => {
    setCurrentPage((prevPage) => {
      return prevPage === 2 ? (prevPage = 1) : prevPage + 1;
    });
  };

  const prevPageContent = () => {
    setCurrentPage((prevPage) => {
      return prevPage === 1 ? (prevPage = 1) : prevPage - 1;
    });
  };

  useEffect(() => {
    setTimeout(() => {
      getAnimeSeason(selectedSeason.year, selectedSeason.season, currentPage);
    }, 500);
  }, [selectedSeason, currentPage]);

  return (
    <Fragment>
      {seasonsData.state === "ok" ? (
        <div className="details_container_loader">
          <DetailsContent
            data={seasonsData.response.data.data}
            type={selectedSeason.season + " " + selectedSeason.year}
            nextPageContent={nextPageContent}
            prevPageContent={prevPageContent}
          />
        </div>
      ) : (
        <div className="loader_container">
          <div className="anime_loader"></div>
        </div>
      )}
    </Fragment>
  );
}

export default SeasonalAnimes;
