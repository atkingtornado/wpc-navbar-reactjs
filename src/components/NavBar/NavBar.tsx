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
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { createTheme,  ThemeProvider } from '@mui/material/styles';
import { alpha, styled } from '@mui/material/styles';

import headerNWS from './assets/header-nws.png'
import headerNOAA from './assets/header-noaa.png'
import headerDOC from './assets/header-doc.png'

// import './header.css';


const theme = createTheme({});
const NavButton = styled(Button)`
  & .MuiButton-endIcon {
    margin-left: 0px;
  }
`;

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

const navLinks = [
  ['HOME', 
    [ 
      ['WPC','https://www.wpc.ncep.noaa.gov/index.shtml'],
      ['WPC (Legacy)','https://www.wpc.ncep.noaa.gov/index_legacy.shtml'] 
    ]
  ], 
  ['FORECASTS & ANALYSES',
    [
      ['Daily Weather Map','https://www.wpc.ncep.noaa.gov/dwm/dwm.shtml'],
      ['Day ½–2½','https://www.wpc.ncep.noaa.gov/basicwx/basicwx_ndfd.php'],
      ['Day 3–7 CONUS','https://www.wpc.ncep.noaa.gov/medr/medr.shtml'],
      ['Day 3–7 Hazards','https://www.wpc.ncep.noaa.gov/threats/threats.php'],
      ['Day 4–8 Alaska','https://www.wpc.ncep.noaa.gov/alaska/akmedr.shtml'],
      ['Excessive Rainfall','https://www.wpc.ncep.noaa.gov/qpf/excessive_rainfall_outlook_ero.php'],
      ['Flood Outlook','https://www.wpc.ncep.noaa.gov/nationalfloodoutlook/index.html'],
      ['GIS Products','https://www.wpc.ncep.noaa.gov/kml/kmlproducts.php'],
      ['Heat Index','https://www.wpc.ncep.noaa.gov/heat_index.shtml'],
      ['Mesoscale Precip Discussion','https://www.wpc.ncep.noaa.gov/metwatch/metwatch_mpd.php'],
      ['National Forecast Charts','https://www.wpc.ncep.noaa.gov/national_forecast/natfcst.php?day=1'],
      ['National High & Low','https://www.wpc.ncep.noaa.gov/discussions/hpcdiscussions.php?disc=nathilo&version=0&fmt=reg'],
      ['PQPF','https://www.wpc.ncep.noaa.gov/pqpf/conus_hpc_pqpf.php'],
      ['QPF','https://www.wpc.ncep.noaa.gov/qpf/qpf2.shtml'],
      ['Storm Summaries','https://www.wpc.ncep.noaa.gov/storm_summaries/storm_summaries.shtml'],
      ['Surface Analysis','https://www.wpc.ncep.noaa.gov/html/sfc2.shtml'],
      ['Tropical Products','https://www.wpc.ncep.noaa.gov/tropical/tropstorms.shtml'],
      ['Winter Weather','https://www.wpc.ncep.noaa.gov/wwd/winter_wx.shtml'],
      ['WPC Discussions','https://www.wpc.ncep.noaa.gov/html/discuss.shtml'],
    ]
  ],
  ['ARCHIVES', 
    [
      ['Daily Weather Maps','https://www.wpc.ncep.noaa.gov/dailywxmap/index.html'],
      ['Day 3-7','https://www.wpc.ncep.noaa.gov/archives/web_pages/medr/get_medr_products.php'],
      ['Excessive Rainfall Outlooks','https://www.wpc.ncep.noaa.gov/archives/web_pages/ero/ero.shtml'],
      ['Excessive Rainfall Outlook Climatology','https://www.wpc.ncep.noaa.gov/qpf/eroclimo/index.php'],
      ['Mesoscale Precip Discussions','https://www.wpc.ncep.noaa.gov/archives/metwatch/mpd_archive_days.php'],
      ['National Forecast Charts','https://www.wpc.ncep.noaa.gov/noaa/noaa_archive.php'],
      ['National High & Low','https://www.wpc.ncep.noaa.gov/archives/web_pages/discussions/archive_nathilo.php'],
      ['QPF','https://www.wpc.ncep.noaa.gov/archives/qpf/get_qpf_images.php'],
      ['Storm Summaries','https://www.wpc.ncep.noaa.gov/storm_summaries/storm_summaries.shtml'],
      ['Surface Analysis','https://www.wpc.ncep.noaa.gov/archives/web_pages/sfc/sfc_archive.php'],
      ['Tropical Advisories','https://www.wpc.ncep.noaa.gov/tropical/tropstorms.shtml'],
      ['Winter Weather','https://www.wpc.ncep.noaa.gov/archives/web_pages/winwx/get_winwx_images.php'],
      ['WPC Archive Page','https://www.wpc.ncep.noaa.gov/archives/web_pages/wpc_arch/get_wpc_archives.php'],
    ]
  ],
  ['VERIFICATION', 
    [
      ['Day 3–7','https://www.wpc.ncep.noaa.gov/html/hpcverif.shtml#medmin'],
      ['Event Reviews','https://www.wpc.ncep.noaa.gov/storm_summaries/event_reviews.php'],
      ['Model Diagnostics','https://www.wpc.ncep.noaa.gov/html/model2.shtml'],
      ['QPF','https://www.wpc.ncep.noaa.gov/html/hpcverif.shtml#qpf'],
      ['Winter Weather','https://www.wpc.ncep.noaa.gov/verification/winwx/winwx.php'],
    ]
  ],
  ['INTERNATIONAL', 
    [
      ['Desks','https://www.wpc.ncep.noaa.gov/international/intl2.shtml'],
      ['GDI','https://www.wpc.ncep.noaa.gov/international/gdi/'],
      ['Desk Forecasting Tools','https://www.wpc.ncep.noaa.gov/international/wng/'],
      ['Puerto Rico QPF','https://www.wpc.ncep.noaa.gov/qpf/pr_qpf24.php'],
    ]
  ],
  ['DEVELOPMENT', 
    [
      ['HydroMet Testbed','https://www.wpc.ncep.noaa.gov/hmt/'],
      ['Training','https://www.wpc.ncep.noaa.gov/research/res2.shtml']
    ]
  ],
  ['ABOUT', 
    [
      ['About the WPC','https://www.wpc.ncep.noaa.gov/html/about2.shtml'],
      ['FAQ','https://www.wpc.ncep.noaa.gov/html/faq.shtml'],
      ['History','https://www.wpc.ncep.noaa.gov/html/WPC_history.pdf'],
      ['Mission&Vision','https://www.wpc.ncep.noaa.gov/html/fcst2.shtml'],
      ['Product Description','https://www.wpc.ncep.noaa.gov/html/fam2.shtml'],
      ['Staff','https://www.wpc.ncep.noaa.gov/staff/wpc_staff.shtml'],
    ]
  ],
]

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
}

