import React from "react";
import { InputControl, InputStyling, Wrapper } from "../SnippingForm.styles";

const Slippage = ({
  maxSilppage,
  maxBlocks,
  handleChanges,
  setFormData,
  formData,
}) => {
  return (
    <InputControl>
      <label htmlFor="maxSilppage">Slippage / Point of cancel</label>
      <Wrapper>
        <InputStyling paddingInline="20px" textAlign="center">
          <span className="upper-placeholder">Max Silppage</span>
          <button
            className="btn plus"
            onClick={(e) => {
              e.preventDefault();
              setFormData({
                ...formData,
                maxSilppage: ++maxSilppage,
              });
            }}
          >
            &#43;
          </button>
          <input
            type="number"
            name="maxSilppage"
            id="maxSilppage"
            min={0}
            onWheel={(e) => e.target.blur()}
            value={maxSilppage}
            onChange={handleChanges}
            required
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (maxSilppage > 0) {
                setFormData({
                  ...formData,
                  maxSilppage: --maxSilppage,
                });
              }
            }}
            className="btn minus"
          >
            &#8722;
          </button>
        </InputStyling>

        <InputStyling paddingInline="20px" textAlign="center">
          <span className="upper-placeholder">Max Blocks since LP add</span>
          <button
            className="btn plus"
            onClick={(e) => {
              e.preventDefault();
              setFormData({
                ...formData,
                maxBlocks: ++maxBlocks,
              });
            }}
          >
            &#43;
          </button>
          <label htmlFor="maxBlocks" className="visually-hidden">
            enter number
          </label>
          <input
            type="number"
            name="maxBlocks"
            id="maxBlocks"
            required
            min={0}
            onWheel={(e) => e.target.blur()}
            value={maxBlocks}
            onChange={handleChanges}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (maxBlocks > 0) {
                setFormData({
                  ...formData,
                  maxBlocks: --maxBlocks,
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

export default Slippage;
