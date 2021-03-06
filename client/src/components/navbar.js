import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="http://www.nmit.ac.in/">Certify | Nmit</a>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                    <small><a className="nav-link" href="#"><span id="account"></span></a></small>
                </li>
            </ul>
        </nav>
    )
} 

export default Navbar;