import styled from "styled-components";

export const MainContainer = styled.main`
  width: 92%;
  margin: auto;
  max-width: 1140px;
  padding-inline: 10px;
  padding-block: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  flex-wrap: wrap;
  @media (max-width: 512px) {
    padding-inline: 2px;
  }
`;

export const AsideContainer = styled.aside`
  max-width: 405px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
export const SectionContainer = styled.section`
  max-width: 580px;
`;
export const TokenDetailsContainer = styled.section`
  background-color: var(--background-color-200);
  border-radius: 7px;
  padding: 24px;
`;
export const ScamBoxContainer = styled(TokenDetailsContainer)``;
export const DisclaimerContainer = styled(TokenDetailsContainer)``;
