import Hello from './Hello'; // Hello 컴포넌트을 불러겠다는 의미
import './App.css';
import Wrapper from './Wrapper';

function App() {
  const name = 'react';

  return (  

    // props.children 적용
    <Wrapper>
      {/* 컴포넌트를 이용하여 특정 값(props)을 전달 */}
      <Hello name="hansol" color="red" />
      <Hello color="pink" />
    </Wrapper>
    
  );
}

export default App;
