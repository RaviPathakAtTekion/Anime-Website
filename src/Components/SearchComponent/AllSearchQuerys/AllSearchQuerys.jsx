import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { BASE_ANIME_API } from "../../../assets/navItems.js";
import { ToggleButtonGroup } from "@mui/material";
import { ToggleButton } from "@mui/material";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import SearchResults from "../SearchResults/SearchResults.jsx";
import ClassLoaderMini from "../../ClassLoader/ClassLoaderMini.jsx";
import "./AllSearchQuerys.scss";

function AllSearchQuerys({ searchQuery }) {
  const [searchResults, setSearchResults] = useState({ state: "pending" });
  const [currentPage, setCurrentPage] = useState(1);
  const [contentType, setContentType] = useState("anime");

  const getSearchResults = async (page, type) => {
    axios
      .get(BASE_ANIME_API + `/${type}`, {
        params: { page: page, q: searchQuery },
      })
      .then((response) => {
        setSearchResults({ state: "ok", response });
      })
      .catch((error) => console.log("error occured"));
  };

  const nextPageContent = (lastIndex) => {
    setCurrentPage((prevPage) => {
      return prevPage === lastIndex ? (prevPage = 1) : prevPage + 1;
    });
  };

  const prevPageContent = () => {
    setCurrentPage((prevPage) => {
      return prevPage === 1 ? (prevPage = 1) : prevPage - 1;
    });
  };

  const handleContentType = (e) => {
    setContentType(e.target.value);
  };

  useEffect(() => {
    getSearchResults(currentPage, contentType);
  }, [currentPage, contentType, searchQuery]);
  
  return (
    <Fragment>
      {searchResults.state === "ok" ? (
        searchResults.response.data.data.length !== 0 ? (
          <div>
            <div className="toggle_content_button_container">
              <ToggleButtonGroup
                color="primary"
                value={contentType}
                exclusive
                onChange={handleContentType}
                aria-label="Platform"
              >
                <ToggleButton className="toggle_buttons_style" value="anime">
                  Anime
                </ToggleButton>
                <ToggleButton className="toggle_buttons_style" value="manga">
                  Manga
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="search_items_main_container">
              <GrFormPrevious
                className="navContent_button_style"
                onClick={() =>
                  prevPageContent(
                    searchResults.response.data.pagination.last_visible_page
                  )
                }
              />
              <SearchResults
                SearchResults={searchResults.response.data.data}
                type={contentType}
              />
              <GrFormNext
                className="navContent_button_style"
                onClick={nextPageContent}
              />
            </div>
          </div>
        ) : (
          <div className="no_data_container">
            <h2>No Data Found</h2>
          </div>
        )
      ) : (
        <ClassLoaderMini />
      )}
    </Fragment>
  );
}

export default AllSearchQuerys;
