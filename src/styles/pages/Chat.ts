import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  box-shadow: inset 1px 0px 0px #e5e5ea;
`;
export const Chat = styled.div`
  position: relative;
  width: 50%;
  height: 90%;
  box-shadow: 0px 0px 20px 2px #e5e5ea;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
