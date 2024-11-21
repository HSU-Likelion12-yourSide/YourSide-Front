import { useContext } from 'react';
import { StateContext } from '../ContextProviderState';

/**
 * @description `ContextProviderState`를 사용해서 전역 상태를 반환하는 커스텀 훅입니다.
 * @version 1.0.0
 * @author 윤예진 | nyun-nye <2001_11_7@naver.com>
 * @see {@link https://github.com/HSU-Likelion12-yourSide/YourSide-Front/pull/28}
 * @todo ContextAPI 대신 Recoil을 사용해 비교해본다.
 *
 * @example
 * // 사용할 상태 변수와 상태 변경 함수 기입
 * const { isState, setState } = useGlobalState();
 * setState();
 *
 * // isState, setState 사용 예시
 * const handleClick = value => {
 *  setState(value);
 *  setNum(prev => prev + 1);
 *  return console.log('in the !handleClick-Fn', isState);
 *  };
 * @returns {Object} `ContextProviderState`에서 제공하는 전역 상태 및 상태 변경 함수들의 객체를 반환합니다.
 */
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
