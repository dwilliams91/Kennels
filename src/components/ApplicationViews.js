import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./Customer/CustomerProvider"
import { CustomerList } from "./Customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            
                <LocationProvider>
                    <CustomerProvider>
                        <AnimalProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                        </AnimalProvider>
                    </CustomerProvider>
                </LocationProvider>
            
            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
        </>
    )
}
