import React from "react"
import { LocationProvider } from "./location/LocationProvider"
import "./Kennel.css"
import { LocationList } from "./location/LocationList"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)