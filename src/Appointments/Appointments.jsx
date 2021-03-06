import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import {
  JaneDoeProfile,
  JaneSmithProfile,
  TracySmithProfile,
  NatalieJonesProfile,
} from "../FE_SampleData/SampleMembers.jsx";

import "./Appointments.css";

const sampleUpcoming = [
  {
    artist: JaneDoeProfile,
    date: new Date("Februrary 17, 2021 14:24:00"),
  },
  {
    artist: NatalieJonesProfile,
    date: new Date("January 23, 2021 09:34:00"),
  },
  {
    artist: JaneSmithProfile,
    date: new Date("January 4, 2021 12:23:00"),
  },
  {
    artist: TracySmithProfile,
    date: new Date("March 2, 2021 14:08:00"),
  },
];
const sampleRequested = [
  {
    artist: NatalieJonesProfile,
    date: new Date("January 23, 2021 16:34:00"),
  },
  {
    artist: JaneSmithProfile,
    date: new Date("March 30, 2021 13:23:00"),
  },
];
const samplePast = [
  {
    artist: JaneSmithProfile,
    date: new Date("November 29, 2020 13:56:00"),
  },
  {
    artist: TracySmithProfile,
    date: new Date("September 21, 2020 11:08:00"),
  },
];

const Schedule = ({ artist, date, idx }) => {
  const evenOdd = idx % 2 === 0 ? "even" : "odd";
  const dateStr = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  const timeStr = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <div className={`schedule-container ${evenOdd}`}>
      <div className="grid-container full">
        <div className="grid-x grid-margin-x">
          <div className="cell small-4 sched-profile-info">
            <img
              className="sched-profile-img"
              src={artist.profileImg}
              alt="artistProfileImage"
            />
            <p>{`${artist.firstName} ${artist.lastName}`}</p>
            <p>{artist.company}</p>
          </div>
          <div className="cell small-4 appointment-details-container">
            <div className="appointment-details-centered">
              <p>Follow Up</p>
              <p>{dateStr}</p>
              <p>{timeStr}</p>
            </div>
          </div>
          <div className="cell small-4 view-details-container">
            <button type="button" className="details-button">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Appointments = () => {
  const [tabState, setTabState] = useState({
    tabs: ["Upcoming", "Requested", "Past"],
    prevIdx: 0,
    activeIdx: 0,
  });
  const [slideClass, setSlideClass] = useState("");
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    switch (tabState.activeIdx) {
      case 0:
        setSchedules(sampleUpcoming);
        break;
      case 1:
        setSchedules(sampleRequested);
        break;
      case 2:
        setSchedules(samplePast);
        break;
      default:
        break;
    }
  }, [tabState]);

  const highlightClass =
    tabState.activeIdx === 0
      ? "left"
      : tabState.activeIdx === 1
      ? "middle"
      : "right";

  function onTabClick(idx) {
    if (tabState.activeIdx === idx) return;
    //console.log(`${idx} and ${tabState.activeIdx}`);

    const diff = idx - tabState.activeIdx;
    switch (diff) {
      case 2:
        setSlideClass("highlight-slide-left-far");
        break;
      case 1:
        setSlideClass("highlight-slide-left");
        break;
      case -1:
        setSlideClass("highlight-slide-right");
        break;
      case -2:
        setSlideClass("highlight-slide-right-far");
        break;
      default:
        break;
    }
    setTabState((prevState) => ({
      ...prevState,
      prevIdx: prevState.activeIdx,
      activeIdx: idx,
    }));
    setTimeout(() => {
      setSlideClass("");
    }, 300);
  }

  return (
    <div className="appointment-feed">
      <h4 style={{ margin: "0px 0px 30px 0px" }}>My Appointments</h4>
      <div className="tab-container">
        <ul className="tabs" data-tabs="">
          {tabState.tabs.map((name, idx) => (
            <li
              className="tabs-title"
              id={`tab-${idx}`}
              key={`${name}-tab-${idx}`}
              onClick={() => onTabClick(idx)}
            >
              <Link to={`/schedule#${name}`}>{name}</Link>
            </li>
          ))}
        </ul>
        <hr className={`tabHighlight ${highlightClass} ${slideClass}`} />
      </div>
      <div class="tabs-content-container">
        <div class="schedule-panel">
          {schedules.map((sched, idx) => (
            <Schedule
              key={idx}
              artist={sched.artist}
              date={sched.date}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
