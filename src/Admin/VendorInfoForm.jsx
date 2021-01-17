import React from 'react';
import Dropzone from './Dropzone.jsx';

const VendorInfoForm = ({
  vendorForm,
  setVendorForm,
  selection,
  updateVendor,
}) => {
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
        <Dropzone
          selection={selection}
          vendorId={vendorForm.profileId}
          updateVendor={updateVendor}
        />
      )}
    </div>
  );
};

export default VendorInfoForm;