interface NavBarProps {}
export const NavBar = (NavBarProps) => {

 

  const { width } = useViewport();
  const breakpoint = 750;

  return (
    <AppBar 
      position="static"
      sx={{
        background: 'white',
        color: 'black',
        'text-align': 'center',
        'box-shadow': 'none'
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


          <img 
            src={headerNWS} 
            style={{
              width: width < breakpoint ? '26.5px' : '100%',
              height: width < breakpoint ? '30px' : '100%'
            }}
          />
          <img 
            src={headerNOAA} 
            style={{
              width: width < breakpoint ? '26.5px' : '100%',
              height: width < breakpoint ? '30px' : '100%'
            }}
          />
          </Box>
         <Box display="flex" flexDirection="column" padding={0} marginLeft={2} >
           <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: 'Arial,sans-serif',
              fontSize: width < breakpoint ? '1.0em' : '2.0em',
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
              fontSize:  width < breakpoint ? '0.35em' : '0.7em',
              textDecoration: 'none',
              color: 'gray',
              letterSpacing: width < breakpoint ? '1.5px' : '3px',
            }}
          >
            National Oceanic and Atmospheric Administration
          </Typography>
        </Box>
        <Box
          // position="absolute"
          // right="5px"
        >
          <img 
            src={headerDOC} 
            style={{
              width: width < breakpoint ? '67.5px' : '100%',
              height: width < breakpoint ? '30px' : '100%'
            }}
          />
        </Box>
      </Box>
      <Divider />
      <Box display="flex" flexDirection="row" padding={0} justifyContent="center">
        {centerLinks.map((a, i) => {
          return (
            <Button
              key={a[0] + 'button'}
              sx={{
                fontSize:  width < breakpoint ? '0.35em' : '0.7em',
                fontVariant: 'small-caps',
                textTransform: 'uppercase',
                fontFamily: 'Arial,sans-serif',
                textDecoration: 'none',
                color: 'gray',
                letterSpacing: width < breakpoint ? '1px' : '2px',
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
      <Box display="flex" flexDirection="row" padding={0} justifyContent="center">
        {navLinks.map((a, i) => {
          return (
            <NavMenuItem key={a[0] + 'item'} menuData={a}/>
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
}

interface NavMenuItemProps {menuData: any}
const NavMenuItem = (props: NavMenuItemProps) => {

  const { width } = useViewport();
  const breakpoint = 750;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {

    const menu = document.getElementById("simple-menu").children[2];
    const menuBoundary = {
      left: menu.offsetLeft,
      top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
      right: menu.offsetLeft + menu.offsetHeight,
      bottom: menu.offsetTop + menu.offsetHeight
    };
    if (
      e.clientX >= menuBoundary.left &&
      e.clientX <= menuBoundary.right &&
      e.clientY <= menuBoundary.bottom - 9 &&
      e.clientY >= menuBoundary.top
    ) {
      return;
    }
    setOpen(false);
  };

  const handleClick = (e) => {
    setOpen(false);
  };

  return (
    <>
      <NavButton
        key={props.menuData[0]}
        sx={{
          fontSize:  width < breakpoint ? '0.5em' : '0.75em',
          textTransform: 'uppercase',
          fontFamily: 'Arial,sans-serif',
          textDecoration: 'none',
          textIndent: 0,
          color: '#104070',
          // paddingLeft: '8px',
          paddingRight: width < breakpoint ? '0px' : '4px',
          fontWeight: 'bold',
          bgcolor: 'transparent',
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent"
          }
        }}
        style={{ zIndex: 1301 }}
        id={props.menuData[0]+'button'}
        aria-controls={open ? 'simple-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        disableRipple
        // onClick={handleClick}
        onMouseOver={handleOpen}
        onMouseLeave={handleClose}
        endIcon={<ArrowDropDownIcon />}
      >
        {props.menuData[0]}
      </NavButton>

      <Menu
        id={'simple-menu'}
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': props.menuData[0]+'button',
        }}
      >
      {props.menuData[1].map((b, i) => {
        return(
          <MenuItem key={b[0]} onMouseLeave={handleClose} onClick={handleClick}><a href={b[1]}>{b[0]}</a></MenuItem>
        )
      })}
      </Menu>
    </>
  )
}

export default NavBar;