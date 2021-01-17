import React from "react";
import "./HomeGrid.css";
import MainPost from "./MainPost";
//import {NavBarContext} from "../ContextProviders/NavigationContext.jsx";

import SampleMembers from "../FE_SampleData/SampleMembers.jsx";
import SamplePosts from "../FE_SampleData/SamplePosts.jsx";

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
