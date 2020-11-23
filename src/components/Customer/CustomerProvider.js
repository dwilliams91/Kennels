import React, { useState} from "react"

// this set the context
export const CustomerContext=React.createContext()


export const CustomerProvider=(props)=>{
    // this is the same as let employees=[]
    // it is setting an empty array
    const [Customers, setCustomer]=useState([])

    const getCustomers=()=>{
        return fetch("http://localhost:8088/customers")
        .then(res=>res.json())
        .then(setCustomer)
    }
    const addCustomer=Customers=>{
        return fetch("http://localhost:8088/employees",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Customers)
        })
        .then(getCustomers)
    }

    return (
        <CustomerContext.Provider value={{
            Customers, addCustomer, getCustomers
        }}>
            {props.children}
        </CustomerContext.Provider>
    )

}
