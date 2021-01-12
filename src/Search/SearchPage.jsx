import React, { useState, useEffect } from "react";
import Filter from "./Filter.jsx";
import "./SearchPage.css";
import $ from "jquery";

import { sampleProfilePosts } from "../FE_SampleData/SamplePosts.jsx";

const DEFAULT_STYLE_BUTTONS = [
  { name: "Water Color", btnOn: false },
  { name: "Old School", btnOn: false },
  { name: "Fine Line", btnOn: false },
  { name: "Lettering", btnOn: false },
];
const DEFAULT_FILTER = {
  location: {
    zipcode: "",
    range: 30,
  },
  styles: DEFAULT_STYLE_BUTTONS,
  specialty: ["userInput1", "userInput2"],
  rating: 6,
  TBD: null,
};

const FilterIcon = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="30"
      viewBox="0 0 29 30"
      onClick={() => onClick()}
      data-toggle="offCanvasFilter"
    >
      <path
        className="a"
        d="M18.708,11V8H0V4H18.708V1h7.25V4H29V8H25.959v3Z"
        transform="translate(0 -1)"
      />
      <path
        className="a"
        d="M3.708,11V8H0V4H3.708V1h7.25V4H29V8H10.958v3Z"
        transform="translate(0 9)"
      />
      <path
        className="a"
        d="M12.709,11V8H0V4H12.709V1h7.25V4H29V8H19.958v3Z"
        transform="translate(0 19)"
      />
    </svg>
  );
};

const SearchIcon = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="34"
      viewBox="0 0 35 34"
      onClick={() => onClick()}
      data-close="offCanvasFilter"
    >
      <g>
        <rect className="search-icon-c" width="35" height="34" />
        <g transform="translate(10 7)">
          <g className="search-icon-d">
            <ellipse
              className="search-icon-f"
              cx="8.5"
              cy="9"
              rx="8.5"
              ry="9"
            />
            <ellipse
              className="search-icon-c"
              cx="8.5"
              cy="9"
              rx="7"
              ry="7.5"
            />
          </g>
          <g
            className="search-icon-e"
            transform="translate(14.348 12.459) rotate(40)"
          >
            <rect
              id="a"
              className="search-icon-f"
              width="13.905"
              height="3.59"
            />
            <path
              className="search-icon-g"
              d="M0,1.589763879776001h13.905204772949219M11.905204772949219,0v3.589763879776001M13.905204772949219,2h-13.905204772949219M2,3.589763879776001v-3.589763879776001"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const Grid = () => {
  return (
    <>
      <h4>Explore</h4>
      <div className="grid-container full">
        <div className="grid-x grid-padding-x">
          {sampleProfilePosts.map((img, id) => (
            <div key={id} className="small-6 cell">
              <div className="search-image-container">
                <img
                  className="search-feed-images"
                  src={img}
                  alt={"post#" + id}
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState(DEFAULT_FILTER);
  const [initSearchFilter, setInitSearchFilter] = useState(DEFAULT_FILTER);

  useEffect(() => {
    $(".search-page-feed").foundation();
  }, []);

  //perhaps trigger on enter as well
  function onSearchTermChange(event) {
    //condition to be added
    if (false) {
      alert("");
      console.log("");
      event.preventDefault();
      return;
    }
    setSearchTerm(event.target.value);
  }
  function onFilterClick() {
    console.log("filter button pressed");
    //save filter changes for initial as well
    setSearchFilter({ ...initSearchFilter });
    //submit action
  }
  function onSearchClick() {
    console.log("search button pressed");
    //save filter changes for initial as well
    setInitSearchFilter({ ...searchFilter });
    //submit action
  }

  return (
    <div className="search-page-feed">
      <div className="search-bar-container">
        <div className="filter-icon-container">
          <FilterIcon onClick={onFilterClick} />
        </div>
        <div className="search-input-container">
          <input
            className="search-text"
            type="text"
            value={searchTerm}
            placeholder="Search for a Tattoo"
            onChange={onSearchTermChange}
          ></input>
          <SearchIcon onClick={onSearchClick} />
        </div>
      </div>
      <div className="off-canvas-wrapper">
        <div
          className="off-canvas-absolute position-top"
          id="offCanvasFilter"
          data-off-canvas=""
          data-transition="overlap"
        >
          <Filter
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          />
        </div>
        <div className="off-canvas-content" data-off-canvas-content="">
          <Grid />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
/*
<Filter
searchFilter={searchFilter}
setSearchFilter={setSearchFilter}
/>
*/
