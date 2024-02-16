import React, { useState } from 'react';
import './App.css';

// 6. props 타입 정해주기(타입스크립트이므로)
type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
}

// 5. App 컴포넌트에 props가 하나도 없으므로 가져와줌(내려줌)
// 7. props 타입 선언
function App({value, onIncrement, onDecrement}: Props) {

  const [todoValue, setTodoValue] =  useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setTodoValue(e.target.value);
  }
  const addTodo = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    setTodoValue("");
  }
  return (
    <div className="App">
      {/* Clicked: {value} times */}
      <button onClick={onIncrement}>
        +
      </button>
      <button onClick={onDecrement}>
        -
      </button>
      <form onSubmit={addTodo}> 
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
