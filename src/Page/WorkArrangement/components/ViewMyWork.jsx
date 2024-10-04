import React from 'react';
import '../css/ViewMyWork.scss';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';
import ViewMyWorkOption from './ViewMyWorkOption.component';
import data from '../data/viewMyWork.data';

const Option = ViewMyWorkOption;
const OptionsData = data;

const ViewMyWork = () => {
  return (
    <div className="view-my-work">
      <Header />
      <div className="vmw-container">
        <div id="vmw-title">내 근로 살펴보기</div>
        {
          // data를 가져오는 부분을 useEffect로 await으로 가져와서 map을 사용할 수 있게 한다. 이로 예외처리 try, catch를 사용한다. -> useEffect와 async await 사용이 불필요함. 이유는 내부적 데이터를 사용하기 때문에 동기적으롤 동작해야 코드의 최적화와 가독성이 높다. 비동지일 경우 위와 같은 방식으로 동작하게 해야하지만 지금의 경우 불필요.
          OptionsData.map(el => (
            <Option
              key={el.id}
              option={el.option}
              display={el.display}
              description={el.description || ''}
              type={el.type}
              placeholder={el.placeholder || ''}
              unit={el.unit || ''}
              warning={el.warning}
            />
          ))
        }
      </div>
      <div className="vmw-result">검사하기</div>
      <Footer />
    </div>
  );
};

export default ViewMyWork;
