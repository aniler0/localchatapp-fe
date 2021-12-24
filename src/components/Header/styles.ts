import { Kebab } from "components/Icons";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: absolute;
  height: 50px;
  left: 0px;
  right: 0px;
  top: 0px;
  box-shadow: inset 0px -1px 0px #e5e5ea;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px 0 6px 0;
  font-weight: 500;
  color: #2c2c2e;
  font-size: 14px;
`;
export const StyledKebab = styled(Kebab)`
  position: absolute;
  right: 24px;
  cursor: pointer;
`;
