import React from "react";
import { InputControl, InputStyling, Wrapper } from "../SnippingForm.styles";

const TransactionLimit = ({ txLimit, handleChanges, numberOfBuys }) => {
  return (
    <InputControl>
      <label htmlFor="txLimit">Transaction limit / Anti-bot measures</label>
      <Wrapper>
        <InputStyling>
          <span className="placeholder">TX limit</span>
          <input
            type="number"
            name="txLimit"
            id="txLimit"
            placeholder="0"
            required
            min={0}
            onWheel={(e) => e.target.blur()}
            value={txLimit}
            onChange={handleChanges}
          />
        </InputStyling>

        <InputStyling>
          <label htmlFor="numberOfBuys"></label>
          <span className="placeholder">Number of Buys</span>
          <input
            type="number"
            name="numberOfBuys"
            id="numberOfBuys"
            placeholder="0"
            required
            min={0}
            onWheel={(e) => e.target.blur()}
            value={numberOfBuys}
            onChange={handleChanges}
          />
        </InputStyling>
      </Wrapper>
    </InputControl>
  );
};

export default TransactionLimit;
