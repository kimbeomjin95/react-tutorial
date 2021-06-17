import React, { useReducer } from 'react'; // React에서 useState함수를 불러오는 것

// 상태 업데이트 로직이 컴포넌트 밖에 위치함 
function reducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        throw new Error('Unhandled action');
    }
};

function Counter_Reducer() {

    // useReducer Hook
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
      dispatch({
        type: 'INCREMENT'
      })
    };
    const onDecrease = () => {
      dispatch({
        type: 'DECREMENT'
      })
    };
    return(
        <div>
            <h1>{number}</h1>
            {/* 주의 - 함수를 넣어야 하는 것이지({onIncrease}), 함수를 호출하면 안됌({onIncrease()}) X */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter_Reducer;