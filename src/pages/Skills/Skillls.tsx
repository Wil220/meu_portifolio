import { Typography } from '@mui/material';

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
      <Typography variant="body1" paragraph>
        JavaScript (React, Node.js)
      </Typography>
      <Typography variant="body1" paragraph>
        HTML & CSS (Bootstrap, Tailwind CSS, Material UI)
      </Typography>
      <Typography variant="body1" paragraph>
        Banco de Dados (MongoDB, MySQL)
      </Typography>
      <Typography variant="body1" paragraph>
        Ferramentas de Desenvolvimento (Git, Vercel, AWS)
      </Typography>
    </div>
  )
}

export default Skills;
