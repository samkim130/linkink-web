import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { getConfiguration } from '../config.jsx';

axios.defaults.baseURL = getConfiguration();
const Dropzone = ({ selection, vendorId, updateVendor }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (selection === "default") return;
      const id = Number(selection);
      if (id !== vendorId) {
        console.log("does not match!",id, vendorId);
        return;
      }
      // Do something with the files
      const file = acceptedFiles[0];
      console.log(file);
      const formData = new FormData();
      formData.append("file", file);

      axios
        .post(
          `/api/v1/vendor/${vendorId}/image/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(() => {
          console.log("file uploaded successfully");
          updateVendor();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [selection, vendorId, updateVendor]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};
export default Dropzone;
