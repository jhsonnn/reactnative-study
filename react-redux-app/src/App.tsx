import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';

// 6. props 타입 정해주기(타입스크립트이므로)
type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
}

// 5. App 컴포넌트에 props가 하나도 없으므로 가져와줌(내려줌)
// 7. props 타입 선언
function App({value, onIncrement, onDecrement}: Props) {
  //17. Provider로 감싸져 있는 컴포넌트는 useSelector()를 이용하여 store에 있는 값을 가져올 수 있음
  //state의 타입에러 발생!
  //const counter = useSelector((state)=> state.counter);
  //rootReducer에서 타입을 선언해주고 오기!
  //19. 19.(rootReducer.tsx)에서 선언한 타입 선언해주기
  const counter = useSelector((state: RootState)=> state.counter);
  //20. todos 가져오기
  const todos: string[] = useSelector((state: RootState)=> state.todos);
  //23-1.
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] =  useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setTodoValue(e.target.value);
  }
  const addTodo = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    //23-2. Input 클릭 했을 때 addTodo에서 dispatch()
    dispatch({type:"ADD_TODO", text: todoValue })
    setTodoValue("");
  }
  return (
    <div className="App">
      Clicked: {counter} times
      <button onClick={onIncrement}>
        +
      </button>
      <button onClick={onDecrement}>
        -
      </button>

      <ul>
      {/* 21. todos array를 map으로 나열 */}
      {todos.map((todo, index)=><li key={index}>{todo}</li>)}
      </ul>

      <form onSubmit={addTodo}> 
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
