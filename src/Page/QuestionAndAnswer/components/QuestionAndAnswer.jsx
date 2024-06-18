import React from 'react';
import '../css/QuestionAndAnswer.css';
import Header from '../../Header/components/Header';

const App = () => {
  const popularPosts = [
    {
      id: 1,
      question: '해당 사업에도 주휴수당이 발생하는지 궁금합니다',
      answer: '설명 텍스트',
    },
    {
      id: 2,
      question: '금융업 임대 대리에도 휴일수당이 발생하나요?',
      answer: '설명 텍스트',
    },
    {
      id: 3,
      question: '회사에 문제가 생겼을까요? (배경관리)',
      answer: '설명 텍스트',
    },
  ];

  const posts = [
    {
      id: 1,
      question: '계약서 쓴 날짜 보다 미리 와서 2시간 있다갔어요.',
      date: '2024.04.11',
      answer: '설명 텍스트',
    },
  ];

  return (
    <div className="app-container">
      <Header />
      <div className="nav-buttons">
        <button className="nav-button active">네편 답변</button>
        <button className="nav-button">네편 정보</button>
      </div>
      <section className="popular-posts">
        <h2>인기게시글</h2>
        <div className="post-cards">
          {popularPosts.map(post => (
            <div className="post-card" key={post.id}>
              <h3>Q. {post.question}</h3>
              <p>{post.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="posts">
        <h2>게시글</h2>
        <div className="post-card" key={posts[0].id}>
          <h3>Q. {posts[0].question}</h3>
          <p>{posts[0].date}</p>
          <p>{posts[0].answer}</p>
          <button className="view-more-button">자세히 보기</button>
        </div>
      </section>
    </div>
  );
};

export default App;
