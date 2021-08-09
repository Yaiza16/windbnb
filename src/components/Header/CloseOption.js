import React from 'react'
import { IconClose } from '../../helpers/Icons';
import './CloseOption.scss'

function CloseOption({isNavbarFocus, setIsNavbarFocus}) {
    return (
        <div aria-label="close" className="icon-close-container" onClick={() => setIsNavbarFocus(false)}>
            {isNavbarFocus && <IconClose />}
        </div>
    )
}

export default CloseOption
