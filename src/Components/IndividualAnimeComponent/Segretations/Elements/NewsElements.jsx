import "./NewsElements.scss";

function NewsElements({ newsItem }) {

  return (
    <div className="newsItem_container">
      <a href={newsItem.url} className="news_image_container">
        <img src={newsItem.images.jpg.image_url} alt={newsItem.title} />
      </a>
      <div className="anime_news_details">
        <h5>
          <span>Title - </span>
          {newsItem.title}
        </h5>
        <p>
          <span>Date - </span>
          {newsItem.date.substring(0, 10)}
        </p>
        <a href={newsItem.author_url}>
          <span>Author - </span>
          {newsItem.author_username}
        </a>
        <a className="forum_link" href={newsItem.forum_url}>
          Forum Link
        </a>
      </div>
    </div>
  );
}

export default NewsElements;
