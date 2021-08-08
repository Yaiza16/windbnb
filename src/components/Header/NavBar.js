import React, {useState, useRef} from 'react';
import './NavBar.scss';
import { IconSearchRed, IconSearchWhite } from '../../helpers/Icons';

function NavBar({isNavbarFocus, setIsNavbarFocus}) {
   const [text, setText] = useState('Helsinki, Finland');
   const navbarRef = useRef()
   const citySearchRef = useRef()

   const openNavbar = (e) =>{
       console.log(e.target)
       if (!isNavbarFocus){
            setIsNavbarFocus(true)
            citySearchRef.current.focus()
       } else{
           if (navbarRef.current === e.target){
            setIsNavbarFocus(false)
           }
       }
   }


    return (
        <div ref={navbarRef} className={isNavbarFocus ? "navbar-container-wrapped navbar-container-wrapped--open" : "navbar-container-wrapped"} onClick={(e) => openNavbar(e)}>
            <div className="navbar-container">
                <div className="navbar-search-container">
                    <div className="navbar-search navbar-search--city">
                        <p className="navbar-search__title">Location</p>
                        <input ref={citySearchRef} className="navbar-search__input navbar-search__input--city" type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                    </div>
                </div>
                <div className="navbar-search-container">
                    <div className="navbar-search">
                        <p className="navbar-search__title">Guest</p>
                        <input className="navbar-search__input navbar-search__input--guest" type="text" placeholder="Add guest" />
                    </div>
                </div>
                <div className="navbar-search-container navbar-search-container--button">
                    <div className="navbar-search navbar-search--button">
                    <button className="navbar-search__input navbar-search__input--button">
                        {isNavbarFocus
                                    ? (<IconSearchWhite />)
                                    : (<IconSearchRed />)}
                        <p className="navbar-search__title navbar-search__title--button">Search</p>
                    </button>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default NavBar
