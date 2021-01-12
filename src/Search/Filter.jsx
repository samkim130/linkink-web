import React from 'react';
import "./Filter.css";

const StyleButton = ({ btn, idx, id, setSearchFilter }) => {
  const className = "styleBtn" + (btn.btnOn ? " on" : "");
  function onClick() {
    btn.btnOn = !btn.btnOn;
    setSearchFilter((prevState) => {
      const updatedStatus = prevState.styles;
      updatedStatus[idx] = btn;
      return {
        ...prevState,
        styles: updatedStatus,
      };
    });
  }
  return (
    <div className="cell small-4 button-container">
      <button type="button" id={id} className={className} onClick={onClick}>
        {btn.name}
      </button>
    </div>
  );
};

const Filter = ({ searchFilter, setSearchFilter }) => {
  const miles =
    (searchFilter.location.range < 10
      ? "\u00A0\u00A0\u00A0\u00A0"
      : searchFilter.location.range < 100
      ? "\u00A0\u00A0"
      : "") + searchFilter.location.range.toString();

  //perhaps trigger on enter as well
  function onZipChange(e) {
    if (isNaN(e.target.value)) {
      console.log("not allowed to be a non-number");
      e.preventDefault();
      return;
    } else if (e.target.value.toString().length > 5) {
      console.log("too long");
      e.preventDefault();
      return;
    }
    setSearchFilter((prevState) => ({
      ...prevState,
      location: {
        ...prevState.location,
        zipcode: e.target.value,
      },
    }));
  }
  function onRangeChange(e) {
    setSearchFilter((prevState) => ({
      ...prevState,
      location: {
        ...prevState.location,
        range: e.target.value,
      },
    }));
  }
  return (
    <div className="filter-container">
      <h6 style={{ color: "#ff8b8b" }}>Apply Filters</h6>
      <h5 style={{ margin: "10px 0px 8px 0px" }}>Location</h5>
      <div>
        <div className="location-element-container">
          <p>Zipcode</p>
          <input
            id="zipcode"
            type="text"
            value={searchFilter.location.zipcode}
            onChange={onZipChange}
          ></input>
        </div>
        <div className="location-element-container range-container">
          <p>Distance Range</p>
          <input
            id="distRange"
            type="range"
            min="0"
            max="250"
            step="5"
            value={searchFilter.location.range}
            onChange={onRangeChange}
          ></input>
          <span className="show-mile-range">{`${miles} Miles`}</span>
          <ul className="range-labels">
            <li>0 mi</li>
            <li>50 mi</li>
            <li>100 mi</li>
            <li>150 mi</li>
            <li>200 mi</li>
            <li>250 mi</li>
          </ul>
        </div>
      </div>
      <h5 style={{ margin: "10px 0px 8px 0px" }}>Styles</h5>
      <div className="selection-container">
        <div className="grid-container full">
          <div className="grid-x grid-margin-x">
            {searchFilter.styles.map((btn, idx) => {
              const id = btn.name.replace(" ", "-");
              return (
                <StyleButton
                  key={id}
                  btn={btn}
                  id={id}
                  idx={idx}
                  type="styleBtn"
                  setSearchFilter={setSearchFilter}
                />
              );
            })}
          </div>
        </div>
      </div>
      <h5 style={{ margin: "10px 0px 8px 0px" }}>Specialty</h5>
      <div className="selection-container">
        <div className="grid-container full">
          <div className="grid-x grid-margin-x">
            {searchFilter.specialty.map((name) => {
              const id = name.replace(" ", "-");
              return (
                <div key={id} className="cell small-4 button-container">
                  <button type="button" className="specialtyBtn">
                    {name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <h5 style={{ margin: "10px 0px 8px 0px" }}>Artist Rating</h5>
    </div>
  );
};

export default Filter;
