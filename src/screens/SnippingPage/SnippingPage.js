import React from "react";
import {
  DisclaimerCard,
  Footer,
  Header,
  ScamBoxCard,
  SnippingForm,
  TokenDetailsCard,
} from "../../components";
import {
  AsideContainer,
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

        <AsideContainer>
          <TokenDetailsContainer>
            <TokenDetailsCard />
          </TokenDetailsContainer>

          <ScamBoxContainer>
            <ScamBoxCard />
          </ScamBoxContainer>

          <DisclaimerContainer>
            <DisclaimerCard />
          </DisclaimerContainer>
        </AsideContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default SnippingPage;
