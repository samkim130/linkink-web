import React, { useState } from "react";
import "./HomeGrid.css";
import { Link } from "react-router-dom";
//import {NavBarContext} from "../ContextProviders/NavigationContext.jsx";

import SampleMembers from "../FE_SampleData/SampleMembers.jsx";
import SamplePosts from "../FE_SampleData/SamplePosts.jsx";

const Images = ({ imgs }) => {
  const length = imgs.length;

  const [postInfo, setPostInfo] = useState({
    imgIdx: 0,
    mainClass: "postImage",
    slidingClass: "postImage",
    slidingImgIdx: null,
    slidingAlt: null,
  });

  async function goLeft() {
    if (postInfo.imgIdx === 0) {
      console.log("photo is at index of 0 already");
      return;
    }
    const updatedPostInfo = {
      imgIdx: postInfo.imgIdx - 1,
      mainClass: "postImage slide-in-left",
      slidingClass: "postImage slide-out-right",
      slidingImgIdx: postInfo.imgIdx,
      slidingAlt: "samplePostImageRight",
    };
    setPostInfo(updatedPostInfo);
    setTimeout(() => {
      setPostInfo({
        ...updatedPostInfo,
        slidingImgIdx: null,
        mainClass: "postImage",
        slidingClass: "postImage",
      });
    }, 500);
  }
  async function goRight() {
    if (postInfo.imgIdx === length - 1) {
      console.log("photo is at max index already");
      return;
    }
    const updatedPostInfo = {
      imgIdx: postInfo.imgIdx + 1,
      mainClass: "postImage slide-in-right",
      slidingClass: "postImage slide-out-left",
      slidingImgIdx: postInfo.imgIdx,
      slidingAlt: "samplePostImageLeft",
    };
    setPostInfo(updatedPostInfo);
    setTimeout(() => {
      setPostInfo({
        ...updatedPostInfo,
        slidingImgIdx: null,
        mainClass: "postImage",
        slidingClass: "postImage",
      });
    }, 500);
  }

  return (
    <div className="imageContainer">
      {postInfo.slidingImgIdx === null ? null : (
        <img
          className={postInfo.slidingClass}
          src={imgs[postInfo.slidingImgIdx]}
          alt={postInfo.slidingAlt}
        />
      )}
      <img
        className={postInfo.mainClass}
        src={imgs[postInfo.imgIdx]}
        alt="samplePostImage"
      />
      {postInfo.imgIdx > 0 ? (
        <button className="arrow-left" onClick={async () => await goLeft()}>
          {" < "}
        </button>
      ) : null}
      {postInfo.imgIdx < length - 1 ? (
        <button className="arrow-right" onClick={async () => await goRight()}>
          {" > "}
        </button>
      ) : null}
    </div>
  );
};

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

const Home = () => {
  return (
    <div className="grid-container feed">
      <div className="grid-y grid-padding-y">
        {SamplePosts.map((post, id) => {
          const profile = SampleMembers.get(post.profileID);
          if (profile === undefined)
            console.log(
              "error: profile#" +
                post.profileID +
                " doesn't exist for post " +
                post.postID
            );

          return (
            <div className="cell" key={id}>
              <MainPost postInfo={post} profileInfo={profile}></MainPost>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
