import React from 'react';
import produce, { Immer } from 'immer';

const array = [
  {id: 1, text: 'hello'},
  {id: 2, text: 'bye'},
  {id: 3, text: 'lalala'},
];

const nextArray = produce(array, draft => {
  draft.push({id: 4, text: 'new'});
  draft[0].text = draft[0].text + ' world';
})

function ImmerArray() {
  return (
    <>
      {
        console.log(array),
        console.log(nextArray)
      }
    </>
  );
}

export default ImmerArray;