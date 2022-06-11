import styled from "styled-components";

export const MainContainer = styled.main`
  width: 68%;
  margin: auto;
  max-width: 1140px;
  padding: 12px 0 24px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
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
  @media (min-width: 1500px) {
    grid-template-columns: minmax(580px, 1fr) minmax(405px, 1fr);
  }
  @media (max-width: 1290px) {
    width: 78%;
  }
  @media (max-width: 1100px) {
    width: 88%;
  }
`;

export const AsideContainer = styled.aside`
  display: contents;
`;
export const SectionContainer = styled.section`
  grid-area: form;
`;
export const TokenDetailsContainer = styled.section`
  grid-area: token-details;
  background-color: var(--background-color-200);
  background: #32323e;
  border-radius: 7px;
  padding: 24px;
  height: fit-content;
`;
export const ScamBoxContainer = styled(TokenDetailsContainer)`
  grid-area: scam-box;
`;
export const DisclaimerContainer = styled(TokenDetailsContainer)`
  grid-area: disclaimer;
`;
