import { PaperPlane } from "components/Icons";
import styled, { css } from "styled-components";

type ContainerProps = {
  textMessageField: boolean;
};

type StyledPaperPlaneProps = {
  value: boolean;
  onClick:any
};

export const Container = styled.div<ContainerProps>`
  ${({ textMessageField }) =>
    textMessageField
      ? css`
          padding: 0.3em;
          box-shadow: inset 0px 1px 0px #e5e5ea;

          @media screen and (max-width: 768px) {
            padding: 0.8em;
          }
        `
      : css`
          min-width: 250px;
          width: 70%;
          padding: 0.3em;
          border: 1px solid #d0d0d0;
          border-radius: 8px;
        `}
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0.4em 0 0.4em 0;
`;
export const Input = styled.input<ContainerProps>`
  width: 90%;
  outline: none;
  border: none;
  font-size: 1em;
  font-family: "Rubik", sans-serif;
  ${({ textMessageField }) =>
    textMessageField &&
    css`
      font-size: 14px;
      line-height: 20px;
      color: #3d3d3d;
      @media screen and (max-width: 768px) {
        width: 80%;
      }
    `}
`;
export const StyledPaperPlane = styled(PaperPlane)<StyledPaperPlaneProps>`
  ${({ value }) =>
    value &&
    "filter: sepia(50%) hue-rotate(180deg) saturate(800%); cursor:pointer;"}
`;
