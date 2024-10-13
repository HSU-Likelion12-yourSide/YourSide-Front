import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext();

const ContextProviderState = ({ children }) => {
  const [isState, setState] = useState('oldValue');
  const [isNum, setNum] = useState(1);
  const [isModalState, setModalState] = useState(false);

  const value = useMemo(
    () => ({ isState, setState, isNum, setNum, isModalState, setModalState }),
    [isState, setState, isNum, setNum, isModalState, setModalState],
  );
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

ContextProviderState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProviderState;
