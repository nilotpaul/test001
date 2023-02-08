import { AppBar, Container, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import {useNavigate} from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import "./Header.css";
const Header = () => {

  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/");
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#140F39",
      },
      secondary: {
        main: '#ffd700',
      },
  
    }
  });
  
  return (
    <ThemeProvider theme={theme}>
    <AppBar color='primary' position='static'>
      <Container>
        <Toolbar>
          <div className="headerr">
          <Typography color='secondary' align='left' onClick={() => goToHomepage()}>
            <h3>DSA Tracker</h3>
          </Typography></div>
        </Toolbar>
      </Container>
      
    </AppBar>
    </ThemeProvider>
  )
}

export default Header