// //1. Reducer 생성 => 이걸 store안에 넣어줘야함
// const counter = (state = 0, action: {type: string})=>{
//     switch(action.type){
//         case 'INCREMENT':
//             return state +1;
//         case 'DECREMENT':
//             return state -1;
//         default:
//             return state;
//     }
// }

import { combineReducers } from "redux";
import counter from './counter';
import todos from './todos';

// export default counter;

//원래 reducer는 하나여야함.
//그런데 여러개의 리듀서를 만들고 루트 리듀서로 컴바인해주는 combineReducer을 만들자.
// 이 안에 여러개의 리듀서들을 넣어주면 됨.
const rootReducer = combineReducers({
    counter,
    todos,
})

export default rootReducer;