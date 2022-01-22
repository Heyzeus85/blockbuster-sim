import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import './App.css';

// Much of this functionality was adapted with gratitude from Sean Dever: https://sdever.medium.com/about
const Header = () => {
    // Handles the mobile menu options
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className='header'>
            <div className='logo-nav'>
                <div className='logo-container'>
                    <Link className='logo' to='/'>BLOCKBUSTER SIM</Link>
                </div>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}><Link to='/onedayrentals'>1-Day Rentals</Link></li>
                    <li className="option" onClick={closeMobileMenu}><Link to='/twodayrentals'>2-Day Rentals</Link></li>
                    <li className="option" onClick={closeMobileMenu}><Link to='/threedayrentals'>3-Day Rentals</Link></li>
                    <li className="option" onClick={closeMobileMenu}><Link to='/'><FiShoppingCart className='cart' /></Link></li>
                </ul>
                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (<GrClose className="menu-icon" />) : (<HiMenu className="menu-icon" />)}
                </div>
            </div>
        </div>
    )
}

export default Header
