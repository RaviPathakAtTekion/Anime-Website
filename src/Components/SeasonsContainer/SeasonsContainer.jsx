import { Fragment } from "react";
import AnimeSeasonsContainer from "../AnimeSeasonsContainer/AnimeSeasonsContainer.jsx";
import SchedulesContainer from "../SchedulesContainer/SchedulesContainer.jsx";
import Header from "../HomeContainer/HeaderItems/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./SeasonsContainer.scss";

function SeasonsContainer() {
  return (
    <Fragment>
      <Header />
      <div className="seasons_schedules_container">
        <AnimeSeasonsContainer />
        <SchedulesContainer />
      </div>
      <Footer />
    </Fragment>
  );
}

export default SeasonsContainer;
