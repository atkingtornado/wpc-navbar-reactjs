import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import useMediaQuery from '@mui/material/useMediaQuery';

import { createTheme,  ThemeProvider } from '@mui/material/styles';
import { alpha, styled } from '@mui/material/styles';

import headerNWS from './assets/header-nws.png';
import headerNOAA from './assets/header-noaa.png';
import headerDOC from './assets/header-doc.png';

import './styles.css';


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
  const breakpoint = 850;

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
          >
            <img 
              src={headerNWS} 
              className={'header-icon'}
            />
            <img 
              src={headerNOAA} 
              className={'header-icon'}
            />
          </Box>
         <Box display="flex" flexDirection="column" padding={0} marginLeft={2} >
           <Typography
            noWrap
            component="a"
            href="/"
            className='wpc-title'
          >
            Weather Prediction Center
          </Typography>
          <Typography
            noWrap
            component="a"
            href="/"
            className='noaa-title'
          >
            National Oceanic and Atmospheric Administration
          </Typography>
        </Box>
        <Box
        >
          <img 
            src={headerDOC} 
            className={'header-doc-icon'}
          />
        </Box>
      </Box>
      <Divider />
      <Box display="flex" flexDirection="row" padding={0} justifyContent="center">
        {centerLinks.map((a, i) => {
          return (
            <Button
              key={a[0] + 'button'}
              className={'center-button'}
              href={a[1]}>
              {a[0]}
            </Button>
          )
        })

        }

      </Box>
      <Divider />
      {width < breakpoint ? <NavLinksDrawer/> : <NavLinks/>}
      
      
    </AppBar>
  );
}


const NavLinks = () => {

  return (
    <>
      <Box display="flex" flexDirection="row" padding={0} justifyContent="center">
          {navLinks.map((a, i) => {
            return (
              <div className="dropdown">
                <div className="dropbtn">{a[0]} ▼</div>
                <div className="dropdown-content">
                  {
                    a[1].map((b, j) => {

                        return (
                           <a href={b[1]}>{b[0]}</a>
                        )
                      })
                  }
                 
                </div>
              </div>
            )
          })

          }

        </Box>
        <Divider />
      </>
  )
}

const NavLinksDrawer = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return(
    <>
      <Drawer
        anchor="top"
        sx={{ width: 250, color: "#fff" }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        {navLinks.map((a, i) => {
          return (
            <Accordion expanded={expanded === a[0]} onChange={handleChange(a[0])} key={'accordian' + a[0]}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography className="accordian-header">{a[0]}</Typography>
              </AccordionSummary>
              <AccordionDetails className="accordian-details">
                {
                  a[1].map((b, j) => {
                    return (
                      <div className="accordian-link-container">
                        <a href={b[1]}>{b[0]}</a>
                      </div>
                    )
                  })
                }
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Drawer>
      <Box 
        display="flex" 
        flexDirection="row" 
        justifyContent="left"
        alignContent="start"
        height="34px"
      >
        <IconButton
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Divider />
    </>
  )

}


export default NavBar;