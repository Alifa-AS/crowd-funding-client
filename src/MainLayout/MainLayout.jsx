import React from 'react';
import Navbar from '../Components/Layouts/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Layouts/Footer';
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div className='container mx-auto'>
             <Toaster position="top-right" reverseOrder={false} />
            <Navbar />
            <main className='min-h-[calc(100vh-300px)]'>
                <Outlet></Outlet>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;