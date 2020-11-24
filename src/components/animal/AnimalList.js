import React,{useContext, useEffect} from "react"
import { AnimalContext } from "./AnimalProvider"
import {Animal} from "./Animal"
import "./Animal.css"

export const AnimalList=()=>{
    const {Animals, getAnimals}=useContext(AnimalContext)

    useEffect(()=>{
        console.log("animalList is doing stuff")
        getAnimals()
    },[])

    useEffect(()=>{
        console.log("AnimalList had a state change")
        console.log(Animals)
    },[Animals])
    return(
        <div className="animals">
            {
                Animals.map(singleAnimals=><Animal key={singleAnimals.id} animal={singleAnimals}/>)
            }

        </div>

    )


}