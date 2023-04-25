import image from "../../../assets/animeKaizoku-dark.png";
import Auth from "../AuthButtons/Auth.jsx";

import "./AnimeImageAuth.scss";

function AnimeImageAuth({ userDetails = null }) {

  let size = "bigger";
  if(window.screen.width < 481){
    size = "smaller";
  }

  return (
    <div className="header__style">
      <img className="logo__styling" src={image} alt="anime kaizoku"></img>
      <Auth userDetails={userDetails} size={size}/>
    </div>
  );
}

export default AnimeImageAuth;
