import React, { useRef, useState } from 'react'; 
import CreateUser from './CreateUser';
// useRef는 특정 DOM을 선택하고 싶을때 사용할 수 있지만, 
// 어떤 변수를 계속 기억하고 싶을때 사용
import UserList from './UserList';

function App() {
  // 여러개의 input값을 관리할 때는 useState를 사용
  const [inputs, setInput] = useState({
    username: '',
    email: ''
  });

  // username, email를 사용하기 위해 inputs에서 추출(비구조화 할당)
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInput({
      ...inputs, // inputs 배열 새로 복사
      [name]: value // name이 가르키는 것은 username, email이므로 입력한 value으로 값을 변경
    })
  }

  // 컴포넌트 상태로서 관리
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'KBJ',
        email: 'KBJ@naver.com'
    },
    {
        id: 2,
        username: 'CHS',
        email: 'CHS@nate.com'
    },
    {
        id: 3,
        username: 'JCG',
        email: 'JCG@hanmail.net'
    }
  ]);

  // 기본값
  // nextId를 useRef로 관리하는 이유는 useRef값이 바뀐다고해서 컴포넌트가 리렌더링 될 필요가 없기 때문
  const nextId = useRef(4); 

  // 배열에서 값을 추가하는 Push, splice, sort 함수는 사용 X 
  // 이를 해결하기 위한 방법으로 
  // 1. spread 연산자
  const onCreate = () => {
    const user = {
      id: nextId.current, // id값 
      username, // inputs에서 관리하는
      email
    };
    // 배열에 항목을 추가하는 방법1
    // setUsers([...users, user])

    // 배열에 항목을 추가하는 방법2
    setUsers(users.concat(user)) // 기존 배열을 복사해서 새로운 배열을 만들고 user항목을 붙여줌
    

    // 버튼 클릭시 input값 지우기
    setInput({
      username: '',
      email: ''
    })
    console.log(nextId.current) // 4(현재 userRef값)
    nextId.current += 1; 
    // onCreate 함수가 실행될 때마다 기존값에 +1씩 증가
    // 값이 변경된다고 해서 컴포넌트가 리렌더링 되지 않음
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id)); 
    // user.id와 파라미터로 받은 id가  같지 않은 경우 새로운 배열 생성 후 추가
  }

  return (  
    <>
      <CreateUser 
        username={username} 
        email={email}
        onChange={onChange} 
        onCreate={onCreate} 
      />
      <UserList users={users} onRemove={onRemove} /> 
    </>
    
  );
}

export default App;
