import React from 'react';
import { Link } from 'react-router-dom';
import useGlobalState from './Global/Hooks/useGlobalState';
import Modal from './Global/components/Modal.components';
import modalStateController from './Global/function/modalStateController';
// import ModalResultMessage from './Global/components/ModalType/ModalResultMessage.components';
// import ModalShareMessage from './Global/components/ModalType/ModalShareMessage.components';
// import ModalResult from './Global/components/ModalType/ModalResultMessage.components';
// import ModalLogin from './Global/components/ModalType/ModalLogin.components';
import ModalSignUp from './Global/components/ModalType/ModalSignUp.components';

const Terminal = () => {
  // const { isState, setState, isNum, setNum } = useContext(StateContext);
  const { isState, setState, isNum, setNum, isModalState, setModalState } =
    useGlobalState();
  const handleClick = value => {
    setState(value);
    setNum(prev => prev + 1);
    return console.log('in the !handleClick-Fn', isState);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        // marginTop: '20vh',
      }}
    >
      <h1>네편 프로젝트 with 멋사</h1>
      <h3 style={{ color: 'tomato' }}>
        현재 페이지는 개발을 위한 DevTerminal.jsx 입니다.
      </h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50vh',
          alignItems: 'flex-start', // 왼쪽 정렬로 변경
          backgroundColor: '#3313',
          border: '1px solid black',
        }}
      >
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/Header">Header</Link>
          </li>
          <li>
            <Link to="/Footer">Footer</Link>
          </li>
          <li>
            <Link to="/ContractReview">Contract Review</Link>
          </li>
          <li>
            <Link to="/QuestionAndAnswer">Question and Answer</Link>
          </li>
          <li>
            <Link to="/ViewQuestionAndAnswer">ViewQuestion and Answer</Link>
          </li>
          <li>
            <Link to="/WorkArrangement">Work Arrangement</Link>
          </li>
          <li>
            <Link to="/ViewMyWork">ViewMyWork</Link>
          </li>
          <li>
            <Link to="/ViewMyWorkResult">ViewMyWorkResult</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/SignUp">Sign Up</Link>
          </li>
          <li>
            <Link to="/MyPage">My Page</Link>
          </li>
          <li>
            <Link to="/Notation">Notation</Link>
          </li>
          <li>
            <Link to="/NotationExample">NotationExample</Link>
          </li>
          <li>
            <Link to="/FindID">FindID</Link>
          </li>
          <li>
            <Link to="/FindPW">FindPW</Link>
          </li>
          <li>
            <Link
              to="/DevTerminal"
              onClick={() => {
                console.log('현재 페이지가 DevTerminal 입니다.');
              }}
            >
              Dev Terminal
            </Link>
          </li>
          <li>
            <Link to="/DevMockingApi">DevMockingApi</Link>
          </li>
          <li>
            <Link to="/DevNotation">DevNotation</Link>
          </li>
          <li>
            <Link to="/DevFetch">DevFetchTerminalTest</Link>
          </li>
          <li>
            <Link to="/LoginTest">LoginTest</Link>
          </li>
        </ul>
      </div>
      <button
        onClick={() => {
          handleClick('newValue');
          console.log('in the !onClick-Fn', isState, isNum);
        }}
      >
        GlobalStateTest {isState}/{isNum}
      </button>
      {isModalState && <Modal isOpen={isModalState} ModalType={ModalSignUp} />}
      <button
        onClick={() => {
          modalStateController(isModalState, setModalState);
        }}
      >
        ModalTest
      </button>
    </div>
  );
};

export default Terminal;
