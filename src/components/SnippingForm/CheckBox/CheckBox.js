import React from "react";
import { InputControl } from "../SnippingForm.styles";

const CheckBox = ({ checkBoxState, setFormData, formData }) => {
  return (
    <InputControl display={"inline-block"} marginBlockEnd={"20px"}>
      <input
        type="checkbox"
        name="checkBoxState"
        id="checkBoxState"
        value={checkBoxState}
        required
        onChange={(e) =>
          setFormData({ ...formData, checkBoxState: !checkBoxState })
        }
      ></input>
      <label htmlFor="checkBoxState">I understand the risk</label>
    </InputControl>
  );
};

export default CheckBox;
