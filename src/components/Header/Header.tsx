import { useNavigate } from "react-router-dom";
import * as S from "./styles";

type HeaderProps = {
  children: string;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  const navigation = useNavigate();
  return (
    <S.HeaderContainer>
      {children}
      <S.StyledKebab onClick={() => navigation("/")} />
    </S.HeaderContainer>
  );
};

export default Header;
