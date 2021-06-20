import React, { Component } from 'react'; // React에서 useState함수를 불러오는 것

class Counter extends Component {
    // custom method

    // 기본 방법1(각 메서드와 컴포넌트 인스턴스의 관계가 끊어지는 것을 해결하기 위한 방법)
    // constructor(props) { // 생성자 함수에서 메서드를 미리 바인딩 하는 것
    //     super(props);
    //     // bind는 만약 함수(handleIncrease(), handleDecrease())에서 this를 가르킨다면
    //     // constructor에서 사용하는 this.handleIncrease를 가르키게 한다는 의미
    //     this.handleIncrease = this.handleIncrease.bind(this);
    //     this.handleDecrease = this.handleDecrease.bind(this);
    // }

    // state 선언 방법1
    // constructor(props) {
    //     super(props);
    //     this.state = { // 특정 객체 설정(state는 무조건 객체형태여야 함)
    //         counter: 0
    //     };
    // }

    // state 선언 방법2(정식 JS문법이 아님)
    state = {
        counter: 0,
        fix: 1,
        uddateMe: { 
            toggleMe: false,
            dontChangeMe: 1
        }
    }

    // 방법2(화살표 함수 사용)
    handleIncrease = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        // setState() 함수형 업데이트
        this.setState(state => ({
            counter: state.counter + 1
        }))
    }
    handleDecrease = () => {
        this.setState({ // 상태를 바꾸는 함수가 아니라 설정해놓은 상태로 바꿔달라고 요청하는 함수로 이해
            counter: this.state.counter - 1
        });
    }
    handledToggle = () => {
        this.setState({
            ...this.state.updateMe, // 상태값이 객체이면 불변성 유지해야 함
            updateMe: !this.state.updateMe.toggleMe,
        })
    }
        
    render() { // render: 컴포넌트가 자체적으로 가지고 있는 method
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fix}</p>
            </div>
        );
    }
}

// function Counter() {
//     // number는 현재 상태를 만드는데 기본값은 0을 의미
//     // setNumber는 기본값 상태를 바꿔주는 것을 의미(현재 상태(number)를 update하는 setter 함수)
//     const [number, setNumber] = useState(0); // useState()는 배열을 반환

//     // 이벤트 설정방법
//     const onIncrease = () => {
//         // setNumber(number + 1);

//         // 현재 상태를 가져와서 업데이트 하겠다는 의미(함수형 업데이트 - 성능 최적화와 관련)
//         setNumber(prevNumber => prevNumber + 1);
//     }
//     const onDecrease = () => {
//         // setNumber의 용도는 2가지
//         // 1.어떤 값으로 바꾸기 위해 다음 상태값을 넣는 법
//         // 2.로직으로 상태를 update하기 위해 함수를 넣는 법

//         // setNumber(number - 1); 
//         setNumber(prevNumber => prevNumber - 1);
//     }
//     return(
//         <div>
//             <h1>{number}</h1>
//             {/* 주의 - 함수를 넣어야 하는 것이지({onIncrease}), 함수를 호출하면 안됌({onIncrease()}) X */}
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     );
// }

export default Counter;

