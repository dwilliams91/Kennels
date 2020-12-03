import React, { useContext, useRef, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import "./Employee.css"

export const EmployeeForm = (props) => {
    const { addEmployee, Employees, getEmployees, updateEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    const {Animals, getAnimals}=useContext(AnimalContext)
     
    const [Employee, setEmployee]=useState({})
    /*{}
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
    const name = useRef(null)
    const location = useRef(null)
    const animal = useRef(null)

    const editMode=props.match.params.hasOwnProperty("employeeId")
    console.log("edit mode", editMode)
    /*
        Get animal state and location state on initialization.
    */
   const handleControlledInputChange = (event) => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const newEmployee = Object.assign({}, Employee)
    // console.log("newAnimal",newAnimal)
    newEmployee[event.target.name] = event.target.value
    setEmployee(newEmployee)
}

   const getEmployeeInEditMode=()=>{
       if (editMode){
           const employeeId=parseInt(props.match.params.employeeId)

           const selectedEmployee=Employees.find(a=>a.id===employeeId) || {}
           setEmployee(selectedEmployee)
       }
   }
    useEffect(() => {
       getAnimals().then(getLocations)
       getEmployees()
    }, [])

    useEffect(()=>{
        getEmployeeInEditMode()
    },[Employees])

    const constructNewEmployee = () => {
        /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        const locationId = parseInt(location.current.value)
        const animalId = parseInt(animal.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            if(editMode) {
                updateEmployee({
                id: Employee.id,
                name: Employee.name,
                locationId,
                animalId}
                )
            } else
            addEmployee({
                name: name.current.value,
                locationId,
                animalId
            })
            .then(() => props.history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Employee name"
                        defaultValue={Employee.name}
                        ref={name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Caretaker for: </label>
                    <select defaultValue="" name="animal" ref={animal} id="employeeAnimal" className="form-control" >
                        <option value="0">Select an animal</option>
                        {Animals.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewEmployee()
                }}
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}