import { useContext } from 'react';
import { StateContext } from '../ContextProviderState';

const useGlobalState = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error(
      '!SyntaxError : useGlobalState must be used within a ContextProviderState',
    );
  }
  return context;
};

export default useGlobalState;
