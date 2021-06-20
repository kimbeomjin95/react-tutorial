import React from 'react';
import { useEffect, useContext } from 'react';
import { UserDispatch } from './App'; /* 주의 */
// useContext: context를 컴포넌트 내부에서 바로 조회할 수 있게 해주는 hook
  
/*
  결론
  useState을 사용하는 것과 useReducer를 사용하는것의 차이점을 발견
  useReducer를 사용하지 않고 useState를 사용하여 내부에서 모든 것을 작업했다면
  dispatch가 없기 때문에 UserDispatch context를 만들어서 관리하는게 어려웠을 것임
  물론 Provider 컴포넌트 value에 setState값을 넣어서 관리할 수도 있지만 
  UserDispatch context만큼 깔끔한 구조가 아닐 것임
  특정 함수를 여러 컴포넌트에 거쳐서 전달해줘야 할 일이 있으면 dispatch를 관리하는 컨텍스트를 만들어서
  필요한 곳에서 dispatch를 불러와서 사용하면 됌 
*/

// 하나의 컴포넌트 파일에 두개의 컴포넌트를 선언해도 됨
const User = React.memo(function User({ user }) {

    // 객체 비구조화
    const { username, email, id, active } = user;
    const dispatch = useContext(UserDispatch);

    /* 버튼 클릭시 () => onRemove(id) 함수를 호출하겠다는 의미, 
       함수를 호출하는 것이 아니라 함수를 만들어서 넣어줘야 함 */
    return(
        <div>
            <b 
              style={{
              color: active ? 'green' : 'black',
              cursor: 'pointer'              
              }}
              onClick={() => dispatch({
                type: 'TOGGLE_USER',
                id
              })}
            >
              {username}
            </b>
            &nbsp;
            <span>{email}</span>
            <button onClick={() => dispatch({
              type: 'REMOVE_USER',
              id
            })}>삭제</button>
        </div>
    );
});

// UserList를 props로 받음
function UserList({ users }) {

    return (
        <div> 
          {
            users.map(
              user => (
                <User 
                  user={user} 
                  key={user.id} 
                />
              ) 
            )
          }
        </div>
    );
}

export default React.memo(UserList);
// key값이 있어야 정확히 해당 요소가 어떤 데이터를 가르키는지 알 수 있음
// 즉 배열을 렌더링 할 때는 key을 설정해야 효율적으로 렌더링 할 수 있음
// 만약 고유값이 없는 경우에는 index를 이용해서 사용할 수 있지만 비효율적임