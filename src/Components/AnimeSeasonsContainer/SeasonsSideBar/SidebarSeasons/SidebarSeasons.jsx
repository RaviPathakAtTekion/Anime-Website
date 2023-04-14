
import SideBarOptionsElements from "./SideBarOptionsElements.jsx";

import "./SidebarSeasons.scss";

function SidebarSeasons({ seasons, getSeason }) {

  return (
    <div className="seasons_elements">
      {seasons.map((season, id) => (
        <SideBarOptionsElements key={id} season={season} getSeason={getSeason}/>
      ))}
    </div>
  );
}

export default SidebarSeasons;
