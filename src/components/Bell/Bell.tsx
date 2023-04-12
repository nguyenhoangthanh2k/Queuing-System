import React, { useState } from 'react';
import './Bell.scss';
import { TbBellFilled } from "react-icons/tb";
import Notication from '../Notication/Notication';



function Bell() {
    const [isBellAction, setIsBellAction] = useState(false);

    let handleClickBell = () => {
        setIsBellAction(!isBellAction);
    }
    return (
        <div onClick={handleClickBell} className={`icon-bell${isBellAction ? ` bell-action` : ''}`}>
            <TbBellFilled />
            {isBellAction ? <Notication /> : ''}
        </div>
    )
}

export default Bell
