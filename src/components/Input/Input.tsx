import React from "react";
import * as S from "./styles";

type InputProps = {
  children?: string;
  placeholder?: string;
  loginField?: boolean;
  passwordField?: boolean;
  textMessageField?: boolean;
  getMessageField?: boolean;
  icon?: React.ReactNode;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  textMessageField,
  getMessageField,
  children,
  placeholder,
  icon,
  name,
  value,
  onChange,
}) => {
  return (
    <S.Container>
      <S.InputWrapper>
        {icon}
        <S.Input
          name={name}
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          required
        />
      </S.InputWrapper>
    </S.Container>
  );
};

export default Input;
