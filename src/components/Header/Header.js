import React from 'react'
import './Header.scss';
import Logo from './Logo'
import NavBar from './NavBar'
import CloseOption from './CloseOption';

function Header({isNavbarFocus, setIsNavbarFocus, stays, cityOptions, text, updateCityValue, adultsCounter, setAdultsCounter, childrenCounter, setChildrenCounter, setIsCitySearchFocus, isCitySearchFocus, setIsGuestSearchFocus, isGuestSearchFocus, updateFilteredStays, handleInitialValues}) {
    
    return (
        <header className="header">
            <Logo handleInitialValues={handleInitialValues}/>
            <NavBar isNavbarFocus={isNavbarFocus} setIsNavbarFocus={setIsNavbarFocus} stays={stays} cityOptions={cityOptions} text={text} updateCityValue={updateCityValue} adultsCounter={adultsCounter} setAdultsCounter={setAdultsCounter} childrenCounter={childrenCounter} setChildrenCounter={setChildrenCounter} setIsCitySearchFocus={setIsCitySearchFocus} isCitySearchFocus={isCitySearchFocus} setIsGuestSearchFocus={setIsGuestSearchFocus} isGuestSearchFocus={isGuestSearchFocus} updateFilteredStays={updateFilteredStays}/>
            <CloseOption isNavbarFocus={isNavbarFocus} setIsNavbarFocus={setIsNavbarFocus}/>
        </header>
    )
}

export default Header
