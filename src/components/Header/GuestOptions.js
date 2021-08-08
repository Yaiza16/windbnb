import React from 'react'
import './GuestOptions.scss'

function GuestOptions({adultsCounter, setAdultsCounter, childrenCounter, setChildrenCounter}) {
    return (
        <>
            <div className="guest-options-item">
                <p className="guest-title">Adults</p>
                <p className="guest-desc">Ages 13 or above</p>
                <div className="counter-container">
                    <button className="button-item" onClick={() => adultsCounter > 0 && setAdultsCounter(adultsCounter - 1)}>-</button>
                    <p className="counter-item">{adultsCounter}</p>
                    <button className="button-item" onClick={() => setAdultsCounter(adultsCounter +1)}>+</button>
                </div>
            </div>

            <div className="guest-options-item">
                <p className="guest-title">Children</p>
                <p className="guest-desc">Ages 2 - 12 </p>
                <div className="counter-container">
                    <button className="button-item" onClick={() => childrenCounter > 0 && setChildrenCounter(childrenCounter - 1)}>-</button>
                    <p className="counter-item">{childrenCounter}</p>
                    <button className="button-item" onClick={() => setChildrenCounter(childrenCounter +1)}>+</button>
                </div>
            </div>
        </>
    )
}

export default GuestOptions
