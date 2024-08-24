'use client'

import React, { useState } from 'react';

const ProfileBtn = ({ name }) => {
  const [buttonText, setButtonText] = useState(name);

  const handleClick = () => {
    setButtonText(prevText => (prevText === 'Follow' ? 'Followed' : 'Follow'));
  };

  return (
    <button 
      className='bg-btnWhite text-xs text-black font-bold rounded-3xl px-3 py-1'
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default ProfileBtn;