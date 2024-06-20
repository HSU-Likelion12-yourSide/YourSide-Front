import React, { useState, useEffect } from 'react';

const DevNotation = () => {
  const [notations, setNotations] = useState([]); // 상태 초기화

  useEffect(() => {
    // 컴포넌트가 마운트될 때 데이터를 가져옴
    fetch('http://localhost:3001/notations')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setNotations(data); // 데이터를 상태에 저장
      })
      .catch(error => {
        console.error('There was a problem retrieving the notations:', error);
      });
  }, []); // 빈 의존성 배열은 이펙트를 컴포넌트 마운트 시에만 실행하게 함

  return (
    <div>
      <h1>Notations</h1>
      <ul>
        {notations.map(notation => (
          <li key={notation.notation_id}>
            {notation.title}
            {notation.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevNotation;
