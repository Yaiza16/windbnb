import React from 'react'
import './Header.scss';
import Logo from './Logo'
import NavBar from './NavBar'

function Header({isNavbarFocus, setIsNavbarFocus, stays}) {
    return (
        <header className="header">
            <Logo />
            <NavBar isNavbarFocus={isNavbarFocus} setIsNavbarFocus={setIsNavbarFocus} stays={stays}/>
        </header>
    )
}

export default Header
