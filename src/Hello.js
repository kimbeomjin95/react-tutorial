import React from 'react'; 

function Hello({ color, name }) { // 비구조화 할당, 구조분해 적용
    return <div style={{
        color // color: color와 같은 의미
    }}>안녕하세요{name}</div>; 
}

// props를 지정하지 않고 기본값을 사용할 경우
// 특정값이 없을 때 기본적으로 사용할 값
Hello.defaultProps = {
    name: '이름없음'
};

export default Hello;