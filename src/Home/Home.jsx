import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./HomeGrid.css";
import MainPost from "./MainPost";
//import {NavBarContext} from "../ContextProviders/NavigationContext.jsx";

const Home = () => {
  const [feed, setFeed]=useState([]);
  useEffect(()=>{
    axios
    .get(`http://localhost:8080/api/v1/post`)
    .then((res) => {
      console.log(res);
      setFeed(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },[]);

  return (
    <div className="grid-container feed">
      <div className="grid-y grid-padding-y">
        {feed.map((post) => {
          const profile = post.vendor;
          if (profile === undefined)
            console.log(
              "error: profile#" +
                post.vendor.profileId +
                " doesn't exist for post " +
                post.postId
            );

          return (
            <div className="cell" key={post.postId}>
              <MainPost post={post} profile={profile}></MainPost>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
