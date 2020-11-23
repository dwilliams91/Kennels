import React from "react"
import { LocationProvider } from "./location/LocationProvider"
import "./Kennel.css"
import { LocationList } from "./location/LocationList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./Customer/CustomerProvider"
import { CustomerList } from "./Customer/CustomerList"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
        <h2>Employees</h2>
        <EmployeeProvider>
            {/* <LocationProvider> */}
                <EmployeeList />
            {/* </LocationProvider> */}
        </EmployeeProvider>
        <h2>Animals</h2>
        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>
        <h2>Customers</h2>
        <CustomerProvider>
            <CustomerList/>
        </CustomerProvider>

    </>
)