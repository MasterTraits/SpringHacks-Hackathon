import React from 'react';

const MessageFromUser = (props) => {
  return (
    <main className='mt-2'>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={props.userPfp} alt="User Avatar" />
          </div>
        </div>
        <p className="chat-bubble">{props.message}</p>
        <p className="chat-footer opacity-50">{props.msgStatus}</p>
      </div>
    </main>
  );
};

export default MessageFromUser;