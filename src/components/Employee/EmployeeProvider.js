import React, { useState} from "react"

// this set the context
export const EmployeeContext=React.createContext()


export const EmployeeProvider=(props)=>{
    // this is the same as let employees=[]
    // it is setting an empty array
    const [Employees, setEmployees]=useState([])

    const getEmployees=()=>{
        return fetch("http://localhost:8088/employees")
        .then(res=>res.json())
        .then(setEmployees)
    }
    const addEmployee=employee=>{
        return fetch("http://localhost:8088/employees",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        .then(getEmployees)
    }
    const updateEmployee = employee => {
        return fetch(`http://localhost:8088/employees/${employee.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
            .then(getEmployees)
    }
    return (
        <EmployeeContext.Provider value={{
           Employees, addEmployee, getEmployees, updateEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )

}
