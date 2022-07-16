import React from 'react';
import CustomLink from './CustomLink';
import './Navbar.css'


const Navbar = () => {

    return (
        <div className='nav' >

            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/all-promos'>All  Promotions</CustomLink>
            <CustomLink to='/add-promo'>Add  Promotion</CustomLink>
            <CustomLink to='/upload'>Upload  Images</CustomLink>



        </div>
    );
};

export default Navbar;






