import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import { alpha, styled } from '@mui/material/styles';

import headerNWS from './assets/header-nws.png'
import headerNOAA from './assets/header-noaa.png'
import headerDOC from './assets/header-doc.png'

// import './header.css';



const centerLinks = [
  ['NCEP', 'https://www.weather.gov/ncep/'], 
  ['AWC', 'https://www.aviationweather.gov/'],
  ['CPC', 'https://www.cpc.ncep.noaa.gov/'],
  ['EMC', 'https://www.emc.ncep.noaa.gov/'],
  ['NCO', 'https://www.nco.ncep.noaa.gov/'],
  ['NHC', 'https://www.nhc.ncep.noaa.gov/'],
  ['OPC', 'https://ocean.weather.gov/'],
  ['SPC', 'https://www.spc.noaa.gov/'],
  ['SWPC', 'https://www.swpc.noaa.gov/'],
  ['WPC', 'https://www.wpc.ncep.noaa.gov/'],
]

interface NavBarProps {

}

export const NavBar = ({ }: NavBarProps) => (
  <AppBar 
    position="static"
    sx={{
      background: 'white',
      color: 'black'
    }}
  >

    <Box 
      display="flex" 
      flexDirection="row" 
      justifyContent="center"
      alignContent="start"
    >
        <Box
          display="flex" 
          alignContent="start"
          // position="absolute"
          // left="5px"
        >
         <img src={headerNWS} />
         <img src={headerNOAA} />
        </Box>
       <Box display="flex" flexDirection="column" padding={0} marginLeft={1}>
         <Typography
          noWrap
          component="a"
          href="/"
          sx={{
            fontFamily: 'Arial,sans-serif',
            fontSize: '2.0em',
            letterSpacing: '0px',
            wordSpacing: '-0.5px',
            textDecoration: 'none',
            fontWeight: '550',
            color: 'black',
            textTransform: 'uppercase',
            fontVariant: 'small-caps',
          }}
        >
          Weather Prediction Center
        </Typography>
        <Typography
          noWrap
          component="a"
          href="/"
          sx={{
            fontVariant: 'small-caps',
            textTransform: 'uppercase',
            fontFamily: 'Arial,sans-serif',
            fontSize: '0.7em',
            textDecoration: 'none',
            color: 'gray',
            letterSpacing: '3px'
          }}
        >
          National Oceanic and Atmospheric Administration
        </Typography>
      </Box>
      <Box
        // position="absolute"
        // right="5px"
      >
        <img src={headerDOC} />
      </Box>
    </Box>
    <Divider />
    <Box display="flex" flexDirection="row" padding={0} justifyContent="center">
      {centerLinks.map((a, i) => {
        return (
          <Button
            sx={{
              fontSize: '0.7em',
              fontVariant: 'small-caps',
              textTransform: 'uppercase',
              fontFamily: 'Arial,sans-serif',
              textDecoration: 'none',
              color: 'gray',
              letterSpacing: '2px',
              padding: '0px',
              margin: '0px 10px 0px 10px',
              minWidth: '0px'
            }}
            href={a[1]}>
            {a[0]}
          </Button>
        )
      })

      }

    </Box>
    <Divider />
{/*    <Box>
       <Toolbar disableGutters>
       </Toolbar>
    </Box>*/}
  </AppBar>
);

export default NavBar;