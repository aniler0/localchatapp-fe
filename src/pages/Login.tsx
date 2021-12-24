import { Button, Input } from "components";
import { Profile, World } from "components/Icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/pages/Login";

const Login = () => {
  let navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    navigate(`chat?name=${form.name}&room=${form.room}`);
  };

  const [form, setForm] = useState({
    name: "",
    room: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedForm = {
      ...form,
      [name]: value,
    };
    setForm(updatedForm);
  };
  return (
    <S.LoginContainer>
      <S.Title>Login</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.InputContainer>
          <S.InputField>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              icon={<Profile />}
            />

            <Input
              name="room"
              value={form.room}
              onChange={handleChange}
              placeholder="Room"
              icon={<World />}
            />
          </S.InputField>

          <Button>Login</Button>
        </S.InputContainer>
      </S.Form>
    </S.LoginContainer>
  );
};

export default Login;
