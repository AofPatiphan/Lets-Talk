import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderMain from '../header/HeaderMain';
import './mainlayout.css';

function MainLayout() {
    return (
        <div>
            <HeaderMain />
            <Outlet />
        </div>
    );
}

export default MainLayout;
