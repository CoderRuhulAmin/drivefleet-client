import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className='sticky z-50 top-0 bg-white shadow-sm py-5'>
            <Navbar />
        </header>
    );
};

export default Header;