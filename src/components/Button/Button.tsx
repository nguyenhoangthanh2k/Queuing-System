import React from 'react';

import './Button.scss';
import { IoClose } from "react-icons/io5";


interface buttonProps {
    Content: string;
    ClassName?: string;
    Type?: string;
    Icon?: string;
    Size?: string;
    Style?: string;
    Skin?: string;
    IconContent?: any;
}

// Type: 4 option {disable (defaut), enable, hover, pressing}
// Size: 3 option {small (defaut), medium, large}
// Style: 2 option {normal (defaut), tag}
// Skin: 3 option {nofill (defaut), outline, fill}
// Icon: 3 option {no (defaut), with, only}
// IconContent :2 option {'+' (defaut), đối tượng icon}


function Button(props: buttonProps) {
    let Type = props.Type ? props.Type : 'disable';
    let Size = props.Size ? props.Size : 'small';
    let Style = props.Style ? props.Style : 'normal';
    let Skin = props.Skin ? props.Skin : 'nofill';
    let Icon = props.Icon ? props.Icon : 'no';

    let isDisable = false;
    if (Type === 'disable') {
        isDisable = true;
    }

    if (Icon === 'with') {
        return (
            <button className={`button ${Size} ${Type} ${Style} ${Skin} ${props.ClassName ? ` ${props.ClassName}` : ''}`}
                disabled={isDisable}
            >
                {props.IconContent ? props.IconContent : '+'}
                {props.Content ? props.Content : 'button'}
            </button>
        )
    }

    if (Icon === 'only') {
        return (
            <button className={`button only ${Size} ${Type} ${Style} ${Skin} ${props.ClassName ? ` ${props.ClassName}` : ''}`}
                disabled={isDisable}
            >
                {props.IconContent ? props.IconContent : '+'}
            </button>
        )
    }

    if (Style === 'tag') {
        return (
            <button className={`button tag ${Size} ${Type} ${Style} ${Skin} ${props.ClassName ? ` ${props.ClassName}` : ''}`}
                disabled={isDisable}
            >
                {props.Content ? props.Content : 'button'}
                {props.IconContent ? props.IconContent : <IoClose />}
            </button>
        )
    }

    // defaut
    return (
        <button className={`button ${Size} ${Type} ${Style} ${Skin} ${props.ClassName ? ` ${props.ClassName}` : ''}`}
            disabled={isDisable}
        >
            {props.Content ? props.Content : 'button'}
        </button>
    )
}

export default Button
