import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Header from "../HomeContainer/HeaderItems/Header";
import AllSearchQuerys from "./AllSearchQuerys/AllSearchQuerys";

import "./SearchComponent.scss";

function SearchComponent() {
  const location = useLocation();
  const searchQuery = location.state.search;

  return (
    <Fragment>
      <Header />
      <div className="search_container">
        <AllSearchQuerys searchQuery={searchQuery} />
      </div>
    </Fragment>
  );
}

export default SearchComponent;
