import React from "react";
import { DivWrapper, SelectOption } from "../SnippingForm.styles";

const HeaderSelectionOptions = ({ cake, handleChanges, bsc }) => {
  return (
    <DivWrapper marginBlockEnd="24px">
      <h2 className="form-header">
        Mempool token Sniper
        <span>ALPHA</span>
      </h2>
      <DivWrapper>
        <SelectOption>
          <label htmlFor="cake"></label>
          <select
            className="cake"
            name="cake"
            id="cake"
            value={cake}
            onChange={handleChanges}
            required
          >
            <option value="PancakeSwap">PancakeSwap</option>
            <option value="PancakeSwap">PancakeSwap</option>
            <option value="PancakeSwap">PancakeSwap</option>
          </select>
        </SelectOption>
        <SelectOption>
          <label className="bsc" htmlFor="bsc"></label>
          <select
            name="bsc"
            id="bsc"
            value={bsc}
            onChange={handleChanges}
            required
          >
            <option value="BSC">BSC</option>
            <option value="BSC">BSC</option>
            <option value="BSC">BSC</option>
          </select>
        </SelectOption>
      </DivWrapper>
    </DivWrapper>
  );
};

export default HeaderSelectionOptions;
