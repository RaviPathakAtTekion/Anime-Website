import { BsLaptop } from "react-icons/bs";
import { MdOutlineUpcoming } from "react-icons/md";
import TopAiringAnimes from "./AiringAnimes/AiringAnimes.jsx";
import TopAnimes from "./TopAnimes/TopAnimes.jsx";
import UpcomingAnimes from "./UpcomingAnimes/UpcomingAnimes.jsx";
import BigThreeContainer from "../BigThreeContainer/BigThreeContainer.jsx";

import "./AnimeComponent.scss";

// home page main component container
function AnimeComponent() {
  return (
    <div className="animes_container">
      <TopAiringAnimes />
      <div className="extra_animes_component_styles">
        <TopAnimes BsLaptop={BsLaptop} />
        <UpcomingAnimes MdOutlineUpcoming={MdOutlineUpcoming} />
      </div>
      <div className="BigThreeContainer">
        <BigThreeContainer />
      </div>
    </div>
  );
}

export default AnimeComponent;
