import ContentInfo from "./ContentInfo.jsx";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import "./DetailsContent.scss";

function DetailsContent({ data, type, nextPageContent, prevPageContent }) {
  
  return (
    <div className="container_styling">
      <h1>{type}</h1>
      <div className="data_container_style">
        {data.map((content) => (
          <ContentInfo key={content.mal_id} content={content} type={type}/>
        ))}
      </div>
      <div className="container_buttons_style">
        <GrFormPrevious className="navContent_button_style" onClick={prevPageContent} />
        <GrFormNext className="navContent_button_style" onClick={nextPageContent} />
      </div>
    </div>
  );
}

export default DetailsContent;
