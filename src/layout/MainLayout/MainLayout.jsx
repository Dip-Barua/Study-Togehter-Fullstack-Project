import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='h-24'></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;