import React from 'react'
import './Header.scss';
import Logo from './Logo'
import NavBar from './NavBar'

function Header({isNavbarFocus, setIsNavbarFocus, stays, cityOptions, text, updateCityValue, adultsCounter, setAdultsCounter, childrenCounter, setChildrenCounter}) {
    return (
        <header className="header">
            <Logo />
            <NavBar isNavbarFocus={isNavbarFocus} setIsNavbarFocus={setIsNavbarFocus} stays={stays} cityOptions={cityOptions} text={text} updateCityValue={updateCityValue} adultsCounter={adultsCounter} setAdultsCounter={setAdultsCounter} childrenCounter={childrenCounter} setChildrenCounter={setChildrenCounter}/>
        </header>
    )
}

export default Header
