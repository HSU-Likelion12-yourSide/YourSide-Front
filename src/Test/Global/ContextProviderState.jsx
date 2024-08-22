import React, { createContext, useMemo, useState } from 'react';

export const StateContext = createContext();

const ContextProviderState = children => {
  const [isState, setState] = useState('oldValue');
  const [isNum, setNum] = useState(1);

  const value = useMemo(
    () => ({ isState, setState, isNum, setNum }),
    [isState, setState],
  );
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export default ContextProviderState;
