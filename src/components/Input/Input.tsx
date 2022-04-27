import React from "react";
import * as S from "./styles";

type InputProps = {
  placeholder?: string;
  loginField?: boolean;
  passwordField?: boolean;
  textMessageField?: boolean;
  icon?: React.ReactNode;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sendMessage?:any
};

const Input: React.FC<InputProps> = ({
  textMessageField = false,
  placeholder,
  icon,
  name,
  value,
  onChange,
  sendMessage
}) => {
  return (
    <S.Container textMessageField={textMessageField}>
      <S.InputWrapper>
        {icon}
        <S.Input
          name={name}
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          textMessageField={textMessageField}
          required
          autoComplete="off"
        />

        {textMessageField && (
          <S.StyledPaperPlane onClick={sendMessage} value={value ? true : false} />
        )}
      </S.InputWrapper>
    </S.Container>
  );
};

export default Input;
