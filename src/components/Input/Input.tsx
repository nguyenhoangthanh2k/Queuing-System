import React, { ReactNode, useState } from 'react'
import './Input.scss'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

interface InputProps {
    Type: string;
    Style?: string;
    Status?: boolean;
    PositionIcon?: string;
    Disable?: boolean;
    Checked?: boolean;
    Placeholder?: string;
    ClassName?: string;
    Id?: string;
    FullfillIcon?: any;
    IconName?: ReactNode;
}

const Input = (props: InputProps) => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleShowHidePassword = () => {
        setIsShowPassword(!isShowPassword);
    }

    let Style: string = props.Style ? props.Style : 'normal';
    let Status: boolean = props.Status ? props.Status : false;
    let PositionIcon: string = props.PositionIcon ? props.PositionIcon : 'right';

    // Style 2 option {normal (defaut), icon}
    // Status 2 option {false (defaut), true} lien quan den readonly
    // PositionIcon 2 option {right (defaut), left}
    // Type là các kiểu của input


    if (Style === 'normal') {
        return (
            <div className="Input-container">
                <input
                    placeholder={props.Placeholder ? props.Placeholder : ''}
                    className={`${Status === true ? 'ReadOnly' : ''}${props.ClassName ? ` ${props.ClassName}` : ''}${props.Type ? ` ${props.Type}` : ''}`}
                    type={props.Type ? props.Type : 'text'}
                    readOnly={Status}
                    id={props.Id ? props.Id : ''}
                    disabled={props.Disable ? props.Disable : false}

                // checked={props.Checked ? props.Checked : false}
                />
            </div>
        )
    }

    if (Style === 'icon') {
        return (
            <div className="Input-container">
                {props.Type === 'password' ?
                    <>
                        <input
                            placeholder={props.Placeholder ? props.Placeholder : ''}
                            className={`${PositionIcon} ${Status}${props.ClassName ? ` ${props.ClassName}` : ''}${props.Type ? ` ${props.Type}` : ''}`}
                            type={isShowPassword ? 'text' : 'password'}
                            readOnly={Status}
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
                            placeholder={props.Placeholder ? props.Placeholder : ''}
                            className={`${PositionIcon} ${Status}${props.ClassName ? ` ${props.ClassName}` : ''}${props.Type ? ` ${props.Type}` : ''}`}
                            type={props.Type ? props.Type : 'text'}
                            readOnly={Status}
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
