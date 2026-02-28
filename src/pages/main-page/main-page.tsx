import { Box, Typography } from "@mui/material";
import "./main-page.css";

export default function MainPage() {
  return (
    <Box component="section" id="overview" className="main-container">
      <Typography variant="h1" className="main-title" color="textPrimary">
        BodhiX
      </Typography>
      <Typography variant="h5" className="tag-line" color="textSecondary">
        Dare to Think.
      </Typography>
    </Box>
  );
}
