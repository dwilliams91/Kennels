import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import { Link } from "react-router-dom"

import { LocationContext } from "../location/LocationProvider"
import "./Employee.css"


export const EmployeeList = (props) => {
    const { Employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)


    useEffect(() => {
        console.log("EmployeeList is doing stuff")
        getLocations()
            .then(getEmployees)
    }, [])

    useEffect(() => {
        console.log("EmployeeList had a state change")
        console.log(Employees)
    }, [Employees])

    return (
        <>
        <h1>Employees</h1>
        <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
        <div className="employees">
            <article className="employeeList">
                {/* create a link with the id of the employee */}
                {
                    Employees.map(employee => {
                        return <Link key={employee.id} className="employee" to={`/employees/${employee.id}`}>
                            <h3>{employee.name}</h3>
                        </Link>
                    })
                }
            </article>
        </div>
        </>

    )
}