import * as React from "react"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import Drawer from "@mui/material/Drawer"
import MenuIcon from "@mui/icons-material/Menu"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"

import { createTheme } from "@mui/material/styles"
import { styled } from "@mui/material/styles"

import headerNWS from "./assets/header-nws.png"
import headerNOAA from "./assets/header-noaa.png"
import headerDOC from "./assets/header-doc.png"

import "./styles.css"

const theme = createTheme({})
const NavButton = styled(Button)`
  & .MuiButton-endIcon {
    margin-left: 0px;
  }
`

const centerLinks = [
  ["NCEP", "https://www.weather.gov/ncep/"],
  ["AWC", "https://www.aviationweather.gov/"],
  ["CPC", "https://www.cpc.ncep.noaa.gov/"],
  ["EMC", "https://www.emc.ncep.noaa.gov/"],
  ["NCO", "https://www.nco.ncep.noaa.gov/"],
  ["NHC", "https://www.nhc.ncep.noaa.gov/"],
  ["OPC", "https://ocean.weather.gov/"],
  ["SPC", "https://www.spc.noaa.gov/"],
  ["SWPC", "https://www.swpc.noaa.gov/"],
  ["WPC", "https://www.wpc.ncep.noaa.gov/"],
]

const navLinks = [
  [
    "HOME",
    [
      ["WPC", "https://www.wpc.ncep.noaa.gov/index.shtml"],
      ["WPC (Legacy)", "https://www.wpc.ncep.noaa.gov/index_legacy.shtml"],
    ],
  ],
  [
    "FORECASTS & ANALYSES",
    [
      ["Daily Weather Map", "https://www.wpc.ncep.noaa.gov/dwm/dwm.shtml"],
      ["Day ½–2½", "https://www.wpc.ncep.noaa.gov/basicwx/basicwx_ndfd.php"],
      ["Day 3–7 CONUS", "https://www.wpc.ncep.noaa.gov/medr/medr.shtml"],
      ["Day 3–7 Hazards", "https://www.wpc.ncep.noaa.gov/threats/threats.php"],
      ["Day 4–8 Alaska", "https://www.wpc.ncep.noaa.gov/alaska/akmedr.shtml"],
      ["Excessive Rainfall", "https://www.wpc.ncep.noaa.gov/qpf/excessive_rainfall_outlook_ero.php"],
      ["Flood Outlook", "https://www.wpc.ncep.noaa.gov/nationalfloodoutlook/index.html"],
      ["GIS Products", "https://www.wpc.ncep.noaa.gov/kml/kmlproducts.php"],
      ["Heat Index", "https://www.wpc.ncep.noaa.gov/heat_index.shtml"],
      ["Mesoscale Precip Discussion", "https://www.wpc.ncep.noaa.gov/metwatch/metwatch_mpd.php"],
      ["National Forecast Charts", "https://www.wpc.ncep.noaa.gov/national_forecast/natfcst.php?day=1"],
      [
        "National High & Low",
        "https://www.wpc.ncep.noaa.gov/discussions/hpcdiscussions.php?disc=nathilo&version=0&fmt=reg",
      ],
      ["PQPF", "https://www.wpc.ncep.noaa.gov/pqpf/conus_hpc_pqpf.php"],
      ["QPF", "https://www.wpc.ncep.noaa.gov/qpf/qpf2.shtml"],
      ["Storm Summaries", "https://www.wpc.ncep.noaa.gov/storm_summaries/storm_summaries.shtml"],
      ["Surface Analysis", "https://www.wpc.ncep.noaa.gov/html/sfc2.shtml"],
      ["Tropical Products", "https://www.wpc.ncep.noaa.gov/tropical/tropstorms.shtml"],
      ["Winter Weather", "https://www.wpc.ncep.noaa.gov/wwd/winter_wx.shtml"],
      ["WPC Discussions", "https://www.wpc.ncep.noaa.gov/html/discuss.shtml"],
    ],
  ],
  [
    "ARCHIVES",
    [
      ["Daily Weather Maps", "https://www.wpc.ncep.noaa.gov/dailywxmap/index.html"],
      ["Day 3-7", "https://www.wpc.ncep.noaa.gov/archives/web_pages/medr/get_medr_products.php"],
      ["Excessive Rainfall Outlooks", "https://www.wpc.ncep.noaa.gov/archives/web_pages/ero/ero.shtml"],
      ["Excessive Rainfall Outlook Climatology", "https://www.wpc.ncep.noaa.gov/qpf/eroclimo/index.php"],
      ["Mesoscale Precip Discussions", "https://www.wpc.ncep.noaa.gov/archives/metwatch/mpd_archive_days.php"],
      ["National Forecast Charts", "https://www.wpc.ncep.noaa.gov/noaa/noaa_archive.php"],
      ["National High & Low", "https://www.wpc.ncep.noaa.gov/archives/web_pages/discussions/archive_nathilo.php"],
      ["QPF", "https://www.wpc.ncep.noaa.gov/archives/qpf/get_qpf_images.php"],
      ["Storm Summaries", "https://www.wpc.ncep.noaa.gov/storm_summaries/storm_summaries.shtml"],
      ["Surface Analysis", "https://www.wpc.ncep.noaa.gov/archives/web_pages/sfc/sfc_archive.php"],
      ["Tropical Advisories", "https://www.wpc.ncep.noaa.gov/tropical/tropstorms.shtml"],
      ["Winter Weather", "https://www.wpc.ncep.noaa.gov/archives/web_pages/winwx/get_winwx_images.php"],
      ["WPC Archive Page", "https://www.wpc.ncep.noaa.gov/archives/web_pages/wpc_arch/get_wpc_archives.php"],
    ],
  ],
  [
    "VERIFICATION",
    [
      ["Day 3–7", "https://www.wpc.ncep.noaa.gov/html/hpcverif.shtml#medmin"],
      ["Event Reviews", "https://www.wpc.ncep.noaa.gov/storm_summaries/event_reviews.php"],
      ["Model Diagnostics", "https://www.wpc.ncep.noaa.gov/html/model2.shtml"],
      ["QPF", "https://www.wpc.ncep.noaa.gov/html/hpcverif.shtml#qpf"],
      ["Winter Weather", "https://www.wpc.ncep.noaa.gov/verification/winwx/winwx.php"],
    ],
  ],
  [
    "INTERNATIONAL",
    [
      ["Desks", "https://www.wpc.ncep.noaa.gov/international/intl2.shtml"],
      ["GDI", "https://www.wpc.ncep.noaa.gov/international/gdi/"],
      ["Desk Forecasting Tools", "https://www.wpc.ncep.noaa.gov/international/wng/"],
      ["Puerto Rico QPF", "https://www.wpc.ncep.noaa.gov/qpf/pr_qpf24.php"],
    ],
  ],
  [
    "DEVELOPMENT",
    [
      ["HydroMet Testbed", "https://www.wpc.ncep.noaa.gov/hmt/"],
      ["Training", "https://www.wpc.ncep.noaa.gov/research/res2.shtml"],
    ],
  ],
  [
    "ABOUT",
    [
      ["About the WPC", "https://www.wpc.ncep.noaa.gov/html/about2.shtml"],
      ["FAQ", "https://www.wpc.ncep.noaa.gov/html/faq.shtml"],
      ["History", "https://www.wpc.ncep.noaa.gov/html/WPC_history.pdf"],
      ["Mission&Vision", "https://www.wpc.ncep.noaa.gov/html/fcst2.shtml"],
      ["Product Description", "https://www.wpc.ncep.noaa.gov/html/fam2.shtml"],
      ["Staff", "https://www.wpc.ncep.noaa.gov/staff/wpc_staff.shtml"],
    ],
  ],
]

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  // Return the width so we can use it in our components
  return { width }
}

