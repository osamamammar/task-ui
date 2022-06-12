import React from "react";
import { dangerAlert } from "../../../assets";
import {
  DisclaimerCardBody,
  DisclaimerCardHeader,
} from "./DisclaimerCard.styles";

const DisclaimerCard = () => {
  return (
    <>
      <DisclaimerCardHeader>
        <img
          src={dangerAlert}
          alt="danger-icon"
          title="danger"
          width={32}
          height={32}
        />
        <h3>Disclaimer</h3>
      </DisclaimerCardHeader>
      <DisclaimerCardBody>
        <p>
          I fully understand I am using this tool at my own responsibility, this
          is a highly advanced feature that can fail and incur me massive
          losses. Nobody is responsible for using it other than me.
        </p>
      </DisclaimerCardBody>
    </>
  );
};

export default DisclaimerCard;
