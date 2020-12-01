import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import {Animal} from "./Animal"
import "./Animal.css"

export const AnimalList = ({ history }) => {
    const { getAnimals, searchTerms, Animals } = useContext(AnimalContext)

    const [filteredAnimals, setFiltered]=useState([])
    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])


    useEffect(()=>{
        if (searchTerms !==""){
            console.log(Animals)
            const subset=Animals.filter(singleAnimal=>singleAnimal.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else{
            setFiltered(Animals)
        }

    },[searchTerms, Animals])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    filteredAnimals.map(animal => {
                        return <Animal key={animal.id} animal={animal} />
                    })
                }
            </div>
        </>
    )
}