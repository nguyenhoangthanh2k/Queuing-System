import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import MenuBar from './components/MenuBar/MenuBar';
import Topbar from './components/Topbar/Topbar';
function App(props: any) {
    return (
        <div className='App-container'>
            <MenuBar />
            <div className="right-content">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
