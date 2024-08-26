import React, { useState } from 'react';

const ChatBar = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      console.log('Sending message:', encodedMessage);
      setMessage('');
    }
  };

  return (
    <div className=' flex sticky w-full p-3 items-center justify-between bg-card flexshadow-md rounded-lg'>
      <input
        type="text" 
        value={message} 
        onChange={handleMessageChange} 
        placeholder="Type a message..." 
        className='p-1 rounded-full bg-card focus:outline-none focus:border-none '
      />
      <button onClick={handleSend}>Send</button>
      
    </div>
  );
};

export default ChatBar;