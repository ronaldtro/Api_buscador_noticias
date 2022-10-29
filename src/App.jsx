import { Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario'
import { NoticiasProvider } from './context/NoticiasProvider';
import Noticias from './components/Noticias';

function App() {

  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} component='h1' variant='h3' /* sx={{fontWeight: 'bold', fontSize: '2rem'}} */>
            Buscador de noticias
          </Typography>
        </header>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid item xs={11} md={7} lg={5}>
            <Formulario />
          </Grid>
        </Grid>
        <Noticias />
      </Container>
    </NoticiasProvider>
  )
}

export default App;
