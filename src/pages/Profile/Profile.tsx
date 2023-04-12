import React from 'react'
import Input from '../../components/Input/Input'
import MenuBar from '../../components/MenuBar/MenuBar'
import Topbar from '../../components/Topbar/Topbar';
import './Profile.scss';
import { AiOutlineCamera } from "react-icons/ai";


let ContentBreadcrumb: (object)[] = [
    {
        'Thông tin cá nhân': 'handle thong tin ca nhan'
    }
]


const Profile = (props: any) => {
    return (
        <div id='Profile-container'>
            <Topbar Content={ContentBreadcrumb} Current='Thông tin cá nhân' />
            <div className="profile-content">
                <div className="content-left">
                    <div className="img" style={{ backgroundImage: `url('../../images/avatar.png')` }}>
                        <span className='camera-icon'> <AiOutlineCamera /></span>
                    </div>
                    <div className="name">Lê Quỳnh Ái Vân</div>
                </div>
                <div className="content-field">
                    <div className="field">
                        <div className="label">Tên người dùng</div>
                        <Input Type='text' Placeholder='Lê Quỳnh Ái Vân' Status={true} />
                    </div>
                    <div className="field">
                        <div className="label">Số điện thoại</div>
                        <Input Type='text' Placeholder='0767375921' Status={true} />
                    </div>
                    <div className="field">
                        <div className="label">Email:</div>
                        <Input Type='text' Placeholder='adminSSO1@domain.com' Status={true} />
                    </div>
                </div>
                <div className="content-field">
                    <div className="field">
                        <div className="label">Tên đăng nhập</div>
                        <Input Type='text' Placeholder='lequynhaivan01' Status={true} />
                    </div>
                    <div className="field">
                        <div className="label">Mật khẩu</div>
                        <Input Type='text' Placeholder='311940211' Status={true} />
                    </div>
                    <div className="field">
                        <div className="label">Vai trò:</div>
                        <Input Type='text' Placeholder='Kế toán' Status={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
