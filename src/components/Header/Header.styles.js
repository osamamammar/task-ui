import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding-inline: 24px;
  padding-block: 12px;
  min-height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export const NavLeft = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  transition: background-color 850ms;

  &.nav-menu {
    display: none;
  }

  &.nav-menu.active {
    display: block;
    position: fixed;
    inset-inline-start: 0;
    inset-block-start: 80px;
    width: 250px;
    height: 100vh;
    background-color: var(--background-color-100);
    padding-inline: 20px;
    padding-block: 20px;
    z-index: 1;
    transition: background-color 350ms;
  }
`;

export const DivWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  align-items: center;
  > .btn-menu {
    background-color: var(--background-color-100);
    border-radius: 7px;
    min-width: 40px;
    min-height: 40px;
  }
`;

export const MenuWrapper = styled.div`
  background-color: var(--background-color-100);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  min-width: 40px;
  min-height: 40px;
  cursor: pointer;
`;

export const LogoWrapper = styled(MenuWrapper)`
  background-color: transparent;
  > a {
    display: inline-flex;
    justify-content: center;
    /* flex-wrap: wrap; */
    align-items: center;
    gap: 9px;
  }
  span {
    background-color: var(--gray-color);
    font-size: 12px;
    color: white;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.4px;
    padding-block: 0;
    padding-inline: 3px;
    border-radius: 3px;
    @media (max-width: 320px) {
      display: none;
    }
  }
`;

export const NavRight = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  .btn {
    gap: 10px;
    font-family: inherit;
    @media (max-width: 1338px) {
      > .btn-title {
        display: none;
      }
    }
    &.filter {
      background-color: var(--background-color-200);
      padding-block: 17px;
      padding-inline: 24px;
      border-radius: 7px;
      font-size: 14px;
      font-weight: 500;
      @media (max-width: 458px) {
        display: none;
      }
    }
    &.connect-wallet {
      background-color: var(--blue-color);
      font-size: 16px;
      padding-block: 14px;
      padding-inline: 16px;
      border-radius: 5px;
      @media (max-width: 385px) {
        display: none;
      }
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const StatisticsWrapper = styled.ul`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: center;
  font-size: 12px;
  gap: 12px;
  background-color: var(--background-color-200);
  border-radius: 7px;
  padding-inline: 20px;
  padding-block: 14px;
  > li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }
  @media (max-width: 955px) {
    display: ${(props) => (props.display ? props.display : "none")};
  }
`;
