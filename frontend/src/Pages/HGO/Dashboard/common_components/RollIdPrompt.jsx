import React, { useEffect, useState } from 'react';

const RollIdPrompt = ({ onRollIdSubmit }) => {
  const [rollId, setRollId] = useState('');

  useEffect(() => {
    const inputRollId = prompt("Please enter your roll ID:")?.toLowerCase() || '';
    setRollId(inputRollId);
    onRollIdSubmit(inputRollId); 
  }, [onRollIdSubmit]);

  return null; 
};

export default RollIdPrompt;
