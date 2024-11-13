import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Page/Main/components/Main';
import Header from './Page/Header/components/Header';
import Footer from './Page/Footer/components/Footer';
import ContractReview from './Page/ContractReview/components/ContractReview';
import QuestionAndAnswer from './Page/QuestionAndAnswer/components/QuestionAndAnswer';
import ViewQuestionAndAnswer from './Page/QuestionAndAnswer/components/ViewQuestionAndAnswer';
import WorkArrangement from './Page/WorkArrangement/components/WorkArrangement';
import WorkArrangementList from './Page/WorkArrangement/components/WorkArrangementList';
import ViewMyWork from './Page/WorkArrangement/components/ViewMyWork';
import ViewMyWorkResult from './Page/WorkArrangement/components/ViewMyWorkResult';
import ViewMyWorkResultCalculate from './Page/WorkArrangement/components/ViewMyWorkResultCalculate';
import Login from './Page/Login/components/Login';
import SignUp from './Page/Login/components/SignUp';
import FindUser from './Page/Login/components/FindUser';
import MyPage from './Page/MyPage/components/MyPage';
import MyPageViewResult from './Page/MyPage/components/MyPage.ViewResult';
import Notice from './Page/Notice/components/Notice';
import ModalCheck from './Global/components/Modal.components';
import NoticeExample from './Page/Notice/components/NoticeExample';
import QnAPosting from './Page/QnAPosting/components/QnAPosting';
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
        {/* user 없어도 됨 */}
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/ContractReview/" element={<ContractReview />} />
        <Route path="/:user/ContractReview/" element={<ContractReview />} />
        <Route path="/QuestionAndAnswer" element={<QuestionAndAnswer />} />
        <Route
          path="/:user/QuestionAndAnswer"
          element={<QuestionAndAnswer />}
        />
        <Route
          path="/ViewQuestionAndAnswer/:workSheetId"
          element={<ViewQuestionAndAnswer />}
        />
        <Route
          path="/:user/ViewQuestionAndAnswer/:workSheetId"
          element={<ViewQuestionAndAnswer />}
        />
        <Route path="/WorkArrangement" element={<WorkArrangement />} />
        <Route path="/:user/WorkArrangement" element={<WorkArrangement />} />
        <Route path="/WorkArrangement/List" element={<WorkArrangementList />} />
        <Route
          path="/:user/WorkArrangement/List"
          element={<WorkArrangementList />}
        />
        <Route path="/ViewMyWork" element={<ViewMyWork />} />
        <Route path="/:user/ViewMyWork" element={<ViewMyWork />} />
        <Route
          path="/ViewMyWorkResult/:workSheetId"
          element={<ViewMyWorkResult />}
        />
        <Route
          path="/:user/ViewMyWorkResult/:workSheetId"
          element={<ViewMyWorkResult />}
        />
        <Route
          path="/ViewMyWorkResult"
          element={<ViewMyWorkResultCalculate />}
        />
        <Route
          path="/:user/ViewMyWorkResult"
          element={<ViewMyWorkResultCalculate />}
        />
        {/* user 없어도 됨 */}
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/FindUser" element={<FindUser />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/:user/MyPage" element={<MyPage />} />
        <Route
          path="/MyPageViewResult/:workSheetId"
          element={<MyPageViewResult />}
        />
        <Route
          path="/:user/MyPageViewResult/:workSheetId"
          element={<MyPageViewResult />}
        />
        <Route path="/Notice" element={<Notice />} />
        <Route path="/:user/Notice" element={<Notice />} />
        <Route path="/QnAPosting" element={<QnAPosting />} />
        <Route path="/:user/QnAPosting" element={<QnAPosting />} />
        {/* user 없어도 됨 */}
        <Route path="/DevTerminal" element={<DevTerminal />} />
        <Route path="/DevMockingApi" element={<DevMockingApi />} />
        <Route path="/DevNotation" element={<DevNotation />} />
        <Route path="/NoticeExample" element={<NoticeExample />} />
        <Route path="/ModalCheck" element={<ModalCheck />} />
        <Route path="/DevFetch" element={<DevFetchTerminalTest />} />
      </Routes>
    </Router>
  );
};

export default App;
