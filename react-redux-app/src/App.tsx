import React from 'react';
import logo from './logo.svg';
import './App.css';

// 6. props 타입 정해주기(타입스크립트이므로)
type Props = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

// 5. App 컴포넌트에 props가 하나도 없으므로 가져와줌(내려줌)
// 7. props 타입 선언
function App({value, onIncrement, onDecrement}: Props) {
  return (
    <div className="App">
      Clicked: {value} times
      <button onClick={onIncrement}>
        +
      </button>
      <button onClick={onDecrement}>
        -
      </button>
    </div>
  );
}

export default App;
