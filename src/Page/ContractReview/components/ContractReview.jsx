import React from 'react';
import '../CSS/contractreview.css';

const ContractReview = () => {
  return (
    <div className="contract-review">
      <div className="container">
        <div className="intro">
          <h1>
            나의 근로계약서를 가지고 화면에 표준 근로계약서와 비교해보세요
          </h1>
        </div>

        <div className="contents">
          <div className="list">
            <h3>항목</h3>
            <div>1. 근로계약기간</div>
            <hr />
            <div>2. 근무장소</div>
            <hr />
            <div>3. 업무의 내용</div>
            <hr />
            <div>4. 소정근로시간</div>
            <hr />
            <div>5. 근무일/휴일</div>
            <hr />
            <div>6. 임 금</div>
            <hr />
            <div>7. 연차유급휴가</div>
            <hr />
            <div>8. 사회보험 적용여부</div>
            <hr />
            <div>9. 근로계약서 교부</div>
            <hr />
            <div>10. 전체</div>
          </div>

          <div className="standard-contract">
            <h3>표준 근로계약서</h3>
            <div>
              <div>
                __________(이하 “사업주”라 함)과(와) __________ (이하 “근로자”라
                함)은 다음과 같이 근로계약을 체결한다.
              </div>
              <div>1. 근로계약기간 : 년 월 일부터 년 월 일까지</div>
              <div>
                ※ 근로계약기간을 정하지 않는 경우에는 “근로개시일”만 기재
              </div>
              <div id="notice">
                ☞ 노사가 협의하여 결정하는 일을 하기로 한 기간
              </div>
              <br />
              <div>2. 근 무 장 소 :</div>
              <div id="notice">☞ 일을 수행하기 위한 장소를 명기</div>
              <br />
              <div>3. 업무의 내용 :</div>
              <br />
              <div>
                4. 소정근로시간 : 시 분부터 시 분까지 (휴게시간 : 시 분~ 시 분)
              </div>
              <div id="notice">
                ☞ 노사가 법정근로시간 내(하루 8시간, 주40시간)에서 하루에
                몇시간을 일할지 정한 시간을 기재휴게시간은 4시간에 30분, 8시간인
                경우 1시간 이상을 주도록 소정근로시간 내에서 기재함
              </div>
              <br />
              <div>
                5. 근무일/휴일 : 매주 일(또는 매일단위)근무, 주휴일 매주 요일
              </div>
              <div id="notice">
                ☞ 일주일 중 어떤날에 근무할지를 명기하며, 주 중 근무하기로
                한날을 만근 하였을 경우 부여하는 유급휴일(주휴일)을 어느 요일로
                할지 결정하여 명기
              </div>
              <br />
              <div>6. 임 금</div>
              <div>
                <div>- 월(일, 시간)급 : ________________ 원</div>
                <div id="notice">
                  ☞ 임금을 시간급으로 정할지, 주급으로 정할지, 월급으로 정할지
                  결정하여 그 금액 명기
                </div>
                <div> - 상여금 : 있음 ( ) ________________ 원, 없음 ( )</div>
                <div id="notice">
                  ☞ 상여금이 있으면 그 내용 및 금액에 대해 기재
                </div>
                <div>- 기타급여(제수당 등) : 있음 ( ), 없음 ( )</div>
                <div id="notice">
                  ☞ 가족수당, 자격증 수당 등 지급하기로 한 수당이 있으면 해당
                  내용에 대해 기재
                </div>
                <div>_____________________원, _____________________원</div>
                <div id="notice">
                  ☞ 임금을 매월 언제 지급할 것인지에 대해 기재
                </div>
                <div>_____________________원, _____________________원</div>
                <div id="notice">
                  ☞ 임금을 계좌로 지급할 것인지 등에 대해 노사간 협의 후 기재
                </div>
              </div>
              <br />
              <div>7. 연차유급휴가</div>
              <div>- 연차유급휴가는 근로기준법에서 정하는 바에 따라 부여함</div>
              <div id="notice">
                ☞ ①1년간 총 소정 근로일의 80%이상 출근자에게 15일부여, 1년 초과
                매 2년마다 1일씩 가산, 한도 25일
              </div>
              <div>
                ②1년 미만 또는 1년간 80% 미만 출근자에게 1개월 개근시 1일 부여
              </div>
              <br />
              <div>8. 사회보험 적용여부(해당란에 체크)</div>
              <div>□ 고용보험 □ 산재보험 □ 국민연금 □ 건강보험</div>
              <div id="notice">☞ 사회보험 적용에 대한 해당 내용을 기재</div>
              <br />
              <div>9. 근로계약서 교부</div>
              <div>
                - 사업주는 근로계약을 체결함과 동시에 본 계약서를 사본하여
                근로자의 교부요구와 관계없이 근로자에게 교부함(근로기준법 제17조
                이행)
              </div>
              <div id="notice">
                ☞ 근로기준법 제17조에 따라 근로계약 체결시 근로자에게 교부하여야
                함을 알려주는 내용
              </div>
              <br />
              <div>10. 근로계약, 취업규칙 등의 성실한 이행의무</div>
              <div>
                - 사업주와 근로자는 각자가 근로계약, 취업규칙, 단체협약을 지키고
                성실하게 이행하여야 함
              </div>
              <br />
              <div>11. 기타</div>
              <div>- 이 계약에 정함이 없는 사항은 근로기준법령에 의함</div>
              <br />
            </div>

            <div className="info">
              <div>년 월 일</div>
              <div>(사업주) 사업체명 : (전화 : )/</div>
              <div>주 소 :</div>
              <div>대 표 자 : (서명)</div>
              <div>(근로자) 주 소 :</div>
              <div>연 락 처 :</div>
              <div>성 명 : (서명)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractReview;
