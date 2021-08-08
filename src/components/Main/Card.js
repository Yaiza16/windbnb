import React from 'react'
import {IconStar} from '../../helpers/Icons'
import './Card.scss'

function Card({stay}) {
    return (
        <div className="card">
            <div className="photo-container">
                <a href="!#" className="card-photo-link"><img className="card-photo" src={stay.photo} alt="stay" /></a>
            </div>
            <div className="card-info">
                <div className="card-info-data">
                    <div className="card-info-desc">
                        {stay.superHost && <p className="card-info-host">Super host</p>}
                        <p className="card-info-type">{stay.type}{stay.beds && (`.  ${stay.beds} beds`)}</p>
                    </div>
                    <p className="card-info-rating">
                            <IconStar />
                          {stay.rating}</p>
                </div>
                <h3 className="card-info-title">{stay.title}</h3>
            </div>
            
        </div>
    )
}

export default Card
