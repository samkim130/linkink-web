import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { MsgSVG, ScheduleSVG, SMSVG } from "./ArtistProfileSVGs.jsx";

import { sampleProfilePosts } from "../FE_SampleData/SamplePosts.jsx";

import "./ProfileGrid.css";

const ImagePost = ({ id }) => {
  //const postDate = "";
  //const postID = "";

  return (
    <div className="profile-image-container">
      <img
        className="profile-feed-images"
        src={`http://localhost:8080/api/v1/image/${id}/download`}
        alt={"image#" + id}
      ></img>
    </div>
  );
};

const ArtistProfile = () => {
  const { profileId } = useParams();
  const [profile, setProfile] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/vendor/${profileId}/get`)
      .then((res) => {
        console.log(res.data);
        setProfile(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [profileId]);
  
  if(profile===undefined)
    return null;

  return (
    <div className="profile-feed">
      <div className="profile-container">
        <h4>{`${profile.firstName} ${profile.lastName}`}</h4>
        <h6>{profile.company}</h6>
        <div className="grid-container full profile-info-list">
          <div className="grid-x grid-padding-x">
            <div className="small-6 cell">
              <div className="profile-ellipse-image-container">
                <img
                  className="postProfileImg"
                  src={`http://localhost:8080/api/v1/vendor/${profile.profileId}/image/download/${profile.profileLink}`}
                  alt="sampleProfileImage"
                />
              </div>
              <button type="button" className="followBtn">
                Follow
              </button>
            </div>
            <div className="small-6 cell">
              <ul className="vendor-profile-menu">
                <li>
                  <Link to={`/messages/${profile.profileId}`}>
                    <div className="icon-container">
                      <MsgSVG />
                    </div>
                    <div className="icon-label">Message</div>
                  </Link>
                </li>
                <li>
                  <Link to={`/schedule/${profile.profileId}`}>
                    <div className="icon-container">
                      <ScheduleSVG />
                    </div>
                    <div className="icon-label">Schedule</div>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <div className="icon-container">
                      <SMSVG />
                    </div>
                    <div className="icon-label">Social Media</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-container full">
        <div className="grid-x grid-padding-x">
          {profile.images.map((image) => (
            <div key={image.imageId} className="small-6 cell">
              <ImagePost id={image.imageId} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
