import { Message } from "types/Message";
import * as S from "./styles";

type MessageFieldProps = {
  messages: Message[];
  user: string;
};

const MessageField: React.FC<MessageFieldProps> = ({ messages, user }) => {
  return (
    <S.MessageField>
      {messages.map((message, key) => (
        <S.MessageBox
          key={key}
          sendedMessage={user === message.user}
          receivedMessage={user !== message.user}
        >
          {message.text.message}
        </S.MessageBox>
      ))}
    </S.MessageField>
  );
};

export default MessageField;
