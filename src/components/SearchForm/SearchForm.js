import React from "react";
import { searchIconBig, searchIconSmall } from "../../assets";
import { DivWrapper, FormContainer } from "./SearchForm.styles";

const SearchForm = () => {
  return (
    <FormContainer>
      <DivWrapper>
        <img src={searchIconSmall} alt="search-icon" width={14.5} height={16} />
        <label htmlFor="search" className="visually-hidden">
          Search
        </label>
        <input
          type="search"
          className="search"
          placeholder="Search Market"
        ></input>
      </DivWrapper>
      <span>/</span>
      <button className="btn">
        <img
          src={searchIconBig}
          alt="search-icon"
          width={16}
          height={16}
          title="search"
        />
        <span className="btn-search-title">Search</span>
      </button>
    </FormContainer>
  );
};

export default SearchForm;
