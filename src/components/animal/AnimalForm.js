import React, { useContext, useRef, UseEffect, useEffect } from "react"
import { CustomerContext } from "../Customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"
export const AnimalForm = (props) => {
    const { Animals, getAnimals, addAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { Customers, getCustomers } = useContext(CustomerContext)

    const name = useRef(null)
    const breed = useRef(null)
    const location = useRef(null)
    const customer = useRef(null)

    useEffect(() => {
        getCustomers().then(getLocations)
        // getLocation().then(getCustomers)
    }, [])

    const constructNewAnimal = () => {
        const locationId = parseInt(location.current.value)
        const customerId = parseInt(customer.current.value)
    if (locationId===0){
        window.alert("please select a location")
    } else {
        addAnimal({
            
                name: name.current.value,
                breed: breed.current.value,
                locationId,
                customerId,

        })
        .then(()=> props.history.push("/animals"))
    }
    }
    console.log(Customers)
    console.log(locations)
    return (
        <form>
            <h2 className="animalForm__title">Make Appointment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal Name:</label>
                    <input type="text" id="animalName" ref={name} placeholder="Animal Name"></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location"> Which Location?</label>
                    <select defaultValue="0" name="location" ref={location} id="animalLocation">
                        <option value="0">Select a Location</option>
                        {locations.map(singleLocation=> (
                            <option key={singleLocation.id} value={singleLocation.id}>{singleLocation.name}
                            </option>

                        ))}
                    </select>

                </div>
            </fieldset>
        </form>

    )

}