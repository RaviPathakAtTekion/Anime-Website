import "./HomeContainer.scss";
import { Fragment } from "react";
import Header from "./HeaderItems/Header.jsx";
import AnimeComponent from "./AnimeComponents/AnimeComponent.jsx";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

// home page starter distribution contianer
function HomeContainer() {
  return (
    <Fragment>
      <Header />
      <AnimeComponent />
      <Footer />
    </Fragment>
  );
}

export default HomeContainer;
