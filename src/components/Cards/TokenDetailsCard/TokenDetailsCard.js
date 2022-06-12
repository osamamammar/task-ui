import React from "react";
import { dogelon } from "../../../assets";
import "./TokenDetailsCard.styles";
import {
  DivWrapper,
  HeaderTitle,
  ListItem,
  ListItems,
} from "./TokenDetailsCard.styles";

const TokenDetailsCard = () => {
  return (
    <>
      <HeaderTitle>TokenDetails:</HeaderTitle>
      <ListItems>
        <ListItem>
          <DivWrapper className="img-wrapper">
            <img src={dogelon} alt="dogelon" width={20} height={20} />
          </DivWrapper>
          <DivWrapper>
            <h4>Token Name</h4>
            <p>dogelon</p>
          </DivWrapper>
        </ListItem>

        <ListItem>
          <DivWrapper>
            <h4>Token Symbol</h4>
            <p>ELON</p>
          </DivWrapper>
        </ListItem>

        <ListItem>
          <DivWrapper>
            <h4>Total Supply</h4>
            <p>7,820,68</p>
          </DivWrapper>
        </ListItem>

        <ListItem>
          <DivWrapper>
            <h4>Holders</h4>
            <p>5,68</p>
          </DivWrapper>
        </ListItem>

        <ListItem>
          <DivWrapper>
            <h4>Transfers</h4>
            <p>25</p>
          </DivWrapper>
        </ListItem>
      </ListItems>
    </>
  );
};

export default TokenDetailsCard;
