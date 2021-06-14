import React, { useState } from 'react';

function InputSample() {
    // input값을 관리할 상태를 만듬
    const [text, setText] = useState('');

    // (e)객체가 의미하는 것은 수정이벤트가 발생했을 때 파라미터로 받아와서 사용할 수 있게 하는 것
    const onChange = (e) => {
        setText(e.target.value); // // 현재 DOM이 가지고 있는 값을 알고 싶을 경우
    }

    // 초기화 
    const onReset = () => {
        setText('');
    }
    return(
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    );
}

export default InputSample;