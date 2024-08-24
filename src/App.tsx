import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme'; // Importa o tema atualizado
import Home from "./pages/Home/Home";
import About from "./pages/sections/About/About";
import Skills from "./pages/Skills/Skillls";
import Projects from "./pages/sections/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Aplica o background e outras configurações globais */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;


