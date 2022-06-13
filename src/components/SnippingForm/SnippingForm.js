import React, { useState } from "react";
import { startTransition } from "react";
import AdvancedAntibot from "./AdvancedAntibot/AdvancedAntibot";
import BuyAmount from "./BuyAmount/BuyAmount";
import CheckBox from "./CheckBox/CheckBox";
import ContractAddress from "./ContractAddress/ContractAddress";
import HeaderSelectionOptions from "./HeaderSelectionOptions/HeaderSelectionOptions";
import Slippage from "./Slippage/Slippage";
import { FormContainer } from "./SnippingForm.styles";
import SubmitBtn from "./SubmitBtn/SubmitBtn";
import TransactionLimit from "./TransactionLimit/TransactionLimit";

const SnippingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    cake: "PancakeSwap",
    bsc: "BSC",
    address: "",
    buyAmount: "",
    currency: "BNB",
    gasAmount: "",
    txLimit: "",
    numberOfBuys: "",
    checkBoxState: false,
    maxSilppage: 0,
    maxBlocks: 0,
    numberOfBlocks: 0,
  });
  let {
    cake,
    bsc,
    address,
    buyAmount,
    currency,
    gasAmount,
    txLimit,
    numberOfBuys,
    checkBoxState,
    maxSilppage,
    maxBlocks,
    numberOfBlocks,
  } = formData;

  const handleChanges = (e) => {
    const { name, value } = e.target;
    startTransition(() => setFormData({ ...formData, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <HeaderSelectionOptions
        handleChanges={handleChanges}
        bsc={bsc}
        cake={cake}
      />

      <ContractAddress handleChanges={handleChanges} address={address} />

      <BuyAmount
        handleChanges={handleChanges}
        buyAmount={buyAmount}
        gasAmount={gasAmount}
        currency={currency}
      />

      <TransactionLimit
        txLimit={txLimit}
        handleChanges={handleChanges}
        numberOfBuys={numberOfBuys}
      />

      <Slippage
        maxBlocks={maxBlocks}
        maxSilppage={maxSilppage}
        handleChanges={handleChanges}
        setFormData={setFormData}
        formData={formData}
      />

      <AdvancedAntibot
        setFormData={setFormData}
        formData={formData}
        numberOfBlocks={numberOfBlocks}
        handleChanges={handleChanges}
      />

      <CheckBox
        checkBoxState={checkBoxState}
        setFormData={setFormData}
        formData={formData}
      ></CheckBox>

      <hr></hr>

      <SubmitBtn
        isSubmitted={isSubmitted}
        address={address}
        bsc={bsc}
        buyAmount={buyAmount}
        cake={cake}
        checkBoxState={checkBoxState}
        currency={currency}
        gasAmount={gasAmount}
        maxBlocks={maxBlocks}
        maxSilppage={maxSilppage}
        numberOfBlocks={numberOfBlocks}
        numberOfBuys={numberOfBuys}
        txLimit={txLimit}
      />
    </FormContainer>
  );
};

export default SnippingForm;
