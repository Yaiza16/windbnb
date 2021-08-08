import React from 'react'
import Card from './Card'
import Loading from './Loading'
import './MainContent.scss'

function MainContent({stays, loading}) {
    

    return (
        <div className="main-site">
            <div className="main-site-header">
                <h1>Stays in Finland</h1>
                <p>{stays.length >12 ? "12+ stays" : `${stays.length} stays`}</p>
            </div>
            <div className="main-site-body">
                {stays.length > 0
                                ? (<div className="cards-container">
                                {loading 
                                        ? <Loading /> 
                                        : (stays.map(stay => (
                                            <Card key={stay.id} stay={stay}/>
                                        )))}
                                </div>)
                                : <i className="no-data">No data found</i>}
            </div>
        </div>
    )
}

export default MainContent
