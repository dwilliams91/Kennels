import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../Customer/CustomerProvider"
import { Animal } from "./Animal"
import "./Animal.css"


export const AnimalList=(props)=>{
    console.log("animalList is being called")
    const {Animals, getAnimals}=useContext(AnimalContext)
    const {locations, getLocations}=useContext(LocationContext)
    const {Customers,getCustomers}= useContext(CustomerContext)

    useEffect(()=>{
        console.log("animalList initial render before any data")
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
    },[])

   
    return (
     <>   
     <div>
         <h2>Animals</h2>
         <button onClick={()=>props.history.push("/animals/create")}>
             Add Animal
         </button>
     </div>
    <div className="animals">
    {Animals.map(singleAnimal=>{
        console.log(Customers)
        // what data should I send to the animal.js file. the animal, the matching customer, and the matching location
        const owner=Customers.find(singleCustomer=>singleCustomer.id===singleAnimal.customerId)
        const clinic=locations.find(singleLocation=>singleLocation.id===singleAnimal.locationId)
        console.log(clinic)
        console.log(owner)
        return <Animal key={singleAnimal.id}
                        location={clinic}
                        customer={owner}
                        animal={singleAnimal} />
    })}
    
    </div>
    </>
    )
}