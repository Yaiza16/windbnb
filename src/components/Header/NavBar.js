import React, {useState, useRef} from 'react';
import './NavBar.scss';
import { IconContext } from "react-icons";
import { BiSearchAlt2 } from "react-icons/bi";

function NavBar() {
   const [isNavbarFocus, setIsNavbarFocus] = useState(false);
   const [text, setText] = useState('Helsinki, Finland');
   const navbarRef = useRef()

   const openNavbar = (e) =>{
       console.log(e.target)
       if (!isNavbarFocus){
           setIsNavbarFocus(true)
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
                        <input className="navbar-search__input navbar-search__input--city" type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                    </div>
                </div>
                <div className="navbar-search-container">
                    <div className="navbar-search">
                        <p className="navbar-search__title">Guest</p>
                        <input className="navbar-search__input navbar-search__input--guest" type="text" placeholder="Add guest" />
                    </div>
                </div>
                <div className="navbar-search-container">
                    <div className="navbar-search navbar-search--button">
                    <button className="navbar-search__input navbar-search__input--button">
                        <IconContext.Provider value={{size: "19px", color: "#EB5757"}}>
                            <BiSearchAlt2 />
                        </IconContext.Provider>
                        <p className="navbar-search__title navbar-search__title--button">Search</p>
                    </button>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default NavBar