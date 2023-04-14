import image from "../../../assets/animeKaizoku-dark.png";
import Auth from "../AuthButtons/Auth.jsx";

import "./AnimeImageAuth.scss";

function AnimeImageAuth({ userDetails = null }) {
  return (
    <div className="header__style">
      <img className="logo__styling" src={image} alt="anime kaizoku"></img>
      <Auth userDetails={userDetails} />
    </div>
  );
}

export default AnimeImageAuth;
