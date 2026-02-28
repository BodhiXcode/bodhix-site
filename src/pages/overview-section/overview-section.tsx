import { Box, Container, Typography } from "@mui/material";

export default function OverviewSection() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 12, md: 24 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 12 },
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" gutterBottom color="textPrimary">
              Reversing the Equation
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ fontWeight: 400, maxWidth: "480px" }}
            >
              BodhiX is an AI-native startup building intelligent systems that
              automate digital workflows and simplify human interaction with
              technology.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ fontSize: "1.25rem", lineHeight: 1.8, mb: 3 }}
            >
              We believe the digital world has become unnecessarily complex.
              Websites are overloaded, processes are fragmented, and users are
              forced to adapt to systems that don’t understand them.
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              sx={{
                fontSize: "1.25rem",
                lineHeight: 1.8,
                fontWeight: 600,
              }}
            >
              At BodhiX, we are building AI that adapts the digital world to the
              user.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
