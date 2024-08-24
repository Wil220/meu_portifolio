import { Typography } from '@mui/material';

const About = () => {
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
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        Olá, meu nome é Wilker e sou desenvolvedor Full Stack. Tenho experiência em várias tecnologias como React, Node.js, e MongoDB.
      </Typography>
      <Typography variant="body1" paragraph>
        Gosto de criar soluções inovadoras e estou sempre em busca de novos desafios no mundo da programação.
      </Typography>
    </div>
  )
}

export default About;
