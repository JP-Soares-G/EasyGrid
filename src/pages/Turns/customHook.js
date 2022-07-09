import {useEffect, useState} from 'react'
import axios from 'axios'

export function useFetch() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://projetopsr.herokuapp.com/turnos')
        .then(res => setData(res.data.content))
        .catch(err => alert("Algo deu errado"))
    }, [])

    return data
}

