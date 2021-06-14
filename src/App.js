import Hello from './Hello'; // Hello 컴포넌트을 불러겠다는 의미
import './App.css';

function App() {
  const name = 'react';

  // 스타일 객체 생성, key값은 camelCase 표기법 적용
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };

  return (
    <>
      {/* JSX 기본 문법
        1.태그는 꼭 닫혀있어야 함 <div></div>
        2.Self Closing태그 사용 가능 <Hello />
        3.2개 이상의 태그는 꼭 1개이상의 태그로 감싸져야 한다.
          - Fragment tag(빈태그)로 감싸는 것 가능 <></>
      */}      
      <Hello />

      {/*  JSX 내부에서 자바스크립트 값(value)을 사용하는 법 -> {name} */}
      <div>{name}</div>

      {/* 스타일(객체형태)과 className을 설정하는 법  */}
      <div style={style}>{name}</div>
      <div className="gray-box" ></div>
    </>
  );
}

export default App;
