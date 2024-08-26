import { useContext } from 'react';
import { StateContext } from '../Global/ContextProviderState';

const useGlobalState = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error(
      '!SyntaxError : useGlobalStae must be used within a ContextProviderState',
    );
  }
  return context;
};

export default useGlobalState;
