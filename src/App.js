import React, { useReducer, useCallback, useMemo, useRef} from 'react'; 
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users) {
  return users.filter(user => user.active).length;
}

// 초기 상태값을 컴포넌트 밖에 선언
const initialState = {
  inputs: {
    username: '',
    email: ''
  },
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
    case 'CHANGE_INPUT':
      return {
        ...state, // 기존 상태값 복사(불변성을 지키기 위한)
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      }
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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState) // initialState: inputs, users를 포함
  const nextId = useRef(4);

  // 비구조화 할당
  const { users } = state;
  const { username, email } = state.inputs;

  // 처음 렌더링할때 생성한 다음 이후에는 재사용
  const onChange = useCallback(e => {
    const { name, value } = e.target;

  // 만약 액션이 CHANGE_INPUT라면 자신이 상태에서 inputs 안에 있는 특정 값을 바꿔주도록 구현하면 됨
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  }, []);

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
  }, [username, email]) // 기존 상태에 의존하는 값 username, email

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (  
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users} 
        onToggle={onToggle} 
        onRemove={onRemove} 
      /> 
      <div>활성 사용자 수: {count}</div>
    </>
    
  );
}

export default App;

