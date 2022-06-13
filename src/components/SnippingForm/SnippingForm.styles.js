import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: var(--background-color-200);
  width: 100%;
  padding-inline: 24px;
  padding-block: 32px;
  border-radius: 7px;
  .form-header {
    margin-block-end: 8px;
  }
  > hr {
    margin-block: 16px 16px;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  .btn-submit {
    width: 100%;
    background: var(--blue-color);
    border-radius: 7px;
    line-height: 56px;
    font-weight: bold;
    font-size: 16px;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
    &:disabled {
      background-color: var(--gray-color);
    }
  }
  @media (max-width: 512px) {
    padding-inline: 15px;
  }
`;
export const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  margin-block-end: ${(props) =>
    props.marginBlockEnd ? props.marginBlockEnd : "unset"};
  > h2 {
    font-size: 20px;
    font-weight: 500;
    display: inline-flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;
    gap: 4px;
    > span {
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.4px;
      background-color: var(--green-color);
      border-radius: 3px;
      padding-inline: 4px;
      padding-block: 0;
      line-height: 16px;
    }
  }
`;

export const SelectOption = styled.div`
  > select {
    font-weight: bold;
    cursor: pointer;
    border: none;
    outline: transparent;
    background-color: var(--background-color-200);
    color: var(--font-color-100);
    border: 0.4px solid #575761;
    font-size: 14px;
    letter-spacing: 0.4px;
    border-radius: 5px;
    padding-inline: 10px;
    padding-block: 10px;
    > option {
      font-weight: 500;
      color: var(--font-color-100);
      background-color: transparent;
    }
  }
  > select:focus {
    border: 0.4px solid white;
    border-radius: 5px;
  }
`;
export const InputControl = styled.div`
  font-size: 16px;
  position: relative;
  margin-block-end: ${(props) =>
    props.marginBlockEnd ? props.marginBlockEnd : "30px"};
  > label {
    line-height: 16px;
    display: ${(props) => (props.display ? props.display : "block")};
    margin-block-end: 15px;
  }
  .contract-address-input {
    position: relative;
    > img {
      position: absolute;
      inset-inline-end: 20px;
      inset-block-start: 14px;
    }
    > input {
      width: 100%;
      background-color: var(--background-color-300);
      border-radius: 7px;
      line-height: 44px;
      font-size: 16px;
      height: auto;
      padding-inline: 20px 42px;
      color: #fff;
      border: none;
      caret-color: #fff;
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        -webkit-text-fill-color: white;
        -webkit-box-shadow: 0 0 0px 1000px var(--background-color-300) inset;
        box-shadow: 0 0 0px 1000px var(--background-color-300) inset;
        transition: background-color 5000s ease-in-out 0s;
      }
    }
  }
`;

export const InputStyling = styled.div`
  position: relative;
  width: 49%;
  > input {
    text-align: center;
    height: auto;
    line-height: normal;
  }
  > input::placeholder {
    color: #5f5e6c;
  }
  > input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  > input[type="number"] {
    position: relative;
    text-align: ${(props) => (props.textAlign ? props.textAlign : "right")};
    width: 100%;
    border-radius: 7px;
    line-height: 44px;
    height: 44px;
    padding-inline: ${(props) =>
      props.paddingInline ? props.paddingInline : "120px 10px"};
    color: #fff;
    background-color: var(--background-color-300);
    border: none;
  }
  > select {
    position: absolute;
    inset-inline-end: 2px;
    inset-block-start: 2px;
    outline: transparent;
    padding-inline: 10px;
    padding-block: 10px;
    border-radius: 5px;
    color: var(--font-color-100);
    font-weight: bold;
    background: var(--background-color-200);
    border: 0.4px solid transparent;
    font-size: 14px;
    letter-spacing: 0.4px;
    :focus {
      border: 0.4px solid #575761;
    }
  }
  .placeholder,
  .upper-placeholder {
    font-size: 14px;
  }
  .upper-placeholder {
    display: inline-block;
    line-height: 16px;
    color: #8b8a9d;
    margin-block-end: 15px;
  }
  .placeholder {
    color: #5f5e6c;
    position: absolute;
    z-index: 100;
    inset-block-start: 10px;
    inset-inline-start: 10px;
  }

  button {
    background-color: var(--background-color-200);
    z-index: 100;
    min-width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border-radius: 6px;
    &.plus,
    &.minus {
      position: absolute;
      &:hover {
        transform: scale(1.1);
      }
    }
    &.plus {
      inset-inline-end: 4px;
      inset-block-end: 4px;
    }
    &.minus {
      inset-inline-start: 4px;
      inset-block-end: 4px;
    }
  }
  @media (max-width: 512px) {
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;
