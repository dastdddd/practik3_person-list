import React from "react";
import { useParams } from "react-router-dom";

const PersonDedail = ({
  lastName,
  firstName,
  surName,
  adress,
  phone,
  email,
  gender,
}) => {
  const { id } = useParams();

  return (
    <div className="person-detail">
      <span>
        Фамилия:{lastName} {firstName} {surName}
      </span>
      <span>{id}</span>
      <span>Адресс: {adress}</span>
      <span>Phone number: {phone}</span>
      <span>Email: {email}</span>
      <span>Gender: {gender}</span>
    </div>
  );
};

export default PersonDedail;
