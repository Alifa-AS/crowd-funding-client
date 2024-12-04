import React from 'react';
import Navbar from '../Components/Layouts/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Layouts/Footer';


const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar />
            <main>
                <Outlet></Outlet>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;