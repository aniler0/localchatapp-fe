import * as S from "./styles";

type HeaderProps = {
  children: string;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <S.HeaderContainer>
      {children}
      <S.StyledKebab />
    </S.HeaderContainer>
  );
};

export default Header;
