import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DeviceAdd.scss';
import Input from '../../components/Input/Input';
import Topbar from '../../components/Topbar/Topbar';
import Dropdown from '../../components/Dropdown/Dropdown';
import { FiSearch } from "react-icons/fi";
import Status from '../../components/Status/Status';
import { IoIosAddCircle } from "react-icons/io";
import ButtonSpecial from '../../components/ButtonSpecial/ButtonSpecial';
import Pagination from '../../components/Pagination/Pagination';
import Button from '../../components/Button/Button';

let ContentBreadcrumb: (object)[] = [
    {
        'Thiết bị': 'handle thong tin ca nhan'
    },
    {
        'Danh sách thiết bị': '/device-management'
    },
    {
        'Thêm thiết bị': 'handle thêm thiet bị'
    }
]

let aler = () => {
    console.log('da chay ham');

}

let statusActionDropdown: (object)[] = [
    {
        'Kiosk': aler
    },

    {
        'Display counter': aler
    },
]

let statusConnecDropdown: (object)[] = [
    {
        'Tất cả': aler
    },

    {
        'Kết nối': aler
    },

    {
        'Mất kết nối': aler
    }
]

let dummyDataOfPagination: any[] = [
    1, 2, 3, 7, 8, 9, 12, 35, 36, 56, 58, 97, 69
]

function DeviceAdd() {
    const Nav = useNavigate()

    const [statusActive, setStatusActive] = useState('Chọn loại thiết bị');
    const [statusConnect, setStatusConnect] = useState('Tất cả');
    const [test, setTest] = useState('ass');
    ///////////////////////////////////////////////

    return (
        <div className='DeviceAdd-container'>
            <Topbar Content={ContentBreadcrumb} Current='Thêm thiết bị' />
            <div className="title">Quản lý thiết bị</div>
            <div className="device-add-content">
                <div className="device-add-title">Thông tin thiết bị</div>

                <div className="device-add-content-top">
                    <div className="device-add-content-field">
                        <div className="field">
                            <div className="label">Mã thiết bị: <span style={{ color: '#FF4747' }}>*</span></div>
                            <Input ClassName='device-add-input' Type='text' Placeholder='Nhập mã thiết bị' Status={false} />
                        </div>
                        <div className="field">
                            <div className="label">Tên thiết bị: <span style={{ color: '#FF4747' }}>*</span></div>
                            <Input ClassName='device-add-input' Type='text' Placeholder='Nhập tên thiết bị' Status={false} />
                        </div>
                        <div className="field">
                            <div className="label">Địa chỉ IP: <span style={{ color: '#FF4747' }}>*</span></div>
                            <Input ClassName='device-add-input' Type='text' Placeholder='Nhập địa chỉ IP' Status={false} />
                        </div>
                    </div>
                    <div className="device-add-content-field">
                        <div className="field">
                            <div className="label">Loại thiết bị: <span style={{ color: '#FF4747' }}>*</span></div>
                            <Dropdown
                                ClassName='device-add-input'
                                ClassNameItem='device-add-dropdown-item'
                                Size='small'
                                Selected={statusActive}
                                SetSelected={setStatusActive}
                                Content={statusActionDropdown} />
                        </div>
                        <div className="field">
                            <div className="label">Tên đăng nhập: <span style={{ color: '#FF4747' }}>*</span></div>
                            <Input ClassName='device-add-input' Type='text' Placeholder='Nhập tài khoản' Status={false} />
                        </div>
                        <div className="field">
                            <div className="label">Mật khẩu: <span style={{ color: '#FF4747' }}>*</span></div>
                            <Input ClassName='device-add-input' Type='text' Placeholder='Nhập mật khẩu' Status={false} />
                        </div>
                    </div>
                </div>

                <div className="device-add-content-field special">
                    <div className="field">
                        <div className="label">Dịch vụ sử dụng: <span style={{ color: '#FF4747' }}>*</span></div>
                        <Input ClassName='device-add-input-fullsize' Type='text' Placeholder='Nhập dịch vụ sử dụng' Status={false} />
                    </div>
                </div>

                <div className="device-add-note">
                    <span style={{ color: '#FF4747' }}>*</span> Là trường thông tin bắt buộc
                </div>

            </div>

            <div className="device-add-confirm">
                <div className="cancel" onClick={() => Nav('/device-management')}>
                    <Button Content='Hủy bỏ' Skin='outline' Type='hover' Size='medium' />
                </div>
                <div>
                    <Button Content='Thêm thiết bị' Skin='fill' Type='pressing' Size='medium' />
                </div>
            </div>
        </div>
    )
}

export default DeviceAdd
