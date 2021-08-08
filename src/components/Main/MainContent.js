import React from 'react'
import Card from './Card'
import './MainContent.scss'

function MainContent({stays}) {
    

    return (
        <div className="main-site">
            <div className="main-site-header">
                <h1>Stays in Finland</h1>
                <p>12+ stays</p>
            </div>
            <div className="main-site-body">
                <div className="cards-container">
                {stays.map(stay => (
                    <Card key={stay.id} stay={stay}/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default MainContent
