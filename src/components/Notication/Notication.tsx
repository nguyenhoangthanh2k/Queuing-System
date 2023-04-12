import React from 'react';
import './Notication.scss'
import NotiCard from '../Card/NotiCard';

function Notication() {
    return (
        <div className='Notication-container'>
            <div className="notication-title">Thông báo</div>
            <div className="notication-content">
                <NotiCard />
                <NotiCard />
                <NotiCard />
            </div>
        </div>
    )
}

export default Notication
