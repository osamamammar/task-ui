import React from "react";
import { InputControl, InputStyling, Wrapper } from "../SnippingForm.styles";

const BuyAmount = ({ buyAmount, handleChanges, currency, gasAmount }) => {
  return (
    <InputControl>
      <label htmlFor="buyAmount">Buy Amount</label>
      <Wrapper>
        <InputStyling
          className="buy-amount-input"
          textAlign="left"
          paddingInline="20px 42px"
        >
          <input
            type="number"
            name="buyAmount"
            id="buyAmount"
            onWheel={(e) => e.target.blur()}
            placeholder="0"
            min={0}
            value={buyAmount}
            onChange={handleChanges}
            required
          />
          <label htmlFor="currency"></label>
          <select
            name="currency"
            id="currency"
            required
            value={currency}
            onChange={handleChanges}
          >
            <option value="BNB">BNB</option>
            <option value="BNB">BNB</option>
            <option value="BNB">BNB</option>
          </select>
        </InputStyling>
        <InputStyling>
          <label htmlFor="gasAmount"></label>
          <span className="placeholder">Gas</span>
          <input
            className="gas-amount"
            type="number"
            name="gasAmount"
            id="gasAmount"
            min={0}
            onWheel={(e) => e.target.blur()}
            placeholder="0"
            required
            value={gasAmount}
            onChange={handleChanges}
          />
        </InputStyling>
      </Wrapper>
    </InputControl>
  );
};

export default BuyAmount;
