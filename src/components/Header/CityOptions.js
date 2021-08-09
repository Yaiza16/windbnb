import React from 'react'
import { IconLocation } from '../../helpers/Icons'
import './CityOptions.scss'

function CityOptions({cityOptions, updateCityValue}) {
    return (
        <>
            {
                cityOptions.map(city =>(
                    <div key={city.city} className="navbar-option-container" onClick={() => updateCityValue(city)}>
                        <IconLocation />
                        <p className="navbar-option-city">{city.city}, {city.country}</p>

                    </div>
                ))
            }
        </>
    )
}

export default CityOptions
