import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

import "./SearchBox.scss";

function SearchBox() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const getInputValue = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length >= 3) {
        navigate("/search", { state: { search: searchValue } });
        setSearchValue("");
      } else {
        alert("minimum length 3");
      }
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const searchText = () => {
    navigate("/search", { state: { search: searchValue } });
    setSearchValue("");
  };

  return (
    <div className="searchBar__style">
      <button type="submit" onClick={searchText}>
        <BiSearch className="search-submit--button__style" />
      </button>
      <input
        className="search--input__styles"
        type="text"
        onKeyDown={getInputValue}
        placeholder="Minimum 3 Characters"
        value={searchValue}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={() => {
          setSearchValue("");
        }}
      >
        <RxCross2 className="search-stop--button__style" />
      </button>
    </div>
  );
}

export default SearchBox;
