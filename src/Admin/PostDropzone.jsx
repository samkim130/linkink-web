import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const PostDropzone = ({ vendorId, postId, updatePosts }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      // Do something with the files
      const file = acceptedFiles[0];
      console.log(file);
      const formData = new FormData();
      formData.append("file", file);
      if (postId <0) {
        axios
          .post(`http://localhost:8080/api/v1/post/${vendorId}/add`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(() => {
            console.log("file uploaded successfully as a new post");
            updatePosts();
          })
          .catch((err) => {
            console.log(err);
          });
      } else{
        axios
          .put(`http://localhost:8080/api/v1/post/${postId}/add`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(() => {
            console.log("file uploaded successfully onto post#" + `${postId}`);
            updatePosts();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    [vendorId]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (postId <0)? (
        <p>Drag 'n' drop some files here, or click to select files to make a new post</p>
      ):(
        <p>Drag 'n' drop some files here, or click to select files to add to the post</p>
      )}
    </div>
  );
};
export default PostDropzone;
