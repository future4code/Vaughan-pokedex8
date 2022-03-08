import axios from "axios"
import { useEffect, useState } from "react"
const useRequestData = (initialData, url) =>{
    const [data, setData] = useState(initialData)
    useEffect(()=>{
        axios.get()
        .then((response)=>{
            console.log(response.data)
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }, [url])


    return (data)
}
export default useRequestData