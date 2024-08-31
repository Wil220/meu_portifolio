import { Box, Container, Grid, Button, styled, Typography } from '@mui/material';
import Wilker from '../../../assets/images/wilker3.jpeg';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { AnimatedBackground } from '../../../components/AnimatedBackground/AnimatedBackgorund';
import { useState, useEffect } from 'react';

const Hero = () => {
 
  const [text, setText] = useState('');
  const fullText = "I'm a Full Stack Developer";
  const typingSpeed = 150;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText((prev) => {
     
        const newText = prev + fullText[index];
        index++;
        if (index >= fullText.length) {
          clearInterval(timer); 
        }
        return newText;
      });
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: { 
      paddingTop: "100px",
    },
    [theme.breakpoints.up('md')]: { 
      paddingTop: "0px",
    }
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.contrastText}`
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width={"155%"} top={-100} right={-100}>
                {/* */}
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImg src={Wilker} alt="Wilker Silva" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
              Wilker Silva
            </Typography>
            <Typography color="primary.contrastText" variant="h2" textAlign="center">
              {text} {/* */}
            </Typography>
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  color="primary"
                  href="/path/to/your/curriculum.pdf" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  startIcon={<CloudUploadIcon />}
                >
                  <Typography ml={1}>Download CV</Typography>
                </Button>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  color="primary"
                  href="mailto:wilker.silva0714@gmail.com" 
                  target="_self"
                  startIcon={<MailOutlineIcon />}
                >
                  <Typography ml={1}>Contact me</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
