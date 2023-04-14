import "./CharactersElements.scss";

function CharactersElements({ character }) {

  const JapneseVoiceActor = character?.voice_actors?.findLast((voice_actor) => {
    return voice_actor.language === "Japanese";
  });

  return (
    <div className="character_container_styles">
      <div className="character_image_style">
        <img
          src={character.character.images.webp.image_url}
          alt={character.name}
        ></img>
      </div>
      <div className="character_details">
        <h5>
          <span>Name </span>- {character.character.name}
        </h5>
        <h5>
          <span>Role </span>- {character.role}
          favorites
        </h5>
        {character?.favorites ? (
          <p>
            <span>Favorites By User </span>- {character.favorites}
          </p>
        ) : (
          <p>
            <span>My Anime List Id </span>- {character.character.mal_id}
          </p>
        )}
        <a title="get more info" href={character.character.url}>
          Extra character details
        </a>
      </div>
      {character?.voice_actors && character?.voice_actors.length !== 0 ? (
        <div className="voice_actors_container">
          <h3>Voice Actor</h3>
          <div className="voice_actor_display_style">
            <div className="voice_actor_image">
              {JapneseVoiceActor?.person?.images ? (
                <img
                  src={JapneseVoiceActor.person.images.jpg.image_url}
                  alt={JapneseVoiceActor.person.name}
                ></img>
              ) : (
                ""
              )}
            </div>
            <div className="voice_actor_details">
              <h5>Name - {JapneseVoiceActor.person.name}</h5>
              <h5>Language - {JapneseVoiceActor.language}</h5>
              <a
                title="hover to show user details"
                href={JapneseVoiceActor.person.url}
              >
                Extra Actor details
              </a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CharactersElements;
