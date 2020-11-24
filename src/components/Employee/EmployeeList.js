import React, { useContext, useEffect} from "react"
import {EmployeeContext} from "./EmployeeProvider"
import {Employee} from "./Employee"
import {LocationContext} from "../location/LocationProvider"
import "./Employee.css"


export const EmployeeList=()=>{
    const {Employees,getEmployees}=useContext(EmployeeContext)
    const {locations, getLocations}=useContext(LocationContext)
   

    useEffect(()=>{
        console.log("EmployeeList is doing stuff")
        getLocations()
        .then(getEmployees)
    },[])
    
    useEffect(()=>{
        console.log("EmployeeList had a state change")
        console.log(Employees)
    },[Employees])

    return(
        
        <div className="employees">
            {
                Employees.map(singleEmployee=>{
                const clinic=locations.find(singleLocation=>singleLocation.id===singleEmployee.locationId)
                return <Employee key={singleEmployee.id}
                                location={clinic}
                                 employee={singleEmployee}/>
            
            })
            }
        </div>

    )
}