import React from 'react';
import './chat.css';
import LeftSidebar from '../../components/leftsidebar/leftsidebar';
import Chatbox from '../../components/chatbox/chatbox';
import Rightsidebar from '../../components/rightsidebar/rightsidebar';  // Ensure you have this component

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSidebar />
        <Chatbox />
        <Rightsidebar />
      </div>
    </div>
  );
}

export default Chat;
