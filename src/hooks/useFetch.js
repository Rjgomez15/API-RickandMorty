import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = url => {
  
    const [response, setResponde] = useState()

    useEffect(() => {
      axios.get(url)
      .then(res => setResponde(res.data))
      .catch(err => console.log(err))
    }, [])
    
    return response
}

export default useFetch