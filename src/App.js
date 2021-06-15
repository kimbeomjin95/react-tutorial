import React, { useRef } from 'react'; 
// useRef는 특정 DOM을 선택하고 싶을때 사용할 수 있지만, 
// 어떤 변수를 계속 기억하고 싶을때 사용
import UserList from './UserList';

function App() {
  const name = 'react';
  const users = [
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
  ];

  // 기본값
  // nextId를 useRef로 관리하는 이유는 useRef값이 바뀐다고해서 컴포넌트가 리렌더링 될 필요가 없기 때문
  const nextId = useRef(4); 

  const onCreate = () => {
    console.log(nextId.current) // 4(현재 userRef값)
    nextId.current += 1; 
    // onCreate 함수가 실행될 때마다 기존값에 +1씩 증가
    // 값이 변경된다고 해서 컴포넌트가 리렌더링 되지 않음
  }

  return (  
    <UserList users={users} />
  );
}

export default App;
