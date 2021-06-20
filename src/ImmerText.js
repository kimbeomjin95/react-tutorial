import React from 'react';
import produce from 'immer';

const state = {
  number: 1,
  dontChangeMe: 2
};

// 1param: 바꾸고싶은 객체, 배열 삽입
// 2param: 어떻게 바꿀지 넣는 함수(draft)
const nextState = produce(state, draft => {
  draft.number += 1;    
})

function ImmerText() {
  return(
    <>
      {
        console.log(state),
        console.log(nextState)
      }
    </>
  );
}

export default ImmerText;