import React from 'react'
import './MenuBar.scss';
import { MdOutlineDashboard } from "react-icons/md";

const MenuBar = () => {
    return (
        <div className='Menubar-container'>
            <div className="logo"></div>
            <div className="menu">
                <ol>
                    <a href='/'><li className='action'><MdOutlineDashboard className='icon menubar-icon' />Dashboard</li></a>
                    <li><MdOutlineDashboard className='icon menubar-icon' />Thiết bị</li>
                    <li><MdOutlineDashboard className='icon menubar-icon' />Dịch vụ</li>
                    <li><MdOutlineDashboard className='icon menubar-icon' />Cấp số</li>
                    <li><MdOutlineDashboard className='icon menubar-icon' />Báo cáo</li>
                    <li><MdOutlineDashboard className='icon menubar-icon' />Cài đặt hệ thống</li>
                </ol>
            </div>
            <div className="logout"><MdOutlineDashboard className='icon' />Đăng xuất</div>
        </div>
    )
}

export default MenuBar
