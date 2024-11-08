import React, { useState } from 'react';
import FindidComponent from './Findid.component';
import FindpwComponent from './Findpw.component';
import SymbolLogo from '../img/symbol-logo-row.png';
import '../css/FindUser.scss';

const FindUser = () => {
  const [isState, setState] = useState(true);

  return (
    <div className="FindUser">
      <div className="FindUser-container">
        <div className="FindUser-SymbolLogo">
          <img src={SymbolLogo} alt="" />
        </div>
        <div className="FindUser-type">
          <div
            id={isState ? 'FindUser-id-check' : 'FindUser-id'}
            onKeyDown={() => {}}
            onClick={() => {
              setState(!isState);
            }}
            role="button"
            tabIndex="0"
          >
            아이디 찾기
          </div>
          <div
            id={isState ? 'FindUser-pw' : 'FindUser-pw-check'}
            onKeyDown={() => {}}
            onClick={() => {
              setState(!isState);
            }}
            role="button"
            tabIndex="0"
          >
            비밀번호 찾기
          </div>
        </div>
        {isState ? <FindidComponent /> : <FindpwComponent />}
      </div>
    </div>
  );
};

export default FindUser;
