import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
    return (
        <Box component="footer" sx={{
            py: 6,
            bgcolor: "background.paper",
            borderTop: 1,
            borderColor: "divider",
            mt: 'auto'
        }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 3
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                        <Typography variant="h6" color="textPrimary" sx={{ fontWeight: 800 }}>
                            BodhiX
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            © {new Date().getFullYear()} BodhiX. All rights reserved.
                        </Typography>
                    </Box>

                    {/* Live Visitor Counter */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 600 }}>
                            Total Site Visits:
                        </Typography>
                        <img
                            src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fbodhix.com&label=VISITS&countColor=%23f97316"
                            alt="Live Visitor Count"
                        />
                    </Box>

                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Link href="#people" color="inherit" underline="hover">
                            Team
                        </Link>
                        <Link href="#products" color="inherit" underline="hover">
                            Products
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
