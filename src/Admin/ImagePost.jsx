import React, { useState } from "react";

const ImagePost = ({ imgs }) => {
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
          src={`http://localhost:8080/api/v1/image/${imgs[postInfo.slidingImgIdx].imageId}/download`}
          alt={postInfo.slidingAlt}
        />
      )}
      <img
        className={postInfo.mainClass}
        src={`http://localhost:8080/api/v1/image/${imgs[postInfo.imgIdx].imageId}/download`}
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

export default ImagePost;
