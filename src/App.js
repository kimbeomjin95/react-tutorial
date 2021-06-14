import Hello from './Hello'; // Hello 컴포넌트을 불러겠다는 의미
import './App.css';
import Wrapper from './Wrapper';

function App() {
  const name = 'react';

  return (  

    // props.children 적용
    <Wrapper>
      {/* 조건부 렌더링 - 특정 조건에 따라서 다른 결과를 보여주는 것을 의미함 */}
      <Hello name="hansol" color="red" isSpecial /> {/* isSpecial - 값을 생략하고 이름만 선언한 경우 true를 의미함 */}
      <Hello color="pink" />
    </Wrapper>

  );
}

export default App;