interface NavBarProps {
  theme?: "light" | "dark"
}
export const NavBar = ({ theme = "light" }: NavBarProps) => {

  const { width } = useViewport()
  const breakpoint = 768
  const isMobile = width < breakpoint

  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState(null)

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  return (
    <AppBar
      position="static"
      sx={{
        background: theme === "dark" ? "#1a202c" : "white",
        color: theme === "dark" ? "#e2e8f0" : "black",
        textAlign: "center",
        boxShadow: "none",
      }}
    >
      <Box display="flex" flexDirection="row" justifyContent="center" alignContent="start">
        <Box
          display="flex"
          alignContent="start"
          gap={1}
          // position="absolute"
          // left="5px"
        >
          <img
            src={headerNWS || "/placeholder.svg"}
            style={{
              width: isMobile ? "26.5px" : "100%",
              height: isMobile ? "30px" : "100%",
            }}
          />
          <img
            src={headerNOAA || "/placeholder.svg"}
            style={{
              width: isMobile ? "26.5px" : "100%",
              height: isMobile ? "30px" : "100%",
            }}
          />
        </Box>
        <Box display="flex" flexDirection="column" padding={0} marginLeft={2}>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: "Arial,sans-serif",
              fontSize: isMobile ? "0.9em" : "2.0em",
              letterSpacing: "0px",
              wordSpacing: "-0.5px",
              textDecoration: "none",
              fontWeight: "550",
              color: theme === "dark" ? "#e2e8f0" : "black",
              textTransform: "uppercase",
              fontVariant: "small-caps",
            }}
          >
            Weather Prediction Center
          </Typography>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              fontVariant: "small-caps",
              textTransform: "uppercase",
              fontFamily: "Arial,sans-serif",
              fontSize: isMobile ? "0.35em" : "0.7em",
              textDecoration: "none",
              color: theme === "dark" ? "#a0aec0" : "gray",
              letterSpacing: isMobile ? "1px" : "3px",
            }}
          >
            National Oceanic and Atmospheric Administration
          </Typography>
        </Box>
        <Box>
          <img
            src={headerDOC || "/placeholder.svg"}
            style={{
              width: isMobile ? "67.5px" : "100%",
              height: isMobile ? "30px" : "100%",
            }}
          />
        </Box>
      </Box>
      <Divider sx={{ borderColor: theme === "dark" ? "#4a5568" : undefined }} />
      <Box display="flex" flexDirection="row" padding={0} justifyContent="center">
        {centerLinks.map((a, i) => {
          return (
            <Button
              key={a[0] + "button"}
              sx={{
                fontSize: isMobile ? "0.35em" : "0.7em",
                fontVariant: "small-caps",
                textTransform: "uppercase",
                fontFamily: "Arial,sans-serif",
                textDecoration: "none",
                color: theme === "dark" ? "#a0aec0" : "gray",
                letterSpacing: isMobile ? "1px" : "2px",
                padding: "0px",
                margin: "0px 10px 0px 10px",
                minWidth: "0px",
              }}
              href={a[1]}
            >
              {a[0]}
            </Button>
          )
        })}
      </Box>
      <Divider sx={{ borderColor: theme === "dark" ? "#4a5568" : undefined }} />
      {!isMobile ? 
        <>
          <Box display="flex" flexDirection="row" padding={0} justifyContent="center">
            {navLinks.map((a, i) => {
              return (
                <div key={"navLink" + i} className={`dropdown ${theme === "dark" ? "dark" : ""}`}>
                  <div className="dropbtn">{a[0]} ▼</div>
                  <div className="dropdown-content">
                    {a[1].map((b, j) => {
                      return (
                        <a key={`href${i}${j}`} href={b[1]}>
                          {b[0]}
                        </a>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </Box>
        </>
      :
        <Box sx={{ width: "40px", flexShrink: 0 }}>
          <IconButton 
            onClick={handleDrawerToggle} 
            sx={{ color: theme === "dark" ? "#e2e8f0" : "black", p: 0 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      }

      <Divider sx={{ borderColor: theme === "dark" ? "#4a5568" : undefined }} />

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: 280, backgroundColor: theme === "dark" ? "#1a202c" : "white" }
        }}
      >
        <Box sx={{ p: 2, textAlign: 'left' }}>
          <List>
            {navLinks.map((a, i) => (
              <React.Fragment key={i}>
                <ListItem onClick={() => setOpenDropdown(openDropdown === i ? null : i)} sx={{ px: 0 }}>
                  <ListItemText 
                    primary={a[0]} 
                    sx={{ color: theme === "dark" ? "#e2e8f0" : "black" }}
                    primaryTypographyProps={{ fontSize: '0.85rem', fontWeight: 600, fontVariant: 'small-caps' }} 
                  />
                  {openDropdown === i ? <ExpandLess sx={{color: theme === "dark" ? "#e2e8f0" : "black"}} /> : <ExpandMore sx={{color: theme === "dark" ? "#e2e8f0" : "black"}} />}
                </ListItem>
                <Collapse in={openDropdown === i} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {a[1].map((b, j) => (
                      <ListItem key={j} component="a" href={b[1]} sx={{ pl: 3, py: 0.5, textDecoration: 'none', color: 'inherit' }}>
                        <ListItemText primary={b[0]} primaryTypographyProps={{ fontSize: '0.8rem', color: theme === "dark" ? "#e2e8f0" : "black" }} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
      
    </AppBar>
  )
}

export default NavBar
