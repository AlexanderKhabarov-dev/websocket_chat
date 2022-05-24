import { useState } from 'react';
import useWebSocket from 'react-use-websocket';
import './App.css';
import { Login } from './pages/Login/Login';

const SOCKET_LOGIN_URL = "ws://localhost:9000/login"

const App = () => {
  const { sendMessage, lastMessage, readyState } = useWebSocket(SOCKET_LOGIN_URL);

  return (
    <div className="App">
      <Login sendMessage={sendMessage}/>
    </div>
  );
}

export default App;
