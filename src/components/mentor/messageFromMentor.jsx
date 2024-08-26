import React from 'react';

const MessageFromMentor = (props) => {
  return (
    <main className='mt-2'>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={props.userPfp}  />
          </div>
        </div>
        <div className="text-sm text-white opacity-50 mb-1 ml-1">
          {props.userName}
        </div>
        <p className="chat-bubble">{props.message}</p>
        <p className="chat-footer opacity-50">{props.msgStatus}</p>
      </div>
    </main>
  );
};

export default MessageFromMentor;