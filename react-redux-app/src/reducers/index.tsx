//1. Reducer 생성 => 이걸 store안에 넣어줘야함

const counter = (state = 0, action: {type: string})=>{
    switch(action.type){
        case 'INCREMENT':
            return state +1;
        case 'DECREMENT':
            return state -1;
        default:
            return state;
    }
}

export default counter;