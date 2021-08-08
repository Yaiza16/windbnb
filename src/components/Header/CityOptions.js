import React from 'react'
import { IconLocation } from '../../helpers/Icons'
import './CityOptions.scss'

function CityOptions({stays}) {
    const allCities = stays.map(stay =>(
        `${stay.city}, ${stay.country}`
    ))

    const allCitiesArr = new Set(allCities)
    const result = [...allCitiesArr]

    console.log(result)
    return (
        <>
            {
                result.map(city =>(
                    <div className="navbar-option-container">
                        <IconLocation />
                        <p className="navbar-option-city">{city}</p>

                    </div>
                ))
            }
        </>
    )
}

export default CityOptions
