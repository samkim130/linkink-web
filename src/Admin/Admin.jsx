import React, { useEffect, useState } from "react";
import axios from "axios";
import Dropzone from "./Dropzone.jsx";
import "./Admin.css";

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
};

const VendorOptions = ({ vendor }) => {
  const name = vendor.firstName + " " + vendor.lastName;

  return <option value={vendor.profileId}> {name}</option>;
};

const VendorInfoForm = ({ vendorForm, setVendorForm, selection, updateVendor }) => {
  function onInputChange(e) {
    const updatedVal =
      (e.target.value === null) | (e.target.value === undefined)
        ? ""
        : e.target.value;
    switch (e.target.id) {
      case "firstName":
        setVendorForm({
          ...vendorForm,
          firstName: updatedVal,
        });
        break;
      case "lastName":
        setVendorForm({
          ...vendorForm,
          lastName: updatedVal,
        });
        break;
      case "company":
        setVendorForm({
          ...vendorForm,
          company: updatedVal,
        });
        break;
      case "email":
        setVendorForm({
          ...vendorForm,
          emailAddress: updatedVal,
        });
        break;
      case "address":
        setVendorForm({
          ...vendorForm,
          address: updatedVal,
        });
        break;
      case "country":
        setVendorForm({
          ...vendorForm,
          country: updatedVal,
        });
        break;
      case "state":
        setVendorForm({
          ...vendorForm,
          state: updatedVal,
        });
        break;
      case "phoneNumber":
        setVendorForm({
          ...vendorForm,
          phoneNumber: updatedVal,
        });
        break;

      default:
        break;
    }
  }
  return (
    <div className="form-container">
      <label>First Name :</label>
      <input
        className="form-inputs"
        id="firstName"
        type="text"
        value={vendorForm.firstName}
        onChange={onInputChange}
      />

      <label>Last Name :</label>
      <input
        className="form-inputs"
        id="lastName"
        type="text"
        value={vendorForm.lastName}
        onChange={onInputChange}
      />

      <label>Company :</label>
      <input
        className="form-inputs"
        id="company"
        type="text"
        value={vendorForm.company}
        onChange={onInputChange}
      />

      <label>Email :</label>
      <input
        className="form-inputs"
        id="email"
        type="text"
        value={vendorForm.emailAddress}
        onChange={onInputChange}
      />

      <label>Address :</label>
      <input
        className="form-inputs"
        id="address"
        type="text"
        value={vendorForm.address}
        onChange={onInputChange}
      />

      <label>Country :</label>
      <input
        className="form-inputs"
        id="country"
        type="text"
        value={vendorForm.country}
        onChange={onInputChange}
      />

      <label>State :</label>
      <input
        className="form-inputs"
        id="state"
        type="text"
        value={vendorForm.state}
        onChange={onInputChange}
      />

      <label>Phone Number :</label>
      <input
        className="form-inputs"
        id="phoneNumber"
        type="text"
        value={vendorForm.phoneNumber}
        onChange={onInputChange}
      />

      <div> photo section</div>
      {vendorForm.profileLink ? (
          <img
            key={new Date()}
            src={`http://localhost:8080/api/v1/vendor/${vendorForm.profileId}/image/download/${vendorForm.profileLink}`}
            alt={vendorForm.profileLink}
          />
        ) : null}
      {selection === "default" ? null : (
        <Dropzone selection={selection} vendorId={vendorForm.profileId} updateVendor={updateVendor}/>
      )}
    </div>
  );
};

const Admin = () => {
  //get from backend
  const [vendorMap, setVendorMap] = useState(new Map());
  const [selection, setSelection] = useState("default");

  useEffect(() => {
    updateVendor();
  }, []);

  //fill in form based on selection
  const [vendorForm, setVendorForm] = useState(DEFAULT_FILL_IN);
  useEffect(() => {
    if (selection === "default") {
      setVendorForm(DEFAULT_FILL_IN);
    } else {
      const id = Number(selection);
      setVendorForm({
        ...vendorMap.get(id),
      });
    }
  }, [vendorMap, selection]);

  function updateVendor() {
    axios
      .get(`http://localhost:8080/api/v1/vendor`)
      .then((res) => {
        console.log(res);
        const newVendorMap = new Map();
        res.data.forEach((vendor) => {
          newVendorMap.set(vendor.profileId, vendor);
        });
        console.log(newVendorMap);
        setVendorMap(newVendorMap);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function onVendorSelect(e) {
    setSelection(e.target.value);
  }
  function onAddClick() {
    if (selection !== "default") return;
    axios
      .post(`http://localhost:8080/api/v1/vendor/add`, vendorForm, {
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
      .put(
        `http://localhost:8080/api/v1/vendor/${vendorId}/update`,
        vendorForm,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
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
      .delete(`http://localhost:8080/api/v1/vendor/${vendorId}/remove`)
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
      <h4>Temporary Form to add Vendors to the account</h4>
      <h6>must need have valid backend Amazon S3 connection and docker/(or other local) database set up</h6>
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
        {[...vendorMap.keys()].map((k) => (
          <VendorOptions key={k} vendor={vendorMap.get(k)} />
        ))}
      </select>
      <VendorInfoForm
        vendorForm={vendorForm}
        setVendorForm={setVendorForm}
        selection={selection}
        updateVendor={updateVendor}
      />
    </div>
  );
};

export default Admin;
