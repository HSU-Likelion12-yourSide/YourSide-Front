import React, { createContext, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

// context 생성
const StateContext = createContext();

// useMemo는 useEffect와 달리 의존된 배열이 변경이 될때만 호출을 한다.
export const StateProvider = ({ children }) => {
  const [isState, setState] = useState('oldValue');
  // value 객체를 useMemo로 메모이제이션
  // 객체 리터럴을 위해서 `({})`를 사용한다.(일반 return이 아니다. 예시를 찾아볼 필요가 있다., `{}`를 사용하게 되면 함수가 된다. 즉, `{}`은 함수 블록이다. 따라서, `({ isState, setState })`는 단축 속성명을 사용한 객체 리터럴이다. 원문 : ({ isState: isState, setState: setState })
  const value = useMemo(() => ({ isState, setState }), [isState, setState]);

  return (
    // return 값이 jsx이기 떄문에 커스텀 훅이 아니다. Provider컴포넌트이다.
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

// propTypes의 타입 지정
StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom Hooks : StateContext.Provider의 value 값에 접근을 하는 것 useContext로 인해 생략 된 것 뿐이다.
export const useGlobalState = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a StateProvider');
  }
  return context;
};

// export default GlobalState;
