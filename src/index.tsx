import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import SetNewPassword from './pages/SetNewPassword/SetNewPassword';
import Profile from './pages/Profile/Profile';

import Dropdown from './components/Dropdown/Dropdown';
import Status from './components/Status/Status';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Pagination from './components/Pagination/Pagination';
import DeviceAdd from './pages/Device/DeviceAdd';
import DeviceManagement from './pages/Device/DeviceManagement';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);



let dummyDataOfDropdown: (object)[] = [
	{
		home: 'handle home'
	},

	{
		about: 'handle about'
	},

	{
		contact: 'handle contact'
	}
]

let dummyDataOfBreadcrumb: (object)[] = [
	{
		page1: 'handle page1'
	},

	{
		page2: 'handle page2'
	},

	{
		page3: 'handle page3'
	}
]


root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />}>
				<Route path='/profile' element={<Profile />}></Route>
				<Route path='/device-management' element={<DeviceManagement />}></Route>
				<Route path='/device-add' element={<DeviceAdd />}></Route>
			</Route>
			<Route path='/login' element={<Login />}></Route>
			<Route path='/resetPassword' element={<ResetPassword />}></Route>
			<Route path='/setNewPassword' element={<SetNewPassword />}></Route>
			<Route path='/test' element={<SetNewPassword />}></Route>

		</Routes>
	</BrowserRouter>
);

reportWebVitals();
