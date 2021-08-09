import React from 'react'
import './Logo.scss';

function Logo({handleInitialValues}) {
    return (
        <a aria-label="homepage" href="#!" className="logo-container" onClick={() => handleInitialValues()}>
            <img src="assets/images/logo.svg" alt="site-logo" />
        </a>
    )
}

export default Logo
