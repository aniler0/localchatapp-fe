import { Route, Routes } from "react-router-dom";

import Login from "pages/Login";
import Chat from "pages/Chat";

import GlobalStyle from "styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
