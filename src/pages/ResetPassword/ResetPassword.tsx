import React from 'react'
import './ResetPassword.scss'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

const ResetPassword = () => {
    return (
        <div className='ResetPassword-container'>
            <div className="login">
                <div className="logo"></div>

                <div id='form-login'>
                    <p className="title">Đặt lại mật khẩu</p>
                    <div className="form-field email">
                        <label htmlFor="email">Vui lòng nhập email để đặt lại mật khẩu của bạn *</label>
                        <Input Type='email' Id='email' />
                    </div>
                    <div className='confirm'>
                        <Button Content="Hủy" Size='small' Type='hover' Skin='outline' ClassName='btn' />
                        <Button Content="Tiếp tục" Size='small' Type='hover' Skin='fill' ClassName='btn' />
                    </div>
                </div>


            </div>

            <div className="banner">
                <div className="img"></div>
            </div>
        </div>
    )
}

export default ResetPassword
