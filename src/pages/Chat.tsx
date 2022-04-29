import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { Header, Input, MessageField } from "components";
import { Emoji } from "components/Icons";
import { Message } from "types/Message";
import * as S from "../styles/pages/Chat";

import "react-toastify/dist/ReactToastify.css";

let socket: any;
const ENDPOINT: string = process.env.REACT_APP_ENDPOINT as string;
socket = io(ENDPOINT, {
  withCredentials: true,
});

const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
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
    socket.on("message", (message: Message) => {
      if (message.user === "admin") {
        toast(`🦄 ${message.text}`);
      } else {
        setMessages([...messages, message]);
      }
    });
  }, [messages]);

  //handle text
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
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <S.ChatContainer>
        <S.Chat>
          <Header>{room}</Header>
          {<MessageField user={name} messages={messages} />}
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
    </>
  );
};

export default Chat;
