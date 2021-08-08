import React from 'react'
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";

const IconStar = () =>{

    return(
        <IconContext.Provider value={{size: "16px", color: "#EB5757"}}>
            <AiFillStar />
        </IconContext.Provider>
    )
}

export default IconStar
