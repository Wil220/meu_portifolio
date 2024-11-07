import { Typography, Box, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code'; // Para JavaScript (React, Node.js)
import LanguageIcon from '@mui/icons-material/Language'; // Para HTML & CSS
import StorageIcon from '@mui/icons-material/Storage'; // Para Banco de Dados
import BuildIcon from '@mui/icons-material/Build'; // Para Ferramentas de Desenvolvimento

const Skills = () => {
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
        My Skills
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* JavaScript */}
        <Grid item xs={12} md={3} display="flex" flexDirection="column" alignItems="center">
          <CodeIcon style={{ fontSize: 50, color: '#f0db4f' }} /> 
          <Typography variant="body1" align="center">JavaScript (React, Node.js)</Typography>
        </Grid>

        {/* HTML & CSS */}
        <Grid item xs={12} md={3} display="flex" flexDirection="column" alignItems="center">
          <LanguageIcon style={{ fontSize: 50, color: '#e34c26' }} />
          <Typography variant="body1" align="center">HTML & CSS (Bootstrap, Tailwind CSS, MUI)</Typography>
        </Grid>

        {/* Banco de Dados */}
        <Grid item xs={12} md={3} display="flex" flexDirection="column" alignItems="center">
          <StorageIcon style={{ fontSize: 50, color: '#4db33d' }} />
          <Typography variant="body1" align="center">Banco de Dados (MongoDB, MySQL)</Typography>
        </Grid>

        {/* Ferramentas de Desenvolvimento */}
        <Grid item xs={12} md={3} display="flex" flexDirection="column" alignItems="center">
          <BuildIcon style={{ fontSize: 50, color: '#ff9900' }} />
          <Typography variant="body1" align="center">Ferramentas (Git, Vercel, AWS)</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Skills;
