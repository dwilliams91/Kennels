import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalSearch = (props) => {
    const { searchTerms, setSearchTerms } = useContext(AnimalContext)

    return (
        <>
            Animal search:
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => {
                        setSearchTerms(keyEvent.target.value)
                        console.log(searchTerms)
                    }
                }
                placeholder="Search for an Animal..." />

        </>

    )


}