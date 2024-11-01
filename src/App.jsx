import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Page/Main/components/Main';
import Header from './Page/Header/components/Header';
import Footer from './Page/Footer/components/Footer';
import ContractReview from './Page/ContractReview/components/ContractReview';
import QuestionAndAnswer from './Page/QuestionAndAnswer/components/QuestionAndAnswer';
import ViewQuestionAndAnswer from './Page/QuestionAndAnswer/components/ViewQuestionAndAnswer';
import WorkArrangement from './Page/WorkArrangement/components/WorkArrangement';
import ViewMyWork from './Page/WorkArrangement/components/ViewMyWork';
import ViewMyWorkResult from './Page/WorkArrangement/components/ViewMyWorkResult';
import Login from './Page/Login/components/Login';
import SignUp from './Page/Login/SignUp/components/SignUp';
import MyPage from './Page/MyPage/components/MyPage';
import Notation from './Page/Notation/components/Notation';
import FindID from './Page/Login/FindID/components/FindID';
import FindPW from './Page/Login/FindPW/components/FindPW';
import QnAPosting from './Page/QnAPosting/components/QnAPosting';
import ModalCheck from './Global/components/Modal.components';
import NotationExample from './Page/Notation/components/NotationExample';

import DevTerminal from './DevTerminal';
import DevMockingApi from './Test/Mocking/API/DevMockingApi';
import DevNotation from './Test/Mocking/API/DevNotation';
import DevFetchTerminalTest from './DevFetchTerminalTest';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:user" element={<Main />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/ContractReview/" element={<ContractReview />} />
        <Route path="/QuestionAndAnswer" element={<QuestionAndAnswer />} />
        <Route
          path="/ViewQuestionAndAnswer/:id"
          element={<ViewQuestionAndAnswer />}
        />
        <Route path="/WorkArrangement" element={<WorkArrangement />} />
        <Route path="/ViewMyWork" element={<ViewMyWork />} />
        <Route path="/ViewMyWorkResult" element={<ViewMyWorkResult />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Notation" element={<Notation />} />
        <Route path="/FindID" element={<FindID />} />
        <Route path="/FindPW" element={<FindPW />} />
        <Route path="/QnAPosting" element={<QnAPosting />} />
        <Route path="/DevTerminal" element={<DevTerminal />} />
        <Route path="/DevMockingApi" element={<DevMockingApi />} />
        <Route path="/DevNotation" element={<DevNotation />} />
        <Route path="/NotationExample" element={<NotationExample />} />
        <Route path="/ModalCheck" element={<ModalCheck />} />
        <Route path="/DevFetch" element={<DevFetchTerminalTest />} />
      </Routes>
    </Router>
  );
};

export default App;
