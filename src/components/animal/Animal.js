import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"


export const Animal = ({animal, customer, location}) => (
    <section className="animal">
        <h3 className="animal__name">
            <Link to={`/animals/${animal.id}`}>
                { animal.name }
            </Link>
        </h3>
        <div className="animal__breed">{ animal.breed }</div>
    </section>
)