import React, { useState } from 'react';
import './DeviceManagement.scss';
import Input from '../../components/Input/Input';
import Topbar from '../../components/Topbar/Topbar';
import Dropdown from '../../components/Dropdown/Dropdown';
import { FiSearch } from "react-icons/fi";
import Status from '../../components/Status/Status';
import { IoIosAddCircle } from "react-icons/io";
import ButtonSpecial from '../../components/ButtonSpecial/ButtonSpecial';
import Pagination from '../../components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';

let ContentBreadcrumb: (object)[] = [
    {
        'Thiết bị': 'handle thong tin ca nhan'
    },
    {
        'Danh sách thiết bị': 'handle danh sach thiet bị'
    }
]

let aler = () => {
    console.log('da chay ham');

}

let statusActionDropdown: (object)[] = [
    {
        'Tất cả': aler
    },

    {
        'Hoạt động': aler
    },

    {
        'Ngưng hoạt động': aler
    }
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

function DeviceManagement() {

    const [statusActive, setStatusActive] = useState('Tất cả');
    const [statusConnect, setStatusConnect] = useState('Tất cả');
    const [test, setTest] = useState('ass');

    const NavDeviceManagement = useNavigate();
    ///////////////////////////////////////////////

    return (
        <div className='DeviceManagement-container'>
            <Topbar Content={ContentBreadcrumb} Current='Danh sách thiết bị' />
            <div className="content">
                <div className="title">Danh sách thiết bị</div>
                <div className="table-manage-option">
                    <div className="equip-manage-left-option">
                        <div className="device-manage-field">
                            <div className="device-manage-label">Trạng thái hoạt động</div>
                            <Dropdown Size='small' Selected={statusActive} SetSelected={setStatusActive} Content={statusActionDropdown} />
                        </div>
                        <div className="device-manage-field">
                            <div className="device-manage-label">Trạng thái kết nối</div>
                            <Dropdown Size='small' Selected={statusConnect} SetSelected={setStatusConnect} Content={statusConnecDropdown} />
                        </div>
                    </div>
                    <div className="device-manage-search">
                        <div className="device-manage-field">
                            <div className="device-manage-label">Từ khoá</div>
                            <Input Type='text' ClassName='device-manage-search-input' Placeholder='Nhập từ khóa' Style='icon' PositionIcon='right' IconName={<FiSearch className='equipmeent-manage-search-icon' />} />
                        </div>
                    </div>
                </div>
                <div className="device-manage-main-content">
                    <div className="device-manage-table">
                        <table>
                            <tr>
                                <th className='device-manage-table-field'>Mã thiết bị</th>
                                <th className='device-manage-table-field'>Tên thiết bị</th>
                                <th className='device-manage-table-field'>Địa chỉ IP</th>
                                <th className='device-manage-table-field'>Trạng thái hoạt động</th>
                                <th className='device-manage-table-field'>Trạng thái kết nối</th>
                                <th className='device-manage-table-field'>Dịch vụ sử dụng</th>
                                <th className='device-manage-table-field'></th>
                                <th className='device-manage-table-field'></th>
                            </tr>
                            <tr>
                                <td>KIO_01</td>
                                <td>Kiosk</td>
                                <td>192.168.1.10</td>
                                <td><Status Content='Ngưng hoạt động' Color='red' /></td>
                                <td><Status Content='Mất kết nối' Color='red' /></td>
                                <td>
                                    <div>Khám tim mạch, Khám mắt...</div>
                                    <a href="/">Xem thêm</a>
                                </td>
                                <td><a href="/">Chi tiết</a></td>
                                <td><a href="/">Cập nhật</a></td>
                            </tr>
                            <tr>
                                <td>KIO_01</td>
                                <td>Kiosk</td>
                                <td>192.168.1.10</td>
                                <td><Status Content='Hoạt động' Color='green' /></td>
                                <td><Status Content='Kết nối' Color='green' /></td>
                                <td>
                                    <div>Khám tim mạch, Khám mắt...</div>
                                    <a href="/">Xem thêm</a>
                                </td>
                                <td><a href="/">Chi tiết</a></td>
                                <td><a href="/">Cập nhật</a></td>
                            </tr>
                            <tr>
                                <td>KIO_01</td>
                                <td>Kiosk</td>
                                <td>192.168.1.10</td>
                                <td>Ngưng hoạt động</td>
                                <td>Mất kết nối</td>
                                <td>
                                    <div>Khám tim mạch, Khám mắt...</div>
                                    <a href="/">Xem thêm</a>
                                </td>
                                <td><a href="/">Chi tiết</a></td>
                                <td><a href="/">Cập nhật</a></td>
                            </tr>
                        </table>
                    </div>

                    <div className="equiment-manage-data-option" onClick={() => NavDeviceManagement('/device-add')}>
                        <ButtonSpecial Content='Thêm' Icon={<IoIosAddCircle />} />
                    </div>
                </div>

                <div className="device-manage-pagination">
                    <Pagination SetRecords={setTest} ClassName='test' Data={dummyDataOfPagination} RecordsPerPage={2} />
                </div>
            </div>
        </div>
    )
}

export default DeviceManagement
