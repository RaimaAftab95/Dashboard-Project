import React, { useEffect, useState } from 'react';

const RollIdPrompt = ({ onRollIdSubmit }) => {
  const [rollId, setRollId] = useState('');

  useEffect(() => {
    const inputRollId = prompt("Please enter your roll ID:")?.toLowerCase() || '';
    setRollId(inputRollId);
    onRollIdSubmit(inputRollId); // Call the function to pass the roll ID up
  }, [onRollIdSubmit]);

  return null; 
};

export default RollIdPrompt;
