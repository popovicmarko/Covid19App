import { useState } from "react"
import { useCases } from "./useCases"
import axios from "axios"

export const useGetAllCases = () => {

  const URL = "https://disease.sh/v3/covid-19/all"

  const [ error, setError ] = useState( null )
  const [ loading, setLoading ] = useState(false)
  const { setAllCases } = useCases()
  
  const getAllCases = async() => {
        setLoading(true)
        try { 
            const res = await axios.get(URL)
            setError(null)
            setLoading(false)
            setAllCases(res.data)
            console.log(res);
        }
        catch(err){
            if(err.response) {
                setError(err.response.data.message)
            }
            else if(error.request) {
                setError("Greska pri zahtevanju podataka, proverite konekciju ili kontaktirajte administratora")
            }
            else {
                setError(`Greska: ${err.message}`)
            }
        }
        setLoading(false)
  }

  return { error, loading, getAllCases }
}