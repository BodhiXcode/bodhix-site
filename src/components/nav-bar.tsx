import ThemeToggler from "../theme/theme-toggler";
import bodhixLogo from "../assets/bodhix.jpg";
import "./nav-bar.css";
import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "about", "products", "people"];
      let current = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Offset to trigger earlier during scroll
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newSection: string | null
  ) => {
    if (newSection !== null) {
      setActiveSection(newSection);
    }
  };

  return (
    <Box component="header" className="header" sx={{ bgcolor: "background.default" }}>
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
      <div className="nav-links">
        <ToggleButtonGroup
          value={activeSection}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton href="#overview" value="overview">
            Overview
          </ToggleButton>
          <ToggleButton href="#about" value="about">
            About Us
          </ToggleButton>
          <ToggleButton href="#products" value="products">
            Products
          </ToggleButton>
          <ToggleButton href="#people" value="people">
            People
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="theme-action">
        <ThemeToggler />
      </div>
    </Box>
  );
}
