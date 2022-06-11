import React from "react";
import { dangerAlert } from "../../assets";
import { Footer, Header, SnippingForm, TokenDetails } from "../../components";
import "./SnippingPage.styles";
import {
  DisclaimerContainer,
  MainContainer,
  ScamBoxContainer,
  SectionContainer,
  TokenDetailsContainer,
} from "./SnippingPage.styles";

const SnippingPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <SectionContainer>
          <SnippingForm />
        </SectionContainer>

        <TokenDetailsContainer>
          <TokenDetails />
        </TokenDetailsContainer>

        <ScamBoxContainer>
          <h2>Snipping</h2>
        </ScamBoxContainer>

        <DisclaimerContainer>
          <img
            src={dangerAlert}
            alt="danger-icon"
            title="danger"
            width={32}
            height={32}
          />
        </DisclaimerContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default SnippingPage;
