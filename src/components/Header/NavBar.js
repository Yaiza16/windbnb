import React, { useRef} from 'react';
import './NavBar.scss';
import { IconSearchRed, IconSearchWhite } from '../../helpers/Icons';
import CityOptions from './CityOptions';
import GuestOptions from './GuestOptions';

function NavBar({isNavbarFocus, setIsNavbarFocus, stays, cityOptions, text, updateCityValue, adultsCounter, setAdultsCounter, childrenCounter, setChildrenCounter, setIsCitySearchFocus, isCitySearchFocus, setIsGuestSearchFocus, isGuestSearchFocus, updateFilteredStays}) {
//    const [text, setText] = useState('Helsinki, Finland');
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
            setIsCitySearchFocus(false)
            setIsGuestSearchFocus(false)
           }
       }
   }


   const handleCitySearchFocus = () => {
    setIsCitySearchFocus(true)
    setIsGuestSearchFocus(false)
   }

   const handleGuestSearchFocus = () => {
    setIsGuestSearchFocus(true)
    setIsCitySearchFocus(false)
   }

    return (
        <div ref={navbarRef} className={isNavbarFocus ? "navbar-container-wrapped navbar-container-wrapped--open" : "navbar-container-wrapped"} onClick={(e) => openNavbar(e)}>
            <div className="navbar-container">
                <div className="navbar-search-container">
                    <div className={isCitySearchFocus ? "navbar-search navbar-search--focus navbar-search--city" : "navbar-search navbar-search--city"}>
                        <p className="navbar-search__title">Location</p>
                        <input ref={citySearchRef} className="navbar-search__input navbar-search__input--city" type="text" readOnly value={`${text.city}, ${text.country}`} onClick={() => handleCitySearchFocus()}/>
                    </div>
                    <div className="navbar-search-options">
                        <CityOptions cityOptions={cityOptions} updateCityValue={updateCityValue}/>
                    </div>
                </div>
                <div className="navbar-search-container"> 
                    <div className={isGuestSearchFocus ? "navbar-search navbar-search--focus" : "navbar-search"}>
                        <p className="navbar-search__title">Guest</p>
                        <input className="navbar-search__input navbar-search__input--guest" type="text" readOnly placeholder="Add guest" value={adultsCounter + childrenCounter > 0 ? (adultsCounter + childrenCounter > 1 ? `${adultsCounter + childrenCounter} guests` : `${adultsCounter + childrenCounter} guest`) : ""} onClick={() => handleGuestSearchFocus()}/>
                    </div>
                    <div className="navbar-search-options">
                        <GuestOptions adultsCounter={adultsCounter} setAdultsCounter={setAdultsCounter} childrenCounter={childrenCounter} setChildrenCounter={setChildrenCounter}/>
                    </div>
                </div>
                <div className="navbar-search-container navbar-search-container--button">
                    <div className="navbar-search navbar-search--button">
                    <button className="navbar-search__input navbar-search__input--button" onClick={() => updateFilteredStays()}>
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
