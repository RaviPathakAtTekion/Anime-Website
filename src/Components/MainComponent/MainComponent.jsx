import { useState, useEffect } from "react";
import axios from "axios";

import "./MainComponent.scss";
import SideBar from "./SideBar/SideBar";
import DetailsContent from "./DetailsContent/DetailsContent";
import ClassLoaderMini from "../ClassLoader/ClassLoaderMini";
import ClassLoaderMajor from "../ClassLoader/ClassLoaderMajor";
import GenresData from "./GenresData";

function MainComponent({ DetailsAPI, type, apiType }) {
  const [data, setData] = useState({ state: "pending" });
  const [currentPage, setCurrentPage] = useState(1);

  const { loading, genres, error } = GenresData();

  const getAPIData = async (page) => {
    axios
      .get(DetailsAPI, { params: { type: apiType, page: page } })
      .then((response) => {
        setData({ state: "ok", response });
      })
      .catch((error) => console.log("error occured"));
  };

  useEffect(() => {
    getAPIData(currentPage);
  }, [currentPage]);

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
      {genres.length > 0 ? (
        <div className="genres_sidebar_container">
          <SideBar genres={genres} />
        </div>
      ) : (
        <ClassLoaderMini />
      )}
      {data.state === "ok" ? (
        <div className="details_container">
          <DetailsContent
            data={data.response.data.data}
            type={type}
            nextPageContent={() =>
              nextPageContent(data.response.data.pagination)
            }
            prevPageContent={prevPageContent}
          />
        </div>
      ) : (
        <ClassLoaderMajor />
      )}
    </div>
  );
}

export default MainComponent;
