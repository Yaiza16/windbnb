import React from 'react'
import './Header.scss';
import Logo from './Logo'
import NavBar from './NavBar'

function Header({isNavbarFocus, setIsNavbarFocus, stays, cityOptions, text, updateCityValue}) {
    return (
        <header className="header">
            <Logo />
            <NavBar isNavbarFocus={isNavbarFocus} setIsNavbarFocus={setIsNavbarFocus} stays={stays} cityOptions={cityOptions} text={text} updateCityValue={updateCityValue}/>
        </header>
    )
}

export default Header
