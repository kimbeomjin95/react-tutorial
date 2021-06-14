import React from 'react'

function Wrapper({ children }) { // children는 Wrapper태그 사이에 있는 태그를 의미함 
    const style = {
        border: '2px solid black',
        padding: 16
    };

    return (
        <div style={style}>{children}</div>
    );
}

export default Wrapper;