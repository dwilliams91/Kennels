import React, { useContext, useEffect} from "react"
import {EmployeeContext} from "./EmployeeProvider"
import {Employee} from "./Employee"
import "./Employee.css"

export const EmployeeList=()=>{
    const {Employees,getEmployees}=useContext(EmployeeContext)

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
                Employees.map(taco=><Employee key={taco.id} employee={taco}/>)
            }
        </div>

    )
}