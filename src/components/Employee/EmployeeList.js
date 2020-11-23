import React, { useContext, useEffect} from "react"
import {EmployeeContext} from "./EmployeeProvider"
import {Employee} from "./Employee"
import "./Employee.css"
// import { LocationContext } from "../location/LocationProvider"


export const EmployeeList=()=>{
    const {Employees,getEmployees}=useContext(EmployeeContext)
    // const {locations}=useContext(LocationContext)
    // const { locations, getLocations } = useContext(LocationContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    // useEffect(() => {
    //     console.log("LocationList: Initial render before data")
    //     getLocations()
    // }, [])

    // /*
    //     This effect is solely for learning purposes. The effect
    //     it is responding to is that the location state changed.
    // */
    // useEffect(() => {
    //     console.log("LocationList: Location state changed")
    //     console.log(locations)
    // }, [locations])


    useEffect(()=>{
        console.log("EmployeeList is doing stuff")
        getEmployees()
    },[])
    
    useEffect(()=>{
        console.log("EmployeeList had a state change")
        console.log(Employees)
    },[Employees])
    return(
        
        <div className="employees">
            {
                Employees.map(singleEmployee=>{
                // const relatedStore=allStores.find(singleStore=>singleStore.Id===singleEmployee.locationId)
                return <Employee key={singleEmployee.id} employee={singleEmployee}/>
            
            })
            }
        </div>

    )
}