'use client'

import React, { useState } from 'react';

const ProfileBtn = ({ name, styling }) => {
  const [buttonText, setButtonText] = useState(name);

  const handleClick = () => {
    setButtonText(prevText => (prevText === 'Follow' || 'Apply as mentor' ? 'Followed' : 'Follow'));
  };

  return (
    <button 
      className={`${styling} text-nowrap text-md  font-extrabold rounded-3xl px-2 rg:px-5 py-1 transform focus:bg-green`}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default ProfileBtn;