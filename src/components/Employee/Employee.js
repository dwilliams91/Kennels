import React from "react"
import { LocationProvider } from "../location/LocationProvider"
import "./Employee.css"

export const Employee = ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <address className="employee__location">{employee.locationId}</address>
    </section>
)




