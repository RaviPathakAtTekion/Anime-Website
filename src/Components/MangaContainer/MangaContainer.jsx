import { Fragment } from "react";
import MainComponent from "../MainComponent/MainComponent.jsx";
import { BASE_ANIME_API } from "../../assets/navItems.js";
import Header from "../HomeContainer/HeaderItems/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./MangaContainer.scss";

function MangaContainer() {
  const MangaAPI = BASE_ANIME_API + '/top/manga';

  return (
    <Fragment>
      <Header />
      <div className="mangas_container">
        <MainComponent DetailsAPI={MangaAPI} type={"Manga"}/>
      </div>
      <Footer />
    </Fragment>
  );
}

export default MangaContainer;
