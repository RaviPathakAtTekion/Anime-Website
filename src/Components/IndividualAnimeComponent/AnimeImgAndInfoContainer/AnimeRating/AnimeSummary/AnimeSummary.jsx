import "./AnimeSummary.scss";

function AnimeSummary({ animeContent }) {
  return (
    <div className="anime_summary">
    <h3>Synopsis</h3>
    <p>{animeContent.synopsis}</p>
    </div>
  )
}

export default AnimeSummary;
