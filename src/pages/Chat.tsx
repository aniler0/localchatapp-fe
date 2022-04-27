import { io } from "socket.io-client";
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Header, Input, MessageField } from "components";
import { Emoji } from "components/Icons";
import * as S from "../styles/pages/Chat";

let socket: any;
const ENDPOINT = "http://localhost:5000";
socket = io(ENDPOINT);
const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const [searchParams] = useSearchParams();
  const { name, room } = Object.fromEntries(searchParams);

  useEffect(() => {
    socket.emit("join", { name, room });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [name, room]);

  useEffect(() => {
    socket.on("message", (message: string) => {
      setMessages([...messages, message]);
    });
  }, [messages]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  // function for sending messages
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit("sendMessage", { name, message }, (res: any) => {
      if (res.ok === 200) {
        setMessage("");
      }
    });
    console.log(messages);
  };

  return (
    <S.ChatContainer>
      <S.Chat>
        <Header>{room}</Header>
        <MessageField />
        <form onSubmit={sendMessage}>
          <Input
            name="textmessage"
            value={message}
            onChange={handleChange}
            textMessageField
            sendMessage={sendMessage}
            placeholder="Start typing..."
            icon={<Emoji />}
          />
        </form>
      </S.Chat>
    </S.ChatContainer>
  );
};

export default Chat;
