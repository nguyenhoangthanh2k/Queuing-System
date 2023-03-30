import React, { useState } from 'react';
import './SetNewPassword.scss'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input';

const SetNewPassword = () => {


    return (
        <div className='SetNewPassword-container'>
            <div className="login">
                <div className="logo"></div>

                <div id='form-login'>
                    <p className="title">Đặt lại mật khẩu</p>
                    <div className="form-field password">
                        <label htmlFor="password">Mật khẩu</label>
                        {/* <div className="input-password">
                            <input type={isShowPassword ? 'text' : 'password'}
                                id='password' />
                            <span onClick={handleShowHidePassword} className='icon-eye-slash'>
                                {isShowPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </span>
                        </div> */}
                        <Input Type='password' Status='Hover' Id='password' Style='Icon' PositionIcon='right' />
                    </div>
                    <div className="form-field confirmPassword">
                        <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
                        {/* <div className="input-password">
                            <input type={isShowPassword ? 'text' : 'password'}
                                id='confirmPassword' />
                            <span onClick={handleShowHidePassword} className='icon-eye-slash'>
                                {isShowPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </span>
                        </div> */}
                        <Input Type='password' Status='Hover' Id='confirmPassword' Style='Icon' PositionIcon='right' />
                    </div>
                    <div className='confirm'>
                        <Button content="Đăng nhập" className="btn-login" />
                    </div>
                </div>


            </div>

            <div className="banner">
                <div className="img"></div>
            </div>
        </div>
    )
}

export default SetNewPassword
