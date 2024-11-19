import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext();

/**
 * @param {ReactNode} children - Provider로 래핑할 React 엘리먼트 또는 컴포넌트.
 *
 * @description 이 컴포넌트는 React의 Context API를 사용하여 공유 상태를 제공한다. 여러 상태 변수와 해당 상태 변경 함수를 관리하며, 이를 하위 컴포넌트에서 사용할 수 있도록 한다.
 * @version 1.0.0
 * @author 윤예진 <2001_11_7@naver.com>
 * @see {@link https://github.com/HSU-Likelion12-yourSide/YourSide-Front/pull/28}
 * @todo ContextAPI 대신 Recoil을 사용해 비교해본다.
 *
 * @property {string} isState - 현재 상태 값 / default: `oldValue`
 * @property {number} isNum - 숫자 상태 값 (사용예시를 위한 값) / default: `1`
 * @property {string} isModalType - 모달의 타입 / default: `빈 문자열`
 * @property {boolean} isModalState - 모달의 표시 여부 / default: `false`
 * @property {undefined | number} isWorkSheetId - 워크시트 ID / default: `undefined`
 * @property {undefined | number} isSelectedId - 현재 선택된 항목의 ID / default: `undefined`
 * @property {undefined | Object} isUser - 사용자 데이터 / default: `undefined`
 * @property {undefined | string} isUserName - 사용자 이름 / default: `undefined`
 *
 * @returns {JSX.Element} `ContextProviderState`는 자식 컴포넌트(App)를 Context Provider로 래핑하며, 상태 값과 변경 함수들을 제공합니다.
 *
 * @example
 * // useGlobalState에서의 사용 예시이다.
 * const context = useContext(StateContext);
 */

const ContextProviderState = ({ children }) => {
  const [isState, setState] = useState('oldValue');
  const [isNum, setNum] = useState(1);
  const [isModalType, setModalType] = useState('');
  const [isModalState, setModalState] = useState(false);
  const [isWorkSheetId, setWorkSheetId] = useState();
  const [isSelectedId, setSelectedId] = useState();
  const [isUser, setUser] = useState();
  const [isUserName, setUserName] = useState();
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
      isSelectedId,
      setSelectedId,
      isUser,
      setUser,
      isUserName,
      setUserName,
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
      isSelectedId,
      setSelectedId,
      isUser,
      setUser,
      isUserName,
      setUserName,
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
