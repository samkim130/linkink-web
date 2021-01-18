import React, { useEffect, useState } from "react";
import axios from "axios";
import { getConfiguration } from "../config.jsx";
import VendorInfoForm from "./VendorInfoForm.jsx";
import PostsAdd from "./PostsAdd.jsx";
import "./Admin.css";

axios.defaults.baseURL = getConfiguration();

const DEFAULT_FILL_IN = {
  profileId: -1,
  firstName: "",
  lastName: "",
  company: "",
  emailAddress: "randomEmail@whateverinc.com",
  address: "",
  country: "USA",
  state: "",
  phoneNumber: "999-999-9999",
  profileLink: "",
  posts: [],
  images: [],
};

const Admin = () => {
  //admin passcode
  const [adminCode, setAdminCode] = useState("");
  function onAdminCodeInputChange(e) {
    setAdminCode(e.target.value);
  }

  //get from backend
  const [vendorList, setVendorList] = useState([]);
  const [selection, setSelection] = useState("default");

  useEffect(() => {
    updateVendor();
  }, []);
  function updateVendor() {
    axios
      .get(`/api/v1/vendor/basicList`)
      .then((res) => {
        console.log(res);
        setVendorList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //fill in form based on selection
  const [vendorForm, setVendorForm] = useState(DEFAULT_FILL_IN);
  useEffect(() => {
    if (selection === "default") {
      setVendorForm(DEFAULT_FILL_IN);
    } else {
      axios
        .get(`/api/v1/vendor/${selection}/get`)
        .then((res) => {
          console.log(res.data);
          console.log(res.data.posts);
          setVendorForm(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [vendorList, selection]);

  function onVendorSelect(e) {
    setSelection(e.target.value);
  }
  function onAddClick() {
    if (selection !== "default") return;
    axios
      .post(`/api/v1/vendor/add/wAdmin/${adminCode}`, vendorForm, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        updateVendor();
        setVendorForm(DEFAULT_FILL_IN);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function onEditClick() {
    if (selection === "default") return;
    const vendorId = Number(selection);
    axios
      .put(`/api/v1/vendor/${vendorId}/update/wAdmin/${adminCode}`, vendorForm, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        updateVendor();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function onDeleteClick() {
    if (selection === "default") return;
    const vendorId = Number(selection);
    axios
      .delete(`/api/v1/vendor/${vendorId}/remove/wAdmin/${adminCode}`)
      .then((res) => {
        console.log(res);
        setSelection("default");
        updateVendor();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="admin-container">
      <h4>Temporary Form to add Vendors and Posts to the account</h4>
      <h6>
        needs admin access using hashed password to prevent overload of data in
        S3 and Heroku postgres (free tiers)
      </h6>
      <label>Admin Code :</label>
      <input
        className="form-inputs"
        id="adminCode"
        type="text"
        value={adminCode}
        onChange={onAdminCodeInputChange}
      />

      <br />
      {selection === "default" ? (
        <button className="button" onClick={onAddClick}>
          add Vendor
        </button>
      ) : (
        <>
          <button className="button" onClick={onEditClick}>
            {" "}
            edit Vendor
          </button>
          <br />
          <button className="button" onClick={onDeleteClick}>
            {" "}
            delete Vendor
          </button>
        </>
      )}
      <br />
      <select
        name="vendors"
        id="vendors"
        value={selection}
        onChange={onVendorSelect}
      >
        <option value="default">add new</option>
        {vendorList.map((vendor) => (
          <option key={vendor.profileId} value={vendor.profileId}>
            {" "}
            {vendor.fullName}
          </option>
        ))}
      </select>
      <VendorInfoForm
        vendorForm={vendorForm}
        setVendorForm={setVendorForm}
        selection={selection}
        updateVendor={updateVendor}
        adminCode={adminCode}
      />
      {selection === "default" ? null : (
        <PostsAdd
          vendorId={vendorForm.profileId}
          vendorPosts={vendorForm.posts}
          adminCode={adminCode}
        />
      )}
    </div>
  );
};

export default Admin;
