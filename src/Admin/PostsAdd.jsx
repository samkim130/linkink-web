import React, { useState, useEffect } from "react";
import Images from "../Home/Images.jsx";
import PostDropzone from "./PostDropzone.jsx";
import axios from "axios";
import { getConfiguration } from '../config.jsx';

axios.defaults.baseURL = getConfiguration();

const PostsAdd = ({ vendorId, vendorPosts, adminCode }) => {
  const [posts, setPosts] = useState(vendorPosts);
  useEffect(() => {
    setPosts(vendorPosts);
  }, [vendorPosts]);

  function updatePosts() {
    axios
      .get(`/api/v1/post/byVendor/${vendorId}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function onDeleteClick(e) {
    axios
      .delete(`/api/v1/post/${e.target.value}/remove/wAdmin/${adminCode}`)
      .then((res) => {
        console.log(res);
        updatePosts();
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
          <div>{`Post #${post.postId}`}</div>
          <button className="button" onClick={onDeleteClick} value={post.postId}>
          {`Delete Post #${post.postId}`}
          </button>
          <Images imgs={post.images} />
          <PostDropzone
            vendorId={vendorId}
            postId={post.postId}
            updatePosts={updatePosts}
            adminCode={adminCode}
          />
        </div>
      ))}
      <div className="post-addition-container">
        <div> Add Posts </div>
        <PostDropzone
          vendorId={vendorId}
          postId={-1}
          updatePosts={updatePosts}
          adminCode={adminCode}
        />
      </div>
    </div>
  );
};

export default PostsAdd;
