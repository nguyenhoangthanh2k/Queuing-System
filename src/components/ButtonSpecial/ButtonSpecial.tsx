import React, { ReactNode } from 'react';
import './ButtonSpecial.scss';
interface ButtonSpecialProps {
    Content: string;
    Icon: ReactNode
}

function ButtonSpecial(props: ButtonSpecialProps) {
    return (
        <div className='ButtonSpecial-container'>
            <div className='buttonSpecial-icon'>{props.Icon ? props.Icon : ''}</div>
            <div className='buttonSpecial-content'>{props.Content ? props.Content : ''}</div>
        </div>
    )
}

export default ButtonSpecial
