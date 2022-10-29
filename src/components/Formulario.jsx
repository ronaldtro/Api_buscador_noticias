import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material'
import useNoticias from '../hooks/useNoticias'

const Formulario = () => {

    const { categoria, handleChangeCategoria } = useNoticias()

    const CATEGORIAS = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' },
    ]

    /*  
    <Box sx={{marginTop: 2}}>
        <Button fullWidth variant='contained' color='secondary'>Buscar noticias</Button>
    </Box> 
    */

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Categoria</InputLabel>
                <Select label='categoria' onChange={handleChangeCategoria} value={categoria} >
                    {
                        CATEGORIAS.map(categoria => (
                            <MenuItem key={categoria.value} value={categoria.value}>
                                {categoria.label}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </form>
    )
}

export default Formulario