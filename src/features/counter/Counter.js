import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '';

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return <div>Counter</div>;
};

export default Counter;
