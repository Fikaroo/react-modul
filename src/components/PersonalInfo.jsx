import React from "react";

const PersonalInfo = () => {
  const personalData = {
    name: "Fuad",
    age: 20,
    district: "Baku, Khatai",
  };
  return (
    <div>
      <h2> Personal Info</h2>
      <p> Name: {personalData.name}</p>
      <p> Age: {personalData.age}</p>
      <p> District: {personalData.district}</p>
    </div>
  );
};

export default PersonalInfo;
