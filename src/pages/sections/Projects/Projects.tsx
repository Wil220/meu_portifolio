import { Typography } from '@mui/material';

const Projects = () => {
  return (
    <div style={{ 
      display: 'grid', 
      placeItems: 'center', 
      backgroundColor: '#232323', 
      color: '#ffffff',
      minHeight: '100vh', 
      padding: '20px'
    }}>
      <Typography variant="h1" textAlign="center" pb={2}>
        Projects
      </Typography>
      <Typography variant="body1" paragraph>
        Projeto 1: Sistema de Comanda
      </Typography>
      <Typography variant="body1" paragraph>
        Projeto 2: Site Pessoal com React e Tailwind
      </Typography>
      <Typography variant="body1" paragraph>
        Projeto 3: Aplicativo de Farmácia com React e Vite
      </Typography>
      <Typography variant="body1" paragraph>
        Veja mais no meu <a href="https://github.com/wilkers-projects" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff" }}>GitHub</a>.
      </Typography>
    </div>
  )
}

export default Projects;


