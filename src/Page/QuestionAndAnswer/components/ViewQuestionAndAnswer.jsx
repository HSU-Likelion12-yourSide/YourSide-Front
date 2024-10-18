import React from 'react';
import '../css/ViewQuestionAndAnswer.scss';
import bookmark from '../image/bookmark.svg';
import likeButton from '../image/like-btn.svg';
import badButton from '../image/bad-btn.svg';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';

const App = () => {
  return (
    <div className="question-and-answer-view">
      <Header />
      <div className="qav-container">
        <div className="qav-post">
          <div className="qav-group">
            <div className="qav-title">
              <div id="qav-question-mark">Q.</div>
              <div id="qav-title-text">
                계약직도 연장 여부 미리 말해줘야 하나요?
              </div>
            </div>
            <div className="qav-write-info">
              <div id="qav-writer">코카콜라</div>
              <div id="qav-date">24.05.11</div>
            </div>
            <div className="qav-content">
              정규직일때는 해고하기 한달전에 말해줘야 한다는 법이 있다던데요.
              그런가요? 예를들어 1개월 계약직이면 1개월만 계약할거고 더 연장의사
              없다.라고 말해줘야 하는건가요? 아니면 그냥 계약기간 끝나면
              끝나는거고 끝나는거고 그런건가요?
              {`.\n .\n .\n .\n .\n .`}
            </div>
            <div className="qav-work-arrangement">
              근로 결과지가 들어갈 자리 근로결과지 근로결과지
            </div>
          </div>
        </div>
        <div className="qav-middle">
          <div className="qav-group">
            <div id="qav-blank" />
            <img src={bookmark} alt="bookmark" />
            <div id="qav-middle-list">목록</div>
          </div>
        </div>
        <div className="qav-write-comment">
          <div className="qav-group">
            <div id="qav-comment-writer">코카콜라</div>
            <input
              id="qav-comment-textfield"
              type="text"
              placeholder="답변을 남겨주세요"
            />
            <div className="qav-button-group">
              <div id="qav-comment-button">답변 달기</div>
            </div>
          </div>
        </div>
        <div className="qav-comment-array">
          <div className="qav-comment-array-group">
            <div id="qav-comment-array-method">좋아요순</div>
            <div id="qav-comment-array-method">최신순</div>
          </div>
          <div className="qav-comment">
            <div className="qav-group">
              <div className="qav-comment-writer">사장나와</div>
              <div className="qav-users-group">
                <div id="qav-users-comment">
                  기간제 근로자의 경우, 약정한 근로계약 기간이 만료됨에 따라
                  근로관계가 자동으로 종료되는 것이 원칙입니다. 즉, 기간만료에
                  따라 근로관계가 종료되는 것은 해고가 아니므로, 사용자가 기간제
                  근로자에게 계약기간 만료 여부를 미리 통지할 의무는 해당
                  사업장의 해당 사업장의 취업규칙이나 근로계약서에 계약기간 만료
                  전에 별도의 의사를 표시하지 않으면 자동으로 근로계약이
                  연장된다와 같은 근로계약 자동연장에 관한 조항이 있거나,
                  계약기간 만료 oo일 전에 계약연장 여부를 통지한다와 같은 규정이
                  명시되어 있다면, 해당 내용을 준수하여 사전에 계약만료 또는
                  계약연장에 관한 통지를 하여야 합니다.
                </div>
                <div className="qav-users-button">
                  <div id="qav-button-like-group">
                    <img src={likeButton} alt="좋아요" />
                    <div className="qav-comment-like">
                      <div id="qav-comment-like-count">999</div>
                    </div>
                  </div>
                  <div id="qav-button-bad-group">
                    <img src={badButton} alt="나빠요" />{' '}
                    <div className="qav-comment-bad">
                      <div id="qav-comment-bad-count">999</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="qav-comment-date">2024.04.11</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
