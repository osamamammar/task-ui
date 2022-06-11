import styled from "styled-components";

export const MainContainer = styled.main`
  width: 65%;
  margin: auto;
  padding: 12px 0 24px;
  display: grid;
  grid-template-columns: minmax(0, 580px) minmax(0, 406px);
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px 30px;
  grid-template-areas:
    "form token-details"
    "form scam-box"
    "form disclaimer";
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "form"
      "form"
      "form"
      "token-details"
      "scam-box"
      "disclaimer";
  }
`;

export const SectionContainer = styled.section`
  grid-area: form;
`;
export const TokenDetailsContainer = styled.aside`
  grid-area: token-details;
  background-color: var(--background-color-200);
`;
export const ScamBoxContainer = styled.aside`
  grid-area: scam-box;
  background-color: var(--background-color-200);
`;
export const DisclaimerContainer = styled.aside`
  grid-area: disclaimer;
  background-color: var(--background-color-200);
`;
