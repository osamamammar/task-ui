import React from "react";
import { failureIcon, network, successIcon } from "../../../assets";
import {
  DivWrapper,
  HeaderTitle,
  ListItem,
  ListItems,
} from "../TokenDetailsCard/TokenDetailsCard.styles";

const ScamBoxCard = () => {
  return (
    <>
      <HeaderTitle>Scam Box:</HeaderTitle>
      <ListItems>
        <ListItem>
          <DivWrapper>
            <h4>Danger / Risk level</h4>
            <p>
              <img
                className="img-icon"
                src={network}
                alt="signal"
                width={10}
                height={12}
              />
              Safe
            </p>
          </DivWrapper>
        </ListItem>

        <ListItem>
          <DivWrapper>
            <h4>Public Contract</h4>
            <p>
              <img
                className="img-icon"
                src={successIcon}
                alt="signal"
                width={10}
                height={12}
              />{" "}
              Yes
            </p>
          </DivWrapper>
        </ListItem>

        <ListItem>
          <DivWrapper>
            <h4>Mint</h4>
            <p>
              <img
                className="img-icon"
                src={successIcon}
                alt="signal"
                width={10}
                height={12}
              />{" "}
              No
            </p>
          </DivWrapper>
        </ListItem>

        <ListItem>
          <DivWrapper>
            <h4>Sellable</h4>
            <p>
              <img
                className="img-icon"
                src={successIcon}
                alt="signal"
                width={10}
                height={12}
              />{" "}
              Yes
            </p>
          </DivWrapper>
        </ListItem>

        <ListItem>
          <DivWrapper>
            <h4>Tornado Cash</h4>
            <p>
              <img
                className="img-icon"
                src={failureIcon}
                alt="signal"
                width={10}
                height={12}
              />{" "}
              Yes
            </p>
          </DivWrapper>
        </ListItem>

        <ListItem>
          <DivWrapper>
            <h4>Exchange Hot Wallet</h4>
            <p>
              <img
                className="img-icon"
                src={failureIcon}
                alt="signal"
                width={10}
                height={12}
              />{" "}
              Yes
            </p>
          </DivWrapper>
        </ListItem>

        <ListItem>
          <DivWrapper>
            <h4>Previous Rugs</h4>
            <p>
              <img
                className="img-icon"
                src={failureIcon}
                alt="signal"
                width={10}
                height={12}
              />{" "}
              Yes
            </p>
          </DivWrapper>
        </ListItem>
      </ListItems>
    </>
  );
};

export default ScamBoxCard;
