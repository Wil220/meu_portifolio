import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }));

    return (
        <AppBar position="absolute">
            <StyledToobar>
                <MenuItem component={Link} to="/">Home</MenuItem>
                <MenuItem component={Link} to="/about">About</MenuItem>
                <MenuItem component={Link} to="/skills">Skills</MenuItem>
                <MenuItem component={Link} to="/projects">Projects</MenuItem>
            </StyledToobar>
        </AppBar>
    );
}

export default NavBar;
