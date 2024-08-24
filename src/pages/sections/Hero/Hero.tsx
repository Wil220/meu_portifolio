import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Wilker from "../../../assets/images/wilker3.jpeg"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackgorund";

const Hero = () => {

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
  }))

  const StyledImg = styled("img")(({ theme }) => ({
      width: "75%",
      borderRadius: "50%",
      border: `2px solid ${theme.palette.primary.contrastText}`
  }))

  return (
      <>
          <StyledHero>
              <Container maxWidth="lg">
                  <Grid container spacing={2}>
                      <Grid item xs={12} md={5}>
                          <Box position="relative">
                              <Box position="absolute" width={"155%"} top={-100} right={-100}>
                                  <AnimatedBackground />
                              </Box>
                              <Box position="relative" textAlign="center">
                                  <StyledImg src={Wilker} />
                              </Box>
                          </Box>
                      </Grid>
                      <Grid item xs={12} md={7}>
                          <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Wilker Silva</Typography>
                          <Typography color="primary.contrastText" variant="h2" textAlign="center" >I'am a full stack developer</Typography>
                          <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                  <StyledButton onClick={()=> console.log("download")}>
                                      <CloudUploadIcon />
                                      <Typography>
                                          Download CV
                                      </Typography>
                                  </StyledButton>
                              </Grid>
                              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                  <StyledButton onClick={()=> console.log("contact")}>
                                      <MailOutlineIcon />
                                      <Typography>
                                          Contact me
                                      </Typography>
                                  </StyledButton>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
              </Container>
          </StyledHero>
      </>
  )
}

export default Hero
