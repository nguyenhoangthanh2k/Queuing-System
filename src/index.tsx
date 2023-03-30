import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import SetNewPassword from './pages/SetNewPassword/SetNewPassword';
import Profile from './pages/Profile/Profile';

// import Input from './components/Input/Input';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />}></Route>
			<Route path='/login' element={<Login />}></Route>
			<Route path='/resetPassword' element={<ResetPassword />}></Route>
			<Route path='/setNewPassword' element={<SetNewPassword />}></Route>
			<Route path='/profile' element={<Profile />}></Route>
			{/* <Route path='/test' element={<Input Style='icon' PositionIcon='right' FullfillIcon={true} Status='Pressing' Type='password' />}></Route> */}
		</Routes>
	</BrowserRouter>
);

reportWebVitals();
