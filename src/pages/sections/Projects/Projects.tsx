
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Importa o ícone do LinkedIn

import image1 from '../../../assets/images/wilker3.jpeg'

const projects = [
  {
    id: 1,
    title: "Sistema de Comanda",
    description: "Um sistema completo para gerenciamento de comandas em restaurantes.",
    imageUrl: image1, // Usa a imagem importada
    githubUrl: "https://github.com/Wil220"
  },
  {
    id: 2,
    title: "Site Pessoal com React e Tailwind",
    description: "Meu site pessoal desenvolvido com React e estilizado com Tailwind CSS.",
    imageUrl: image1, // Usa a imagem importada
    githubUrl: "https://github.com/Wil220l"
  },
  {
    id: 3,
    title: "Aplicativo de Farmácia com React e Vite",
    description: "Aplicativo para farmácias desenvolvido com React e Vite.",
    imageUrl: image1, // Usa a imagem importada
    githubUrl: "https://github.com/Wil220"
  },
];

const Projects = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgcolor="#232323"
      color="#ffffff"
      minHeight="100vh"
      p={2}
    >
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap={4}
        maxWidth="1200px"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        {projects.map(project => (
          <Box 
            key={project.id}
            bgcolor="#333" 
            borderRadius="8px" 
            p={2} 
            textAlign="center" 
            boxShadow={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
            maxWidth="100%" // Garante que o Box do projeto não ultrapasse o container
          >
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '8px',
                maxWidth: '100%' // Garante que a imagem se ajuste corretamente
              }} 
            />
            <Typography variant="h6" mt={2} gutterBottom>
              {project.title}
            </Typography>
            <Typography variant="body2" paragraph>
              {project.description}
            </Typography>
            <IconButton 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
      
      <Box
        display="flex"
        justifyContent="center"
        mt={4}
        mb={2}
        width="100%"
      >
        <IconButton 
          href="https://github.com/Wil220" 
          target="_blank" 
          rel="noopener noreferrer"
          color="inherit"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton 
          href="https://www.linkedin.com/in/wilker-silva-3a0ab2273/" 
          target="_blank" 
          rel="noopener noreferrer"
          color="inherit"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Projects;
