import React from 'react';

// 하나의 컴포넌트 파일에 두개의 컴포넌트를 선언해도 됨
function User({ user }) {
    return(
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    );
}

// UserList를 props로 받음
function UserList({ users }) {

    return (
        <div> 
          {
            users.map(
              user => (<User user={user} key={user.id} />) 
            )
          }
        </div>
    );
}

export default UserList;

// key값이 있어야 정확히 해당 요소가 어떤 데이터를 가르키는지 알 수 있음
// 즉 배열을 렌더링 할 때는 key을 설정해야 효율적으로 렌더링 할 수 있음
// 만약 고유값이 없는 경우에는 index를 이용해서 사용할 수 있지만 비효율적임