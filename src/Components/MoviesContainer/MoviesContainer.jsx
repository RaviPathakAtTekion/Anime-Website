import { Fragment } from "react";
import MainComponent from "../MainComponent/MainComponent.jsx";
import { BASE_ANIME_API } from "../../assets/navItems.js";

import Header from "../HomeContainer/HeaderItems/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./MoviesContainer.scss";

function MoviesContainer() {
  const MovieAPI = BASE_ANIME_API + '/top/anime';

  return (
    <Fragment>
      <Header />
      <div className="movies_container">
        <MainComponent
          DetailsAPI={MovieAPI}
          type={"Movies"}
          apiType={"movie"}
        />
      </div>
      <Footer />
    </Fragment>
  );
}

export default MoviesContainer;
