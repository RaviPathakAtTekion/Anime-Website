import { useState } from "react";

import SideBar from "./SideBar/SideBar";
import DetailsContent from "./DetailsContent/DetailsContent";
import ClassLoaderMini from "../ClassLoader/ClassLoaderMini";
import ClassLoaderMajor from "../ClassLoader/ClassLoaderMajor";
import GenresData from "./GenresData";
import AnimeApiCallByType from "./AnimeApiCallByType";

import "./MainComponent.scss";
import ErrorMessage from "../ErrorOccurredComponent/ErrorMessage";

function MainComponent({ DetailsAPI, type, apiType }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, genres, error } = GenresData();

  const { animeLoading, contentData, animeError } = AnimeApiCallByType(
    DetailsAPI,
    apiType,
    currentPage
  );

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

  return (
    <div className="main_container">
      {genres.length !== 0 && error === null && !loading ? (
        <div className="genres_sidebar_container">
          <SideBar genres={genres} />
        </div>
      ) : error !== null ? (
        <ErrorMessage />
      ) : (
        <ClassLoaderMini />
      )}
      {contentData.length !== 0 && !loading && error === null ? (
        <div className="details_container">
          <DetailsContent
            data={contentData.data}
            type={type}
            nextPageContent={() =>
              nextPageContent(contentData.pagination.last_visible_page)
            }
            prevPageContent={prevPageContent}
          />
        </div>
      ) : animeError !== null ? (
        <ErrorMessage />
      ) : (
        <ClassLoaderMajor />
      )}
    </div>
  );
}

export default MainComponent;
