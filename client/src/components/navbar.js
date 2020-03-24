import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="http://www.nmit.ac.in/">Certify | Nmit</a>
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap d-none d-sm-none d-sm-block">
                    <small><a class="nav-link" href="#"><span id="account"></span></a></small>
                </li>
            </ul>
        </nav>
    )
} 

export default Navbar;