import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { IoIosSearch } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

const Header: React.FC = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img src="/assets/logo.png" alt="Your Logo" height="40" />
                </Link>
                {/* Icons (Search and Logout) */}
                <div className="ms-auto">
                    <IconContext.Provider value={{ color: 'black', size: '30px' }}>
                        {/* Search Icon */}
                        <Link to="/">
                            <IoIosSearch />
                        </Link>
                        {/* Logout Icon */}
                        <Link to="/">
                            <IoLogOutOutline className="ms-3" />
                        </Link>
                    </IconContext.Provider>
                </div>
            </nav>
        </div>
    );
};

export default Header;