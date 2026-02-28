import ThemeToggler from "../theme/theme-toggler";
import bodhixLogo from "../assets/bodhix.jpg";
import "./nav-bar.css";
import { ToggleButton, ToggleButtonGroup, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from "react";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "about", "products", "people"];
      let current = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newSection: string | null
  ) => {
    if (newSection !== null) {
      setActiveSection(newSection);
      if (isMobile) setMobileOpen(false);
    }
  };

  const navItems = [
    { label: "Overview", value: "overview" },
    { label: "About Us", value: "about" },
    { label: "Products", value: "products" },
    { label: "People", value: "people" }
  ];

  return (
    <Box component="header" className="header" sx={{ bgcolor: "background.default", px: { xs: 2, md: 4 } }}>
      <div className="info">
        <img
          className="nav-logo"
          height="30px"
          width="30px"
          src={bodhixLogo}
          alt="bodhix logo"
        />
        <span className="name">BodhiX</span>
      </div>

      {!isMobile && (
        <div className="nav-links">
          <ToggleButtonGroup
            value={activeSection}
            exclusive
            onChange={handleChange}
          >
            {navItems.map((item) => (
              <ToggleButton key={item.value} href={`#${item.value}`} value={item.value}>
                {item.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>
      )}

      <div className="theme-action">
        <ThemeToggler />
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: 1, bgcolor: 'background.paper', borderRadius: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </div>

      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Box sx={{ textAlign: 'center', pt: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.value} disablePadding>
                <ListItemButton
                  href={`#${item.value}`}
                  onClick={(e) => handleChange(e as any, item.value)}
                  selected={activeSection === item.value}
                  sx={{ textAlign: 'center' }}
                >
                  <ListItemText primary={item.label} sx={{ fontWeight: activeSection === item.value ? 700 : 400 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
