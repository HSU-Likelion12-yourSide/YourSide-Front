import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Page/Main/components/Main';
import ContractReview from './Page/ContractReview/components/ContractReview';
import QuestionAndAnswer from './Page/QuestionAndAnswer/components/QuestionAndAnswer';
import WorkArrangement from './Page/WorkArrangement/components/WorkArrangement';
import Login from './Page/Login/components/Login';
import SignUp from './Page/SignUp/components/SignUp';
import MyPage from './Page/MyPage/components/MyPage';
import Notation from './Page/Notation/components/Notation';
import FindID from './Page/FindID/components/FindID';
import FindPW from './Page/FindPW/components/FindPW';

import NotationExample from './Page/Notation/components/NotationExample';

import DevTerminal from './DevTerminal';
import DevMockingApi from './Test/Mocking/API/DevMockingApi';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ContractReview" element={<ContractReview />} />
        <Route path="/QuestionAndAnswer" element={<QuestionAndAnswer />} />
        <Route path="/WorkArrangement" element={<WorkArrangement />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Notation" element={<Notation />} />
        <Route path="/FindID" element={<FindID />} />
        <Route path="/FindPW" element={<FindPW />} />
        <Route path="/DevTerminal" element={<DevTerminal />} />
        <Route path="/DevMockingApi" element={<DevMockingApi />} />
        <Route path="/NotationExample" element={<NotationExample />} />
      </Routes>
    </Router>
  );
};

export default App;
