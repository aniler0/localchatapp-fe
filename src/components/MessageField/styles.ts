import styled, { css } from "styled-components";

type MessageType = {
  receivedMessage?: boolean;
  sendedMessage?: boolean;
};

export const MessageField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const MessageBox = styled.div<MessageType>`
  margin-top: 12px;
  max-width: 255px;
  word-wrap: break-word;
  line-height: 24px;
  position: relative;
  padding: 10px 20px;
  border-radius: 25px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 25px;
  }
  ${({ receivedMessage }) =>
    receivedMessage &&
    css`
      margin-left: 10px;
      background: #e5e5ea;
      color: black;
      align-self: flex-start;

      &:before {
        left: -7px;
        width: 20px;
        background-color: #e5e5ea;
        border-bottom-right-radius: 16px 14px;
      }

      &:after {
        left: -10px;
        width: 10px;
        background-color: white;
        border-bottom-right-radius: 10px;
      }
    `}

  ${({ sendedMessage }) =>
    sendedMessage &&
    css`
      margin-right: 10px;
      color: white;
      background: #0b93f6;
      align-self: flex-end;

      &:before {
        right: -7px;
        width: 20px;
        background-color: #0b93f6;
        border-bottom-left-radius: 16px 14px;
      }

      &:after {
        right: -10px;
        width: 10px;
        background-color: white;
        border-bottom-left-radius: 10px;
      }
    `}
`;
