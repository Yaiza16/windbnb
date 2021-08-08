import React from 'react'
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";



export const IconStar = () =>{

    return(
        <IconContext.Provider value={{size: "16px", color: "#EB5757"}}>
            <AiFillStar />
        </IconContext.Provider>
    )
}


export const IconSearchWhite = () =>{
    return (
        <IconContext.Provider value={{size: "19px", color: "#F2F2F2"}}>
                    <BiSearchAlt2 />
        </IconContext.Provider>
    )
}


export const IconSearchRed = () =>{
    return (
        <IconContext.Provider value={{size: "19px", color: "#EB5757"}}>
                    <BiSearchAlt2 />
        </IconContext.Provider>
    )
}

export const IconLocation = () =>{
    return(
        <IconContext.Provider value={{size: "19px", color: "#4F4F4F"}}>
                    <MdLocationOn />
        </IconContext.Provider>
    )
}


