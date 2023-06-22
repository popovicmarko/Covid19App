import { useContext } from "react"
import { casesContext } from "../context/casesContext"

export const useCases = () => {
    const context = useContext(casesContext)
    
    if(!context)
        throw Error("useCases must be inside cases provider")

    return context
}