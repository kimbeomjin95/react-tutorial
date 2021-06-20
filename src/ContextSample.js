import { func } from 'prop-types';
import React, { createContext, useContext, useState } from 'react';
// 리액트의 Context API 를 사용하면, 프로젝트 안에서 전역적으로 사용 할 수 있는 값을 관리 할 수 있음

// context에서 사용하는 기본값을 넣어줄 수 있음 -> defaultValue(Provider를 사용하지 않았을 때의 기본값)
// context는 다른 파일에서도 작성할 수 있고, 내보낸것을 불러와서 어디서든 사용할 수 있는 장점이 있음
const myContext = createContext('defaultValue');

// 
function Child() {
  // useContext: context(myContext)에 있는 값을 읽어와서 사용할 수 있게 해주는 리액트 내장 Hook
  const text = useContext(myContext);
  return <div>안녕하세요? {text}</div>
}

function Parent() {
  return <Child />
}

function GrandParent() {
  return <Parent />
}

// 
function ContextSample() {
  const [value, setValue] = useState(true);
  return (

    // myContext의 Provider 컴포넌트를 통해서 context에 value값을 통해서 값을 전달 
    <myContext.Provider value={value ? 'GOOD' : 'BAD'}>
      <GrandParent />
      <button onClick={() => setValue(!value)}>CLICK ME</button>
    </myContext.Provider>
  )
}

export default ContextSample;