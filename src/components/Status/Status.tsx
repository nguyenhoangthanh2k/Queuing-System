import React from 'react';
import './Status.scss'

interface props {
    Content: string,
    Type?: string,
    ClassName?: string,
    Color?: string
}

// Content là chữ cần hiển thị
// Type có thể là kiểu connect mặc định là ''
// Color thay thế màu của status defaut gray #6C7585. có 3 option{red, blue, green}

function Status(props: props) {
    return (
        <div className='Status-container'>
            <div className={`icon ${props.Color ? props.Color : 'gray'}`}></div>
            <div className={`content${props.Type ? ` ${props.Type}` : ''}${props.ClassName ? ` ${props.ClassName}` : ''}`}>{props.Content ? props.Content : ''}</div>
        </div>
    )
}

export default Status
