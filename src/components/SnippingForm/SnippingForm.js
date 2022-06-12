import React, { useState } from "react";
import { successIconCircleShape } from "../../assets";
import {
  DivWrapper,
  FormContainer,
  InputControl,
  InputStyling,
  SelectOption,
  Wrapper,
} from "./SnippingForm.styles";

const SnippingForm = () => {
  const [cake, setCake] = useState("PancakeSwap");
  const [bsc, setBsc] = useState("BSC");
  const [address, setAddress] = useState("");
  const [buyAmount, setBuyAmount] = useState({
    amount: "",
    currency: "BNB",
  });
  const [gasAmount, setGasAmount] = useState("");
  const [txLimit, setTxLimit] = useState("");
  const [numberOfBuys, setNumberOfBuys] = useState("");
  const [checked, setChecked] = useState(false);
  const [successValue, setSuccessValue] = useState(false);
  const [currentValue, setCurrentValue] = useState({
    maxSilppage: 0,
    maxBlocks: 0,
    numberOfBlocks: 0,
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setCurrentValue({ ...currentValue, [name]: value });
  };

  const handleBuyAmount = (e) => {
    const { name, value } = e.target;
    setBuyAmount({ ...buyAmount, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
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
              onChange={(e) => setCake(e.target.value)}
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
              onChange={(e) => setBsc(e.target.value)}
              required
            >
              <option value="BSC">BSC</option>
              <option value="BSC">BSC</option>
              <option value="BSC">BSC</option>
            </select>
          </SelectOption>
        </DivWrapper>
      </DivWrapper>

      <InputControl>
        <label htmlFor="contract-address">Contract address</label>
        <div className="contract-address-input">
          {successValue === true && (
            <img src={successIconCircleShape} alt="success" />
          )}
          <input
            type="text"
            name="contract-address"
            id="contract-address"
            onWheel={(e) => e.target.blur()}
            placeholder="0x..."
            pattern="0x[a-fA-F0-9]{10,}"
            required
            value={address}
            onChange={(e) => {
              if (e.target.value.match(/^0x[a-fA-F0-9]{10,}$/)) {
                setSuccessValue(true);
                setAddress(e.target.value);
              } else {
                setSuccessValue(false);
              }
              setAddress(e.target.value);
            }}
          />
        </div>
      </InputControl>

      <InputControl>
        <label htmlFor="amount">Buy Amount</label>
        <Wrapper>
          <InputStyling
            className="buy-amount-input"
            textAlign="left"
            paddingInline="20px 42px"
          >
            <input
              type="number"
              name="amount"
              id="amount"
              onWheel={(e) => e.target.blur()}
              placeholder="0"
              value={buyAmount.amount}
              onChange={handleBuyAmount}
              required
            />
            <label htmlFor="currency"></label>
            <select
              name="currency"
              id="currency"
              required
              value={buyAmount.currency}
              onChange={handleBuyAmount}
            >
              <option value="BNB">BNB</option>
              <option value="BNB">BNB</option>
              <option value="BNB">BNB</option>
            </select>
          </InputStyling>
          <InputStyling>
            <label htmlFor="gas-amount"></label>
            <span className="placeholder">Gas</span>
            <input
              className="gas-amount"
              type="number"
              name="gas-amount"
              id="gas-amount"
              onWheel={(e) => e.target.blur()}
              placeholder="0"
              required
              value={gasAmount}
              onChange={(e) => setGasAmount(e.target.value)}
            />
          </InputStyling>
        </Wrapper>
      </InputControl>

      <InputControl>
        <label htmlFor="transaction-measures">
          Transaction limit / Anti-bot measures
        </label>
        <Wrapper>
          <InputStyling>
            <span className="placeholder">TX limit</span>
            <input
              type="number"
              name="transaction-measures"
              id="transaction-measures"
              placeholder="0"
              required
              onWheel={(e) => e.target.blur()}
              value={txLimit}
              onChange={(e) => setTxLimit(e.target.value)}
            />
          </InputStyling>

          <InputStyling>
            <label htmlFor="number-of-buys"></label>
            <span className="placeholder">Number of Buys</span>
            <input
              type="number"
              name="number-of-buys"
              id="number-of-buys"
              placeholder="0"
              required
              onWheel={(e) => e.target.blur()}
              value={numberOfBuys}
              onChange={(e) => setNumberOfBuys(e.target.value)}
            />
          </InputStyling>
        </Wrapper>
      </InputControl>

      <InputControl>
        <label htmlFor="maxSilppage">Slippage / Point of cancel</label>
        <Wrapper>
          <InputStyling paddingInline="20px" textAlign="center">
            <span className="upper-placeholder">Max Silppage</span>
            <button
              className="btn plus"
              onClick={(e) => {
                e.preventDefault();
                setCurrentValue({
                  ...currentValue,
                  maxSilppage: ++currentValue.maxSilppage,
                });
              }}
            >
              &#43;
            </button>
            <input
              type="number"
              name="maxSilppage"
              id="maxSilppage"
              onWheel={(e) => e.target.blur()}
              value={currentValue.maxSilppage}
              onChange={handleChanges}
              required
              pattern="[0-9]*"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                if (currentValue.maxSilppage > 0) {
                  setCurrentValue({
                    ...currentValue,
                    maxSilppage: --currentValue.maxSilppage,
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
                setCurrentValue({
                  ...currentValue,
                  maxBlocks: ++currentValue.maxBlocks,
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
              value={currentValue.maxBlocks}
              required
              onWheel={(e) => e.target.blur()}
              onChange={handleChanges}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                if (currentValue.maxBlocks > 0) {
                  setCurrentValue({
                    ...currentValue,
                    maxBlocks: --currentValue.maxBlocks,
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

      <InputControl>
        <label htmlFor="numberOfBlocks">Advanced anti-bot measures</label>
        <Wrapper>
          <InputStyling paddingInline="20px" textAlign="center">
            <span className="upper-placeholder">Number of blocks to wait</span>
            <button
              className="btn plus"
              onClick={(e) => {
                e.preventDefault();
                setCurrentValue({
                  ...currentValue,
                  numberOfBlocks: ++currentValue.numberOfBlocks,
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
              onWheel={(e) => e.target.blur()}
              value={currentValue.numberOfBlocks}
              onChange={handleChanges}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                if (currentValue.numberOfBlocks > 0) {
                  setCurrentValue({
                    ...currentValue,
                    numberOfBlocks: --currentValue.numberOfBlocks,
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

      <hr></hr>

      <InputControl display={"inline-block"} marginBlockEnd={"20px"}>
        <input
          type="checkbox"
          id="understand-risk"
          value={checked}
          required
          onChange={(e) => setChecked(!checked)}
        ></input>
        <label htmlFor="understand-risk">I understand the risk</label>
      </InputControl>
      <button
        className="btn btn-submit"
        type="submit"
        title="sniping order"
        disabled={
          !currentValue ||
          !successValue ||
          !checked ||
          !numberOfBuys ||
          !txLimit ||
          !gasAmount ||
          !buyAmount ||
          !address ||
          !bsc ||
          !cake
            ? true
            : false
        }
      >
        Place Sniping Order
      </button>
    </FormContainer>
  );
};

export default SnippingForm;
