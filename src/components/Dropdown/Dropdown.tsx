import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Dropdown.scss';
import { BsCaretDownFill } from "react-icons/bs";


interface DropdownProps {
    Main: string;
    Content: (object)[];
    ClassName?: string;
    ClassNameItem?: string
}
// Size 1 option small (300px)

const Dropdown = (props: any) => {

    const [isActive, setIsActive] = useState(false)



    // let handleGetOption = (value: any) => {
    //     setCheckedOption(value);
    // }


    return (
        <div className={`Dropdown-container${props.Size ? ` ${props.Size}` : ''} ${props.ClassName ? `${props.ClassName}` : ''}`}>
            <div className={`dropdown dropdown-main${isActive ? ` active` : ''}`} onClick={(e) => setIsActive(!isActive)}>
                <p>{props.Selected ? props.Selected : 'Select'}</p> <BsCaretDownFill className='icon' />
            </div>
            {isActive && (<div className={`dropdown-content${props.ClassName ? ` ${props.ClassName}` : ''}`}>
                {
                    props.Content && props.Content.map((value: any, key: number) => {
                        for (const [prop, value] of Object.entries(props.Content[key])) {

                            return (
                                <Link to='/login'>
                                    <div key={key}
                                        className={`dropdown-item ${value}${props.ClassNameItem ? ` ${props.ClassNameItem}` : ''}`}
                                        onClick={(e) => {
                                            props.SetSelected(prop);
                                            setIsActive(false);
                                        }}
                                    >
                                        {prop}
                                    </div>
                                </Link>

                            )
                        }

                    })

                }

            </div>)}
        </div>

    )
}

export default Dropdown
