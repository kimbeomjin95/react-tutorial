import React, { useState } from 'react'; // React에서 useState함수를 불러오는 것

function Counter() {
    // number는 현재 상태를 만드는데 기본값은 0을 의미
    // setNumber는 기본값 상태를 바꿔주는 것을 의미(현재 상태(number)를 update하는 setter 함수)
    const [number, setNumber] = useState(0); // useState()는 배열을 반환

    // 이벤트 설정방법
    const onIncrease = () => {
        // setNumber(number + 1);

        // 현재 상태를 가져와서 업데이트 하겠다는 의미(함수형 업데이트 - 성능 최적화와 관련)
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        // setNumber의 용도는 2가지
        // 1.어떤 값으로 바꾸기 위해 다음 상태값을 넣는 법
        // 2.로직으로 상태를 update하기 위해 함수를 넣는 법

        // setNumber(number - 1); 
        setNumber(prevNumber => prevNumber - 1);
    }
    return(
        <div>
            <h1>{number}</h1>
            {/* 주의 - 함수를 넣어야 하는 것이지({onIncrease}), 함수를 호출하면 안됌({onIncrease()}) X */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;

