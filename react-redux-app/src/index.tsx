import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import rootReducer from './reducers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//2. store에 reducer를 넣어줌
const store = createStore(rootReducer);

//13.
store.dispatch({
  type: "ADD_TODO",
  // payload를 텍스트로 줬으므로
  text: "USE_REDUX"
})

//14. store에 잘 들어갔는지, reducer가 잘 작동하는지 확인
console.log('store.getState', store.getState())


//8. 변화를 화면에 적용하도록 하기 위해 subscribe 사용=> subscribe에는 함수를 넣어줘야함
//따라서 아래 부분을 함수로 바꾸기
const render = ()=> root.render(
  <React.StrictMode>
    {/* 3. store에 getState를 이용해서 state를 내려줌 */}
    <App
      value={store.getState()}
      // 4. getState를 이용해서 store안에 있는 state를 변경시켜줌
      // action을 넣어서 dispatch해줌
      onIncrement={()=>store.dispatch({type: "INCREMENT"})}
      onDecrement={()=>store.dispatch({type: "DECREMENT"})}
    />
  </React.StrictMode>
);

//9. 위 함수를 call
render();

//10. subscribe()함수에 위 함수를 넣어줌
store.subscribe(render);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();