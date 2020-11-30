import React from "react"
import { Link } from "react-router-dom"

import "./Locations.css"

export const Location = ({ location }) => (
    
    <section className="location">
        <Link className="card-link"
            to={{
                pathname: `/locations/${location.id}`,
                state: { chosenLocation: location }
            }}>
            <h2 className="card-title">{location.name}</h2>
        </Link>
        <address className="location__address">{location.address}</address>
    </section>
)