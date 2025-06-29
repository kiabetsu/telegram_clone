// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthPage } from './pages/AuthPage';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        {/* <Route path="/auth" element={<Auth />} />
      <Route path="/chat" element={<Chat />} />
      <Route path=":chatId" element={<ChatWindow />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
