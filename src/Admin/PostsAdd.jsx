import React, { useState,useEffect } from "react";
import ImagePost from "./ImagePost.jsx";
import PostDropzone from "./PostDropzone.jsx";
import axios from "axios";

const PostsAdd = ({ vendorId, vendorPosts }) => {
  const [posts, setPosts] = useState(vendorPosts);
  useEffect(() => {
    setPosts(vendorPosts);
  }, [vendorPosts]);

  function updatePosts() {
    axios
      .get(`http://localhost:8080/api/v1/post/byVendor/${vendorId}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="vendor-posts-container">
      <h6>Posts</h6>
      {posts.map((post, idx) => (
        <div className="post-edit-container" key={idx}>
          <ImagePost imgs={post.images} />
        </div>
      ))}
      <div className="post-addition-container">
        <div> Add Posts </div>
        <PostDropzone vendorId={vendorId} updatePosts={updatePosts} />
      </div>
    </div>
  );
};

export default PostsAdd;
