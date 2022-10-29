import {useState, useEffect, createContext} from 'react'
const NoticiasContext = createContext()
import axios from 'axios'

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value)        
    }

    const handleChangePagina = (e, valor) => {
        setPagina(valor)
    }

    useEffect(() => {
        setPagina(1)
        const consultarNewsApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=co&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)

        }
        
        consultarNewsApi()

    }, [categoria])

    useEffect(() => {
        const consultarNewsApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=co&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
        }
        
        consultarNewsApi()

    }, [pagina])

    return (
        <NoticiasContext.Provider value={{categoria, handleChangeCategoria, noticias, totalNoticias, handleChangePagina, pagina}}>
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
} 

export default NoticiasContext