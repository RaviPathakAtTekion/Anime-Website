import ContentInfo from "./ContentInfo.jsx";
import { PrevButton, NextButton } from "../../../assets/navItems.js";

import "./DetailsContent.scss";

// anime content display container component
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
        <PrevButton className="navContent_button_style" onClick={prevPageContent} />
        <NextButton className="navContent_button_style" onClick={nextPageContent} />
      </div>
    </div>
  );
}

export default DetailsContent;
