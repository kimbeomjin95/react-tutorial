import React, { useReducer, useCallback, useMemo, useRef, createContext } from 'react'; 
import CreateUser from './CreateUser';
import UserList from './UserList';
import useInputs from './useInputs';

function countActiveUsers(users) {
  return users.filter(user => user.active).length;
}

// 초기 상태값을 컴포넌트 밖에 선언
const initialState = { 
  users: [
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
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
    // 기존 useState를 사용하여 구현할 때는 inputs를 날리는 작업 따로하고, users 배열을 update하는 작업 따로 했지만
    // 이번에는 두 가지 작업을 동시에 할 수 있음
      return {
        // 초기값 설정
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state, 
        users: state.users.map(user => 
          user.id === action.id 
            ? { ...user, active: !user.active }
            : user
          )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id) // update
      }    
    default:
      throw new Error('Unhandled action');
  }
};

// UserDispatch context 생성
export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState) // initialState: inputs, users를 포함
  // form: 상태
  const [form, onChange, reset] = useInputs({
    username: '',
    email: ''
  });
  // 상태(form)값 추출
  const { username, email } = form;
  const nextId = useRef(4);

  // 비구조화 할당
  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username, 
        email
      }
    });
    nextId.current += 1;
    // 초기화 
    reset();
  }, [username, email, reset]) // 기존 상태에 의존하는 값 username, email + reset
  // reset을 넣은 이유는 custom hook에서 반환하고, ESlint 규칙상 넣었지만, 사실 안넣어도 상관은 없음

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (  
    // useReducer를 통해서 받아온 dispatch값
    <UserDispatch.Provider value={dispatch}>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users} 
      /> 
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
    
  );
}

export default App;

