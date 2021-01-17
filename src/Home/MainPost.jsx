import React from "react";
import Images from "./Images";
import { Link } from "react-router-dom";

const MainPost = ({ postInfo, profileInfo }) => {
  const images = postInfo.imageLink;
  const name = profileInfo.firstName + " " + profileInfo.lastName;
  const address = profileInfo.address.city + ", " + profileInfo.address.state;
  //const {onClick} = useContext(NavBarContext);

  return (
    <div className="post" id={postInfo.postID}>
      {images.length > 1 ? (
        <Images imgs={images} />
      ) : (
        <div className="imageContainer">
          <img className="postImage" src={images[0]} alt="samplePostImage" />
        </div>
      )}
      <div className="postDetails">
        <div className="grid-container full">
          <div className="grid-x grid-margin-x">
            <div className="cell small-3">
              <img
                className="postProfileImg"
                src={profileInfo.profileImg}
                alt="sampleProfileImage"
              />
            </div>
            <div className="cell small-4 profileDetails">
              <h6 className="Name">{name}</h6>
              <p className="profileDetails">{profileInfo.company}</p>
              <p className="profileDetails">{address}</p>
            </div>
            <div className="cell small-5">
              <Link to={`/vendor/${profileInfo.profileID}`}>
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
