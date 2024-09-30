import React, { useState, useEffect } from 'react';
import { Link, useLocation, Routes, Route } from 'react-router-dom';
import test from './myTest';
import TestApp from './TestApp';

const Test = () => {
  const [isTest, setTest] = useState();
  const location = useLocation();

  useEffect(() => {
    console.log('test');
  });

  return (
    <div>
      <button onClick={test}>Test</button>
      <input placeholder="test" value="myTest" />
      <a href="test">test</a>
      <Link to="/other">Go to Other Page</Link>
      <p>Location state: {location.state}</p>
      <Routes>
        <Route path="/other" element={<TestApp />} />
      </Routes>
    </div>
  );
};

export default Test;
