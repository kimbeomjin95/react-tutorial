import React, { useState, useRef } from 'react'; // DOM에 직접 접근

function InputSample() {
    // 객체형태 상태관리(UPDATE)
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    //  객체 생성
    const nameInput = useRef();

    // 추출(비구조화 할당)
    const { name, nickname } = inputs;

    // (e)객체가 의미하는 것은 수정이벤트가 발생했을 때 파라미터로 받아와서 사용할 수 있게 하는 것
    const onChange = (e) => {
        // 추출
        const { name, value } = e.target;

        // 객체를 update를 하기 위해서 새로운 객체 생성
        // [name]값은 name이나 nickname이 될 수 있음        
        setInputs({           
           ...inputs, // 객체를 update를 하기 위해서 기존객체 복사(불변성을 지키기 위해)
           [name]: value // 비구조화 할당을 통해 추출한 값을 덮어씌어서 update
        });
        // 불변성을 지켜줘야만 리액트 컴포넌트에서 상태가 update됬음을 강제할 수 있고
        // 이에 따라 필요한 렌더링이 발생하게 됌
    };

    // 초기화 
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        // current는 해당 요소의 DOM을 가르킴
        nameInput.current.focus();
    };
    return(
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name} 
                ref={nameInput} // 원하는 DOM에 useRef를 설정하여 직접 접근 가능
            />
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname} 
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} {nickname} 
            </div>
        </div>
    );
}

export default InputSample;