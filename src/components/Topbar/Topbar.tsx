import React from 'react'
import './Topbar.scss';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Bell from '../Bell/Bell';

interface TopbarProp {
    Content: (object)[];
    Current: string;
}

function Topbar(props: TopbarProp) {
    return (
        <div className='Topbar-container'>
            <div className="left-content">
                <Breadcrumb Content={props.Content} Current={props.Current} />
            </div>
            <div className="right-content">
                <Bell />
                <div className="content-user">
                    <div className="img" style={{ backgroundImage: `url("../../images/avatar.png")` }}></div>
                    <div className="content-infor">
                        <div className="top-content">Xin chào</div>
                        <div className="bottom-content">Lê Quỳnh Ái Vân</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
