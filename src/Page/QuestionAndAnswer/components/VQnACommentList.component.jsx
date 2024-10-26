import React from 'react';
import likeButton from '../image/like-btn.svg';
import badButton from '../image/bad-btn.svg';
import '../css/VQnACommentList.scss';

const VQnACommentList = () => {
  return (
    <div className="qav-comment-group">
      <div className="qav-write-comment">
        <div className="qav-group">
          <div id="qav-comment-writer">코카콜라</div>
          <textarea
            cols="80"
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
            <div className="qav-comment-writer">
              <span id="qav-writer">사장나와</span>
              {/* 등급 부분 */}
              <div id="user-rank">네편 노무사</div>
            </div>
            <div className="qav-users-group">
              <div id="qav-users-comment">
                기간제 근로자의 경우, 약정한 근로계약 기간이 만료됨에 따라
                근로관계가 자동으로 종료되는 것이 원칙입니다. 즉, 기간만료에
                따라 근로관계가 종료되는 것은 해고가 아니므로, 사용자가 기간제
                근로자에게 계약기간 만료 여부를 미리 통지할 의무는 해당 사업장의
                해당 사업장의 취업규칙이나 근로계약서에 계약기간 만료 전에
                별도의 의사를 표시하지 않으면 자동으로 근로계약이 연장된다와
                같은 근로계약 자동연장에 관한 조항이 있거나, 계약기간 만료 oo일
                전에 계약연장 여부를 통지한다와 같은 규정이 명시되어 있다면,
                해당 내용을 준수하여 사전에 계약만료 또는 계약연장에 관한 통지를
                하여야 합니다.
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
  );
};

export default VQnACommentList;
