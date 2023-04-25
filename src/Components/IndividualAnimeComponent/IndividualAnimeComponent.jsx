import { useLocation } from "react-router-dom";
import { Fragment} from "react";
import AnimeImgAndInfoContainer from "./AnimeImgAndInfoContainer/AnimeImgAndInfoContainer.jsx";
import AnimeProductionInfo from "./AnimeProductionInfo/AnimeProductionInfo.jsx";
import Header from "../HomeContainer/HeaderItems/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./IndividualAnimeComponent.scss";

function IndividualAnimeComponent() {
  const location = useLocation();
  const content = location.state.content;
  const type = location.state.type;

  return (
    <Fragment>
    <Header />
      <div>
        <div className="anime_name_container">
          <h1>
            {content?.title_english ? content.title_english : content.title}
          </h1>
        </div>
        <div className="anime_info_page_container">
          <AnimeImgAndInfoContainer animeContent={content} />
          <AnimeProductionInfo animeContent={content} type={type}/>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default IndividualAnimeComponent;
