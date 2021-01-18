import React, {useState, useEffect} from "react";
import axios from 'axios';
import { getConfiguration } from '../config.jsx';
import "./HomeGrid.css";
import MainPost from "./MainPost.jsx";

axios.defaults.baseURL = getConfiguration();

const Home = () => {
  const [feed, setFeed]=useState([]);
  useEffect(()=>{
    axios
    .get(`/api/v1/post`)
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
