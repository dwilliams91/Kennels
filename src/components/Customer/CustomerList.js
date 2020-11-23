import React,{useContext, useEffect} from "react"
import { CustomerContext } from "./CustomerProvider"
import {Customer} from "./Customer"
import "./Customer.css"
// import {AnimalProvider} from "../animal/AnimalProvider"

export const CustomerList=()=>{
    const {Customers, getCustomers}=useContext(CustomerContext)

    useEffect(()=>{
        console.log("animalList is doing stuff")
        getCustomers()
    },[])

    useEffect(()=>{
        console.log("AnimalList had a state change")
        console.log(Customers)
    },[Customers])
    return(
        <div className="customers">
            {
                Customers.map(singleCustomers=><Customer key={singleCustomers.id} customer={singleCustomers}/>)
            }

        </div>

    )


}