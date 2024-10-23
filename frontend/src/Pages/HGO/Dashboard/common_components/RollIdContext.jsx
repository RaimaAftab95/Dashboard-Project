import React, { createContext, useContext, useState } from 'react';

const RollIdContext = createContext();

export const RollIdProvider = ({ children }) => {
  const [rollId, setRollId] = useState(null);

  return (
    <RollIdContext.Provider value={{ rollId, setRollId }}>
      {children}
    </RollIdContext.Provider>
  );
};

export const useRollId = () => {
  return useContext(RollIdContext);
};
