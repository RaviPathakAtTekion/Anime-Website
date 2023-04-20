import { Fragment, useState } from "react";
import { lazy } from "react";
import { PrevButton, NextButton } from "../../../assets/navItems";
import "../AnimeExtraInfo.scss";
// const CharactersElements = lazy(() => import("./Elements/CharactersElements.jsx"))
import CharactersElements from "./Elements/CharactersElements";

function Characters({ characters }) {
  const [currentCharacter, setCurrentCharacter] = useState(0);

  const prevCharacter = () => {
    setCurrentCharacter((prev) => {
      return prev === 0 ? 0 : prev - 1;
    });
  };

  const nextCharacter = () => {
    setCurrentCharacter((prev) => {
      return prev === characters.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <Fragment>
      <h2 className="anime_specific_title">Characters</h2>
      <div className="anime_characters_container">
        <PrevButton
          className="anime_button_style larger_button"
          onClick={prevCharacter}
        />
        <CharactersElements character={characters[currentCharacter]} />
        <NextButton className="anime_button_style larger_button" onClick={nextCharacter} />
      </div>
    </Fragment>
  );
}

export default Characters;
