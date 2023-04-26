import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { BASE_ANIME_API, currentDay } from "../../assets/navItems";
import ScheduleAnimes from "./ScheduleAnimes/ScheduleAnimes";
import ClassLoaderMini from "../ClassLoader/ClassLoaderMini";

import "./SchedulesContainer.scss";

function SchedulesContainer() {
  const [scheduleAnime, setScheduleAnime] = useState({ state: "pending" });

  const getAnimeSchedule = async (day) => {
    axios
      .get(BASE_ANIME_API + "/schedules", {
        params: { filter: day },
      })
      .then((response) => {
        setScheduleAnime({ state: "ok", response });
      })
      .catch((error) => console.log("error occured"));
  };

  useEffect(() => {
    getAnimeSchedule(currentDay);
  }, []);
  
  
  return (
    <Fragment>
      {scheduleAnime.state === "ok" ? (
        <div className="schedule_container">
          <h2>{currentDay.toUpperCase()}</h2>
          <ScheduleAnimes
            scheduleAnime={scheduleAnime.response.data.data}
          />
        </div>
      ) : (
        <ClassLoaderMini />
      )}
    </Fragment>
  );
}

export default SchedulesContainer;
