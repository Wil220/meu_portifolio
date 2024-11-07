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
      Sou um profissional em busca de novas oportunidades na área de tecnologia, após concluir um bootcamp intensivo da Generation Brasil, onde adquiri uma sólida base em programação e desenvolvimento de software. Atualmente, estou iniciando meus estudos na Escola da Nuvem, com foco em serviços e soluções AWS, e estou em busca de uma oportunidade para aplicar esses conhecimentos na prática.

Minha experiência anterior como atendente aprimorou minhas habilidades interpessoais e a capacidade de trabalhar de forma colaborativa em equipe. Agora, estou determinado a enfrentar novos desafios no setor de tecnologia. Comprometido em aprender e crescer profissionalmente, meu objetivo é contribuir de maneira significativa para o sucesso da empresa.

Recentemente, conquistei o segundo lugar em um hackathon organizado por Claudera, um marco importante que demonstra minha capacidade de inovar e me destacar em competições técnicas.

Se você procura um profissional dedicado, com forte vontade de evoluir, estou à disposição para conversarmos!
      </Typography>
    </div>
  )
}

export default About;
