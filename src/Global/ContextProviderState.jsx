import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext();

const ContextProviderState = ({ children }) => {
  const [isState, setState] = useState('oldValue');
  const [isNum, setNum] = useState(1);
  const [isModalType, setModalType] = useState('');
  const [isModalState, setModalState] = useState(false);
  const [isWorkSheetId, setWorkSheetId] = useState();
  const value = useMemo(
    () => ({
      isState,
      setState,
      isNum,
      setNum,
      isModalType,
      setModalType,
      isModalState,
      setModalState,
      isWorkSheetId,
      setWorkSheetId,
    }),
    [
      isState,
      setState,
      isNum,
      setNum,
      isModalType,
      setModalType,
      isModalState,
      setModalState,
      isWorkSheetId,
      setWorkSheetId,
    ],
  );
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

ContextProviderState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProviderState;
