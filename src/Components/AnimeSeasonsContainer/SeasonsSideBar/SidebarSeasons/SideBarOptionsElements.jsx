import { useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
import { mapSeasons } from "../../../../assets/navItems.js";

import "../SidebarSeasons/SidebarSeasons.scss";

function SideBarOptionsElements({ season, getSeason }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = (season) => {
    setShowOptions((prevState) => {
      return prevState ? (prevState = false) : (prevState = true);
    });
  };

  return (
    <div
      className="seasons_element"
      onClick={handleShowOptions}
    >
      {showOptions ? (
        <AiOutlineCaretRight className="dropdown_style" />
      ) : (
        <AiOutlineCaretDown className="dropdown_style" />
      )}
      <h4>{season.year}</h4>
      {showOptions && (
        <ul className="seasons_list" >
          {mapSeasons.map((seasons, id) => (
            <li key={id} onClick={() => getSeason(seasons, season.year)}>{seasons}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SideBarOptionsElements;
