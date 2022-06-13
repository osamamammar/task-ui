import React, { useState } from "react";
import { successIconCircleShape } from "../../../assets";
import { InputControl } from "../SnippingForm.styles";

const ContractAddress = ({ handleChanges, address }) => {
  const [successValue, setSuccessValue] = useState(false);

  return (
    <InputControl>
      <label htmlFor="address">Contract address</label>
      <div className="contract-address-input">
        {successValue && <img src={successIconCircleShape} alt="success" />}
        <input
          type="text"
          name="address"
          id="address"
          onWheel={(e) => e.target.blur()}
          placeholder="0x..."
          pattern="0x[a-fA-F0-9]{10,}"
          required
          value={address}
          onChange={(e) => {
            if (e.target.value.match(/^0x[a-fA-F0-9]{10,}$/)) {
              setSuccessValue(true);
              handleChanges(e);
            } else {
              setSuccessValue(false);
              handleChanges(e);
            }
          }}
        />
      </div>
    </InputControl>
  );
};

export default ContractAddress;
