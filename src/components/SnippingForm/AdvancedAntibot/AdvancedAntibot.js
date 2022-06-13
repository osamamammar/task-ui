import React from "react";
import { InputControl, InputStyling, Wrapper } from "../SnippingForm.styles";

const AdvancedAntibot = ({
  setFormData,
  formData,
  numberOfBlocks,
  handleChanges,
}) => {
  return (
    <InputControl>
      <label htmlFor="numberOfBlocks">Advanced anti-bot measures</label>
      <Wrapper>
        <InputStyling paddingInline="20px" textAlign="center">
          <span className="upper-placeholder">Number of blocks to wait</span>
          <button
            className="btn plus"
            onClick={(e) => {
              e.preventDefault();
              setFormData({
                ...formData,
                numberOfBlocks: ++numberOfBlocks,
              });
            }}
          >
            &#43;
          </button>
          <input
            type="number"
            name="numberOfBlocks"
            id="numberOfBlocks"
            required
            min={0}
            onWheel={(e) => e.target.blur()}
            value={numberOfBlocks}
            onChange={handleChanges}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (numberOfBlocks > 0) {
                setFormData({
                  ...formData,
                  numberOfBlocks: --numberOfBlocks,
                });
              }
            }}
            className="btn minus"
          >
            &#8722;
          </button>
        </InputStyling>
      </Wrapper>
    </InputControl>
  );
};

export default AdvancedAntibot;
