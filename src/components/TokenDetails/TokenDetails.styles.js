import styled from "styled-components";

export const HeaderTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  margin-block-end: 8px;
`;
export const ListItems = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-block-start: 20px;
  flex: 1 1 50%;
  > .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    display: flex;
    border-radius: 50%;
    background: var(--background-color-100);
    margin-inline-end: 12px;
  }
`;

export const DivWrapper = styled.div`
  > h4 {
    font-size: 13px;
    line-height: 13px;
    letter-spacing: 0.4px;
    color: var(--font-color-200);
    margin-block-end: 6px;
  }
  > p {
    font-size: 14px;
    line-height: 14px;
    color: #ffffff;
    font-weight: normal;
    display: flex;
    align-items: center;
    margin-block-end: 8px;
  }
`;
