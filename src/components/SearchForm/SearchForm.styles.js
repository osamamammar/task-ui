import styled from "styled-components";

export const FormContainer = styled.form`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--background-color-200);
  border-radius: 7px;
  padding-inline: 4px;
  padding-block: 4px;
  margin-inline-start: 12px;

  > div {
    > img {
      @media (max-width: 760px) {
        display: none;
      }
    }
    > input[type="search"] {
      background-color: var(--background-color-200);
      width: 100%;
      border: none;
      align-self: flex-end;
      outline: transparent;
      color: var(--font-color-100);
      font-size: 14px;
    }
    > input[type="search"]::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }
  > span {
    background-color: var(--background-color-100);
    border: 0.1px solid var(--gray-color);
    border-radius: 3px;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    color: #fff;
    font-size: 14px;
    @media (max-width: 1120px) {
      display: none;
    }
  }
  > button {
    background-color: var(--background-color-100);
    color: var(--font-color-100);
    border-radius: 5px;
    min-height: 41px;
    text-align: center;
    margin-inline-start: 8px;
    border: none;
    gap: 5px;
    padding-inline: 16px;
    padding-block: 7px;
    @media (max-width: 1200px) {
      > .btn-search-title {
        display: none;
      }
    }
  }
  @media (max-width: 730px) {
    display: none;
  }
`;

export const DivWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  flex: 1;
  padding-inline-start: 24px;
  @media (max-width: 1080px) {
    min-width: unset;
  }
`;
