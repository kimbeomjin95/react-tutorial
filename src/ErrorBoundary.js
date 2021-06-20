import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false
  };

  // error: 에러정보
  // info: 에러가 어디서 발생했는지에 대한 정보를 가져옴
  // componentDidCatch: 에러가 발생한 상황에 이 메소드가 먼저 호출됨
  componentDidCatch(error, info) {
    console.log('에러가 발생했습니다.');
    console.log({
      error,
      info
    });
    this.setState({
      error: true
    })

  }

  render() {
    console.log(this.state.error);
    if (this.state.error) {
      return <h2>에러 발생</h2>
    }
    return(
      // <User />를 그대로 보여주겠단 의미
      this.props.children
    )
  }
}

/*
  <ErrorBoundary>
    <User />
  </ErrorBoundary>
*/
export default ErrorBoundary;