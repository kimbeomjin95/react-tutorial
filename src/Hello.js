import React from 'react'; 

function Hello({ color, name, isSpecial }) { // 비구조화 할당, 구조분해 적용
    return (
        <div style={{
            color 
        }}>
            {/* 조건부 렌더링 적용방법
                1.삼항연산자 적용 - 값에 따라서 보여지는 값이 다를 경우
                2.&& 연산자 적용 - 단순히 값에 따라서 보여지고 안보여지고를 표현할 경우
            */}
            {isSpecial && <b>*</b>}
            {/* 
                isSpecial값이 false인 경우 아무것도 나타나지 않으며 isSpecial값이 true이면 결과값은 <b></b>가 됌  
                JSX에서 null, false, undefined를 렌더링시 아무 것도 나타나지 않음 
                false한 값인 0은 그대로 표현됌(예외)
            */}
            안녕하세요 {name}
        </div>
    );
}

// props를 지정하지 않고 기본값을 사용할 경우
// 특정값이 없을 때 기본적으로 사용할 값
Hello.defaultProps = {
    name: '이름없음'
};

export default Hello;