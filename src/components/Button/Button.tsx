import React from 'react'

import './Button.scss'

function Button(props: any) {
    console.log(props)

    return (
        <button className={props.className ? `button ${props.className}` : 'button'} >
            {props.content ? props.content : 'button'}
        </button>
    )
}

export default Button
