import React, { useState } from 'react';
import './Login.scss';
import Button from '../../components/Button/Button';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Input from '../../components/Input/Input';


function Login() {


    const [isStatusLogin, setIsStatusLogin] = useState(true);
    const [isActionInput, setIsActionInput] = useState('action');


    return (
        <div className='Login-container'>
            <div className="login">
                <div className="logo"></div>

                <div id='form-login'>
                    <div className="form-field username">
                        <label htmlFor="username">Tên đăng nhập*</label>
                        <Input Type='text' Id='username' ClassName={isActionInput ? isActionInput : ''} />

                        {/* <input type="text" id='username' className={isActionInput ? isActionInput : ''} /> */}
                    </div>

                    <div className="form-field password">
                        <label htmlFor="password">Mật khẩu*</label>

                        <Input Id='password' Type='password' Style='icon' PositionIcon='right'
                            ClassName={isActionInput ? isActionInput : ''}
                        />

                    </div>
                    {
                        isStatusLogin ? <>
                            <span className='forget-password'>Quên mật khẩu?</span>

                            <div className='confirm'>
                                <Button Content="Đăng nhập" Size='small' Type='hover' Skin='fill' ClassName="btn-login" />
                            </div>
                        </> : <>
                            <p className='alert-confirm'><AiOutlineExclamationCircle className='icon-infor' />Sai mật khẩu hoặc tên đăng nhập</p>

                            <div className='confirm-fail'>
                                <Button Content="Đăng nhập" Size='small' Type='hover' Skin='fill' ClassName="btn-login" />
                                <span className='forget-password'>Quên mật khẩu?</span>
                            </div>
                        </>
                    }

                </div>
            </div>

            <div className="banner">
                <div className="img"></div>
                <div className="content">
                    <div className="content-top">
                        <p>Hệ thống</p>
                    </div>
                    <div className="content-bot">
                        <p>QUẢN LÝ XẾP HÀNG</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
