import { useState, useCallback } from 'react';

// custom hook
// initialForm: 해당 input 폼에서 관리할 초기값
function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm); // form 상태의 초기값은 파라미터로 가져온 initialForm임
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value}));
  }, []); // 의존하는 다른 상태가 없으므로 비움

  // 초기값(initialForm)으로 받아온것을 설정하겠다는 의미
  // 파라미터로 가져온걸 사용하기 때문에 deps[]에 넣기
  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  // 객체 or 배열 형태로 return이 가능
  return [form, onChange, reset];
}

export default useInputs;
