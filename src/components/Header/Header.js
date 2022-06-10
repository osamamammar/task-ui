import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { filter, gas, logo, menuIcon, usd, wallet } from "../../assets";
import SearchForm from "../SearchForm/SearchForm";
import {
  DivWrapper,
  HeaderContainer,
  LogoWrapper,
  NavLeft,
  NavRight,
  StatisticsWrapper,
} from "./Header.styles";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);
  return (
    <HeaderContainer>
      <h1 className="visually-hidden">Insider Labs</h1>
      <DivWrapper>
        <button className="btn btn-menu" onClick={showSideBar}>
          <img
            className="menu-icon"
            src={menuIcon}
            alt="menu-icon"
            title="menu"
            width={16}
            height={16}
          />
        </button>
        <LogoWrapper>
          <Link to={"/"}>
            <img
              className="logo"
              src={logo}
              alt="logo"
              title="go to home page"
              width={150}
              height={41}
            />
            <span>ALPHA</span>
          </Link>
        </LogoWrapper>
      </DivWrapper>

      <NavLeft className={sideBar ? "nav-menu active" : "nav-menu"}>
        <StatisticsWrapper justifyContent={"center"} display={"flex"}>
          <li className="info">
            <img src={usd} alt="usd" title="usd" width={18} height={18} />
            <span>&#36;2,675</span>
          </li>
          <li className="info">
            <img src={gas} alt="gas" title="gas" width={14} height={14} />
            <span>27 Gwei</span>
          </li>
        </StatisticsWrapper>
      </NavLeft>

      <NavRight>
        <StatisticsWrapper>
          <li className="info">
            <img src={usd} alt="usd" title="usd" width={18} height={18} />
            <span>&#36;2,675</span>
          </li>
          <li className="info">
            <img src={gas} alt="gas" title="gas" width={14} height={14} />
            <span>27 Gwei</span>
          </li>
        </StatisticsWrapper>
        <SearchForm></SearchForm>
        <button className="btn filter">
          <img
            src={filter}
            alt="filter-icon"
            width={17}
            height={14}
            title="filter"
          />
          <span className="btn-title">FILTER</span>
        </button>
        <button className="btn connect-wallet">
          <img
            src={wallet}
            alt="wallet-icon"
            width={24}
            height={24}
            title="connect wallet"
          />
          <span className="btn-title">Connect Wallet</span>
        </button>
      </NavRight>
    </HeaderContainer>
  );
};

export default Header;
