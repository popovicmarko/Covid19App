import { createContext, useState } from "react"

export const casesContext = createContext()

const CasesContextProvider = ({ children }) => {

    const [ cases, setCases ] = useState()

    const setAllCases = (cases) => {
        setCases(cases)
    }

    return ( 
        <casesContext.Provider value={ {setAllCases, cases} }>
            { children }
        </casesContext.Provider>
     );
}
 
export default CasesContextProvider;