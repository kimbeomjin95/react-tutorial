import React, { useRef, useState, useMemo } from 'react'; 
import CreateUser from './CreateUser';
// useRef는 특정 DOM을 선택하고 싶을때 사용할 수 있지만, 
// 어떤 변수를 계속 기억하고 싶을때 사용
import UserList from './UserList';

// useMemo Hook(성능최적화)
// 특정 값이 바뀌었을 때만 특정 함수를 실행해서 연산을 하도록 처리하고
// 만약 원하는 값이 바뀌지 않았다면 리렌더링할 때 이전에 만든 값을 재사용할 수 있게 함
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중..');
  return users.filter(user => user.active).length;
}

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
        email: 'KBJ@naver.com',
        active: true
    },
    {
        id: 2,
        username: 'CHS',
        email: 'CHS@nate.com',
        active: false
    },
    {
        id: 3,
        username: 'JCG',
        email: 'JCG@hanmail.net',
        active: false
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
    // console.log(nextId.current) // 4(현재 userRef값)
    nextId.current += 1; 
    // onCreate 함수가 실행될 때마다 기존값에 +1씩 증가
    // 값이 변경된다고 해서 컴포넌트가 리렌더링 되지 않음
  }

  // 특정 항목 REMOVE(filter)
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id)); 
    // user.id와 파라미터로 받은 id가  같지 않은 경우 새로운 배열 생성 후 추가
  }

  // 특정 항목 UPDATE(map)
  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id 
      ? { ...user, active: !user.active } // 특정 객체(user)를 업데이트하려면 그 객체의 불변성을 지키기 위해 객체를 복사후 값을 덮어씌움
      : user
    ));
  }

  // users값이 바뀔때만 함수가 호출되며 바뀌지 않으면 이전 값을 재사용(최적화 완료)
  // deps인 [users]값이 바뀌어야만 countActiveUsers(users)를 호출하겠단 의미
  const count = useMemo(() => countActiveUsers(users), [users]); // 첫번째 파라미터는 함수형태

  return (  
    <>
      <CreateUser 
        username={username} 
        email={email}
        onChange={onChange} 
        onCreate={onCreate} 
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} /> 
      <div>활성 사용자 수 {count}</div>
    </>
    
  );
}

export default App;
