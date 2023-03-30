import React, { useState } from 'react'
import './Input.scss'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Input = (props: any) => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleShowHidePassword = () => {
        setIsShowPassword(!isShowPassword);
    }

    let Style: string = props.Style ? props.Style : 'Normal';
    let Status: string = props.Status ? props.Status : 'ReadOnly';
    let isReadOnly: boolean = Status === 'ReadOnly' ? true : false
    let PositionIcon: string = props.PositionIcon ? props.PositionIcon : 'right';


    if (Style === 'Normal') {
        return (
            <div className="Input-container">
                <input
                    placeholder={props.placeholder ? props.placeholder : ''}
                    className={`${Status}${props.className ? ` ${props.className}` : ''}`}
                    type={props.Type ? props.Type : 'text'}
                    readOnly={isReadOnly}
                    id={props.Id ? props.Id : ''}
                />
            </div>
        )
    }

    if (Style === 'Icon') {
        return (
            <div className="Input-container">
                {props.Type === 'password' ?
                    <>
                        <input
                            placeholder={props.placeholder ? props.placeholder : ''}
                            className={`${PositionIcon} ${Status}${props.className ? ` ${props.className}` : ''}`}
                            type={isShowPassword ? 'text' : 'password'}
                            readOnly={isReadOnly}
                            id={props.Id ? props.Id : ''}
                        />

                        <span className={`icon ${PositionIcon}-icon${props.FullfillIcon ? ` fullfill` : ''}`}
                            onClick={handleShowHidePassword} >
                            {isShowPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </span>
                    </>
                    :
                    <>
                        <input
                            placeholder={props.placeholder ? props.placeholder : ''}
                            className={`${PositionIcon} ${Status}${props.className ? ` ${props.className}` : ''}`}
                            type={props.Type ? props.Type : 'text'}
                            readOnly={isReadOnly}
                            id={props.Id ? props.Id : ''}
                        />
                        <span className={`icon ${PositionIcon}-icon${props.FullfillIcon ? ` fullfill` : ''}`}
                            onClick={handleShowHidePassword} >
                            {props.IconName}
                        </span>
                    </>
                }
            </div>
        )
    }

    return (
        <div className="Input-container">
            Error
        </div>
    )
}

export default Input
