import SearchItems from "./SearchItems";
import "./SearchResults.scss";

function SearchResults({ SearchResults, type }) {

  return (
    <div className="search_items_container">
      {SearchResults.map((results) => (
        <SearchItems key={results.mal_id} item={results} type={type} />
      ))}
    </div>
  );
}

export default SearchResults;
