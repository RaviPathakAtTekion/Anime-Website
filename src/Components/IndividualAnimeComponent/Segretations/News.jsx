import NewsElements from "./Elements/NewsElements";
import "../AnimeExtraInfo.scss";

function News({ news }) {

  return (
    <div className="anime_news_container">
      <h2 className="anime_specific_title">News</h2>
      <div className="anime_news_inside_container">
        {news.map((newsItem, id) => (
          <NewsElements newsItem={newsItem} key={id} />
        ))}
      </div>
    </div>
  );
}

export default News;
