import { Fragment, useState } from "react";
import ReactPlayer from "react-player/youtube";
import "./AnimeTrailerView.scss";

function AnimeTrailerView({ animeContent }) {
  const [mouseHover, setMouseHover] = useState(false);

  const handleMouseHoverEnter = (e) => {
    setTimeout(() => {
      setMouseHover(true);
    }, 1000);
  };

  const handleMouseHoverLeave = (e) => {
    setTimeout(() => {
      setMouseHover(false);
    }, 1000);
  };

  return (
    <Fragment>
      {window.screen.width > 1024 ? (
        <div
          className="anime_image"
          onMouseEnter={handleMouseHoverEnter}
          onMouseLeave={handleMouseHoverLeave}
        >
          {mouseHover && animeContent?.trailer?.url ? (
            <ReactPlayer
              width={"50em"}
              height={"38em"}
              url={animeContent.trailer.url}
              playing={true}
              className="anime_video_style"
            />
          ) : (
            <img
              src={animeContent.images.webp.image_url}
              alt={animeContent.title}
            ></img>
          )}
        </div>
      ) : (
        <div className="anime_image">
          <img
            src={animeContent.images.webp.image_url}
            alt={animeContent.title}
          ></img>
        </div>
      )}
    </Fragment>
  );

  // <video
  //   crossOrigin="anonymous"
  //   className="anime_vide_style"
  //   autoPlay
  //   loop
  //   muted
  //   controls
  // >
  //   <source src={animeContent.trailer.url} type="video/mp4"></source>
  // </video>;
}

export default AnimeTrailerView;
