import {Link} from 'react-router-dom';
import React from 'react';
import './Nav.css';

function Nav() {
    return(
        <div>
            <div className='navbar'>
                <Link className="NavbarMenu" to={'/Notice'}>NOTICE</Link>
                <Link className="NavbarMenu" to={'/Service'}>SERVICES</Link>
                <Link className="NavbarMenu" to={'/About'}>ABOUT</Link>
                <Link className="NavbarMenu" to={'/'}>HOME</Link>
            </div>
        </div>
    )
}

export default Nav;