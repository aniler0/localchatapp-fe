import { io } from "socket.io-client";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header, Input } from "components";
import { Emoji } from "components/Icons";
import * as S from "../styles/pages/Chat";

const Chat = () => {
  let socket: any;
  const ENDPOINT = "http://localhost:5000";
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const [searchParams] = useSearchParams();
  const { name, room } = Object.fromEntries(searchParams);

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("join", { name, room });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, name, room]);

  useEffect(() => {
    socket.on("message", (message: string) => {
      setMessages([...messages, message]);
    });
  }, [messages]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  //function for sending messages

  return (
    <S.ChatContainer>
      <S.Chat>
        <Header>{room}</Header>
        <Input
          name="textmessage"
          value={message}
          onChange={handleChange}
          textMessageField
          placeholder="Start typing..."
          icon={<Emoji />}
        />
      </S.Chat>
    </S.ChatContainer>
  );
};

export default Chat;
