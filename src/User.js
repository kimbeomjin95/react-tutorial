import React from 'react';

function User({ user }) {
  // 에러페이지 방지(white 페이지를 보여줌)
  // if (!user) return null;

  return(
    <div>
      <div>
        <b>ID</b>: {user.id}
      </div>
      <div>
        <b>Username</b>: {user.username}
      </div>
    </div>
  )
}

export default User;