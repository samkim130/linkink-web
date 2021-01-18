import React from "react";
import Images from "./Images.jsx";
import { Link } from "react-router-dom";

const MainPost = ({ post, profile }) => {
  const images = post.images;
  const name = profile.firstName + " " + profile.lastName;
  const address = profile.city + ", " + profile.state;
  //const {onClick} = useContext(NavBarContext);

  return (
    <div className="post" id={post.postId}>
      <Images imgs={images} />
      <div className="postDetails">
        <div className="grid-container full">
          <div className="grid-x grid-margin-x">
            <div className="cell small-3">
              <img
                className="postProfileImg"
                src={`http://localhost:8080/api/v1/vendor/${profile.profileId}/image/download/${profile.profileLink}`}
                alt="sampleProfileImage"
              />
            </div>
            <div className="cell small-4 profileDetails">
              <h6 className="Name">{name}</h6>
              <p className="profileDetails">{profile.company}</p>
              <p className="profileDetails">{address}</p>
            </div>
            <div className="cell small-5">
              <Link to={`/vendor/${profile.profileId}`}>
                <button type="button" className="profileBtn">
                  Visit Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
