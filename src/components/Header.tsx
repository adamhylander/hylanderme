import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import HomeIcon from '@mui/icons-material/Home'

function Header() {
  return (
    <AppBar position="static" sx={{ borderRadius: '10px', backgroundColor: "#fafafa", width: '80%', height: '75px', padding: '0' }}>
      <Container style={{padding: '0'}} >
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75px', backgroundColor: '#ffc500', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', width: '14%' }}>
            <HomeIcon sx={{ color: 'black', fontSize: '32px' }} />
        </div>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
            >
            HYLANDER.ME
          </Typography>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '50%', marginRight: '3%' }}>
            <a href="https://www.facebook.com/adam.hylander" style={{ marginRight: '4%', marginTop: '5px' }} >
              <FacebookIcon sx={{ color: 'black', '&:hover': { color: '#ccc' } }} />
            </a>

            <a href="https://www.linkedin.com/in/adam-hylander/" style={{ marginRight: '4%', marginTop: '5px' }}>
              <LinkedInIcon sx={{ color: 'black', '&:hover': { color: '#ccc' } }} />
            </a>

            <a href="https://www.github.com/adamhylander" style={{ marginRight: '4%', marginTop: '5px' }}>
                <GitHubIcon sx={{ color: 'black', '&:hover': { color: '#ccc' } }} />
            </a>

            <a href="mailto:adam@hylander.me">
            <Button startIcon={<SendIcon sx={{color: 'black'}} />} sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
                backgroundColor: '#ffc500',
                borderRadius: '10px',
                '&:hover': { backgroundColor: '#b89316' },
              }} >
                EMAIL
            </Button>
            </a>

          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
