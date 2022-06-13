import React from "react";

const SubmitBtn = ({
  address,
  bsc,
  buyAmount,
  cake,
  checkBoxState,
  currency,
  gasAmount,
  maxBlocks,
  maxSilppage,
  numberOfBlocks,
  numberOfBuys,
  txLimit,
  isSubmitted,
}) => {
  console.log(
    address,
    bsc,
    buyAmount,
    cake,
    checkBoxState,
    currency,
    gasAmount,
    maxBlocks,
    maxSilppage,
    numberOfBlocks,
    numberOfBuys,
    txLimit,
    isSubmitted
  );
  return (
    <button
      className="btn btn-submit"
      type="submit"
      title="sniping order"
      disabled={
        !address ||
        !bsc ||
        !buyAmount ||
        !cake ||
        !checkBoxState ||
        !currency ||
        !gasAmount ||
        !maxBlocks ||
        !maxSilppage ||
        !numberOfBlocks ||
        !numberOfBuys ||
        !txLimit
          ? true
          : false
      }
    >
      {isSubmitted ? "Submitted Successfuly ✅" : "Place Sniping Order"}
    </button>
  );
};

export default SubmitBtn;
