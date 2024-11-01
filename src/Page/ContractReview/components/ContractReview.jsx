import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import '../css/contractreview.scss';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';

const ContractReview = () => {
  const [isSection, setSection] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    section6: false,
    section7: false,
    section8: false,
    section9: false,
    section10: false,
  });

  const handleSection = section => {
    const delay =
      section === 'section7' || section === 'section8' || section === 'section9'
        ? 1000
        : 500;

    // const delay = 500;

    setTimeout(() => {
      setSection(prev => {
        const updatedSections = {};
        // Object를 사용해서 객체의 keys라는 속성으로 접근 한다.
        // Object.keys()는 객체의 모든 키를 배열로 가져오는 메서드
        // 따라서 [{key':value'},{key'':value''},...] 이렇게 나열이 된다.
        // 즉, Object.keys로 접근했기 때문에 prev는 key를 의미하며 매개변수 인자로 들어간 section가 Object를 통한 배열로 구성된 key가 같은 경우만 true이고 나며지는 false가 되는 것이다.
        Object.keys(prev).forEach(el => {
          if (el === section) {
            updatedSections[el] = true;
          } else {
            updatedSections[el] = false;
          }
        });

        return updatedSections;
      });
    }, delay);
  };

  const handleSectionAll = () => {
    setSection(prev => {
      const updatedSections = {};
      Object.keys(prev).forEach(el => {
        updatedSections[el] = true;
      });
      return updatedSections;
    });
  };

  const scrollSet = el => {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="contract-review">
      <Header />
      <div className="container">
        <div className="intro">
          <div id="title">
            <div>
              <span id="effect">나의 근로계약서</span>를 가지고
            </div>
            <div>
              화면에 <span id="effect">표준 근로계약서</span>와 비교해보세요
            </div>
          </div>
        </div>

        <div className="contents">
          <div className="list">
            <h2>항목</h2>
            <div>
              <HashLink
                to="#section1"
                className={
                  isSection.section1
                    ? 'clicked-section-element'
                    : 'section-element'
                }
                scroll={scrollSet}
                onClick={() => handleSection('section1')}
              >
                1. 근로계약기간
              </HashLink>
              <hr />
              <HashLink
                to="#section2"
                className={
                  isSection.section2
                    ? 'clicked-section-element'
                    : 'section-element'
                }
                scroll={scrollSet}
                onClick={() => handleSection('section2')}
              >
                2. 근무장소
              </HashLink>
              <hr />
              <HashLink
                to="#section3"
                className={
                  isSection.section3
                    ? 'clicked-section-element'
                    : 'section-element'
                }
                scroll={scrollSet}
                onClick={() => handleSection('section3')}
              >
                3. 업무의 내용
              </HashLink>
              <hr />
              <HashLink
                to="#section4"
                className={
                  isSection.section4
                    ? 'clicked-section-element'
                    : 'section-element'
                }
                scroll={scrollSet}
                onClick={() => handleSection('section4')}
              >
                4. 소정근로시간
              </HashLink>
              <hr />
              <HashLink
                to="#section5"
                className={
                  isSection.section5
                    ? 'clicked-section-element'
                    : 'section-element'
                }
                scroll={scrollSet}
                onClick={() => handleSection('section5')}
              >
                5. 근무일/휴일
              </HashLink>
              <hr />
              <HashLink
                to="#section6"
                className={
                  isSection.section6
                    ? 'clicked-section-element'
                    : 'section-element'
                }
                scroll={scrollSet}
                onClick={() => handleSection('section6')}
              >
                6. 임 금
              </HashLink>
              <hr />
              <HashLink
                to="#section7"
                className={
                  isSection.section7
                    ? 'clicked-section-element'
                    : 'section-element'
                }
                scroll={scrollSet}
                onClick={() => handleSection('section7')}
              >
                7. 연차유급휴가
              </HashLink>
              <hr />
              <HashLink
                to="#section8"
                className={
                  isSection.section8
                    ? 'clicked-section-element'
                    : 'section-element'
                }
                scroll={scrollSet}
                onClick={() => handleSection('section8')}
              >
                8. 사회보험 적용여부
              </HashLink>
              <hr />
              <HashLink
                to="#section9"
                className={
                  isSection.section9
                    ? 'clicked-section-element'
                    : 'section-element'
                }
                scroll={scrollSet}
                onClick={() => handleSection('section9')}
              >
                9. 근로계약서 교부
              </HashLink>
              <hr />
              <HashLink
                to="#section1"
                className={
                  isSection.section10
                    ? 'clicked-section-element'
                    : 'section-element'
                }
                scroll={scrollSet}
                onClick={() => handleSectionAll()}
              >
                10. 전체
              </HashLink>
            </div>
          </div>

          <div className="standard-contract">
            <h2>표준 근로계약서</h2>
            <div className="container">
              <div className="group">
                <div>
                  __________(이하 “사업주”라 함)과(와) __________ (이하
                  “근로자”라 함)은 다음과 같이 근로계약을 체결한다.
                </div>
                <div name="" id="section1">
                  1. 근로계약기간 : 년 월 일부터 년 월 일까지
                </div>
                <div>
                  ※ 근로계약기간을 정하지 않는 경우에는 “근로개시일”만 기재
                </div>
                {isSection.section1 ? (
                  <div id="notice" className="show">
                    ☞ 노사가 협의하여 결정하는 일을 하기로 한 기간
                  </div>
                ) : (
                  <div id="notice" />
                )}

                <div name="" id="section2">
                  2. 근 무 장 소 :
                </div>
                {isSection.section2 ? (
                  <div id="notice" className="show">
                    ☞ 일을 수행하기 위한 장소를 명기
                  </div>
                ) : (
                  <div id="notice" />
                )}

                <div name="" id="section3">
                  3. 업무의 내용 :
                </div>
                {isSection.section3 ? (
                  <div id="notice" className="show">
                    ☞ 어떤 일을 할지에 대한 내용을 기재
                  </div>
                ) : (
                  <div id="notice" />
                )}
                <div name="" id="section4">
                  4. 소정근로시간 : 시 분부터 시 분까지 (휴게시간 : 시 분~ 시
                  분)
                </div>
                {/* false 일때 notice */}
                {isSection.section4 ? (
                  <div id="notice-other" className="show">
                    ☞ 노사가 법정근로시간 내(하루 8시간, 주40시간)에서 하루에
                    몇시간을 일할지 정한 시간을 기재휴게시간은 4시간에 30분,
                    8시간인 경우 1시간 이상을 주도록 소정근로시간 내에서 기재함
                  </div>
                ) : (
                  <div id="notice-other" />
                )}

                <div name="" id="section5">
                  5. 근무일/휴일 : 매주 일(또는 매일단위)근무, 주휴일 매주 요일
                </div>
                {/* false 일때 notice */}
                {isSection.section5 ? (
                  <div id="notice-other" className="show">
                    ☞ 일주일 중 어떤날에 근무할지를 명기하며, 주 중 근무하기로
                    한날을 만근 하였을 경우 부여하는 유급휴일(주휴일)을 어느
                    요일로 할지 결정하여 명기
                  </div>
                ) : (
                  <div id="notice-other" />
                )}

                <div name="" id="section6">
                  6. 임 금
                </div>
                <div>
                  <div>- 월(일, 시간)급 : ________________ 원</div>
                  {isSection.section6 ? (
                    <div id="notice" className="show">
                      ☞ 임금을 시간급으로 정할지, 주급으로 정할지, 월급으로
                      정할지 결정하여 그 금액 명기
                    </div>
                  ) : (
                    <div id="notice" />
                  )}
                  <div> - 상여금 : 있음 ( ) ________________ 원, 없음 ( )</div>
                  {isSection.section6 ? (
                    <div id="notice" className="show">
                      ☞ 상여금이 있으면 그 내용 및 금액에 대해 기재
                    </div>
                  ) : (
                    <div id="notice" />
                  )}
                  <div>- 기타급여(제수당 등) : 있음 ( ), 없음 ( )</div>
                  {isSection.section6 ? (
                    <div id="notice" className="show">
                      ☞ 가족수당, 자격증 수당 등 지급하기로 한 수당이 있으면
                      해당 내용에 대해 기재
                    </div>
                  ) : (
                    <div id="notice" />
                  )}
                  <div>_____________________원, _____________________원</div>
                  {isSection.section6 ? (
                    <div id="notice" className="show">
                      ☞ 임금을 매월 언제 지급할 것인지에 대해 기재
                    </div>
                  ) : (
                    <div id="notice" />
                  )}
                  <div>_____________________원, _____________________원</div>
                  {isSection.section6 ? (
                    <div id="notice" className="show">
                      ☞ 임금을 계좌로 지급할 것인지 등에 대해 노사간 협의 후
                      기재
                    </div>
                  ) : (
                    <div id="notice" />
                  )}
                </div>

                <div name="" id="section7">
                  7. 연차유급휴가
                </div>
                <div>
                  - 연차유급휴가는 근로기준법에서 정하는 바에 따라 부여함
                </div>
                {isSection.section7 ? (
                  <div id="notice" className="show">
                    ☞ ①1년간 총 소정 근로일의 80%이상 출근자에게 15일부여, 1년
                    초과 매 2년마다 1일씩 가산, 한도 25일
                  </div>
                ) : (
                  <div id="notice" />
                )}
                <div>
                  ②1년 미만 또는 1년간 80% 미만 출근자에게 1개월 개근시 1일 부여
                </div>

                <div name="" id="section8">
                  8. 사회보험 적용여부(해당란에 체크)
                </div>
                <div>□ 고용보험 □ 산재보험 □ 국민연금 □ 건강보험</div>
                {isSection.section8 ? (
                  <div id="notice" className="show">
                    ☞ 사회보험 적용에 대한 해당 내용을 기재
                  </div>
                ) : (
                  <div id="notice" />
                )}

                <div name="" id="section9">
                  9. 근로계약서 교부
                </div>
                <div>
                  - 사업주는 근로계약을 체결함과 동시에 본 계약서를 사본하여
                  근로자의 교부요구와 관계없이 근로자에게 교부함(근로기준법
                  제17조 이행)
                </div>
                {isSection.section9 ? (
                  <div id="notice" className="show">
                    ☞ 근로기준법 제17조에 따라 근로계약 체결시 근로자에게
                    교부하여야 함을 알려주는 내용
                  </div>
                ) : (
                  <div id="notice" />
                )}

                <div name="" id="section10">
                  10. 근로계약, 취업규칙 등의 성실한 이행의무
                </div>
                <div>
                  - 사업주와 근로자는 각자가 근로계약, 취업규칙, 단체협약을
                  지키고 성실하게 이행하여야 함
                </div>
                <div id="notice" />
                <div>11. 기타</div>
                <div>- 이 계약에 정함이 없는 사항은 근로기준법령에 의함</div>
                <div id="notice" />
              </div>

              <div className="info">
                <div id="contractDate">
                  <span>년</span> <span>월</span> <span>일</span>
                </div>
                <div id="officeName">
                  <span>(사업주) 사업체명:</span> <span>(전화 :</span> )
                </div>
                <div id="address">
                  <span>주 소 :</span>
                </div>
                <div id="owner">
                  <span>대 표 자 :</span> <span>(서명)</span>
                </div>
                <div id="employee">
                  <span>(근로자) 주 소 :</span>
                </div>
                <div id="contact">
                  <span>연 락 처 :</span>
                </div>
                <div id="userName">
                  <span>성 명 :</span>
                  <span>(서명)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContractReview;
