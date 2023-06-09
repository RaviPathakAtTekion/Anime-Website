import { Fragment } from "react";
import MainComponent from "../MainComponent/MainComponent.jsx";
import { BASE_ANIME_API } from "../../assets/navItems.js";

import "./AnimesContainer.scss";
import Header from "../HomeContainer/HeaderItems/Header.jsx";
import Footer from "../Footer/Footer.jsx";

function AnimesContainer() {
  // api type to fetch
  const AnimeAPI = BASE_ANIME_API + "/top/anime";

  return (
    <Fragment>
      <Header />
      <div className="movies_container">
        <MainComponent
          DetailsAPI={AnimeAPI}
          type={"Anime"}
          apiType={"tv"}
        />
      </div>
      <Footer />
    </Fragment>
  );
}

export default AnimesContainer;
