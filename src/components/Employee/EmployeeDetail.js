import React, { useState, useEffect, useContext } from "react"
import { AnimalContext } from "../animal/AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { EmployeeList } from "./EmployeeList"


export const EmployeeDetail = (props) => {
    const { Animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { Employees, getEmployees, fireEmployee } = useContext(EmployeeContext)

    const [animal, setAnimal] = useState({})
    const [employee, setEmployee] = useState({})
    const [location, setLocation] = useState({})

    useEffect(() => {
        getEmployees()
            .then(getAnimals)
            .then(getLocations)
    }, [])

    useEffect(() => {
        const animal = Animals.find(a => a.id === employee.animalId) || {}
        setAnimal(animal)
    }, [Animals])
    // we find the employee who's id matches the URL. 
    useEffect(() => {
        const employee = Employees.find(e => e.id === parseInt(props.match.params.employeeId)) || {}
        setEmployee(employee)
    }, [Employees])

    useEffect(() => {
        const location = locations.find(l => l.id === employee.locationId) || {}
        setLocation(location)
    }, [locations])

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div>Currently working at { location.name }</div>
            <div>
                {
                (employee.animalId === null)
                    ? "Not assigned to an animal"
                    : `Currently taking care of ${animal.name}`
                }
            </div>
            <button onClick={() => {
                props.history.push(`/employees/edit/${employee.id}`)
            }}>Edit</button>
            <button onClick={()=>{
                console.log("you clicked", employee.name)
                fireEmployee(employee).then(()=>{
                    props.history.push("/employees")
                }
                )
            }}>Let Employee Go</button>
        </section>
    )
}