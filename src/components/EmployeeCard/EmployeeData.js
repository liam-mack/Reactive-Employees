import React from "react";
import "./employeedata.scss"
import images from "../../images/Images"

export default function EmployeeData({
  id,
  name,
  department,
  email,
  phone,
}) {
  let photoUrl = (name.replace(/\s+/g, ''));
  return (
<div class="wrapper">
  <div class="container">
    <img src={ images[photoUrl]} alt="profile" class="profile-img" />
    <div class="content">
      <div class="sub-content">
        <h1>{name}</h1>
        <span>{email}</span>
        <p>Dunder Mifflin Paper</p>
        <span class="location"><i class="fa fa-map-marker" aria-hidden="true"></i>Scranton, Ohio</span>
        <div>{department}</div>
      </div>
      <div class="btn">{phone}</div>
    </div>
  </div>
</div>
  )}
