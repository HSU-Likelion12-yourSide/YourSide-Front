import { useContext } from 'react';
import { StateContext } from '../ContextProviderState';

/**
 * @description `ContextProviderState`에서 제공하는 상태 갑과 상태 변경 함수를 반환하는 커스텀 훅입니다. 반환된 객체를 통해 컴포넌트에서 전역 상태를 쉽게 읽고 업데이트할 수 있습니다.
 * <br/>
 * <span style="color: tomato;">context가 정의되지 않았을 경우 에러를 발생시킵니다. (ContextProviderState 외부에서 사용되는 경우)</span>
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
